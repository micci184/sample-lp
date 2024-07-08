import React from "react";

const CompanyInfo: React.FC = () => {
  return (
    <div id="companyinfo" className="px-4 sm:px-10 md:px-20 lg:px-40 pt-10 sm:pt-10 md:pt-10 lg:pt-10 pb-10 sm:pb-20 md:pb-20 lg:pb-20 min-h-[200px] md:min-h-[300px] lg:min-h-[400px]">
      <div className="flex items-end mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white bg-darkGray px-4 py-2 w-full md:w-[350px]">
          Company overview
        </h2>
        <div className="flex-1 border-b-2 border-darkGray"></div>
      </div>
      <table className="w-full text-left table-auto border-collapse">
        <tbody>
          <tr className="border-b border-lightGray">
            <th className="py-2 px-4 text-sm font-semibold">会社名</th>
            <td className="py-2 px-4">モモンガ株式会社 / Momonga, Inc.</td>
          </tr>
          <tr className="border-b border-lightGray">
            <th className="py-2 px-4 text-sm font-semibold">代表者</th>
            <td className="py-2 px-4">代表取締役 モモンガ</td>
          </tr>
          <tr className="border-b border-lightGray">
            <th className="py-2 px-4 text-sm font-semibold">所在地</th>
            <td className="py-2 px-4">
              〒123-0001
              <br />
              東京都目黒区柿の木坂1-2-3
            </td>
          </tr>
          <tr className="border-b border-lightGray">
            <th className="py-2 px-4 text-sm font-semibold">設立日</th>
            <td className="py-2 px-4">2024年1月1日</td>
          </tr>
          <tr className="border-b border-lightGray">
            <th className="py-2 px-4 text-sm font-semibold">資本金</th>
            <td className="py-2 px-4">1,000,000円</td>
          </tr>
          <tr className="border-b border-lightGray">
            <th className="py-2 px-4 text-sm font-semibold">事業内容</th>
            <td className="py-2 px-4">
              ITコンサルティング、ログ活用支援、システム開発支援など
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyInfo;
