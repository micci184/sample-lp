import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-background sm:fixed sm:top-0 sm:left-0 w-full sm:z-50 sm:shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 md:px-20 lg:px-40 py-1 sm:py-2">
        <Image
          src="/assets/images/white_logo.jpg"
          alt="Security Logo"
          width={150}
          height={100}
        />
        <nav className="mt-2 sm:mt-0">
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-black text-base font-bold">
            <li>
              <a href="#top" className="cursor-pointer hover:text-deepskyBlue">
                TOP
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="cursor-pointer hover:text-deepskyBlue"
              >
                SERVICE
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
              <a
                href="https://zenn.dev/p/logspect"
                className="cursor-pointer hover:text-deepskyBlue"
              >
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
