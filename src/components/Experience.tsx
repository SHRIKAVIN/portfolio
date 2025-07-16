import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Full Stack Intern',
      company: 'Zer01 India',
      location: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      description: [
        'Developed and optimized RESTful APIs using MERN stack, improving response times by 40%',
        'Integrated Cloudinary for efficient media management and storage solutions',
        'Collaborated with cross-functional teams to deliver scalable web applications',
        'Implemented responsive UI components with modern React patterns and hooks',
        'Optimized database queries and implemented caching strategies for better performance'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'REST API'],
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const publications = [
    {
      title: 'Automated Accident Detection and Emergency Response System',
      journal: 'IEEE Conference Proceedings',
      year: '2024',
      doi: '10.1109/ICACITE60783.2024.10911216',
      link: 'https://ieeexplore.ieee.org/document/10911216',
      description: 'Research paper on hardware-based accident detection using GPS and GSM modules for real-time emergency response.',
      coAuthors: ['Clement Antony K', 'Dr. Chitradevi D']
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
      id="experience"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-20"
            animate={{
              x: [0, 80, 0],
              y: [0, -40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 20}%`,
              top: `${10 + i * 15}%`,
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
            Experience & Publications
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <Briefcase className="w-6 h-6 mr-3 text-indigo-600" />
              Professional Experience
            </motion.h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)"
                  }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 hover:opacity-5 transition-opacity duration-300"
                  />
                  
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div>
                      <motion.h4 
                        className="text-xl font-bold text-gray-900 mb-1"
                        whileHover={{ color: "#4f46e5" }}
                      >
                        {exp.title}
                      </motion.h4>
                      <p className="text-lg font-semibold text-indigo-600 mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <motion.div 
                      className={`p-3 bg-gradient-to-r ${exp.color} rounded-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Briefcase className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-gray-600 relative z-10">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 relative z-10">
                    {exp.description.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-gray-700 flex items-start"
                        whileInView={{ opacity: [0, 1], x: [-10, 0] }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium"
                        whileHover={{ scale: 1.1, backgroundColor: "#e0e7ff" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Publications Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <Award className="w-6 h-6 mr-3 text-indigo-600" />
              Publications
            </motion.h3>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)"
                  }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 hover:opacity-5 transition-opacity duration-300"
                  />
                  
                  <motion.h4 
                    className="text-lg font-bold text-gray-900 mb-2 relative z-10"
                    whileHover={{ color: "#059669" }}
                  >
                    {pub.title}
                  </motion.h4>
                  
                  <div className="flex items-center space-x-4 mb-3 text-gray-600 relative z-10">
                    <span className="font-semibold text-indigo-600">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                  </div>

                  <p className="text-gray-700 mb-4 relative z-10">
                    {pub.description}
                  </p>

                  <div className="mb-4 relative z-10">
                    <p className="text-sm text-gray-600">
                      <strong>Co-authors:</strong> {pub.coAuthors.join(', ')}
                    </p>
                  </div>

                  <motion.a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 relative z-10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Publication
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="mt-12 bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-5 transition-opacity duration-300"
              />
              
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center relative z-10">
                <Award className="w-5 h-5 mr-3 text-indigo-600" />
                Education
              </h4>
              
              <div className="space-y-3 relative z-10">
                <div>
                  <h5 className="font-semibold text-gray-900">Bachelor of Technology - Computer Science</h5>
                  <p className="text-indigo-600 font-medium">SRM University</p>
                  <div className="flex items-center space-x-4 text-gray-600 text-sm">
                    <span>2022 - Present</span>
                    <span>•</span>
                    <span className="font-semibold">CGPA: 9.53/10</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;