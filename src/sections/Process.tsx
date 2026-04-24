import { MessageSquare, Lightbulb, PenTool, Code2, Rocket, Headphones } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery',
    description: 'We start with understanding your goals, target audience, and project requirements through in-depth consultations.',
    details: ['Requirements gathering', 'Market research', 'Competitor analysis', 'Goal definition'],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'I create a comprehensive roadmap outlining the technology stack, timeline, and deliverables.',
    details: ['Tech stack selection', 'Project planning', 'Milestone definition', 'Resource allocation'],
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design',
    description: 'Wireframes and high-fidelity prototypes bring your vision to life before development begins.',
    details: ['User flows', 'Wireframing', 'UI design', 'Prototype testing'],
  },
  {
    number: '04',
    icon: Code2,
    title: 'Development',
    description: 'Clean, scalable code with regular updates and iterative feedback loops.',
    details: ['Frontend development', 'Backend integration', 'API development', 'Quality assurance'],
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch',
    description: 'Smooth deployment with monitoring, analytics setup, and post-launch support.',
    details: ['Deployment', 'Performance monitoring', 'Analytics setup', 'Documentation'],
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing maintenance, updates, and improvements to keep your product evolving.',
    details: ['Bug fixes', 'Feature updates', 'Performance optimization', '24/7 support'],
  },
];

export default function Process() {
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[50vw] h-[60vh] gradient-glow-orange opacity-15" />
        <div className="absolute bottom-1/4 left-0 w-[40vw] h-[50vh] gradient-glow-purple opacity-15" />
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
            <span className={`inline-block px-4 py-2 rounded-full text-sm text-fs-magenta mb-6 ${theme === 'dark'
                ? 'bg-white/5 border border-white/10'
                : 'bg-white border border-gray-200 shadow-sm'
              }`}>
              Process
            </span>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              How We Work
              <span className="text-gradient"> Together</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
              }`}>
              A proven process that ensures transparency, quality, and successful project delivery.
            </p>
          </div>

          {/* Process Steps */}
          <div ref={stepsRef} className="relative">
            {/* Connecting Line - Desktop */}
            <div className={`hidden lg:block absolute left-[2.25rem] top-0 bottom-0 w-px ${theme === 'dark'
                ? 'bg-gradient-to-b from-fs-orange/50 via-fs-magenta/50 to-fs-indigo/50'
                : 'bg-gradient-to-b from-fs-orange/30 via-fs-magenta/30 to-fs-indigo/30'
              }`} />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12"
                  style={{
                    opacity: stepsVisible ? 1 : 0,
                    transform: stepsVisible
                      ? 'translateX(0) translateZ(0)'
                      : `translateX(${index % 2 === 0 ? '-30px' : '30px'}) translateZ(0)`,
                    transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.12}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.12}s`,
                  }}
                >
                  {/* Step Number & Icon - Desktop */}
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fs-orange to-fs-red flex items-center justify-center shadow-glow-orange z-10 transition-all duration-400 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,122,24,0.5)]">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="floating-card floating-card-hover flex-1 p-8 group hover:border-fs-orange/20">
                    <div className="flex items-start gap-6">
                      {/* Mobile Icon */}
                      <div className="lg:hidden w-12 h-12 rounded-xl bg-gradient-to-br from-fs-orange to-fs-red flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`text-4xl font-bold transition-colors ${theme === 'dark'
                              ? 'text-white/10 group-hover:text-fs-orange/30'
                              : 'text-gray-200 group-hover:text-fs-orange/20'
                            }`}>
                            {step.number}
                          </span>
                          <h3 className={`text-2xl font-semibold group-hover:text-gradient transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                            {step.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                          }`}>
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="flex flex-wrap gap-2">
                          {step.details.map((detail, dIndex) => (
                            <span
                              key={dIndex}
                              className={`px-3 py-1.5 text-xs rounded-full ${theme === 'dark'
                                  ? 'bg-white/5 text-white/60 border border-white/5'
                                  : 'bg-gray-100 text-gray-600 border border-gray-200'
                                }`}
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
