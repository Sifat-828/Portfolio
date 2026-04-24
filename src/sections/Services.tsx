import { Globe, Smartphone, Paintbrush, Database, Cloud, Settings, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and Vue.',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'CMS Integration'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Publishing'],
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust APIs and server-side solutions for scalable applications.',
    features: ['REST & GraphQL APIs', 'Database Design', 'Authentication', 'Microservices'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup and deployment automation.',
    features: ['AWS/GCP/Azure', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Monitoring'],
  },
  {
    icon: Settings,
    title: 'Technical Consulting',
    description: 'Strategic technology guidance for your business growth.',
    features: ['Architecture Review', 'Tech Stack Selection', 'Code Audits', 'Team Training'],
  },
];

export default function Services() {
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[60vw] h-[50vh] gradient-glow-blue opacity-15" />
        <div className="absolute bottom-0 right-1/4 w-[50vw] h-[40vh] gradient-glow-purple opacity-15" />
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
            <span className={`inline-block px-4 py-2 rounded-full text-sm text-fs-indigo mb-6 ${theme === 'dark'
                ? 'bg-white/5 border border-white/10'
                : 'bg-white border border-gray-200 shadow-sm'
              }`}>
              Services
            </span>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              What I Can
              <span className="text-gradient"> Do For You</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
              }`}>
              Comprehensive digital solutions tailored to your unique business needs and goals.
            </p>
          </div>

          {/* Services Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fs-orange/10 to-fs-red/10 flex items-center justify-center mb-6 group-hover:from-fs-orange/20 group-hover:to-fs-red/20 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6">
                  <service.icon className="w-7 h-7 text-fs-orange" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-6 leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                  }`}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'
                      }`}>
                      <div className="w-1 h-1 rounded-full bg-fs-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-fs-orange hover:text-fs-red transition-all duration-200 group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
