"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import About from "./components/AboutSection";
import Services from "./components/Services";
import Projects from "./components/Projects"
import CTASection from "./components/CallToAction";
import FooterSection from "./components/Footer";
import Loader from "./components/Loader"; // no need to import video
import Velocity from "./components/Velocity";
import Team from "./components/Team"
import Faqs from "./components/Faqs"
import Founders from "./components/Founders"

const Page = () => {
  const [loading, setLoading] = useState(true);

  const handleVideoEnd = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onFinish={handleVideoEnd} />}
      {!loading && (
        <>
          <Navbar />
          <HeroSection />
          {/* <About /> */}
          <Services/>
          <Projects />
          <Founders />
          <Team />
          <CTASection />
          <Faqs />
          <Velocity />
          <FooterSection />
          {/* <Testimonial /> */}
        </>
      )}
    </>
  );
};

export default Page;

// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { Upload, User, Mail, Phone, Building, FileText, Award, Users, Calendar, MapPin } from "lucide-react"

// export default function page() {
//   return (
//     <main className="min-h-screen overflow-hidden">
//       <HeroSection />
//       <StatsSection />
//       <AboutSection />
//       <EsteemedPanelistSection />
//       <WhyJoinUsSection />
//       <GuestCarouselSection />
//       <RegistrationSection />
//     </main>
//   )
// }

// const HeroSection = () => {
//   const { scrollY } = useScroll()
//   const y = useTransform(scrollY, [0, 500], [0, 150])

//   return (
//     <section className="relative h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br from-[#1B9B7C] via-[#0F7A5C] to-[#0A5D47] px-6 md:px-12">
//       {/* Background Shapes */}
//       <div className="absolute inset-0">
//         {/* Floating Circles */}
//         {[...Array(10)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-white/10 backdrop-blur-sm"
//             style={{
//               width: Math.random() * 80 + 20,
//               height: Math.random() * 80 + 20,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}

//         {/* Square Pattern */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff1a_1px,transparent_1px)] bg-[length:30px_30px] opacity-80 z-10" />

//         {/* Static Shapes */}
//         <div className="absolute top-10 left-10 w-24 h-24 bg-white/20 rounded-lg rotate-45" />
//       </div>

//       {/* Content */}
//       <motion.div
//         className="mx-4 relative z-20 text-left text-white max-w-4xl"
//         style={{ y }}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         <motion.h1
//           className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           ISTE Faculty Convention &<br />
//           <span className="text-white/90">Education-Industry Leaders Summit 2025</span>
//         </motion.h1>

//         <motion.div
//           className="text-md md:text-lg mb-10 space-y-3 text-white/80"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1.4 }}
//         >
//           <div className="flex flex-col sm:flex-row gap-6 items-start">
//             <div className="flex items-center gap-2">
//               <Calendar className="w-6 h-6" />
//               <span>Oct 11, 2025</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="w-6 h-6" />
//               <span>SVIET, Chandigarh</span>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           className="flex flex-col sm:flex-row gap-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1.6 }}
//         >
//           <motion.button
//             className="px-8 py-3 bg-white text-[#1B9B7C] font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//             whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => {
//               document.getElementById('registration')?.scrollIntoView({
//                 behavior: 'smooth'
//               });
//             }}
//           >
//             Register Now
//           </motion.button>
//           <motion.button
//             className="px-8 py-3 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-[#1B9B7C] transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => {
//               document.getElementById('about')?.scrollIntoView({
//                 behavior: 'smooth'
//               });
//             }}
//           >
//             Know More
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }

// const StatsSection = () => {
//   const stats = [
//     { number: 15, label: "Keynote Speakers", icon: Users },
//     { number: 600, label: "Student Members", icon: User },
//     { number: 25, label: "Institutions", icon: Building },
//     { number: 30, label: "Prestigious Awards", icon: Award },
//   ]

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1B9B7C_1px,transparent_1px)] bg-[length:50px_50px]" />
//       </div>

//       <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Faculty Convention at a Glance
//           </h2>
//           <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
//             Be part of our institution's vibrant network of technical educators and learners.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
//           {stats.map((stat, index) => (
//             <StatItem key={index} number={stat.number} label={stat.label} icon={stat.icon} delay={index * 200} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// const StatItem = ({ number, label, delay, icon: Icon }) => {
//   const [count, setCount] = useState(0)
//   const [isVisible, setIsVisible] = useState(false)
//   const ref = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true)
//           const duration = 2000
//           const steps = 60
//           const increment = number / steps
//           let current = 0

