// Direct imports for homepage sections
import Features from './sections/Features';
import DemoPreview from './sections/DemoPreview';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Process from './sections/Process';
import About from './sections/About';
import Contact from './sections/Contact';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

// Lazy load only secondary pages
import { Suspense, lazy, useEffect, useState } from 'react';
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import LoadingScreen from './components/LoadingScreen';

import './App.css';

const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#0B0B0D] z-[100]">
    <div className="w-12 h-12 border-2 border-fs-orange/30 border-t-fs-orange rounded-full animate-spin" />
  </div>
);

function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-500">
      <Navigation scrolled={scrolled} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <Features />
        <DemoPreview />

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="about">
          <About />
        </section>

        <CTA />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  // Show loading screen only on the home route, once per session
  const [showLoader, setShowLoader] = useState(() => {
    const isHome = location.pathname === '/' || location.pathname === '';
    const seen = sessionStorage.getItem('portfolio_loaded');
    return isHome && !seen;
  });

  const handleLoadComplete = () => {
    sessionStorage.setItem('portfolio_loaded', '1');
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <LoadingScreen onComplete={handleLoadComplete} />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
