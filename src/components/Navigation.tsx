import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { AnimatedThemeToggle } from './ui/animated-theme-toggle';

interface NavigationProps {
  scrolled: boolean;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      const elementId = href.replace('#', '');

      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
    }

    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? theme === 'dark'
            ? 'bg-[#0B0B0D]/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
          : 'bg-transparent'
          }`}
      >
        <div className="section-container">
          <div className="section-inner flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <span className={`text-xl transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Borel', cursive" }}>
                Sifatullah Kaisar
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link px-4 py-2 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${activeSection === link.href.replace('#', '')
                    ? theme === 'dark'
                      ? 'nav-link-active bg-white/15 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                      : 'nav-link-active bg-gray-200 text-gray-900 shadow-sm'
                    : theme === 'dark'
                      ? 'hover:bg-white/10'
                      : 'hover:bg-gray-200/70'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Theme Toggle */}
              <AnimatedThemeToggle />

              {/* CTA Button */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary text-sm px-6 py-3"
              >
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Mobile Theme Toggle */}
              <AnimatedThemeToggle />

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${theme === 'dark'
                  ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div
          className={`absolute inset-0 backdrop-blur-sm ${theme === 'dark' ? 'bg-black/60' : 'bg-black/20'
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 rounded-2xl p-6 shadow-2xl transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            } ${theme === 'dark'
              ? 'bg-[#111113] border border-white/10'
              : 'bg-white border border-gray-200'
            }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${activeSection === link.href.replace('#', '')
                  ? theme === 'dark'
                    ? 'bg-white/10 text-white'
                    : 'bg-gray-100 text-gray-900'
                  : theme === 'dark'
                    ? 'text-white/70 hover:bg-white/5 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <div className={`mt-4 pt-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'
              }`}>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary w-full text-center block"
              >
                <span>Let's Talk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

