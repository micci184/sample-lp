import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-20 sm:py-25 md:py-25 lg:py-25 text-center bg-gray-100">
      <p className="text-sm sm:text-xs mb-4 japanese-font">
        当社へのお問い合わせはこちらよりお願いいたします。
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdY_ATIkPvriNeXrj6y7ZIg6A_7b-tXvZ1Gyl-40ceoSRHpSQ/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="bg-background text-black font-bold py-2 px-4 rounded border-4 border-black hover:bg-black focus:outline-none hover:text-background focus:border-black">
          Contact Us
        </button>
      </a>
    </section>
  );
};

export default Contact;
