import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shrikavin', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shrikavin-b-9ba681250/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shrikavinkbs@gmail.com', label: 'Email' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              >
                Shrikavin B
              </motion.h3>
              <p className="text-gray-400 leading-relaxed">
                Full-Stack Developer passionate about creating innovative solutions 
                and pushing the boundaries of technology.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((link) => (
                  <motion.button
                    key={link}
                    whileHover={{ x: 5 }}
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>Tiruchirappalli, Tamil Nadu, India</p>
                <p>shrikavinkbs@gmail.com</p>
                <p>+91 99652 78945</p>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="flex items-center space-x-2 text-gray-400 mb-2 md:mb-0 text-xs sm:text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>by Shrikavin B</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
              
              <div className="text-gray-400 text-xs sm:text-sm">
                © {currentYear} All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;