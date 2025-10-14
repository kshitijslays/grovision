'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';

const FounderSection = () => {
  const founders = [
    {
      name: 'Harsh Aswal',
      role: 'Co-Founder & CEO',
      image: 'https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5Lybijn5V4dQjwtUe75ApxbP68hlkFNKnGZIq',
      bio: 'Visionary leader with 10+ years in tech entrepreneurship. Passionate about bridging creativity with cutting-edge technology to drive business growth.',
      social: {
        linkedin: '#',
        email: 'alex@grovision.com'
      }
    },
    {
      name: 'Hasnain Khan',
      role: 'Co-Founder & CTO',
      image: 'https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5YKmwnzkdqrAaPiXWyjJwRgVxh49pENQmO51K',
      bio: 'Tech innovator and full-stack developer with expertise in scalable solutions. Believes in building technology that empowers creative expression.',
      social: {
        linkedin: '#',
        email: 'sarah@grovision.com',
        github: '#'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="relative w-full py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#030C16]" />

      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-8 h-8 rounded-full bg-[#00dcf4]/20 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute bottom-32 right-16 w-6 h-6 rounded-full bg-[#00dcf4]/15 blur-sm"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="border border-[#00dcf4] text-[#00dcf4] px-4 py-1 rounded-full text-sm font-medium tracking-wider">
              Our Team
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-6 mb-4"
          >
            Meet The <span className="text-[#00dcf4]">Founders</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={cardVariants}
              className="group"
            >
              <div className="relative bg-[#030C16]/50 backdrop-blur-sm rounded-2xl border border-[#00dcf4]/20 p-8 transition-all duration-300 group-hover:border-[#00dcf4]/40 group-hover:bg-[#030C16]/70">
                
                {/* Founder Image */}
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 mx-auto">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-full border-4 border-[#00dcf4]/20 group-hover:border-[#00dcf4]/40 transition-all duration-300"
                    />
                    {/* Gradient ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00dcf4] to-transparent opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Founder Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#00dcf4] transition-colors duration-300">
                    {founder.name}
                  </h3>
                  <p className="text-[#00dcf4] font-medium mb-4">{founder.role}</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {founder.bio}
                  </p>
                </div>

                {/* Social Links */}
                <motion.div 
                  className="flex justify-center gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {Object.entries(founder.social).map(([platform, link]) => {
                    const Icon = {
                      linkedin: Linkedin,
                      email: Mail,
                      github: Github
                    }[platform];
                    
                    return (
                      <a
                        key={platform}
                        href={platform === 'email' ? `mailto:${link}` : link}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00dcf4] hover:border-[#00dcf4]/40 hover:bg-[#00dcf4]/10 transition-all duration-300"
                        aria-label={platform}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </motion.div>

                {/* Hover effect glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00dcf4] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;