//           const timer = setInterval(() => {
//             current += increment
//             if (current >= number) {
//               setCount(number)
//               clearInterval(timer)
//             } else {
//               setCount(Math.floor(current))
//             }
//           }, duration / steps)

//           return () => clearInterval(timer)
//         }
//       },
//       { threshold: 0.5 },
//     )

//     if (ref.current) observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [number, isVisible])

//   return (
//     <motion.div
//       ref={ref}
//       className="text-center relative"
//       initial={{ opacity: 0, scale: 0.5 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.6, delay: delay / 1000 }}
//       viewport={{ once: true }}
//     >
//       <div className="relative bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1B9B7C]/10">
//         <div className="flex flex-col items-center gap-2">
//           <div className="p-3 bg-[#1B9B7C]/10 rounded-full">
//             <Icon className="w-6 h-6 text-[#1B9B7C]" />
//           </div>
//           <div className="text-4xl md:text-5xl font-bold text-[#1B9B7C] mb-2">{count.toLocaleString()}+</div>
//           <div className="text-sm font-semibold md:text-base text-gray-600">{label}</div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-16 bg-white relative overflow-hidden">
//       {/* Floating Shapes */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-20 right-20 w-32 h-32 bg-[#1B9B7C]/10 rounded-full"
//           animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
//           transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
//         />
//         <motion.div
//           className="absolute bottom-20 left-20 w-24 h-24 border-2 border-[#1B9B7C]/20"
//           animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
//           transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
//         />
//       </div>

//       <div className="w-11/12 container mx-auto px-4 relative z-10">
//         {/* Heading */}
//         <motion.div
//           className="lg:text-left text-center mb-12 "
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="inline-block px-4 py-2 bg-[#1B9B7C] text-white rounded-full text-sm font-medium mb-4">
//             ABOUT THE EVENT
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ISTE Faculty Convention</h2>
//           <p className="max-w-4xl lg:text-lg text-sm text-gray-600 leading-relaxed">
//             A premier gathering of academicians, educators, and professionals from Punjab, Chandigarh, Himachal Pradesh,
//             and J&K to explore challenges and opportunities in technical education & institutional management.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative">
//               <img
//                 src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumKiFHnF0DQkEFIRNZ5MqBjLvotuhOKYrSbUGT"
//                 alt="ISTE Faculty Convention"
//                 className="w-full lg:h-[550px] rounded-2xl shadow-2xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1B9B7C]/20 to-transparent rounded-2xl" />
//             </div>
//           </motion.div>

