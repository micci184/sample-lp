import React from 'react';

const CompanyNameOrigin: React.FC = () => {
	return (
    <div className="px-40 pt-40 pb-60 h-[500px]">
      <div className="flex items-end mb-4">
        <h2 className="text-2xl font-bold text-white bg-darkGray px-4 py-2 w-[350px]">
          Origin of company name
        </h2>
        <div className="flex-1 border-b-2 border-darkGray"></div>
      </div>
      <div>
        <p className="mb-6 pt-2 text-lg">
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
