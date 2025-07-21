import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, ExternalLink, Code, GraduationCap, Star } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: "LeetCode Scoring",
      description: "Consistently solved over 800 problems in one year, reaching a peak rating of 1819 — demonstrating strong problem-solving skills and coding consistency.",
      icon: Code,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-600/10",
      stats: "1819 Rating • 800+ Problems",
      link: "https://leetcode.com/u/Tanishq7-77/",
      type: "competitive"
    },
    {
      title: "LeetCode Weekly Contest 455",
      description: "Ranked in the top 3% (776 out of 28,244) in a global competitive programming contest, solving algorithmic problems under time constraints.",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-500/10 to-orange-600/10",
      stats: "Rank 776 / 28244",
      link: "https://leetcode.com/contest/weekly-contest-455/",
      type: "contest"
    },
    {
      title: "Top 50 Finalist – MotoGP Burnout 2025 (IEEE MUJ)",
      description: "Built a high-performance ML model for predicting MotoGP lap times with a standout RMSE of 5.06 — ranked #46 globally among 1000+ data scientists.",
      icon: GraduationCap,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-600/10",
      stats: "Rank: 46",
      link: "https://www.kaggle.com/competitions/burnout-datathon-ieeecsmuj/leaderboard",
      type: "Machine Learning"
    },
    {
      title: "Clash Credence – PICT IEEE Student Branch",
      description: "Secured Runner-Up position in a multi-round competitive programming + tech quiz event — demonstrating quick thinking and deep technical knowledge.",
      icon: Medal,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-600/10",
      stats: "Runner Up",
      link: "https://www.linkedin.com/posts/tanishq-shinde977_delighted-to-share-my-latest-progress-activity-7200106549439045633-ra8a?utm_source=share&utm_medium=member_desktop",
      type: "competition"
    }
  ];


  const certifications = [
    {
      title: "Machine Learning Specialization by Andrew Ng",
      issuer: "Coursera & Stanford University",
      description: "Comprehensive specialization covering supervised learning, unsupervised learning, and best practices in ML",
      icon: Star,
      gradient: "from-indigo-500 to-blue-600",
      link: "https://www.coursera.org/account/accomplishments/specialization/YUXDYDZLE8W1"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      description: "Professional certification demonstrating proficiency in AI concepts and Salesforce AI technologies",
      icon: Award,
      gradient: "from-cyan-500 to-blue-600",
      link: "https://www.linkedin.com/posts/tanishq-shinde977_certified-ai-associate-certificate-activity-7287810735458455553-gWA5?utm_source=share&utm_medium=member_desktop"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition of excellence in competitive programming, academic performance, and professional development
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            🏆 Key Achievements
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, rotateY: 5, z: 50 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/30 transform-gpu cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-12 h-12 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-200">
                      {achievement.title}
                    </h4>
                    {achievement.link && (
                      <motion.a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 12 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex-shrink-0 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
                    {achievement.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${achievement.gradient} bg-opacity-10 border border-current rounded-full text-sm font-semibold`}
                    style={{ 
                      background: `linear-gradient(to right, ${achievement.gradient.includes('orange') ? 'rgb(249 115 22 / 0.1)' : achievement.gradient.includes('yellow') ? 'rgb(245 158 11 / 0.1)' : achievement.gradient.includes('green') ? 'rgb(34 197 94 / 0.1)' : 'rgb(59 130 246 / 0.1)'}, ${achievement.gradient.includes('orange') ? 'rgb(220 38 38 / 0.1)' : achievement.gradient.includes('yellow') ? 'rgb(249 115 22 / 0.1)' : achievement.gradient.includes('green') ? 'rgb(5 150 105 / 0.1)' : 'rgb(147 51 234 / 0.1)'})`,
                      color: achievement.gradient.includes('orange') ? 'rgb(194 65 12)' : achievement.gradient.includes('yellow') ? 'rgb(217 119 6)' : achievement.gradient.includes('green') ? 'rgb(21 128 61)' : 'rgb(37 99 235)'
                    }}
                  >
                    {achievement.stats}
                  </div>
                </div>

                {/* Decorative corner */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${achievement.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            📜 Professional Certifications
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 dark:border-gray-700/40 transform-gpu"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 12 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex-shrink-0 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Trophy className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            <a href="https://github.com/Tanishq-789" target="_blank" rel="noopener noreferrer">
              <span>Let's Collaborate on Your Next Project</span>
            </a>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;