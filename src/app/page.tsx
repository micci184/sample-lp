import React from "react";

import CompanyInfo from "@/components/CompanyInfo";
import CompanyNameOrigin from "@/components/CompanyNameOrigin";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import ServiceSection from "@/components/ServiceSection";

export default function Page() {
  return (
    <div>
      <Header />
      <MainSection />
      <ServiceSection />
      {/* <CompanyNameOrigin />
      <CompanyInfo /> */}
      <Footer />
    </div>
  );
}
