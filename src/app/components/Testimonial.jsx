"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Shubham Sharma",
    role: "Founder",
    company: "Kaushics",
    content:"Feeling grateful for my amazing social media team Content Crafters! Harsh, your video editing brings our stories to life with so much energy. Rimjhim, your designs capture the heart and spirit of Kaushiics perfectly. I’m lucky to have such creative and dedicated people making our online presence shine!",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Engineering Lead",
    company: "StartupXYZ",
    content: "I've tried countless tools, but Grovison stands out. The attention to detail and seamless experience keeps us coming back every day.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Marketing Director",
    company: "GrowthCo",
    content: "The ROI we've seen since implementing Grovison has been remarkable. Our productivity increased by 40% in the first month alone.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder & CEO",
    company: "InnovateLabs",
    content: "Game-changer for our business. The Grovison team is incredibly responsive and the platform evolves with our needs.",
    rating: 5,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Jessica Park",
    role: "Operations Manager",
    company: "ScaleUp Inc",
    content: "We've streamlined our entire operation thanks to Grovison. What used to take hours now takes minutes.",
    rating: 5,
    image: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Creative Director",
    company: "DesignStudio",
    content: "Beautiful, functional, and reliable. It's rare to find a service that excels in all three areas. Highly recommend Grovison!",
    rating: 5,
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="relative w-full py-20 overflow-hidden"
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="border border-[#00dcf4] text-[#00dcf4] px-4 py-1 rounded-full text-sm font-medium tracking-wider">
              Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Loved by <span className="text-[#00dcf4]">Clients</span> Worldwide
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            See what our clients have to say about their experience with Grovison
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-[#030C16]/50 backdrop-blur-sm border border-[#00dcf4]/20 hover:border-[#00dcf4]/40 hover:bg-[#030C16]/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#00dcf4] text-[#00dcf4]"
                      />
                    ))}
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00dcf4]/30"
                    />
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-white/60">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-[#030C16]/50 backdrop-blur-sm px-6 py-4 rounded-full border border-[#00dcf4]/20">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((testimonial) => (
                <img
                  key={testimonial.id}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-[#030C16] object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-white/80 font-medium">
              Join 1,000+ satisfied clients
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}