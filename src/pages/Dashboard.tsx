import { useState, useEffect } from 'react';

interface ProgressData {
  conversation: number;
  business: number;
  vocabulary: number;
  toeic: number;
  [key: string]: number;
}

interface ActivityItem {
  icon?: string;
  title: string;
  time: string;
}
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useAuth } from '../contexts/AuthContext';

const DEFAULT_PROGRESS: ProgressData = {
  conversation: 0,
  business: 0,
  vocabulary: 0,
  toeic: 0,
};

function Dashboard(): React.ReactElement {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressData>(DEFAULT_PROGRESS);
  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([]);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('englishpro_progress');
      if (savedProgress) {
        setProgress({ ...DEFAULT_PROGRESS, ...JSON.parse(savedProgress) });
      }
    } catch {
      // Use default progress if parsing fails
    }

    try {
      const savedActivity = localStorage.getItem('englishpro_activity');
      if (savedActivity) {
        setRecentActivity(JSON.parse(savedActivity));
      }
    } catch {
      // Use empty activity if parsing fails
    }
  }, []);

  const progressCards = [
    {
      id: 'conversation',
      title: '일상 회화 진도',
      subtitle: 'Daily Conversation',
      progress: progress.conversation,
      color: '#4CAF50',
      link: '/conversation',
      icon: '💬',
    },
    {
      id: 'business',
      title: '비즈니스 영어 진도',
      subtitle: 'Business English',
      progress: progress.business,
      color: '#2196F3',
      link: '/business',
      icon: '💼',
    },
    {
      id: 'vocabulary',
      title: '영단어 학습',
      subtitle: 'Vocabulary',
      progress: progress.vocabulary,
      color: '#FF9800',
      link: '/vocabulary',
      icon: '📖',
    },
    {
      id: 'toeic',
      title: 'TOEIC 준비',
      subtitle: 'TOEIC Preparation',
      progress: progress.toeic,
      color: '#9C27B0',
      link: '/toeic',
      icon: '📝',
    },
  ];

  const quickActions = [
    {
      id: 'chat',
      title: 'AI 채팅',
      description: 'AI와 영어 대화 연습',
      icon: '🤖',
      link: '/chat',
      color: '#4CAF50',
    },
    {
      id: 'pronunciation',
      title: '발음 연습',
      description: '음성 인식으로 발음 교정',
      icon: '🎙️',
      link: '/pronunciation',
      color: '#2196F3',
    },
    {
      id: 'settings',
      title: '설정',
      description: 'API 키 및 환경 설정',
      icon: '⚙️',
      link: '/settings',
      color: '#757575',
    },
  ];

  return (
    <>
      <SEOHead
        title="대시보드 - English Pro"
        description="English Pro 학습 대시보드. 학습 진도와 활동을 확인하세요."
      />

      <div className="dashboard">
        {/* Welcome Header */}
        <section className="dashboard__welcome">
          <div className="dashboard__welcome-content">
            <h1 className="dashboard__title">
              안녕하세요! 👋
            </h1>
            <p className="dashboard__subtitle">
              {user?.email
                ? `${user.email}님, 오늘도 영어 학습을 시작해볼까요?`
                : '오늘도 영어 학습을 시작해볼까요?'}
            </p>
          </div>
        </section>

        {/* Progress Cards */}
        <section className="dashboard__section">
          <h2 className="dashboard__section-title">학습 진도</h2>
          <div className="dashboard__progress-grid">
            {progressCards.map((card) => (
              <Link
                to={card.link}
                key={card.id}
                className="progress-card"
              >
                <div className="progress-card__header">
                  <span className="progress-card__icon">{card.icon}</span>
                  <div className="progress-card__info">
                    <h3 className="progress-card__title">{card.title}</h3>
                    <p className="progress-card__subtitle">{card.subtitle}</p>
                  </div>
                </div>
                <div className="progress-card__bar-container">
                  <div
                    className="progress-card__bar"
                    style={{
                      width: `${card.progress}%`,
                      backgroundColor: card.color,
                    }}
                  />
                </div>
                <div className="progress-card__footer">
                  <span className="progress-card__percentage">
                    {card.progress}% 완료
                  </span>
                  <span className="progress-card__action">계속하기 →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="dashboard__section">
          <h2 className="dashboard__section-title">빠른 실행</h2>
          <div className="dashboard__actions-grid">
            {quickActions.map((action) => (
              <Link
                to={action.link}
                key={action.id}
                className="action-card"
              >
                <span className="action-card__icon">{action.icon}</span>
                <h3 className="action-card__title">{action.title}</h3>
                <p className="action-card__description">{action.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="dashboard__section">
          <h2 className="dashboard__section-title">최근 활동</h2>
          <div className="dashboard__activity">
            {recentActivity.length > 0 ? (
              <ul className="activity-list">
                {recentActivity.map((item, index) => (
                  <li key={index} className="activity-list__item">
                    <span className="activity-list__icon">{item.icon || '📌'}</span>
                    <div className="activity-list__content">
                      <p className="activity-list__title">{item.title}</p>
                      <span className="activity-list__time">{item.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="dashboard__empty">
                <p className="dashboard__empty-text">
                  아직 학습 활동이 없습니다.
                </p>
                <p className="dashboard__empty-hint">
                  학습을 시작하면 여기에 활동 내역이 표시됩니다.
                </p>
                <Link to="/conversation" className="btn btn--primary">
                  첫 학습 시작하기
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
