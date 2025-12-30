'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 animated-grid opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Douglas Osborne
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-gray-300"
        >
          Full Stack Developer &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-pink">
            AI Enthusiast
          </span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Crafting exceptional digital experiences with modern technologies.
          Specializing in Next.js, TypeScript, and AI-powered applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            className="group px-8 py-4 bg-gradient-primary rounded-xl text-white font-semibold text-lg shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 transition-all flex items-center gap-3 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <ArrowDown className="relative z-10 group-hover:animate-bounce" size={20} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.a
            href="/resume/Douglas Osborne Dev Resume 031925.pdf"
            download="Douglas_Osborne_Resume.pdf"
            className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-primary-500/50 rounded-xl text-white font-semibold text-lg hover:bg-primary-500/20 hover:border-primary-400 transition-all flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="group-hover:animate-bounce" size={20} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          {[
            { icon: Github, href: 'https://github.com/bigdg14', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/douglas-osborne-82579192/', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group p-4 bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-primary rounded-xl transition-all border border-gray-700 hover:border-transparent shadow-lg hover:shadow-xl hover:shadow-primary-500/30"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon className="text-gray-300 group-hover:text-white transition-colors" size={28} />
            </motion.a>
          ))}
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 md:left-20 text-8xl md:text-9xl opacity-40"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          💻
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 md:right-20 text-8xl md:text-9xl opacity-40"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🚀
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-500 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