//           {/* Right Content */}
//           <motion.div
//             className="space-y-6"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             {[
//               {
//                 title: "About ISTE",
//                 description:
//                   "India's leading professional society with 5.3+ lakh members, dedicated to advancing engineering & technical education nationwide.",
//                 icon: FileText,
//               },
//               {
//                 title: "About SVIET",
//                 description:
//                   "NAAC Accredited, industry-focused institute under SVGOI, known for global collaborations, top placements, and skill-based education.",
//                 icon: Building,
//               },
//               {
//                 title: "Convention Highlights",
//                 description:
//                   "Expert panels, thematic sessions, and dynamic discussions on NEP-2020, innovation, and institutional management.",
//                 icon: Users,
//               },
//               {
//                 title: "Who Can Attend",
//                 description:
//                   "Faculty of Engineering Colleges and Polytechnics across all branches of Engineering & Technology.",
//                 icon: User,
//               },
//               {
//                 title: "Best Teacher Award",
//                 description:
//                   "Nomination through Head of Institution. All registered participants receive a certificate of participation.",
//                 icon: Award,
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-50 to-white px-6 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1B9B7C]/10"
//                 whileHover={{ scale: 1.02, y: -5 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-2 bg-[#1B9B7C]/10 rounded-lg">
//                     <item.icon className="w-6 h-6 text-[#1B9B7C]" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-[#1B9B7C]">{item.title}</h3>
//                     <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const EsteemedPanelistSection = ({ panelists = [] }) => {
//   const defaultPanelists = [
//   {
//     "name": "Dr. Manpreet Singh Manna",
//     "designation": "Vice Chancellor at Chandigarh University, Director at AICTE, and Founder of SWAYAM",
//     "description": "A visionary educationist dedicated to advancing digital learning and fostering innovation in higher education across India.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5S2j4wLOmAU9E4d6BWLwPhfueiF7aZlbNoXVy"
//   },
//   {
//     "name": "Prof Rajeev Ahuja",
//     "designation": " Director of IIT Ropar",
//     "description": "A distinguished researcher and academic leader committed to promoting innovation, research excellence, and technological advancement in higher education.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5hj5uJQNdx4bWp0UlI1ZKuzEFvVsLw7JfMokX"
//   },
//   {
//     "name": "Dr Harpal Thethi",
//     "designation": "Executive Dean—Corporate Relations & Campus Placements, and leader of one of India's largest Early Career ecosystems at LPU ",
//     "description": "A dynamic leader dedicated to bridging academia and industry, empowering students through strong corporate relations and transformative career opportunities.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5h9ht18Ndx4bWp0UlI1ZKuzEFvVsLw7JfMokX"
//   },
//   {
//     "name": "Dr. RK Garg ",
//     "designation": "Former Director of NIT Arunachal Pradesh and former Director Incharge of NIT Jalandhar",
//     "description": "An accomplished academic and administrator known for his impactful leadership and contributions to strengthening technical education in India.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5qMvmZU9avH4S0MZTogxLPtUlVr3wpcjD6WEI"
//   },
//   {
//     "name": "Dr Vikrant Sharma ",
//     "designation": " Dean of the School of Engineering, Design and Automation (E), and Faculty of Computational Science at GNA University, Punjab",
//     "description": "A passionate academic leader fostering innovation, research, and excellence in engineering and computational sciences.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5YLZRLFkdqrAaPiXWyjJwRgVxh49pENQmO51K"
//   },
//   {
//     "name": "Dr. Deep Kamal Kaur",
//     "designation": "Professor & Head (Department of Engineering & Technology, Guru Nanak Dev University Regional Campus, Jalandhar)",
//     "description": "An inspiring educator and researcher dedicated to nurturing technical talent and advancing innovation in engineering and technology.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5aDtCsPUFuAOBhrIx01FH8lfKbENY7GjSgspL"
//   },
//   {
//     "name": "Prof. Buta Singh Sidhu",
//     "designation": "Former Vice Chancellor of (MRSPTU) Bathinda",
//     "description": "A respected academic visionary recognized for his leadership in advancing technical education and institutional growth.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5tQDzt1EyKp7vbuh4aZnGcCs8ARDxHFO2LY0S"
//   },
//   {
//     "name": "Vishal Takiar",
//     "designation": "Lead Consultant at @Infosys and an IT Veteran with 19+ years of experience across major firms like IBM, HCL, and EVRY India",
//     "description": "A seasoned IT professional with extensive expertise in consulting, technology strategy, and enterprise solutions across global organizations.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5QVypljUA0Cpb4ysi61TzJLRaW735foPjv8GS"
//   },
//   {
//     "name": "Dr. Rohit Khokher",
//     "designation": "Academic Dean, Professor, and Chief Technology Officer (CTO) at Vidya Prakashan Mandir Pvt. Ltd., New Delhi ",
//     "description": "An innovative academic and tech leader dedicated to integrating education with cutting-edge technology and research-driven practices.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5R0ALKsZkKnwR8l6UzsrYTODtvBCQJGu5PZeW"
//   },
//   {
//     "name": "Ashish Mehta",
//     "designation": "COO- Innovation Mission Punjab",
//     "description": "A strategic leader driving innovation and transformative initiatives to advance technology and development in Punjab.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5fQn4NcszhxnBRpFS0Z73O2W1YsivobXAcldt"
//   },
//   {
//     "name": "Er. Ankur Gill ",
//     "designation": "Director Operations SVGOI & Founder - Godigitiy Nexus",
//     "description": "A visionary leader and entrepreneur focused on operational excellence and fostering digital innovation.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX59bwj096eo7ImuETdUDV8Of45P3xMqvt1jAQk"
//   },
//   {
//     "name": "Vikram R Singh",
//     "designation": "CEO Antier | Scaling AI-powered Web3 infrastructure globally | Driving tokenization, CBDCs & digital trust",
//     "description": "A pioneering entrepreneur driving global adoption of AI-powered Web3 solutions, tokenization, and digital trust initiatives.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5L3nkBfV4dQjwtUe75ApxbP68hlkFNKnGZIqT"
//   },
//   {
//     "name": "G Kalyani",
//     "designation": "Head – Operations, delivery and Content production – L&T EduTech",
//     "description": "A dynamic leader specializing in operations, content production, and delivering impactful educational technology solutions.",
//     "image": "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5QMvsa5UA0Cpb4ysi61TzJLRaW735foPjv8GS"
//   },
//   ]

