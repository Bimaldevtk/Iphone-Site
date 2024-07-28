import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { create } from 'zustand';
import { heroVideo, smallHeroVideo } from '../../utils';

// Define the Zustand store
const useStore = create((set) => ({
  videosrc: window.innerWidth < 760 ? smallHeroVideo : heroVideo,
  setVideosrc: (src) => set({ videosrc: src }),
  handleVideoSrcSet: () => {
    const newSrc = window.innerWidth < 760 ? smallHeroVideo : heroVideo;
    set({ videosrc: newSrc });
  },
}));

const Hero = () => {
  const videosrc = useStore((state) => state.videosrc);
  const handleVideoSrcSet = useStore((state) => state.handleVideoSrcSet);

  useEffect(() => {
    handleVideoSrcSet();
    const handleResize = () => {
      handleVideoSrcSet();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleVideoSrcSet]);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videosrc}>
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From ₹5000 month or ₹50,000</p>
      </div>
    </section>
  );
}

export default Hero;
