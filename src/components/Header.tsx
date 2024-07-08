import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-2 sm:py-4">
        <Image
          src="/assets/images/security_logo.png"
          alt="Security Logo"
          width={150}
          height={100}
        />
        <nav className="mt-4 sm:mt-0">
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-black text-lg font-bold">
            <li className="cursor-pointer hover:text-deepskyBlue">TOP</li>
            <li className="cursor-pointer hover:text-deepskyBlue">COMPANY</li>
            <li className="cursor-pointer hover:text-deepskyBlue">MISSION</li>
            <li className="cursor-pointer hover:text-deepskyBlue">BLOG</li>
            <li className="cursor-pointer hover:text-deepskyBlue">CONTACT</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