//   const displayPanelists = panelists.length > 0 ? panelists : defaultPanelists
//   const [currentSlide, setCurrentSlide] = useState(0)

//   return (
//     <section className="py-20 relative overflow-hidden bg-white">
//       <div className="w-11/12 container mx-auto px-4 relative z-10">
//         <motion.div
//           className=" mb-12 lg:text-left text-center px-4"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1B9B7C] mb-4">Our Esteemed Panelists</h2>
//           <p className="text-gray-600 lg:text-lg text-sm">
//             Meet the distinguished panelists who are shaping the future of technical education.
//           </p>
//         </motion.div>

//         {/* Panelists Slider */}
//         <div className="relative">
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {displayPanelists.map((panelist, index) => (
//                 <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
//                   <div className="bg-white rounded-lg p-6 border border-[#1B9B7C]/20 shadow-md hover:shadow-lg transition-shadow duration-300">
//                     <img
//                       src={panelist.image || "/placeholder.svg"}
//                       alt={panelist.name}
//                       className="w-full h-96 object-cover rounded-md mb-4"
//                     />
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{panelist.name}</h3>
//                     <p className="text-md font-semibold text-[#1B9B7C] mb-1">{panelist.designation}</p>
//                     <p className="text-gray-600 text-sm">{panelist.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Indicators */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {displayPanelists.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? "bg-[#1B9B7C]" : "bg-gray-300"}`}
//                 onClick={() => setCurrentSlide(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const WhyJoinUsSection = () => {
//   const reasons = [
//     {
//       title: "Networking with leading academicians",
//       description: "Connect with top educators and researchers from across India",
//       icon: Users,
//     },
//     {
//       title: "Present your research paper",
//       description: "Showcase your innovative work to a distinguished audience",
//       icon: FileText,
//     },
//     {
//       title: "Gain ISTE recognition & awards",
//       description: "Receive recognition for excellence in technical education",
//       icon: Award,
//     },
//     {
//       title: "Explore NEP-2020 opportunities",
//       description: "Understand implementation strategies for the new education policy",
//       icon: Building,
//     },
//   ]

//   return (
//     <section className="py-20 bg-gradient-to-br from-[#1B9B7C]/5 to-white relative overflow-hidden">
//       <div className="w-11/12 mx-auto container px-4 relative z-10">
//         <motion.div
//           className=" mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           {/* <div className="inline-block px-6 py-3 bg-[#1B9B7C] text-white rounded-full text-sm font-medium mb-6">
//             WHY JOIN US
//           </div> */}
//           <h2 className="text-4xl md:text-5xl lg:text-left text-center font-bold text-[#1B9B7C] mb-6">Why Join Us</h2>
//           <p className="lg:text-lg lg:text-left text-center text-sm text-gray-600 max-w-3xl leading-relaxed">
//             Discover the benefits of participating in India's premier technical education convention
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={index}
//               className="group relative"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//             >
//               <div className="bg-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-[#1B9B7C]/10 group-hover:border-[#1B9B7C]/30">
//                 <div className="relative z-10">
//                   <div className="w-16 h-16 bg-[#1B9B7C]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1B9B7C]/20 transition-colors duration-300">
//                     <reason.icon className="w-8 h-8 text-[#1B9B7C]" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1B9B7C] transition-colors duration-300">
//                     {reason.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">{reason.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// const GuestCarouselSection = () => {
//   const guests = [
//    {
//     "name": "Dr. Pratapsinh Kakasaheb Desai",
//     "position": "President, ISTE (New Delhi)",
//     "description": "Mechanical Engineering & Education reform specialist; President of the Indian Society for Technical Education. PhD from Shivaji University (Kolhapur); active in designing prosthesis research and advocating for technical teacher welfare. :contentReference[oaicite:0]{index=0}",
//     "image": "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwf32MDOoZaYjGzJ3x9SRPtpmlFydgsQMqB7ev",
//     "expertise": "ISTE Governance & Educational Policy"
//   },
//   {
//     "name": "Dr. R. P. Singh Suker-Chakia",
//     "position": "Chairman, ISTE Section (Punjab, Chandigarh, Himachal Pradesh & J&K)",
//     "description": "Experienced academic leader, serving as Chairman of the ISTE section covering Punjab, Chandigarh, Himachal Pradesh and Jammu & Kashmir; involved in awards, conventions and technical education promotion in that region.",
//     "image": "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwyGmvbWzkKG2MfRw0rnep5z84kEl1ANBiSCTF",
//     "expertise": "Technical Education Leadership"
//   },

//   {
//     "name": "Dr. Surjit Kumar Gandhi",
//     "position": "Secretary, ISTE (Punjab, Chandigarh, Himachal Pradesh & J&K)",
//     "description": "Long-serving academician and administrator; Secretary of the ISTE section for Punjab, Chandigarh, Himachal Pradesh & J&K. Principal at PCTE Institute of Engineering & Technology, Ludhiana. :contentReference[oaicite:1]{index=1}",
//     "image": "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw9NQrilvgnO69h0GCWXZDqcsxfQLUul1HaPRV",
//     "expertise": "Technical Education Administration"
//   },
// ]

//   const [currentGuest, setCurrentGuest] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentGuest((prev) => (prev + 1) % guests.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//       <div className="w-11/12 container mx-auto px-4 relative z-10">
//         <motion.div
//           className="mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="inline-block px-6 py-3 bg-[#1B9B7C] text-white rounded-full text-sm font-medium mb-6">
//             DISTINGUISHED GUESTS
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Esteemed Guests</h2>
//           <p className="text-lg text-gray-600 max-w-3xl  leading-relaxed">
//             Learn from industry leaders and academic pioneers who are shaping the future of technical education
//           </p>
//         </motion.div>

//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#1B9B7C]/10">
//           <div className="grid lg:grid-cols-2 gap-0">
//             {/* Image Section */}
//             <div className="relative h-96 lg:h-[70vh]">
//               <img
//                 src={guests[currentGuest].image || "/placeholder.svg"}
//                 alt={guests[currentGuest].name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1B9B7C]/20 to-transparent" />
//             </div>

//             {/* Content Section */}
//             <div className="p-6 md:p-12 flex flex-col justify-center">
//               <motion.div
//                 key={currentGuest}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="inline-block px-4 py-2 bg-[#1B9B7C]/10 text-[#1B9B7C] rounded-full text-sm font-medium mb-4">
//                   {guests[currentGuest].expertise}
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{guests[currentGuest].name}</h3>
//                 <p className="text-lg font-semibold text-[#1B9B7C] mb-4">{guests[currentGuest].position}</p>
//                 <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
//                   {guests[currentGuest].description}
//                 </p>

//                 {/* Navigation Dots */}
//                 <div className="flex gap-2 justify-center md:justify-start">
//                   {guests.map((_, index) => (
//                     <button
//                       key={index}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                         currentGuest === index ? "bg-[#1B9B7C] scale-125" : "bg-gray-300 hover:bg-gray-400"
//                       }`}
//                       onClick={() => setCurrentGuest(index)}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const RegistrationSection = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     institution: "",
//     designation: "",
//     department: "",
//     qualification: "",
//     experience: "",
//     salientAchievements: "",
//     isteMembership: "",
//     photograph: null,
//     idProof: null,
//   })
//   const [errors, setErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitted, setSubmitted] = useState(false)

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid"
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required"
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
//       newErrors.phone = "Phone number must be 10 digits"
//     }
//     if (!formData.institution.trim()) newErrors.institution = "Institution is required"
//     if (!formData.designation.trim()) newErrors.designation = "Designation is required"
//     if (!formData.department.trim()) newErrors.department = "Department is required"
//     if (!formData.qualification.trim()) newErrors.qualification = "Qualification is required"
//     if (!formData.experience.trim()) newErrors.experience = "Experience is required"
//     if (!formData.salientAchievements.trim()) newErrors.salientAchievements = "Salient Achievement is required"
//     if (!formData.photograph) newErrors.photograph = "Photograph is required"
//     if (!formData.idProof) newErrors.idProof = "ID proof is required"

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     setIsSubmitting(true)

//     try {
//       const formDataToSend = new FormData()

//       // Append all form fields
//       Object.keys(formData).forEach(key => {
//         if (formData[key] !== null && formData[key] !== '') {
//           formDataToSend.append(key, formData[key])
//         }
//       })

//       console.log('Submitting form data:', Object.fromEntries(formDataToSend.entries()))

//       const response = await fetch('/api/sendEmail/iste-faculty', {
//         method: 'POST',
//         body: formDataToSend,
//       })

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//       }

//       const result = await response.json()
//       console.log('API response:', result)

//       if (result.success) {
//         setSubmitted(true)
//         // Reset form
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           institution: "",
//           designation: "",
//           department: "",
//           qualification: "",
//           experience: "",
//           salientAchievements: "",
//           isteMembership: "",
//           photograph: null,
//           idProof: null,
//         })
//       } else {
//         alert(`Error: ${result.message || 'Form submission failed. Please check all required fields and try again.'}`)
//       }
//     } catch (error) {
//       console.error('Submission error:', error)
//       if (error.message.includes('HTTP error')) {
//         alert('Server error occurred. Please try again later.')
//       } else if (error.message.includes('Failed to fetch')) {
//         alert('Network error. Please check your internet connection and try again.')
//       } else {
//         alert('Failed to submit registration. Please check all required fields and try again.')
//       }
//     }

//     setIsSubmitting(false)
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }))
//     }
//   }

