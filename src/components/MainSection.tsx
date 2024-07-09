import React from "react";

const MainSection = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col justify-center h-[700px] bg-black text-lightGray space-y-10">
      <div className="text-left">
        <h1 className="text-8xl font-bold text-white">VISION</h1>{" "}
        <p className="text-sm mt-2  japanese-font">
          ログスペクトは、革新的なログ活用により、安全で信頼性の高いデジタル世界の実現に貢献する
        </p>
      </div>
      <div className="text-left">
        <h1 className="text-8xl font-bold text-white">MISSION</h1>{" "}
        <p className="text-sm mt-2 japanese-font">
          {" "}
          {/* フォントクラスがない */}
          私たちは、顧客のログデータを見える化し、洞察を提供することで、セキュリティ対策の最前線を支え、持続可能なビジネス成長の促進をする
        </p>
      </div>
      <div className="text-left">
        <h1 className="text-8xl font-bold text-white">VALUE</h1>{" "}
        <p className="text-sm mt-2  japanese-font">
          顧客のニーズを理解し、最高のサービスを提供し、高い専門知識と品質を追求する
        </p>
      </div>
    </div>
  );
};

export default MainSection;
