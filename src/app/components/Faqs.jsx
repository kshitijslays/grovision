'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
      className={`
        group border border-[#00dcf4]/20 rounded-lg backdrop-blur-sm
        transition-all duration-200 ease-in-out
        ${isOpen ? 'bg-[#030C16]/70 shadow-lg' : 'hover:bg-[#030C16]/50'}
      `}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={`
            text-left text-base font-medium transition-colors duration-200
            ${isOpen ? 'text-white' : 'text-white/80'}
          `}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className={`
            shrink-0 rounded-full p-0.5 transition-colors duration-200
            ${isOpen ? 'text-[#00dcf4]' : 'text-white/60'}
          `}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-t border-[#00dcf4]/20 px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="text-white/70 text-sm leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq3() {
  const faqs = [
    {
      question: 'What makes Grovision unique?',
      answer: 'Grovison stands out by combining creativity with technology to provide comprehensive digital solutions. We offer everything from web development and digital marketing to branding and content creation under one roof, ensuring consistent growth for your vision.',
    },
    {
      question: 'How can I customize your services?',
      answer: 'Our services are highly flexible and tailored to your specific needs. We work closely with you to create customized solutions that match your brand identity and business goals, whether you need individual services or complete package deals.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: "Yes, we believe in building long-term relationships with our clients. We offer comprehensive maintenance and support packages to ensure your digital presence continues to perform optimally and grow with your business.",
    },
    {
      question: 'How can I get started with Grovision?',
      answer: 'Getting started is simple! Contact us through our website to schedule a free consultation. We\'ll discuss your needs, goals, and timeline, then create a tailored proposal to bring your vision to life.',
    },
    {
      question: 'Can you handle both small startups and large enterprises?',
      answer: 'Absolutely! We work with businesses of all sizes. Our team is scalable and experienced in handling projects ranging from startup MVPs to enterprise-level digital ecosystems and comprehensive brand management solutions.',
    },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden py-20"
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

      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 h-64 w-64 rounded-full bg-[#00dcf4]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-[#00dcf4]/10 blur-3xl" />

      <div className="relative container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="border border-[#00dcf4] text-[#00dcf4] mb-4 inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full">
            FAQs
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
            Frequently Asked{' '}
            <span className="text-[#00dcf4]">Questions</span>
          </h2>
          <p className="text-white/60 text-sm">
            Everything you need to know about Grovision and our services
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>

       
      </div>
    </section>
  );
}