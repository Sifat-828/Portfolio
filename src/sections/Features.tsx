import { Code2, Palette, Zap, Shield, Rocket, LineChart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'End-to-end web applications built with modern technologies like React, Node.js, and cloud infrastructure.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality for exceptional digital experiences.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and smooth interactions that keep users engaged and satisfied.',
  },
  {
    icon: Shield,
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security and architecture that grows with your business needs.',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    description: 'Quick iteration and validation to bring your ideas to life in record time.',
  },
  {
    icon: LineChart,
    title: 'Data-Driven Insights',
    description: 'Analytics and tracking integration to measure success and optimize continuously.',
  },
];

export default function Features() {
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] gradient-glow-purple opacity-30" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Section Header */}
          <div
            ref={headerRef}
            className="text-center mb-20"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm text-fs-orange mb-6 ${theme === 'dark'
                ? 'bg-white/5 border border-white/10'
                : 'bg-white border border-gray-200 shadow-sm'
              }`}>
              What I Do
            </span>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              Crafting Digital
              <br />
              <span className="text-gradient">Excellence</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
              }`}>
              From concept to deployment, I provide comprehensive solutions that help businesses thrive in the digital landscape.
            </p>
          </div>

          {/* Features Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="floating-card floating-card-hover p-8 group"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0) scale(1) translateZ(0)' : 'translateY(20px) scale(0.97) translateZ(0)',
                  transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s`,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fs-orange/20 to-fs-red/20 flex items-center justify-center mb-6 group-hover:from-fs-orange/30 group-hover:to-fs-red/30 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6">
                  <feature.icon className="w-7 h-7 text-fs-orange" />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                  }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
