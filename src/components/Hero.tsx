import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const words = text.textContent?.split(' ') || [];
    text.innerHTML = words
      .map((word, index) => `<span style="animation-delay: ${index * 0.1}s" class="animate-fade-in-up inline-block">${word}</span>`)
      .join(' ');
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SHRIKAVIN', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shrikavin-b-9ba681250/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shrikavinkbs@gmail.com', label: 'Email' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedBackground />
      
      <div className="relative z-10 text-center text-white px-2 sm:px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mt-10 sm:mt-16"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            SHRIKAVIN B
          </motion.h1>
          
          <div
            ref={textRef}
            className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light"
          >
            Full-Stack Dev | QA Engineer | Innovator | Dreamer in Code
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-sm sm:text-lg md:text-xl text-indigo-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Computer Science Student at SRM University crafting digital experiences 
            with cutting-edge technologies and innovative solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, rotateY: 180 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <motion.button
            onClick={() => {
              // Check if it's iOS
              const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
              
              if (isIOS) {
                // For iOS, open in new tab and show instructions
                const link = document.createElement('a');
                link.href = '/Shrikavin_Resume.pdf';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.click();
                
                // Show a brief instruction
                alert('PDF opened in new tab. Tap the share button (square with arrow) to save to your device.');
              } else {
                // For other browsers, try to force download
                const link = document.createElement('a');
                link.href = '/Shrikavin_Resume.pdf';
                link.download = 'Shrikavin_B_Resume.pdf';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.click();
              }
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-sm sm:text-base"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ 
              y: [0, 10, 0],
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.3)",
                "0 0 30px rgba(99, 102, 241, 0.6)",
                "0 0 20px rgba(99, 102, 241, 0.3)"
              ]
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 2 },
              boxShadow: { repeat: Infinity, duration: 2 }
            }}
            className="p-2 sm:p-3 rounded-full border-2 border-white/30 hover:border-white/60 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </motion.section>
  );
};

export default Hero;