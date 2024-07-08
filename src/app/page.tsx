import React from "react";

import CompanyInfo from "@/components/CompanyInfo";
import CompanyMission from "@/components/CompanyMission";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";

export default function Page() {
  return (
    <div>
      <Header />
      <MainSection />
      <CompanyMission />
      <CompanyInfo />
      <Footer />
    </div>
  );
}
