import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Strong Field Electrical Centre provided us with high-quality Fluke meters that have significantly improved our maintenance efficiency.",
    author: "James Okello",
    position: "Technical Manager, Nile Breweries",
  },
  {
    quote: "Their industrial pressure switches are reliable and durable. Exactly what we needed for our production line.",
    author: "Sarah Namubiru",
    position: "Operations Director, Kakira Sugar",
  },
  {
    quote: "Expert consultation and quality products. They are our go-to for all electrical equipment in Jinja.",
    author: "Peter Musoke",
    position: "Chief Engineer, Bidco Uganda",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Trusted By Businesses
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1.5 w-24 bg-industrial-600 mx-auto rounded-full"
          />
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="pb-16"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6 p-4 bg-industrial-100 rounded-full text-industrial-600">
                  <Quote size={32} />
                </div>
                <p className="text-slate-700 text-lg italic mb-8 flex-grow">"{t.quote}"</p>
                <div>
                   <h4 className="font-bold text-slate-900 text-xl">{t.author}</h4>
                   <p className="text-industrial-600 font-medium">{t.position}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
