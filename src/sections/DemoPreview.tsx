import { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectPreviewModal from '../components/ProjectPreviewModal';

const demos = [
  {
    title: 'AI Productivity SaaS',
    category: 'Demo Project',
    description: 'A modern SaaS landing page designed for clarity, performance, and conversion-focused structure.',
    tags: ['React', 'Node.js', 'Stripe'],
    color: 'from-fs-orange to-fs-magenta',
    image: '/images/ai-saas-thumb.png',
    previewImage: '/images/ai-saas-full.png',
  },
  {
    title: 'Local Service Business Website',
    category: 'SEO Demo',
    description: 'A local business website structured for search visibility, trust, and customer conversion.',
    tags: ['Next.js', 'D3.js', 'PostgreSQL'],
    color: 'from-fs-blue to-fs-purple',
    image: '/images/Local Service Business Website img 1.png',
    previewImage: '/images/Local Service Business Website img 2.png',
  },
  {
    title: 'Personal Brand Portfolio',
    category: 'Concept',
    description: 'A clean and conversion-focused personal brand website designed to build authority and trust.',
    tags: ['React Native', 'Firebase', 'Plaid'],
    color: 'from-fs-purple to-fs-pink',
    image: '/images/Personal Brand Portfolio img 1.png',
    previewImage: '/images/Personal Brand Portfolio img 2.png',
  },
];

export default function DemoPreview() {
  const [selectedDemo, setSelectedDemo] = useState<typeof demos[0] | null>(null);
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] gradient-glow-orange opacity-20" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] gradient-glow-blue opacity-20" />
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
              Featured Work
            </span>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              Recent
              <span className="text-gradient"> Projects</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
              }`}>
              A selection of demo and concept projects showcasing modern design, performance optimization, and business-focused structure.
            </p>
          </div>

          {/* Demo Cards */}
          <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div
                key={index}
                className="floating-card floating-card-hover overflow-hidden group"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease-out ${index * 0.15}s, transform 0.5s ease-out ${index * 0.15}s`,
                }}
              >
                {/* Image Container */}
                <div
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedDemo(demo)}
                >
                  {demo.image ? (
                    <img
                      src={demo.image}
                      alt={demo.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      {/* Placeholder Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-10`} />

                      {/* Decorative Elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${demo.color} opacity-30 flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                          <span className="text-3xl font-bold text-gradient">
                            {demo.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 flex items-end justify-between p-6 transition-opacity duration-500 ${theme === 'dark'
                    ? 'bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/50 to-transparent opacity-0 group-hover:opacity-100'
                    : 'bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 group-hover:opacity-100'
                    }`}>
                    <span className={`font-medium flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                      View Project
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  {/* Corner Glow */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${demo.color}`} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-fs-orange font-medium uppercase tracking-wider">
                      {demo.category}
                    </span>
                    <ExternalLink className={`w-4 h-4 transition-colors ${theme === 'dark' ? 'text-white/30 group-hover:text-fs-orange' : 'text-gray-400 group-hover:text-fs-orange'
                      }`} />
                  </div>

                  <h3 className={`text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    {demo.title}
                  </h3>

                  <p className={`text-sm mb-4 line-clamp-2 ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                    }`}>
                    {demo.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {demo.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs rounded-full ${theme === 'dark'
                          ? 'bg-white/5 text-white/60 border border-white/5'
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProjectPreviewModal
        isOpen={!!selectedDemo}
        onClose={() => setSelectedDemo(null)}
        project={selectedDemo}
      />
    </section>
  );
}
