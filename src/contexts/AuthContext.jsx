import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accountBlock, setAccountBlock] = useState(null);

  const clearAccountBlock = useCallback(() => setAccountBlock(null), []);

  // visited_sites / signup_domain / check_user_status 처리
  const handlePostAuth = useCallback(async (userId) => {
    if (!supabase || !userId) return;

    const currentDomain = window.location.hostname;
    const { data } = await supabase
      .from('user_profiles')
      .select('signup_domain, visited_sites')
      .eq('id', userId)
      .single();

    if (data) {
      const updates = {};
      if (!data.signup_domain) updates.signup_domain = currentDomain;
      const sites = Array.isArray(data.visited_sites) ? data.visited_sites : [];
      if (!sites.includes(currentDomain)) {
        updates.visited_sites = [...sites, currentDomain];
      }
      if (Object.keys(updates).length > 0) {
        supabase.from('user_profiles').update(updates).eq('id', userId).then(() => {});
      }
    }

    // 계정 상태 체크
    try {
      const { data: statusData } = await supabase.rpc('check_user_status', {
        target_user_id: userId,
        current_domain: currentDomain,
      });
      if (statusData && statusData.status && statusData.status !== 'active') {
        setAccountBlock({
          status: statusData.status,
          reason: statusData.reason || '',
          suspended_until: statusData.suspended_until || null,
        });
        await supabase.auth.signOut();
        setUser(null);
        setSession(null);
        return;
      }
    } catch {
      // check_user_status 함수 미존재 시 무시
    }
  }, []);

  // Initialize auth state
  useEffect(() => {
    if (!supabase) {
      // No Supabase configuration - run in unauthenticated mode
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session: currentSession }, error: sessionError }) => {
      if (sessionError) {
        console.error('Error getting session:', sessionError.message);
        setError(sessionError.message);
      }
      setSession(currentSession);
      const u = currentSession?.user ?? null;
      setUser(u);
      if (u) handlePostAuth(u.id);
      setLoading(false);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        setSession(newSession);
        const u = newSession?.user ?? null;
        setUser(u);
        setLoading(false);
        setError(null);
        if (event === 'SIGNED_IN' && u) {
          supabase.from('user_profiles')
            .update({ last_sign_in_at: new Date().toISOString() })
            .eq('id', u.id)
            .then(() => {});
          handlePostAuth(u.id);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [handlePostAuth]);

  const login = useCallback(async (email, password) => {
    if (!supabase) {
      const msg = 'Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.';
      setError(msg);
      return { error: { message: msg } };
    }

    setError(null);
    setLoading(true);

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    setLoading(false);

    if (loginError) {
      setError(loginError.message);
      return { error: loginError };
    }

    return { data };
  }, []);

  const signup = useCallback(async (email, password) => {
    if (!supabase) {
      const msg = 'Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.';
      setError(msg);
      return { error: { message: msg } };
    }

    setError(null);
    setLoading(true);

    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password
    });

    setLoading(false);

    if (signupError) {
      setError(signupError.message);
      return { error: signupError };
    }

    return { data };
  }, []);

  const loginWithGoogle = useCallback(async () => {
    if (!supabase) {
      const msg = 'Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.';
      setError(msg);
      return { error: { message: msg } };
    }

    setError(null);

    const { data, error: googleError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });

    if (googleError) {
      setError(googleError.message);
      return { error: googleError };
    }

    return { data };
  }, []);

  const logout = useCallback(async () => {
    if (!supabase) {
      setUser(null);
      setSession(null);
      return { error: null };
    }

    setError(null);

    const { error: logoutError } = await supabase.auth.signOut();

    if (logoutError) {
      setError(logoutError.message);
      return { error: logoutError };
    }

    setUser(null);
    setSession(null);
    return { error: null };
  }, []);

  const resetPassword = useCallback(async (email) => {
    if (!supabase) {
      const msg = 'Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.';
      setError(msg);
      return { error: { message: msg } };
    }

    setError(null);

    const { data, error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });

    if (resetError) {
      setError(resetError.message);
      return { error: resetError };
    }

    return { data };
  }, []);

  const value = useMemo(() => ({
    user,
    session,
    loading,
    error,
    isAuthenticated: !!user,
    isSupabaseConfigured: !!supabase,
    accountBlock,
    clearAccountBlock,
    login,
    signup,
    loginWithGoogle,
    logout,
    resetPassword
  }), [user, session, loading, error, accountBlock, clearAccountBlock, login, signup, loginWithGoogle, logout, resetPassword]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
