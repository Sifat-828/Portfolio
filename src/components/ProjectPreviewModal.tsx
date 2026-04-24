import { useEffect, useCallback, useState } from 'react';
import { X, ExternalLink, Copy, Check, Loader2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    color: string;
    url?: string;
  } | null;
}

export default function ProjectPreviewModal({ isOpen, onClose, project }: ProjectPreviewModalProps) {
  const { theme } = useTheme();
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when project changes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIsCopied(false);
    }
  }, [isOpen, project]);

  // Close on ESC key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  // Lock body scroll & listen for ESC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleCopyLink = async () => {
    if (project?.url) {
      await navigator.clipboard.writeText(project.url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const currentUrl = project?.url;

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${project.title}`}
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`relative z-10 w-full h-full max-h-screen md:max-h-[90vh] md:rounded-xl overflow-hidden flex flex-col shadow-2xl ${
              theme === 'dark'
                ? 'bg-[#0B0B0D] border border-white/10 shadow-black/50'
                : 'bg-white border border-gray-200 shadow-black/20'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Browser-like Header */}
            <div className={`h-14 px-4 flex items-center justify-between shrink-0 ${
              theme === 'dark' ? 'bg-[#161618] border-b border-white/5' : 'bg-gray-50 border-b border-gray-200'
            }`}>
              {/* Left: Window Controls (Mac Style) */}
              <div className="flex gap-2 items-center flex-1">
                <div className="flex gap-2 mr-4">
                  <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center group" aria-label="Close">
                    <X className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-red-900" />
                  </button>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                
                {/* Title & URL Box */}
                <div className={`hidden sm:flex flex-1 max-w-md items-center justify-center px-4 py-1.5 rounded-md text-xs truncate ${
                  theme === 'dark' ? 'bg-black/40 text-white/60' : 'bg-white text-gray-500 border border-gray-200'
                }`}>
                  <span className="truncate">{currentUrl || project.title}</span>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-1 sm:gap-2">
                {currentUrl && (
                  <>
                    <button
                      onClick={handleCopyLink}
                      className={`p-2 rounded-lg transition-colors flex items-center gap-2 text-xs font-medium ${
                        theme === 'dark' 
                          ? 'text-white/70 hover:text-white hover:bg-white/10' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                      }`}
                      aria-label="Copy Link"
                      title="Copy Link"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      <span className="hidden sm:inline">{isCopied ? 'Copied!' : 'Copy Link'}</span>
                    </button>
                    <a
                      href={currentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 text-xs font-semibold ${
                        theme === 'dark'
                          ? 'bg-white/10 text-white hover:bg-white/20'
                          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                      title="Open in New Tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Open in New Tab</span>
                    </a>
                  </>
                )}
                {/* Mobile close button if Mac controls are too small */}
                <button
                  onClick={onClose}
                  className={`sm:hidden p-2 ml-1 rounded-lg transition-colors ${
                    theme === 'dark' ? 'text-white/70 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 cursor-pointer" />
                </button>
              </div>
            </div>

            {/* Gradient Line */}
            <div className={`h-1 w-full bg-gradient-to-r ${project.color} shrink-0`} />

            {/* Iframe Content Area */}
            <div className="relative flex-1 w-full bg-[#FAFAFA] dark:bg-[#050505]">
              {currentUrl ? (
                <>
                  {/* Loading Spinner */}
                  <AnimatePresence>
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 dark:bg-[#0B0B0D]/80 backdrop-blur-sm"
                      >
                        <Loader2 className="w-8 h-8 animate-spin text-fs-orange mb-4" />
                        <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                          Loading Live Preview...
                        </p>
                        <p className={`text-xs mt-2 max-w-[250px] text-center ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
                          If the site takes too long to load, click "Open in New Tab" above.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <iframe
                    src={currentUrl}
                    className="w-full h-full border-none absolute inset-0 z-10"
                    onLoad={() => setIsLoading(false)}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    title={`Preview of ${project.title}`}
                  />
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                   <p className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                     Preview Not Available
                   </p>
                   <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                     This project does not have a live URL provided.
                   </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
