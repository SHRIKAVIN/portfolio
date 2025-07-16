import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Database, Brain, Shield, Truck, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'SKFLIX',
      description: 'A sophisticated movie recommendation system built with Spring Boot and MySQL, featuring personalized recommendations, user reviews, and advanced filtering capabilities.',
      icon: Play,
      tech: ['Spring Boot', 'MySQL', 'React', 'REST API'],
      color: 'from-red-500 to-pink-500',
      github: 'https://github.com/SHRIKAVIN/SKFLIX',
      demo: 'https://skflixmovies-git-main-shrikavins-projects.vercel.app/',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'LocalLang.Codes',
      description: 'AI-powered multilingual code generator leveraging Sarvam.ai and Gemini APIs to generate code in multiple programming languages with intelligent translation capabilities.',
      icon: Brain,
      tech: ['Python', 'FastAPI', 'Sarvam.ai', 'Gemini API', 'React'],
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/SHRIKAVIN/Local_Lang.Codes_1',
      demo: 'https://local-lang-codes-1.vercel.app/',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Automated Accident Detection System',
      description: 'Hardware-based safety solution using GPS and GSM modules for real-time accident detection and emergency response with IoT integration.',
      icon: Shield,
      tech: ['Arduino', 'GPS', 'GSM', 'C++', 'IoT'],
      color: 'from-green-500 to-emerald-500',
      isHardware: true,
      image: 'https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'KBS tractors',
      description: 'Full-stack tractor rental management system built for family business with comprehensive booking, inventory management, and customer relationship features.',
      icon: Truck,
      tech: ['MERN Stack', 'MongoDB', 'Express', 'Node.js'],
      color: 'from-yellow-500 to-orange-500',
      github: 'https://github.com/SHRIKAVIN/kbstractors',
      demo: 'https://kbstractors.vercel.app/',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'KBS earthmovers',
      description: 'Comprehensive data management system for earthmover equipment with maintenance tracking, operational analytics, and performance monitoring.',
      icon: Database,
      tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      color: 'from-purple-500 to-indigo-500',
      github: 'https://github.com/SHRIKAVIN/kbsearthmovers',
      demo: 'https://kbsearthmovers.vercel.app/',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="projects" className="py-20 bg-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-10"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${5 + i * 12}%`,
              top: `${5 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A showcase of my technical expertise and creative problem-solving across various domains
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 relative"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 md:h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                  <motion.div 
                    className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full font-medium"
                      whileHover={{ scale: 1.1, backgroundColor: "#e0e7ff" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.isHardware ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg"
                    >
                      <Cpu size={16} />
                      <span>Hardware</span>
                    </motion.div>
                  ) : (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, rotateZ: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, rotateZ: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;