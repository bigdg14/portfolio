'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Check } from 'lucide-react';
import { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 pointer-events-auto"
            >
              {/* Close button */}
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-gray-700"
                aria-label="Close modal"
                type="button"
              >
                <X size={24} className="text-gray-300" />
              </Button>

              {/* Scrollable content */}
              <div className="overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-gray-800">
                {/* Hero section */}
                <div className="relative h-64 bg-gray-800 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="text-8xl relative z-10">
                      {project.category === 'web' && '🛒'}
                      {project.category === 'ai' && '🤖'}
                      {project.category === 'game' && '🎮'}
                      {project.category === 'social' && '💬'}
                      {project.category === 'data' && '📊'}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Title and category */}
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {project.title}
                      </h2>
                      <span className="px-3 py-1 text-sm bg-primary-500/20 text-primary-400 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-xl text-gray-300 mt-4">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-purple-500/20 text-gray-200 rounded-lg border border-primary-500/30 font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="mt-1 p-1 bg-primary-500/20 rounded-full">
                            <Check size={16} className="text-primary-400" />
                          </div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/50"
                      >
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={20} />
                          Visit Live Site
                        </motion.a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="bg-gray-800 hover:bg-gray-700 border-gray-700"
                      >
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                          View Source Code
                        </motion.a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
