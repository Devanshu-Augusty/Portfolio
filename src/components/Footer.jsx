import React from "react";
import { FaGithubSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row max-md:gap-5 justify-between p-6 md:px-20 text-sm md:tex-lg mt-12">
      <div className="space-y-4">
        <h3 className="max-md:hidden text-2xl text-gray-200 font-semibold">
          Devanshu Augusty
        </h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="https://github.com/Devanshu-Augusty" target="_blank">
            <FaGithubSquare />
          </a>
          <a href="https://x.com/DAugus7" target="_blank">
            <FaTwitter />
          </a>
        </div>
      </div>

      <p className="text-gray-400">@2025 devanshuaugusty17@gmail.com</p>
    </div>
  );
};

export default Footer;
