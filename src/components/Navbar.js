import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import SocialMedia from "./SocialMedia";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Michal Ciesielski
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
        
        {/* <a 
          href="https://www.facebook.com/profile.php?id=100002928572091"
          className="fa fa-facebook bg-blue-500 text-white inline-flex items-center bg-white-800 border-0 mx-2 py-1 px-1 focus:outline-none hover:bg-gray-700">
        </a>
        <a 
          href="https://github.com/Michu-dev"
          className="fa fa-github inline-flex items-center bg-white-800 border-0 mx-2 py-2 px-1 focus:outline-none hover:bg-gray-700">
        </a>

        <a 
          href="https://www.linkedin.com/in/micha%C5%82-ciesielski-5ab255192/"
          className="fa fa-linkedin bg-blue-500 text-white inline-flex items-center bg-white-800 border-0 mx-2 py-1 px-1 focus:outline-none hover:bg-gray-700">
        </a>

        <a 
          href="https://www.instagram.com/michuc0/"
          className="fa fa-instagram inline-flex items-center bg-white-800 border-0 mx-2 py-2 px-1 focus:outline-none hover:bg-gray-700">
        </a> */}
        <SocialMedia />
        
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}