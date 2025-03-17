import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      className="flex px-4 max-w-[81.25rem] w-full"
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden w-full flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-5xl font-bold mb-8 text-center">
            Projects{" "}
            <span className="underline underline-offset-4 decoration-1 under font-light">
              Completed
            </span>
          </h1>
          <p className="text-gray-500 max-w-80 text-center">
            Crafting spaces, Building legacies. Explore our portfolio
          </p>
        </div>
        {/* slider buttons */}
        <div className="flex gap-4 items-center justify-end mt-10 mb-10">
          <button
            className="p-3 bg-gray-300 rounded"
            aria-label="previous project"
            onClick={prevProject}
          >
            <img src={assets.left_arrow} alt="left arrow icon" />
          </button>
          <button
            className="p-3 bg-gray-300 rounded"
            aria-label="next project"
            onClick={nextProject}
          >
            <img src={assets.right_arrow} alt="right arrow icon" />
          </button>
        </div>
        {/* projects slide */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full sm:w-1/4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mb-14"
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} <span className="mx-2">|</span>{" "}
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
