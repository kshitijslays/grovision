'use client';
import { cn } from '../components/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, TrendingUp, Palette, Camera, PenTool, Settings } from 'lucide-react';

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = 'small',
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 25 },
    },
  };

  return (
    
    <motion.div
      variants={variants}
      className={cn(
        'group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[#00dcf4]/20 px-6 pt-6 pb-10 shadow-md transition-all duration-500 backdrop-blur-sm',
        className,
      )}
      style={{
        background: 'linear-gradient(135deg, #030C16 0%, #030C16 100%)',
      }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0, 220, 244, 0.1) 0%, rgba(13, 10, 25, 0) 70%)',
        }}
      />

      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

      <div className="text-[#00dcf4]/20 group-hover:text-[#00dcf4]/30 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="bg-[#00dcf4]/10 text-[#00dcf4] shadow-[#00dcf4]/10 group-hover:bg-[#00dcf4]/20 group-hover:shadow-[#00dcf4]/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">{title}</h3>
          <p className="text-white/60 text-sm">{description}</p>
        </div>
        <div className="text-[#00dcf4] mt-4 flex items-center text-sm">
          <span className="mr-1">Learn more</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div>
      </div>
      <div className="from-[#00dcf4] to-[#00dcf4]/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

const items = [
  {
    title: 'Web & App Development',
    description: 'Web development, app development, full stack development, maintenance and support for your digital products.',
    icon: React.createElement(Code, { className: "size-6" }),
    size: 'large',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'SEO optimization, Meta ads, social media management, and comprehensive digital marketing strategies.',
    icon: React.createElement(TrendingUp, { className: "size-6" }),
    size: 'small',
  },
  {
    title: 'Branding & Design',
    description: 'Complete branding solutions, designing, printables, and brand outlet development.',
    icon: React.createElement(Palette, { className: "size-6" }),
    size: 'medium',
  },
  {
    title: 'Video & Photography',
    description: "Professional video editing, videoshoots, photography, and creative shoots for your brand.",
    icon: React.createElement(Camera, { className: "size-6" }),
    size: 'medium',
  },
  {
    title: 'Content Creation',
    description: 'Engaging social media content, creative visuals, and multimedia content creation.',
    icon: React.createElement(PenTool, { className: "size-6" }),
    size: 'small',
  },
  {
    title: 'Complete Management',
    description: 'End-to-end project/brand management, campaign handling, and comprehensive solutions.',
    icon: React.createElement(Settings, { className: "size-6" }),
    size: 'large',
  },
];

const Services = ()=> {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div 
      className="relative w-full py-20"
      style={{
        background: 'linear-gradient(135deg, #030C16 0%, #030C16 100%)',
      }}
    >
        
      {/* Unified background gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(0, 220, 244, 0.1) 0%, rgba(13, 10, 25, 0) 50%), radial-gradient(circle at 30% 70%, rgba(0, 220, 244, 0.08) 0%, rgba(13, 10, 25, 0) 40%)',
        }}
      />
      
        
      
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              size={item.size}
              className={cn(
                item.size === 'large'
                  ? 'col-span-4'
                  : item.size === 'medium'
                    ? 'col-span-3'
                    : 'col-span-2',
                'h-full',
              )}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
export default Services;            