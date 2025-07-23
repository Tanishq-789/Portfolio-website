import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github as LucideGithub, Code2, Bot, Sparkles } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "Wedding Planner AI Backend System",
      description: "A comprehensive AI-powered system that automates wedding planning workflows with intelligent coordination and communication management.",
      highlights: [
        "Automated 5+ wedding workflows—guest invites, vendor discovery, travel coordination—reducing manual effort by 85% using modular Python bots.",
        "Handled 100+ guest communications via WhatsApp (Twilio API) and emails with real-time tracking and smart follow-ups.",
        "Scraped and ranked 20+ venues, 15+ photographers, and 30+ train options using Selenium; generated budget-optimized JSON outputs."
      ],
      technologies: ["Python", "MongoDB", "Streamlit", "Twilio API", "Email Automation", "JSON", "Pandas"],
      icon: Bot,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-600/10",
      link: "https://github.com/Tanishq-789/Event-planning-Automation"
    },
    {
      id: 2,
      name: "Personalized Skincare Recommendation System",
      description: "Deep learning-powered recommendation system using advanced computer vision to analyze skin conditions and provide personalized care suggestions.",
      highlights: [
        "Developed a DL-powered recommendation system using ResNet-50 with 95.60% accuracy across 6 skin conditions.",
        "Analyzed 2,394+ images to build a high-quality dataset ensuring reliable predictions."
      ],
      technologies: ["Pandas", "NumPy", "matplotlib", "torchvision", "TensorFlow", "Streamlit"],
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-600/10",
      link: "https://github.com/Tanishq-789/Skin-condition-analyzer"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge technologies, showcasing expertise in AI, automation, and full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Icon */}
              <div className="absolute -top-6 left-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10 pt-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start space-x-3 group/item"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full group-hover/item:scale-125 transition-transform duration-200`} />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 bg-gradient-to-r ${project.bgGradient} border border-current rounded-full text-sm font-medium cursor-default`}
                        style={{
                          background: `linear-gradient(to right, ${project.gradient.includes('emerald') ? 'rgb(16 185 129 / 0.1)' : 'rgb(168 85 247 / 0.1)'}, ${project.gradient.includes('emerald') ? 'rgb(13 148 136 / 0.1)' : 'rgb(236 72 153 / 0.1)'})`,
                          color: project.gradient.includes('emerald') ? 'rgb(5 150 105)' : 'rgb(147 51 234)'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corrected View Details Button */}
                <div className="flex space-x-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      <Code2 className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                  </a>
                </div>
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${project.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="https://github.com/Tanishq-789" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <LucideGithub className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              <span>View All Projects on GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </motion.button>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
