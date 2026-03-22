import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Lazy-loaded pages
const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Settings = React.lazy(() => import('../pages/Settings'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

// Conversation
const ConversationHome = React.lazy(() => import('../pages/conversation/ConversationHome'));
const Greetings = React.lazy(() => import('../pages/conversation/Greetings'));
const DailyLife = React.lazy(() => import('../pages/conversation/DailyLife'));
const Shopping = React.lazy(() => import('../pages/conversation/Shopping'));
const Travel = React.lazy(() => import('../pages/conversation/Travel'));
const Restaurant = React.lazy(() => import('../pages/conversation/Restaurant'));
const Phone = React.lazy(() => import('../pages/conversation/Phone'));

// Business
const BusinessHome = React.lazy(() => import('../pages/business/BusinessHome'));
const EmailWriting = React.lazy(() => import('../pages/business/EmailWriting'));
const Presentation = React.lazy(() => import('../pages/business/Presentation'));
const Meeting = React.lazy(() => import('../pages/business/Meeting'));
const Negotiation = React.lazy(() => import('../pages/business/Negotiation'));
const Interview = React.lazy(() => import('../pages/business/Interview'));

// Vocabulary
const VocabHome = React.lazy(() => import('../pages/vocabulary/VocabHome'));
const VocabBasic = React.lazy(() => import('../pages/vocabulary/VocabBasic'));
const VocabBusiness = React.lazy(() => import('../pages/vocabulary/VocabBusiness'));
const VocabToeic = React.lazy(() => import('../pages/vocabulary/VocabToeic'));
const VocabDaily = React.lazy(() => import('../pages/vocabulary/VocabDaily'));

// Writing
const WritingHome = React.lazy(() => import('../pages/writing/WritingHome'));
const BasicSentence = React.lazy(() => import('../pages/writing/BasicSentence'));
const Paragraph = React.lazy(() => import('../pages/writing/Paragraph'));
const Essay = React.lazy(() => import('../pages/writing/Essay'));

// TOEIC
const ToeicHome = React.lazy(() => import('../pages/toeic/ToeicHome'));
const Listening = React.lazy(() => import('../pages/toeic/Listening'));
const Reading = React.lazy(() => import('../pages/toeic/Reading'));
const MockTest = React.lazy(() => import('../pages/toeic/MockTest'));

// AI & Speech
const AiChatPage = React.lazy(() => import('../pages/ai-chat/AiChatPage'));
const SpeechPage = React.lazy(() => import('../pages/speech/SpeechPage'));

// AOS scroll animation
function useAOS() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading page">
      <div className="page-loader-spinner">
        <div className="spinner-ring" />
      </div>
      <p className="page-loader-text">Loading...</p>
    </div>
  );
}

export default function PublicLayout() {
  useAOS();

  return (
    <div className="public-layout">
      <Navbar />
      <main className="main-content" id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route index element={<Home />} />

            {/* Conversation */}
            <Route path="conversation" element={<ConversationHome />} />
            <Route path="conversation/greetings" element={<Greetings />} />
            <Route path="conversation/daily-life" element={<DailyLife />} />
            <Route path="conversation/shopping" element={<Shopping />} />
            <Route path="conversation/travel" element={<Travel />} />
            <Route path="conversation/restaurant" element={<Restaurant />} />
            <Route path="conversation/phone" element={<Phone />} />

            {/* Business */}
            <Route path="business" element={<BusinessHome />} />
            <Route path="business/email" element={<EmailWriting />} />
            <Route path="business/presentation" element={<Presentation />} />
            <Route path="business/meeting" element={<Meeting />} />
            <Route path="business/negotiation" element={<Negotiation />} />
            <Route path="business/interview" element={<Interview />} />

            {/* Vocabulary */}
            <Route path="vocabulary" element={<VocabHome />} />
            <Route path="vocabulary/basic" element={<VocabBasic />} />
            <Route path="vocabulary/business" element={<VocabBusiness />} />
            <Route path="vocabulary/toeic" element={<VocabToeic />} />
            <Route path="vocabulary/daily" element={<VocabDaily />} />

            {/* Writing */}
            <Route path="writing" element={<WritingHome />} />
            <Route path="writing/basic" element={<BasicSentence />} />
            <Route path="writing/paragraph" element={<Paragraph />} />
            <Route path="writing/essay" element={<Essay />} />

            {/* TOEIC */}
            <Route path="toeic" element={<ToeicHome />} />
            <Route path="toeic/listening" element={<Listening />} />
            <Route path="toeic/reading" element={<Reading />} />
            <Route path="toeic/mock-test" element={<MockTest />} />

            {/* AI & Speech */}
            <Route path="ai-chat" element={<AiChatPage />} />
            <Route path="speech" element={<SpeechPage />} />

            {/* Auth & Settings */}
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
