import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="w-full max-w-[81.25rem] border-2 border-gray-900 px-4">
      <div className="overflow-hidden">
        {/* left side footer */}
        <div className="mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src={assets.logo_dark} alt="logo for estate" />
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              voluptatem error qui, exercitationem perspiciatis ducimus
              perferendis blanditiis. Deserunt mollitia doloribus delectus cum.
              Quidem ex voluptas cumque iste quisquam cupiditate. Ipsum?
            </p>
          </div>
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#header" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4 text-white">
              Subscribe to our Newsletter
            </h3>
            <p className="max-w-80 mb-8">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none"
              />
              <button className="py-2 px-4 rounded bg-blue-500 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* bottom side footer */}
        <div className="border-t border-gray-700 py-4 mt-10 text-center mt-24">
          &copy; 2025 @ EL-ILUMINADO. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
