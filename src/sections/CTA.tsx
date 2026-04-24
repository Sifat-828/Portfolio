import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTA() {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Gradient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {theme === 'dark' ? (
          <>
            {/* Dark Mode: Large multi-gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[80vh] gradient-glow-multi opacity-60" />
            <div className="absolute top-0 left-1/4 w-[50vw] h-[50vh] gradient-glow-orange opacity-40" />
            <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vh] gradient-glow-purple opacity-40" />
            <div className="absolute top-1/2 right-0 w-[40vw] h-[40vh] gradient-glow-blue opacity-30" />
          </>
        ) : (
          <>
            {/* Light Mode: Subtle pastel gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] gradient-glow-multi opacity-30" />
            <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vh] gradient-glow-orange" />
            <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vh] gradient-glow-purple" />
          </>
        )}
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div
            className="floating-card p-12 md:p-20 text-center relative overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] gradient-glow-orange opacity-20" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 ${theme === 'dark'
                  ? 'bg-white/5 border border-white/10'
                  : 'bg-white border border-gray-200 shadow-sm'
                }`}>
                <Sparkles className="w-4 h-4 text-fs-orange" />
                <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  Limited availability
                </span>
              </div>

              {/* Headline */}
              <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                Ready to Build
                <br />
                <span className="text-gradient">Something Great?</span>
              </h2>

              {/* Subtitle */}
              <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                }`}>
                Let's collaborate to turn your vision into reality. I'm currently accepting
                new projects for Q1 2026.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={handleScrollToContact} className="btn-primary group flex items-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  href="mailto:sifat828micro@gmail.com"
                  className="btn-secondary"
                >
                  Send an Email
                </a>
              </div>

              {/* Trust Indicators */}
              <div className={`mt-12 flex flex-wrap items-center justify-center gap-8 ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                }`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">Available for work</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-fs-orange" />
                  <span className="text-sm">24h response time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-fs-magenta" />
                  <span className="text-sm">Worldwide clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
