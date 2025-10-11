import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#030C16] text-white">

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 pt-40 container mx-auto h-full min-h-screen flex flex-col justify-center items-center px-6 text-center py-20">
        <div
          className={`w-full max-w-5xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-[#00dcf4]/30 bg-[#00dcf4]/5 px-4 py-2 text-xs font-light text-[#00dcf4] backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            <span className="tracking-wider">GROVISION</span>
          </div>

          <h1 className="mx-auto mb-6 text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-4xl xl:text-5xl">
            Where Creativity Meets  Technology <br /> to{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00dcf4] to-[#00a8cc] bg-clip-text text-transparent">
                Grow
              </span>
              <span className="absolute inset-0 blur-lg bg-gradient-to-r from-[#00dcf4] to-[#00a8cc] opacity-10" />
            </span>{' '}
            Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00dcf4] to-[#00a8cc] bg-clip-text text-transparent">
                Vision
              </span>
              <span className="absolute inset-0 blur-lg bg-gradient-to-r from-[#00dcf4] to-[#00a8cc] opacity-10" />
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg lg:text-xl">
            Your all-in-one creative partner for designing websites, developing
            apps, and producing stunning digital content that grows your brand.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#00dcf4] to-[#00a8cc] px-8 py-3.5 text-sm font-medium text-white shadow-md shadow-[#00dcf4]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#00dcf4]/20 sm:w-auto md:text-base">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00a8cc] to-[#00dcf4] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <button className="group relative w-full overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-light text-white backdrop-blur-sm transition-all duration-300 hover:border-[#00dcf4]/50 hover:bg-white/10 sm:w-auto md:text-base">
              <span className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                View Projects
              </span>
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { label: 'Web Design', value: '100+' },
              { label: 'Apps Built', value: '50+' },
              { label: 'Happy Clients', value: '200+' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00dcf4]/30 hover:bg-white/10"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-3xl font-light text-[#00dcf4] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}
