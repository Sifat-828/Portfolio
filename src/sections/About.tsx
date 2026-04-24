import { MapPin, Calendar, Award, Coffee } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
  { category: 'Mobile', items: ['React Native', 'Flutter', 'iOS', 'Android'] },
  { category: 'Cloud', items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'] },
];

const experiences = [
  {
    role: 'Web Development Practice',
    period: '2021 - Present',
    description: 'I have been actively building and refining modern websites using current web technologies. My work focuses on clean structure, responsive layouts, and scalable design systems suitable for businesses and personal brands.',
  },
  {
    role: 'SEO & Performance Optimization',
    period: '2021 - Present',
    description: 'Implementing on-page SEO strategies, structured metadata, optimized loading speeds, and mobile-first design principles to improve visibility and user experience.',
  },
  {
    role: 'Independent Projects & Continuous Learning',
    period: '2021 - Present',
    description: 'Developing real-world demo projects, studying advanced UI/UX systems, and refining modern development workflows aligned with current SaaS design standards.',
  },
];

export default function About() {
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vh] gradient-glow-purple opacity-15" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] gradient-glow-blue opacity-15" />
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
              About Me
            </span>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              The Person
              <span className="text-gradient"> Behind The Code</span>
            </h2>
          </div>

          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Bio */}
            <div
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateX(0) translateZ(0)' : 'translateX(-30px) translateZ(0)',
                transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Profile Card */}
              <div className="floating-card p-8 mb-8">
                <div className="flex items-center gap-6 mb-6">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-fs-orange via-fs-magenta to-fs-indigo flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,122,24,0.3)] cursor-default">
                    <span className="text-4xl font-bold text-white">S</span>
                  </div>

                  <div>
                    <h3 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Sifatullah Kaisar</h3>
                    <p className={theme === 'dark' ? 'text-white/50' : 'text-gray-500'}>
                      Full-Stack Developer & Designer
                    </p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: MapPin, text: 'Working Remotely' },
                    { icon: Calendar, text: '6+ Years Exp.' },
                    { icon: Award, text: '112+ Projects' },
                    { icon: Coffee, text: 'Coffee Lover' },
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center gap-3 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                      }`}>
                      <item.icon className="w-5 h-5 text-fs-orange" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio Text */}
              <div className={`space-y-4 leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                <p>
                  I’m a web developer focused on building modern, high performance websites that combine clean design with strong structure. I specialize in responsive layouts, user-focused interfaces, and conversion-driven web experiences tailored for businesses and creators.
                </p>
                <p>
                  My approach is simple: clarity, speed, and professionalism. I build websites that not only look visually polished but also load fast, follow structured SEO practices, and create trust from the first impression. Every project I work on is designed with usability and long-term scalability in mind.
                </p>
                <p>
                  I continuously improve my skills by building real-world demo projects, studying modern SaaS platforms, and refining development workflows that align with current industry standards. My goal is to create websites that are not just attractive, but genuinely effective.
                </p>
              </div>
            </div>

            {/* Right Column - Skills & Experience */}
            <div
              className="space-y-8"
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateX(0) translateZ(0)' : 'translateX(30px) translateZ(0)',
                transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              }}
            >
              {/* Skills */}
              <div className="floating-card p-8">
                <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <span className={`text-sm mb-3 block ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                        }`}>{skillGroup.category}</span>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, sIndex) => (
                          <span
                            key={sIndex}
                            className={`px-3 py-1.5 text-sm rounded-full cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${theme === 'dark'
                              ? 'bg-white/5 text-white/70 border border-white/10 hover:border-fs-orange/30 hover:text-fs-orange'
                              : 'bg-gray-100 text-gray-600 border border-gray-200 hover:border-fs-orange/30 hover:text-fs-orange'
                              }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="floating-card p-8">
                <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className={`relative pl-6 ${theme === 'dark' ? 'border-l border-white/10' : 'border-l border-gray-200'
                        }`}
                      style={{
                        opacity: contentVisible ? 1 : 0,
                        transform: contentVisible ? 'translateY(0)' : 'translateY(8px)',
                        transition: `opacity 0.4s ease-out ${0.3 + index * 0.1}s, transform 0.4s ease-out ${0.3 + index * 0.1}s`,
                      }}
                    >
                      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-fs-orange -translate-x-[5px]" />
                      <div className="mb-1">
                        <span className="text-xs text-fs-orange">{exp.period}</span>
                      </div>
                      <h4 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{exp.role}</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                        }`}>{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
