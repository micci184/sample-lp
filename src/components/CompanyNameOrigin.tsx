import React from "react";

const CompanyNameOrigin: React.FC = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 pt-10 pb-10 sm:pt-10 sm:pb-10 md:pt-10 md:pb-10 lg:pt-10 lg:pb-10 min-h-[150px] md:min-h-[200px] lg:min-h-[300px]">
      <div className="flex items-end mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-white bg-darkGray px-4 py-2 w-full md:w-[350px]">
          Origin of company name
        </h2>
        <div className="flex-1 border-b-2 border-darkGray"></div>
      </div>
      <div>
        <p className="mb-6 pt-2 text-base md:text-lg">
          ログスペクト（Logspect）とは、ログ（Log）とスペクト（Spect）を組み合わせた造語です。
          Spect
          は、ラテン語の「spectare」を起源としている英単語で「見る」「観察する」を意味します。
          Spect 単体では使わず、inspect（検査する）や
          respect（尊敬）などの単語として利用されています。
          「ログ」というファクトに基づいた意思決定をするためのログを「見る」ための環境の発展に貢献したい
          という想い、また「ログ」に対する「敬意」の気持ちを込めています。
        </p>
      </div>
    </div>
  );
};

export default CompanyNameOrigin;
