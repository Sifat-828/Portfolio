import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {theme === 'dark' ? (
          <>
            {/* Dark Mode: Large orange glow - top left */}
            <div
              className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full gradient-glow-orange animate-pulse-slow"
              style={{ animationDelay: '0s' }}
            />
            {/* Purple glow - right side */}
            <div
              className="absolute top-[10%] right-[-15%] w-[60vw] h-[60vw] rounded-full gradient-glow-purple animate-pulse-slow"
              style={{ animationDelay: '2s' }}
            />
            {/* Blue glow - bottom */}
            <div
              className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full gradient-glow-blue animate-pulse-slow"
              style={{ animationDelay: '4s' }}
            />
            {/* Multi gradient overlay */}
            <div className="absolute inset-0 gradient-glow-multi opacity-50" />
          </>
        ) : (
          <>
            {/* Light Mode: Subtle pastel gradients */}
            <div className="absolute -top-[10%] -left-[5%] w-[60vw] h-[60vw] rounded-full gradient-glow-orange" />
            <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full gradient-glow-purple" />
            <div className="absolute bottom-[-10%] left-[30%] w-[40vw] h-[40vw] rounded-full gradient-glow-blue" />
            <div className="absolute inset-0 gradient-glow-multi opacity-40" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="section-inner text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in ${theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200 shadow-sm'
              }`}
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="w-4 h-4 text-fs-orange" />
            <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Available for new projects
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 animate-fade-in-up ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            style={{ animationDelay: '0.2s' }}
          >
            Building Digital
            <br />
            <span className="text-gradient">Experiences</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'
              }`}
            style={{ animationDelay: '0.3s' }}
          >
            I'm a full-stack developer and UI/UX designer crafting premium web applications
            that combine stunning visuals with powerful functionality.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <button onClick={handleScrollToContact} className="btn-primary group flex items-center gap-2">
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button onClick={handleScrollToPortfolio} className="btn-secondary">
              View My Work
            </button>
          </div>

          {/* Stats */}
          <div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            {[
              { value: '112+', label: 'Projects Delivered' },
              { value: '6+', label: 'Years Experience' },
              { value: '43+', label: 'Happy Clients' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-default"
                style={{
                  opacity: 0,
                  animation: `scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.7 + index * 0.12}s forwards`,
                }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2 transition-transform duration-300 group-hover:scale-110">{stat.value}</div>
                <div className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-white/50 group-hover:text-white/70' : 'text-gray-500 group-hover:text-gray-700'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none ${theme === 'dark'
        ? 'bg-gradient-to-t from-[#0B0B0D] to-transparent'
        : 'bg-gradient-to-t from-[#FAFAFA] to-transparent'
        }`} />
    </section>
  );
}
