import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-background fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-1 sm:py-2">
        <Image
          src="/assets/images/security_logo.png"
          alt="Security Logo"
          width={100} // 画像のサイズを調整
          height={50} // 画像のサイズを調整
        />
        <nav className="mt-2 sm:mt-0">
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-black text-base font-bold">
            <li>
              <a href="#top" className="cursor-pointer hover:text-deepskyBlue">
                TOP
              </a>
            </li>
            <li>
              <a
                href="#companyinfo"
                className="cursor-pointer hover:text-deepskyBlue"
              >
                COMPANY
              </a>
            </li>
            <li>
              <a href="#blog" className="cursor-pointer hover:text-deepskyBlue">
                BLOG
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdY_ATIkPvriNeXrj6y7ZIg6A_7b-tXvZ1Gyl-40ceoSRHpSQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-deepskyBlue"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
