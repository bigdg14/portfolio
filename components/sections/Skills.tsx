'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/lib/data';

export default function Skills() {
  const categories = {
    frontend: { title: 'Frontend', color: 'from-blue-500 to-cyan-500', icon: '🎨' },
    backend: { title: 'Backend', color: 'from-green-500 to-emerald-500', icon: '⚙️' },
    database: { title: 'Database', color: 'from-purple-500 to-pink-500', icon: '💾' },
    tools: { title: 'Tools & Technologies', color: 'from-orange-500 to-red-500', icon: '🛠️' },
  };

  const skillsByCategory = {
    frontend: techStack.filter(skill => skill.category === 'frontend'),
    backend: techStack.filter(skill => skill.category === 'backend'),
    database: techStack.filter(skill => skill.category === 'database'),
    tools: techStack.filter(skill => skill.category === 'tools'),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills &{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over a decade of professional development experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(categories).map(([key, { title, color, icon }], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              {/* Category Card */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`text-4xl p-3 bg-gradient-to-r ${color} rounded-xl bg-opacity-10`}>
                    {icon}
                  </div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {title}
                  </h3>
                </div>

                {/* Skills List */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {skillsByCategory[key as keyof typeof skillsByCategory].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/skill relative"
                    >
                      <div className={`px-4 py-2 bg-gradient-to-r ${color} bg-opacity-10 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-transparent transition-all duration-300 flex items-center gap-2 cursor-default shadow-lg hover:shadow-xl`}>
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-200 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>

                        {/* Hover glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover/skill:opacity-20 rounded-lg blur-sm transition-opacity duration-300 -z-10`} />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Microsoft Certified Data Scientist Associate',
                'Front-End Web Development with React Specialization',
                'Data Visualization with Tableau Specialization',
                'Software Design and Architecture Specialization',
                'Generative AI Assistants Certification',
                'Prompt Engineering for ChatGPT Certification',
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
