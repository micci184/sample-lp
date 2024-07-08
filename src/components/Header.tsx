import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-8 py-2">
        <Image
          src="/assets/images/security_logo.png"
          alt="Security Logo"
          width={250}
          height={200}
        />
        <div>
          <ul className="flex gap-8 text-black text-lg font-bold mr-8">
            <li className="cursor-pointer hover:text-deepskyBlue">
              TOP
            </li>
            <li className="cursor-pointer hover:text-deepskyBlue">COMPANY</li>
            <li className="cursor-pointer hover:text-deepskyBlue">MISSION</li>
            <li className="cursor-pointer hover:text-deepskyBlue">BLOG</li>
            <li className="cursor-pointer hover:text-deepskyBlue">CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
