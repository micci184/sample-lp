import React from "react";

const ServiceSection: React.FC = () => {
  return (
    <div
      id="service"
      className="px-4 sm:px-10 md:px-20 lg:px-40 pt-8 sm:pt-16 md:pt-24 lg:pt-32 pb-8 sm:pb-10 md:pb-10 lg:pb-10 min-h-[200px] md:min-h-[300px] lg:min-h-[400px]"
    >
      <div className="flex items-end mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white bg-black px-4 py-2 w-full md:w-[350px]">
          Service
        </h2>
        <div className="flex-1 border-b-2 border-black"></div>
      </div>
      <div className="mb-6 pt-4">
        <h3 className="text-lg sm:text-xl font-semibold japanese-font">
          IT コンサルティング
        </h3>
        <p className="mb-6 pt-2 text-base sm:text-lg japanese-font">
          ログやデータの活用に関する顧客課題を可視化し、解決に向けた計画策定や最適なソリューションを提案します。
          （例:
          セキュリティ対策のロードマップ策定支援、データ基盤構築におけるPMO支援など）
        </p>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold japanese-font">
          ログ活用支援
        </h3>
        <p className="mb-6 pt-2 text-base sm:text-lg japanese-font">
          ログ活用に関する要件定義、ログ基盤のアーキテクチャ設計・構築支援、ログ収集のための技術検証などを支援します。
          これまで蓄積してきたログ基盤やログ監視に関するナレッジをご提供します。
          （ログ基盤の構築、内部不正におけるログ活用支援、SIEM導入支援、
          EDRログ活用検討など）
        </p>
      </div>
    </div>
  );
};

export default ServiceSection;
