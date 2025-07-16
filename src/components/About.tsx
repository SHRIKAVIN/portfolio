import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Code, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: 15, suffix: '+' },
    { icon: GraduationCap, label: 'CGPA', value: 9.53, suffix: '/10' },
    { icon: Award, label: 'Certifications', value: 8, suffix: '+' },
    { icon: BookOpen, label: 'Publications', value: 1, suffix: '' },
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
      id="about"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + i * 10}%`,
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
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-700">
              <motion.p 
                className="text-xl leading-relaxed"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.8 }}
              >
                I am a dedicated Computer Science student at <strong>SRM University</strong>, 
                currently pursuing my degree (2022 - Present) with an outstanding academic record 
                (CGPA: 9.53/10). My passion lies in transforming innovative ideas into robust, 
                scalable digital solutions that make a meaningful impact.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                With comprehensive expertise spanning full-stack development, artificial intelligence 
                integration, and hardware solutions, I have successfully delivered diverse projects 
                ranging from intelligent movie recommendation systems to automated safety solutions. 
                My approach emphasizes clean architecture, efficient algorithms, and user-centric design.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Beyond coding, I am committed to continuous learning and knowledge sharing. 
                I actively contribute to open-source projects, engage in research activities, 
                and strive to bridge the gap between theoretical computer science concepts 
                and practical, real-world applications that solve complex problems.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
                }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
                
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-3xl font-bold text-gray-900 mb-2 relative z-10"
                >
                  <CountUp end={stat.value} duration={2} />
                  {stat.suffix}
                </motion.div>
                
                <p className="text-sm text-gray-600 font-medium relative z-10">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const CountUp: React.FC<{ end: number; duration: number }> = ({ end, duration }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(progress * end);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toFixed(end % 1 !== 0 ? 2 : 0)}</span>;
};

export default About;