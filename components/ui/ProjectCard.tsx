'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      {/* Card container */}
      <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-primary-500/50 transition-colors">
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

        {/* Image container */}
        <div className="relative h-48 overflow-hidden bg-gray-800">
          <motion.div
            className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"
            animate={{ opacity: isHovered ? 0.2 : 0 }}
          />

          {/* Project image or placeholder */}
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              {project.category === 'web' && '🛒'}
              {project.category === 'ai' && '🤖'}
              {project.category === 'game' && '🎮'}
              {project.category === 'social' && '💬'}
              {project.category === 'data' && '📊'}
            </div>
          )}

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              variant="default"
              className="bg-white text-black hover:bg-gray-100"
              type="button"
              aria-label={`View details for ${project.title}`}
            >
              <ExternalLink size={18} />
              View Details
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4" style={{ transform: 'translateZ(20px)' }}>
          {/* Title and category */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary transition-all">
                {project.title}
              </h3>
              <span className="px-2 py-1 text-xs bg-primary-500/20 text-primary-400 rounded-full">
                {project.category}
              </span>
            </div>
            <p className="text-gray-400 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-3 py-1 text-xs bg-gray-800 text-primary-400 rounded-full border border-primary-500/30">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 2 }}
              >
                <Github size={16} />
                Code
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 2 }}
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
      </div>
    </motion.div>
  );
}
