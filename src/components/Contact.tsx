import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shrikavinkbs@gmail.com',
      href: 'mailto:shrikavinkbs@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 99652 78945',
      href: 'tel:+919965278945',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tiruchirappalli, Tamil Nadu, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/SHRIKAVIN',
      color: 'hover:text-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shrikavin-b-9ba681250/',
      color: 'hover:text-blue-600',
    },

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
      id="contact"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-20"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${5 + i * 12}%`,
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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just 
                want to say hello, I'd love to hear from you. Feel free to reach 
                out through any of the channels below.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 10,
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.15)"
                  }}
                  className="flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-5 transition-opacity duration-300"
                  />
                  
                  <motion.div 
                    className="p-2 sm:p-3 bg-indigo-100 rounded-lg relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className="w-6 h-6 text-indigo-600" />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="font-medium text-gray-900">{info.label}</p>
                    {info.href !== '#' ? (
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                      >
                        <div className="text-xs sm:text-sm text-gray-700 font-medium truncate">{info.value}</div>
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-600 ${social.color} hover:shadow-md transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-5 transition-opacity duration-300"
            />
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-indigo-600 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                    Your Name
                  </label>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-indigo-600 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                    Your Email
                  </label>
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-indigo-600 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                  Subject
                </label>
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-indigo-600 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
                  Your Message
                </label>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <motion.div 
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;