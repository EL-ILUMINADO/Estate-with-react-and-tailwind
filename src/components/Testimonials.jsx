import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      className="w-full max-w-[81.25rem] px-4"
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="w-full overflow-hidden">
        <h1 className="text-2xl sm:text-5xl font-bold mb-8 text-center">
          Customer{" "}
          <span className="font-light underline underline-offset-4 under decoration-1">
            Reviews
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 font-[1.125rem] mx-auto">
          Real stories from those who found a home with us
        </p>
        {/* testimonials data */}
        <div className="flex flex-wrap justify-center gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl text-gray-700 font-medium">
                {testimonial.name}
              </h2>
              <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
              <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({ length: testimonial.rating }, (item, index) => (
                  <img key={index} src={assets.star_icon} alt="ratings icon" />
                ))}
              </div>
              <p className="text-gray-600 text-justify">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
