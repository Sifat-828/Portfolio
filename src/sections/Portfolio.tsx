import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectPreviewModal from '../components/ProjectPreviewModal';

const projects = [
  {
    id: 1,
    title: '123 Remodeling',
    category: 'Home Remodeling',
    overview: 'A premium remodeling company website designed for trust, local SEO dominance, and high-value lead generation.',
    problem: 'Needed a scalable platform to display high-end residential renovation portfolios and capture localized search traffic.',
    approach: 'Focused on high-quality imagery, comprehensive local service pages, clear CTAs, and a robust project gallery architecture.',
    solution: 'Built a sleek, performance-optimized site showcasing detailed remodeling services and before-and-after galleries effectively.',
    keyImprovements: [
      'Enhanced project galleries with filtering',
      'Optimized lead capture forms and conversion flow',
      'Structured local SEO architecture'
    ],
    results: ['Increased conversion rate', 'Faster load times', 'Ranked #1 locally'],
    tags: ['Next.js', 'Tailwind CSS', 'SEO'],
    color: 'from-fs-orange to-fs-red',
    image: '/images/1.png',
    url: 'https://123remodeling.com/'
  },
  {
    id: 2,
    title: 'Cittrix Roofing',
    category: 'Roofing Contractors',
    overview: 'A high-performance digital presence for an expert residential and commercial roofing service in Buffalo Grove, IL.',
    problem: 'Required a modern, fast-loading site to stand out among local competitors and build immediate trust with homeowners.',
    approach: 'Streamlined navigation, modernized branding, and integrated strong trust signals like lifetime warranties and certifications.',
    solution: 'Delivered an intuitive digital experience with clear service funnels, storm damage restoration info, and quick quote access.',
    keyImprovements: [
      'Modernized brand presentation',
      'Streamlined user journeys for emergency repairs',
      'Enhanced mobile accessibility'
    ],
    results: ['Improved bounce rate', 'Higher local engagement'],
    tags: ['React', 'TypeScript', 'Tailwind'],
    color: 'from-fs-indigo to-fs-purple',
    image: '/images/2.png',
    url: 'https://cittrix.com/'
  },
  {
    id: 3,
    title: 'Indy Trojan Roofing',
    category: 'Roofing Contractors',
    overview: 'A dynamic, conversion-focused local service website for a fast-growing Indianapolis roofing contractor.',
    problem: 'Needed strong local SEO structure and immediate trust signals to capture storm damage and replacement leads.',
    approach: 'Integrated immediate quote CTAs, customer reviews, detailed service breakdowns, and clear service area mapping.',
    solution: 'A high-converting local service landing platform focused on emergency response features and credibility.',
    keyImprovements: [
      'Prominent review and testimonial showcases',
      'Fast quote system integration',
      'Local SEO optimizations'
    ],
    results: ['Increased local traffic', 'More qualified leads'],
    tags: ['React', 'Framer Motion', 'Conversion'],
    color: 'from-fs-orange to-fs-magenta',
    image: '/images/5.png',
    url: 'https://indytrojanroofing.com/'
  },
  {
    id: 4,
    title: 'Skyline Roofing Solutions',
    category: 'Roofing Contractors',
    overview: 'A comprehensive commercial and residential roofing solutions platform focusing on longevity and quality.',
    problem: 'Had to balance both commercial B2B and residential D2C messaging without confusing the visitor.',
    approach: 'Built dedicated user journeys routing visitors to appropriate service types immediately upon landing.',
    solution: 'Created a split-funnel architecture with a unified, trusted brand presentation across all divisions.',
    keyImprovements: [
      'Split-audience navigation (Commercial/Residential)',
      'Extensive project portfolio showcase',
      'Trust badges and manufacturer certifications'
    ],
    results: ['Better lead segmentation', 'Improved time-on-site'],
    tags: ['React', 'UX Design', 'Tailwind'],
    color: 'from-fs-magenta to-fs-purple',
    image: '/images/3.png',
    url: 'https://skylineroofingsolutions.com/'
  },
  {
    id: 5,
    title: 'Warren Masonry',
    category: 'Masonry & Concrete',
    overview: 'A robust, visually-driven contractor showcase for premium masonry, concrete, and hardscaping services.',
    problem: 'The client offered highly visual, specialized services that were lost in text-heavy previous site designs.',
    approach: 'Structured services visually with a mega-menu and high-resolution category landing pages for brickwork, stone, and concrete.',
    solution: 'A highly organized architecture that helps users easily find specific renovation services and view past project quality.',
    keyImprovements: [
      'Visual navigation implementation',
      'Service category organization',
      'High-resolution masonry galleries'
    ],
    results: ['Reduced bounce rate', 'Higher pages per session'],
    tags: ['Next.js', 'React', 'CSS'],
    color: 'from-fs-indigo to-fs-blue',
    image: '/images/6.png',
    url: 'https://www.warrenmasonry.com/'
  },
  {
    id: 6,
    title: 'Rival Roofs',
    category: 'Roofing Contractors',
    overview: 'A high-energy, modern brand presentation for an innovative and disruptive roofing company.',
    problem: 'Needed to stand out in a highly competitive, traditional, and crowded local contractor market.',
    approach: 'Utilized bold typography, strong contrasting colors, and aggressive, confident messaging.',
    solution: 'A striking, memorable brand experience that disrupts typical contractor expectations and builds excitement.',
    keyImprovements: [
      'Bold aesthetic implementation',
      'Strong unique value propositions',
      'Interactive guarantees and warranties'
    ],
    results: ['Increased brand recall', 'Higher conversion rates'],
    tags: ['React', 'Animations', 'Tailwind'],
    color: 'from-fs-red to-fs-orange',
    image: '/images/4.png',
    url: 'https://rivalroofs.com/'
  }
];

const categories = ['All', 'Roofing Contractors', 'Home Remodeling', 'B2B Services', 'General Contracting'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>();

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[50vw] h-[50vh] gradient-glow-purple opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-[40vw] h-[40vh] gradient-glow-orange opacity-20" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Section Header */}
          <div
            ref={headerRef}
            className="text-center mb-16"
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
              Live Projects
            </span>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              Project
              <span className="text-gradient"> Showcase</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
              }`}>
              Click on any project to view a live, interactive preview directly within this site.
            </p>
          </div>

          {/* Category Filter */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-16"
            style={{
              opacity: headerVisible ? 1 : 0,
              transition: 'opacity 0.5s ease-out 0.2s',
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? 'bg-gradient-to-r from-fs-orange to-fs-red text-white shadow-glow-orange'
                  : theme === 'dark'
                    ? 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid - 3 Column Layout */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="floating-card floating-card-hover overflow-hidden group flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                {/* Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                {/* Thumbnail Image */}
                <div
                  className="relative aspect-[16/9] overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${theme === 'dark'
                    ? 'bg-black/50'
                    : 'bg-white/50'
                    }`}>
                    <span className={`font-medium flex items-center gap-2 px-4 py-2 rounded-full ${theme === 'dark'
                      ? 'bg-white/10 text-white backdrop-blur-sm'
                      : 'bg-black/10 text-gray-900 backdrop-blur-sm'
                      }`}>
                      View Site
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  {/* Top Row */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`text-xs uppercase tracking-wider mb-2 block ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                        }`}>
                        {project.category}
                      </span>
                      <h3 className={`text-xl font-bold group-hover:text-gradient transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="mb-6 flex-1">
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                      {project.overview}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 pt-6 border-t mt-auto ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs rounded-full ${theme === 'dark'
                          ? 'bg-white/5 text-white/50 border border-white/5'
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
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
