import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-full max-w-[81.25rem] flex items-center justify-center px-4 text-white py-4 px-4">
      {/* hero section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-[42rem] flex flex-col items-center gap-12"
      >
        <h2 className="text-3xl md:text-7xl inline-block font-bold leading-none">
          Explore homes that fit your dreams
        </h2>
        <div className="flex items-center justify-center gap-8">
          <a
            href="#projects"
            className="border border-white rounded text-white py-2 px-6 md:py-4 md:px-8 text-sm md:text-[1.125rem]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-blue-500 text-white py-2 px-6 md:py-4 md:px-8 text-sm md:text-[1.125rem] rounded"
          >
            Contact us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
