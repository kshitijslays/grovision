import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import { motion } from "framer-motion";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#030C16] text-white">
      {/* Lamp Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00dcf4] rounded-full opacity-20 blur-[120px] transition-transform duration-700"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x}px), ${mousePosition.y}px)`,
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#00a8cc] rounded-full opacity-30 blur-[100px] transition-transform duration-500"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x * 0.5}px), ${
              mousePosition.y * 0.5
            }px)`,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] animate-[pulse_8s_ease-in-out_infinite]" />

      {/* Cursor Grid Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle 4cm at ${cursorPosition.x}px ${cursorPosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 4cm at ${cursorPosition.x}px ${cursorPosition.y}px, black, transparent)`,
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,220,244,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,220,244,0.3)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 pt-40 container mx-auto h-full min-h-screen flex flex-col justify-center items-center px-6 text-center py-20">
        <div
          className={`w-full max-w-5xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-[#00dcf4]/30 bg-[#00dcf4]/5 px-4 py-2 text-xs font-light text-[#00dcf4] backdrop-blur-sm animate-[slideDown_0.6s_ease-out]">
            <Sparkles className="w-3 h-3 animate-[spin_4s_linear_infinite]" />
            <span className="tracking-wider">GROVISION X CONTENT CRAFTERS</span>
          </div>

          <motion.div className="relative mx-4 my-8 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-6">
            <h1 className="text-3xl font-light leading-tight text-white/90 md:text-4xl lg:text-5xl">
              Where{" "}
              <span className="text-[#00dcf4] font-light">Creativity</span>{" "}
              Meets{" "}
              <span className="text-[#00a8cc] font-light">Technology </span>
            </h1>
            <LayoutTextFlip words={["Vision", "Brand"]} />
          </motion.div>
          <p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg lg:text-xl">
            Your all-in-one creative partner for designing websites, developing
            apps, and producing stunning digital content that grows your brand.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://forms.gle/FK2KKro2JMqCw9Hv8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#00dcf4] to-[#00a8cc] px-8 py-3.5 text-sm font-medium text-white shadow-md shadow-[#00dcf4]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#00dcf4]/20 sm:w-auto md:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00a8cc] to-[#00dcf4] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <button className="group relative w-full overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-light text-white backdrop-blur-sm transition-all duration-300 hover:border-[#00dcf4]/50 hover:bg-white/10 sm:w-auto md:text-base">
              <span className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                View Projects
              </span>
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { label: "Web Design", value: "100+" },
              { label: "Apps Built", value: "50+" },
              { label: "Happy Clients", value: "200+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#00dcf4]/30 hover:bg-white/10 hover:-translate-y-1"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${
                    index * 150
                  }ms backwards`,
                }}
              >
                <div className="text-3xl font-light text-[#00dcf4] mb-1 transition-all duration-300 group-hover:text-[#00e8ff]">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 transition-colors duration-300 group-hover:text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default App;
