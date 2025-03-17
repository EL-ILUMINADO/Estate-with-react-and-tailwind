import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="w-full max-w-[81.25rem] px-4"
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div
        className="flex flex-col items-center justify-center overflow-hidden"
        id="about"
      >
        <h1 className="text-2xl sm:text-5xl font-bold mb-4">
          About{" "}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            Our Brand
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center text-[1.125rem]">
          Passionate about properties, dedicated to the vision
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8 pt-24">
          <div className="overflow-hidden mt-8 md:w-[1000px] max-w-[700px] flex items-center justify-center flex-1">
            <img
              src={assets.brand_img}
              alt="Image of a building"
              className="w-full hover:scale-150 transform transition duration-300"
            />
          </div>
          <div className="flex flex-col items-start md:items-start mt-10 text-gray-600 md:text-start text-center flex-1 max-w-[600px]">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl-pr-28">
              <div>
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p className="">Years of Experience</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">234+</p>
                <p className="">Projects completed</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">9000+</p>
                <p className="">Mn. Sq. Ft. Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">40+</p>
                <p className="">Ongoing projects</p>
              </div>
            </div>
            <p className="text-justify mt-10">
              With over a decade of expertise in the real estate industry,
              Estate has built a solid reputation for delivering exceptional
              properties and creating lasting value for clients. Having
              successfully completed 234+ projects and sold over 9,000+ square
              feet of land, our portfolio speaks volumes about our commitment to
              quality and excellence. Currently, we are managing 40+ ongoing
              projects, demonstrating our ability to stay ahead of market trends
              and continuously innovate. Trust Estate for unparalleled
              experience, dedication, and results in the real estate market.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded mt-10">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
