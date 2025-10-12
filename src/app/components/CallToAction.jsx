"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket, Zap, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <div className="flex items-center py-8 md:py-12 justify-center bg-[#030C16] px-4">
      <section className="relative w-full max-w-4xl py-12 md:py-20 overflow-hidden rounded-2xl md:rounded-4xl bg-[#00d3eadf]">
        {/* Unified background gradients */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(0, 220, 244, 0.1) 0%, rgba(13, 10, 25, 0) 50%), radial-gradient(circle at 30% 70%, rgba(0, 220, 244, 0.08) 0%, rgba(13, 10, 25, 0) 40%)",
          }}
        />

        {/* Mobile: Hide decorative icon on small screens */}
        <div className="hidden md:block absolute bottom-10 right-10 opacity-20">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-8 h-8 text-[#00dcf4]" />
          </motion.div>
        </div>

        {/* Mobile: Add top decorative icon */}
        <div className="absolute top-6 left-6 opacity-20 md:hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-[#00dcf4]" />
          </motion.div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 leading-tight bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent px-2">
              Think.Create.Grow.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-xl text-white mb-6 md:mb-8 font-light px-2">
              Start with Grovision Today
            </p>

            {/* CTA Button */}
            <motion.a 
              href="https://forms.gle/FK2KKro2JMqCw9Hv8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-white to-gray-300 text-[#030C16] font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 shadow-lg border-2 border-transparent hover:border-white/40 w-full max-w-xs md:w-auto inline-flex items-center justify-center"
            >
              <span className="flex items-center justify-center gap-2 relative z-10">
                Get Started Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.span>
              </span>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </motion.a>
          </motion.div>
        </div>

       
      </section>
    </div>
  );
}