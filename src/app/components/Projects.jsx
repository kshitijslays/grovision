import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const videoRefs = useRef({});

  const mediaItems = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=800&fit=crop' },
    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', poster: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=600&h=800&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600&h=800&fit=crop' },
    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', poster: 'https://images.unsplash.com/photo-1682687220566-5599dbbebda8?w=600&h=800&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1682687220795-796d3f6f7000?w=600&h=800&fit=crop' },
    { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', poster: 'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=600&h=800&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&h=800&fit=crop' },
  ];

  const handleVideoHover = (index, isHovering) => {
    const video = videoRefs.current[index];
    if (video) {
      if (isHovering) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handleDragStart = (e) => {
    if (isTransitioning) return;
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setDragStart(clientX);
    setIsDragging(true);
  };

  const handleDragMove = (e) => {
    if (!isDragging || isTransitioning) return;
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (dragOffset > threshold) {
      prev();
    } else if (dragOffset < -threshold) {
      next();
    }

    setDragOffset(0);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + mediaItems.length) % mediaItems.length;
      items.push({ ...mediaItems[index], originalIndex: index, position: i });
    }
    return items;
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-[#0a0613] font-light text-white antialiased py-8"
      style={{
        background: 'linear-gradient(135deg, #030C16 0%, #030C16 100%)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(0, 220, 244, 0.1) 0%, rgba(13, 10, 25, 0) 50%), radial-gradient(circle at 30% 70%, rgba(0, 220, 244, 0.08) 0%, rgba(13, 10, 25, 0) 40%)',
        }}
      />

      <div className="relative py-14 z-10 flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-6xl px-4">

          <div className="text-center mb-20">
            <h1 className="mx-auto mb-4 text-3xl font-light md:text-4xl lg:text-5xl xl:text-6xl">
              Our
              <span className="text-[#00dcf4]"> Projects</span>
            </h1>
          </div>

          <div
            className="relative h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >

            <button
              onClick={prev}
              disabled={isTransitioning}
              className="absolute left-8 z-30 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={next}
              disabled={isTransitioning}
              className="absolute right-8 z-30 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              {getVisibleItems().map((item, idx) => {
                const position = item.position;
                const scale = position === 0 ? 1 : 0.75;
                const baseTranslateX = position * 420;
                const dragInfluence = isDragging ? dragOffset * 0.8 : 0;
                const translateX = baseTranslateX + dragInfluence;
                const zIndex = position === 0 ? 20 : 10 - Math.abs(position);
                const opacity = position === 0 ? 1 : 0.4;

                const handleCardClick = (e) => {
                  e.stopPropagation();
                  if (position === -1) {
                    prev();
                  } else if (position === 1) {
                    next();
                  }
                };

                return (
                  <div
                    key={`${item.originalIndex}-${idx}`}
                    className={`absolute ${isDragging ? '' : 'transition-all duration-700 ease-out'}`}
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      transition: isDragging ? 'none' : 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <div
                      className={`w-[350px] h-[500px] rounded-3xl overflow-hidden bg-black shadow-2xl ${position !== 0 ? 'cursor-pointer' : ''}`}
                      onClick={handleCardClick}
                    >
                      {item.type === 'image' ? (
                        <img
                          src={item.src}
                          className="w-full h-full object-cover pointer-events-none"
                          alt=""
                          draggable="false"
                        />
                      ) : (
                        <div
                          className="relative w-full h-full group"
                          onMouseEnter={() => position === 0 && handleVideoHover(item.originalIndex, true)}
                          onMouseLeave={() => position === 0 && handleVideoHover(item.originalIndex, false)}
                        >
                          <video
                            ref={(el) => (videoRefs.current[item.originalIndex] = el)}
                            src={item.src}
                            poster={item.poster}
                            className="w-full h-full object-cover pointer-events-none"
                            loop
                            muted
                            playsInline
                          />
                          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-xs font-medium border border-white/20">
                            REEL
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-16">
            {mediaItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(idx);
                    setTimeout(() => setIsTransitioning(false), 700);
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-10 bg-cyan-400'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCarousel;
