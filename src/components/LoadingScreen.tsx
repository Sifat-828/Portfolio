import { useEffect, useState } from 'react';
import { LetterPullup } from './ui/letter-pullup';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        const remaining = 100 - prev;
        return prev + Math.max(0.4, remaining * 0.03);
      });
    }, 20);

    const holdTimer = setTimeout(() => setPhase('hold'), 1600);
    const exitTimer = setTimeout(() => setPhase('exit'), 2800);
    const doneTimer = setTimeout(() => onComplete(), 3600);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0, scale: 1.05 }}
           transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
           className="loading-screen bg-[#0B0B0D]"
        >
          {/* Animated background glows */}
          <div className="ls-glow ls-glow-orange opacity-60" />
          <div className="ls-glow ls-glow-purple opacity-40" />
          <div className="ls-glow ls-glow-blue opacity-40" />

          {/* Particle dots */}
          {[...Array(15)].map((_, i) => (
            <span key={i} className={`ls-particle ls-particle-${i % 12}`} />
          ))}

          {/* Center content */}
          <div className="ls-content max-w-4xl px-6">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
               <span className="text-fs-orange font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm">
                 Welcome to
               </span>
            </motion.div>

            <LetterPullup 
              words="Sifat's Portfolio" 
              delay={0.05}
              className="text-white text-5xl sm:text-7xl md:text-8xl font-black mb-2"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-white/60 text-sm sm:text-base tracking-widest uppercase mb-12"
            >
              Full-Stack Developer & UI/UX Designer
            </motion.p>

            {/* Progress bar */}
            <div className="ls-progress-track w-[250px] sm:w-[400px]">
              <motion.div
                className="ls-progress-bar"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Loading label */}
            <div className="ls-loading-label mt-8">
              <span className="ls-dot" style={{ animationDelay: '0s' }} />
              <span className="ls-dot" style={{ animationDelay: '0.2s' }} />
              <span className="ls-dot" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

