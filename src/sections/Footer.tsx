import { ArrowUpRight, Linkedin, Github, Twitter } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
];

const contactLinks = [
  { name: 'sifat828micro@gmail.com', href: 'mailto:sifat828micro@gmail.com' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
];

export default function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.01, rootMargin: '0px 0px 100px 0px' });
  const location = useLocation();
  const navigate = useNavigate();


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
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      className="relative pt-20 pb-8 overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateZ(0)' : 'translateY(15px) translateZ(0)',
        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* CSS Gradient Glow Background - NO IMAGES */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {/* Primary gradient glow layer */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[140vw] h-[80vh] footer-gradient-glow"
          style={{ top: '-20%' }}
        />
        {/* Secondary ambient glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[120vw] h-[60vh]"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 35% 60%, rgba(255, 122, 24, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 50% 35% at 65% 55%, rgba(192, 38, 211, 0.08) 0%, transparent 45%)
            `,
            filter: 'blur(160px)',
            top: '-10%',
            animation: 'footer-glow-drift 25s ease-in-out infinite reverse',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Main Footer Content - Dark rounded card */}
          <div
            className="bg-[#0B0B0D]/95 backdrop-blur-sm rounded-3xl p-10 md:p-16 mb-8 border border-white/5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) translateZ(0)' : 'translateY(10px) translateZ(0)',
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="flex items-center gap-3 mb-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A18] to-[#FF3D00] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#FF7A18]/20">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <span className="text-xl text-white" style={{ fontFamily: "'Borel', cursive" }}>Sifatullah Kaisar</span>
                </a>
                <p className="text-sm leading-relaxed mb-6 text-white/50">
                  Full-stack developer and UI/UX designer crafting premium digital experiences for businesses worldwide.
                </p>
                {/* Social Links */}
                <div className="flex gap-3">
                  {[
                    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
                    { name: 'GitHub', icon: Github, href: 'https://github.com/Sifat-828' },
                    { name: 'Twitter', icon: Twitter, href: 'https://x.com/sifat828' },
                  ].map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 text-white/40 hover:bg-[#FF7A18]/20 hover:text-[#FF7A18] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0) translateZ(0)' : 'translateY(5px) translateZ(0)',
                        transition: `opacity 0.3s ease-out ${0.1 + index * 0.03}s, transform 0.3s ease-out ${0.1 + index * 0.03}s`,
                      }}
                      aria-label={social.name}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation Column */}
              <div>
                <h4 className="font-semibold mb-6 text-white">Navigation</h4>
                <ul className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <li
                      key={link.name}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0) translateZ(0)' : 'translateX(-5px) translateZ(0)',
                        transition: `opacity 0.3s ease-out ${0.15 + index * 0.03}s, transform 0.3s ease-out ${0.15 + index * 0.03}s`,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-sm text-white/50 hover:text-white/80 transition-all duration-200 flex items-center gap-1 group hover:translate-x-0.5"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="font-semibold mb-6 text-white">Contact</h4>
                <ul className="space-y-3">
                  {contactLinks.map((link, index) => (
                    <li
                      key={link.name}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0) translateZ(0)' : 'translateX(-5px) translateZ(0)',
                        transition: `opacity 0.3s ease-out ${0.2 + index * 0.03}s, transform 0.3s ease-out ${0.2 + index * 0.03}s`,
                      }}
                    >
                      <a
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white/80 transition-all duration-200 flex items-center gap-1 group hover:translate-x-0.5"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h4 className="font-semibold mb-6 text-white">Legal</h4>
                <ul className="space-y-3">
                  {legalLinks.map((link, index) => (
                    <li
                      key={link.name}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0) translateZ(0)' : 'translateX(-5px) translateZ(0)',
                        transition: `opacity 0.3s ease-out ${0.25 + index * 0.03}s, transform 0.3s ease-out ${0.25 + index * 0.03}s`,
                      }}
                    >
                      <Link
                        to={link.href}
                        className="text-sm text-white/50 hover:text-white/80 transition-all duration-200 flex items-center gap-1 group hover:translate-x-0.5"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-white/5"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.5s ease-out 0.5s',
            }}
          >
            <p className="text-sm text-white/40">
              © 2026 Sifatullah Kaisar. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-[#FF7A18] transition-all duration-200 group"
            >
              Back to top
              <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#FF7A18]/20 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4 -rotate-45 transition-transform duration-200 group-hover:rotate-0" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
