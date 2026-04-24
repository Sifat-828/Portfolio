import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AnimatedSection } from './AnimatedSection';
import Footer from '../sections/Footer';
import type { ReactNode } from 'react';

interface LegalPageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, description, children }: LegalPageLayoutProps) {
  const { theme, toggleTheme } = useTheme();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-500">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${theme === 'dark'
          ? 'bg-[#0B0B0D]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
          }`}
      >
        <div className="section-container">
          <div className="section-inner flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span
                className={`font-semibold text-lg transition-all duration-300 group-hover:text-fs-orange group-hover:drop-shadow-[0_0_15px_rgba(255,122,24,0.3)] ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
              >
                Sifatullah Kaisar
              </span>
            </Link>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Back to Home */}
              <Link
                to="/"
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 ${theme === 'dark'
                  ? 'text-white/70 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Home</span>
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 ${theme === 'dark'
                  ? 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-gray-200'
                  }`}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-32 pb-24">
        {/* Page Header with Gradient Glow */}
        <div className="relative">
          {/* Gradient glow behind header */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[100vw] h-[400px] gradient-glow-orange"
              style={{ top: '-30%' }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[80vw] h-[300px] gradient-glow-purple"
              style={{ top: '-10%' }}
            />
          </div>

          <div className="section-container relative z-10">
            <div className="section-inner max-w-4xl">
              <AnimatedSection>
                <div className="text-center mb-16 md:mb-20">
                  <h1
                    className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {title}
                  </h1>
                  <p
                    className={`text-lg md:text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                      }`}
                  >
                    {description}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="section-container relative z-10">
          <div className="section-inner max-w-4xl">
            <AnimatedSection delay={150}>
              <div
                className={`prose-container space-y-10 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                  }`}
                style={{ lineHeight: '1.8' }}
              >
                {children}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

/* ============================
   Legal Content Sub-Components
   ============================ */

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  const { theme } = useTheme();

  return (
    <section className="space-y-4">
      <h2
        className={`text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
      >
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

interface LegalParagraphProps {
  children: ReactNode;
}

export function LegalParagraph({ children }: LegalParagraphProps) {
  return <p className="text-base leading-relaxed">{children}</p>;
}

interface LegalListProps {
  items: string[];
}

export function LegalList({ items }: LegalListProps) {
  const { theme } = useTheme();

  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #FF7A18, #FF3D00)',
            }}
          />
          <span
            className={`text-base leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
