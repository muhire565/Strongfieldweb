import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import flukeImg from '../images/fluke.png';
import pressureImg from '../images/pressure_switch.png';
import cablesImg from '../images/cables.png';

const Hero = ({ onGetStartedClick }) => {
  const slides = [
    {
      image: flukeImg,
      title: 'Precision measurement tools',
      subtitle: 'Fluke Meters for professional accuracy',
    },
    {
      image: pressureImg,
      title: 'Industrial Control Systems',
      subtitle: 'High-quality Pressure Switches & Gauges',
    },
    {
      image: cablesImg,
      title: 'Reliable Infrastructure',
      subtitle: 'Underground cables for heavy-duty power',
    },
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-900">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              
              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-12 lg:px-24 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                    Reliable Electrical <br />
                    <span className="text-industrial-400">Solutions You Can Trust</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl">
                    {slide.subtitle}. Quality products for industrial and commercial use.
                  </p>
                  <button
                    onClick={onGetStartedClick}
                    className="inline-block bg-industrial-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-industrial-700 transition-all transform hover:scale-105 shadow-xl"
                  >
                    Get Started
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
