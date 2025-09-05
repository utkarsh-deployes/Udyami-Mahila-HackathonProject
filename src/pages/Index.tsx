
import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FundingOptions from "@/components/FundingOptions";
import SuccessStories from "@/components/SuccessStories";
import CallToAction from "@/components/CallToAction";
import ChatBot from "@/components/ChatBot";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <FundingOptions />
        <SuccessStories />
        <CallToAction />
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