//   const handleFileChange = (e) => {
//     const { name } = e.target
//     const file = e.target.files[0]
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         setErrors((prev) => ({ ...prev, [name]: "File size must be less than 5MB" }))
//         return
//       }
//       if (name === "photograph" && !file.type.startsWith("image/")) {
//         setErrors((prev) => ({ ...prev, [name]: "Please select an image file" }))
//         return
//       }
//       if (name === "idProof" && !file.type.startsWith("image/") && file.type !== "application/pdf") {
//         setErrors((prev) => ({ ...prev, [name]: "Please select an image or PDF file" }))
//         return
//       }
//       setFormData((prev) => ({ ...prev, [name]: file }))
//       setErrors((prev) => ({ ...prev, [name]: "" }))
//     }
//   }

//   return (
//     <section id="registration" className="py-20 bg-gradient-to-br from-[#1B9B7C]/5 to-white relative overflow-hidden">
//       <div className="w-11/12 container mx-auto px-4 relative z-10">
//         <motion.div
//           className=" mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >

//           <h2 className="text-4xl md:text-5xl font-bold text-[#1B9B7C] mb-6">Register Now</h2>
//           <p className="text-lg text-gray-600 max-w-3xl  leading-relaxed">
//             Join us for this prestigious convention and be part of the technical education revolution
//           </p>
//         </motion.div>

