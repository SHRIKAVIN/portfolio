import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Python', level: 85, color: 'from-blue-500 to-green-500' },
        { name: 'C/C++', level: 80, color: 'from-blue-600 to-purple-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-orange-500' },
        { name: 'SQL', level: 82, color: 'from-blue-500 to-indigo-600' },
      ],
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'HTML/CSS', level: 92, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-blue-500' },
        { name: 'TypeScript', level: 78, color: 'from-blue-600 to-indigo-600' },
      ],
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Spring Boot', level: 88, color: 'from-green-600 to-teal-600' },
        { name: 'Flask', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'FastAPI', level: 75, color: 'from-teal-500 to-cyan-500' },
        { name: 'MySQL', level: 82, color: 'from-blue-600 to-indigo-600' },
        { name: 'MongoDB', level: 78, color: 'from-green-500 to-teal-500' },
      ],
    },
  ];

  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      color: 'from-orange-400 to-yellow-500',
    },
    {
      name: 'ServiceNow Certified',
      issuer: 'ServiceNow',
      year: '2024',
      color: 'from-green-500 to-teal-500',
    },
    {
      name: 'Machine Learning',
      issuer: 'Coursera',
      year: '2023',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      name: 'Full Stack Development',
      issuer: 'Coursera',
      year: '2023',
      color: 'from-purple-500 to-pink-500',
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
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
      id="skills"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-20"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${5 + i * 10}%`,
              top: `${10 + i * 8}%`,
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
            Skills
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"
          />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 sm:p-6 rounded-xl relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-5 transition-opacity duration-300"
                />
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center relative z-10">
                  {category.title}
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 text-xs sm:text-base">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} relative`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white opacity-30"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Certifications
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
                }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-bold text-xl">
                    {cert.name.charAt(0)}
                  </span>
                </motion.div>
                
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300 relative z-10">
                  {cert.name}
                </h4>
                
                <p className="text-gray-600 text-sm mb-1 relative z-10">{cert.issuer}</p>
                <p className="text-gray-500 text-sm relative z-10">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Tech Stack
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 opacity-60"
          >
            {[
              'React', 'Node.js', 'Python', 'Java', 'Spring Boot', 
              'MongoDB', 'MySQL', 'AWS', 'Docker', 'Git'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                whileHover={{ 
                  scale: 1.2, 
                  color: "#4f46e5",
                  boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)"
                }}
                className="px-4 py-2 bg-gray-100 rounded-lg font-medium text-gray-700 cursor-pointer transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;