//         <div className="">
//           <div className="bg-white rounded-lg shadow-2xl border border-[#1B9B7C]/20 overflow-hidden">
//             <div className="bg-gradient-to-r from-[#1B9B7C] to-[#0F7A5C] text-white p-6">
//               <h3 className="text-2xl font-bold text-center mb-2">Faculty Registration Form</h3>
//               <p className="text-white/90 text-center">
//                 Please fill in all required information to complete your registration
//               </p>
//             </div>

//             <div className="p-8">
//               {submitted ? (
//                 <div className="text-center py-12">
//                   <div className="w-20 h-20 bg-[#1B9B7C] rounded-full flex items-center justify-center mx-auto mb-6">
//                     <span className="text-3xl text-white">✅</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h3>
//                   <p className="text-gray-600 mb-8">
//                     Thank you for registering for the ISTE Faculty Convention. You will receive a confirmation email shortly.
//                   </p>

//                   {/* Timeline */}
//                   <div className="max-w-2xl mx-auto mb-8">
//                     <h4 className="text-lg font-semibold text-gray-900 mb-6">What happens next?</h4>
//                     <div className="space-y-4">
//                       {[
//                         { step: 1, title: "Email Confirmation", desc: "You'll receive a confirmation email within 5 minutes", status: "completed" },
//                         { step: 2, title: "Application Review", desc: "Our team will review your application within 24 hours", status: "pending" },
//                         { step: 3, title: "Approval Notification", desc: "You'll receive approval confirmation within 2-3 days", status: "pending" },
//                         { step: 4, title: "Event Details", desc: "Detailed schedule and venue information will be shared", status: "pending" },
//                         { step: 5, title: "Convention Day", desc: "Join us on October 11, 2025 at SVIET, Chandigarh", status: "pending" }
//                       ].map((item, index) => (
//                         <div key={index} className="flex items-start gap-4 text-left">
//                           <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
//                             item.status === 'completed' ? 'bg-[#1B9B7C] text-white' : 'bg-gray-200 text-gray-600'
//                           }`}>
//                             {item.status === 'completed' ? '✓' : item.step}
//                           </div>
//                           <div className="flex-1">
//                             <h5 className="font-semibold text-gray-900">{item.title}</h5>
//                             <p className="text-sm text-gray-600">{item.desc}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => setSubmitted(false)}
//                     className="bg-[#1B9B7C] hover:bg-[#0F7A5C] text-white py-2 px-6 rounded-lg transition-colors duration-300"
//                   >
//                     Register Another Faculty
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label htmlFor="fullName" className="text-gray-700 font-medium flex items-center gap-2">
//                         <User className="w-4 h-4 text-[#1B9B7C]" />
//                         Full Name *
//                       </label>
//                       <input
//                         id="fullName"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleInputChange}
//                         className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-[#1B9B7C] transition-colors ${errors.fullName ? "border-red-500" : "border-gray-200"}`}
//                         placeholder="Enter your full name"
//                       />
//                       {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
//                         <Mail className="w-4 h-4 text-[#1B9B7C]" />
//                         Email Address *
//                       </label>
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-[#1B9B7C] transition-colors ${errors.email ? "border-red-500" : "border-gray-200"}`}
//                         placeholder="Enter your email address"
//                       />
//                       {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
//                         <Phone className="w-4 h-4 text-[#1B9B7C]" />
//                         Phone Number *
//                       </label>
//                       <input
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-[#1B9B7C] transition-colors ${errors.phone ? "border-red-500" : "border-gray-200"}`}
//                         placeholder="Enter your phone number"
//                       />
//                       {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="institution" className="text-gray-700 font-medium flex items-center gap-2">
//                         <Building className="w-4 h-4 text-[#1B9B7C]" />
//                         Institution *
//                       </label>
//                       <input
//                         id="institution"
//                         name="institution"
//                         value={formData.institution}
//                         onChange={handleInputChange}
//                         className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-[#1B9B7C] transition-colors ${errors.institution ? "border-red-500" : "border-gray-200"}`}
//                         placeholder="Enter your institution name"
//                       />
//                       {errors.institution && <p className="text-red-500 text-sm">{errors.institution}</p>}
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="designation" className="text-gray-700 font-medium">
//                         Designation *
//                       </label>
//                       <input
//                         id="designation"
//                         name="designation"
//                         value={formData.designation}
//                         onChange={handleInputChange}
//                         className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-[#1B9B7C] transition-colors ${errors.designation ? "border-red-500" : "border-gray-200"}`}
//                         placeholder="e.g., Professor, Associate Professor"
//                       />
//                       {errors.designation && <p className="text-red-500 text-sm">{errors.designation}</p>}
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="department" className="text-gray-700 font-medium">
//                         Department *
//                       </label>
//                       <input
//                         id="department"
//                         name="department"
//                         value={formData.department}
//                         onChange={handleInputChange}
//                         className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-[#1B9B7C] transition-colors ${errors.department ? "border-red-500" : "border-gray-200"}`}
//                         placeholder="e.g., Computer Science, Mechanical"
//                       />
//                       {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="qualification" className="text-gray-700 font-medium">
//                         Highest Qualification *
//                       </label>
//                       <input
//                         id="qualification"
//                         name="qualification"
//                         value={formData.qualification}
//                         onChange={handleInputChange}
//                         className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-[#1B9B7C] transition-colors ${errors.qualification ? "border-red-500" : "border-gray-200"}`}
//                         placeholder="e.g., Ph.D., M.Tech, M.E."
//                       />
//                       {errors.qualification && <p className="text-red-500 text-sm">{errors.qualification}</p>}
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="experience" className="text-gray-700 font-medium">
//                         Years of Experience *
//                       </label>
//                       <input
//                         id="experience"
//                         name="experience"
//                         value={formData.experience}
//                         onChange={handleInputChange}
//                         className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-[#1B9B7C] transition-colors ${errors.experience ? "border-red-500" : "border-gray-200"}`}
//                         placeholder="Enter years of experience"
//                       />
//                       {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="isteMembership" className="text-gray-700 font-medium">
//                         ISTE Membership Number
//                       </label>
//                       <input
//                         id="isteMembership"
//                         name="isteMembership"
//                         value={formData.isteMembership}
//                         onChange={handleInputChange}
//                         className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#1B9B7C] transition-colors"
//                         placeholder="Enter ISTE membership number (if any)"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="salientAchievements" className="text-gray-700 font-medium">
//                       Salient Achievement in session 2024-25 *
//                     </label>
//                     <textarea
//                       id="salientAchievements"
//                       name="salientAchievements"
//                       value={formData.salientAchievements}
//                       onChange={handleInputChange}
//                       rows={3}
//                       className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-[#1B9B7C] transition-colors resize-none ${errors.salientAchievements ? "border-red-500" : "border-gray-200"}`}
//                       placeholder="Describe your salient achievement in session 2024-25"
//                     />
//                     {errors.salientAchievements && <p className="text-red-500 text-sm">{errors.salientAchievements}</p>}
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label htmlFor="photograph" className="text-gray-700 font-medium flex items-center gap-2">
//                         <Upload className="w-4 h-4 text-[#1B9B7C]" />
//                         Photograph *
//                       </label>
//                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1B9B7C] transition-colors duration-300">
//                         <input
//                           id="photograph"
//                           name="photograph"
//                           type="file"
//                           accept="image/*"
//                           onChange={handleFileChange}
//                           className="hidden"
//                         />
//                         <label htmlFor="photograph" className="cursor-pointer">
//                           <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                           <p className="text-gray-600">Click to upload photograph</p>
//                           <p className="text-sm text-gray-400">PNG, JPG up to 5MB</p>
//                         </label>
//                         {formData.photograph && (
//                           <p className="text-[#1B9B7C] mt-2 font-medium">{formData.photograph.name}</p>
//                         )}
//                       </div>
//                       {errors.photograph && <p className="text-red-500 text-sm">{errors.photograph}</p>}
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="idProof" className="text-gray-700 font-medium flex items-center gap-2">
//                         <Upload className="w-4 h-4 text-[#1B9B7C]" />
//                         Nomination Letter *
//                       </label>
//                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1B9B7C] transition-colors duration-300">
//                         <input
//                           id="idProof"
//                           name="idProof"
//                           type="file"
//                           accept="image/*,.pdf"
//                           onChange={handleFileChange}
//                           className="hidden"
//                         />
//                         <label htmlFor="idProof" className="cursor-pointer">
//                           <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                           <p className="text-gray-600">Click to upload Letter</p>
//                           <p className="text-sm text-gray-400">Nomination Letter from the head of Institution(PDF/Image up to 5MB)</p>
//                         </label>
//                         {formData.idProof && (
//                           <p className="text-[#1B9B7C] mt-2 font-medium">{formData.idProof.name}</p>
//                         )}
//                       </div>
//                       {errors.idProof && <p className="text-red-500 text-sm">{errors.idProof}</p>}
//                     </div>
//                   </div>

//                   {/* Nomination Letter Example */}
//                   <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
//                     <div className="flex items-center gap-3">
//                       <div className="p-2 bg-blue-100 rounded-full">
//                         <FileText className="w-5 h-5 text-[#1B9B7C]" />
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-gray-900 mb-1">Need help with the nomination letter?</h4>
//                         <p className="text-sm text-gray-600 mb-2">Download our sample nomination letter format for reference.</p>
//                         <a
//                           href="/ISTE-Best-Faculty-Nomination-Form.pdf"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-2 text-[#1B9B7C] hover:text-[#1B9B7C]/80 font-medium text-sm transition-colors duration-300"
//                         >
//                           <FileText className="w-4 h-4" />
//                           Download Nomination Letter Example
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-[#1B9B7C] hover:bg-[#0F7A5C] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-4 text-lg font-semibold rounded-lg transition-colors duration-300"
//                   >
//                     {isSubmitting ? "Submitting..." : "Register Now"}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
