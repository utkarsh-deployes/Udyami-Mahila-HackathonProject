
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-16 bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-brand-purple-light/30 rounded-full filter blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal-light/30 rounded-full filter blur-3xl opacity-70" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-purple/20 bg-white shadow-sm mb-6">
                <div className="h-2 w-2 rounded-full bg-brand-purple animate-pulse-slow mr-2"></div>
                <span className="text-sm font-medium text-gray-600">Trusted by 10,000+ women entrepreneurs</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Financial <span className="gradient-text">empowerment</span> for women entrepreneurs
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Udyami Mahila helps women entrepreneurs in India access loans, grants, and financial resources designed specifically for their unique business needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply">
                  <Button className="gradient-bg text-lg px-8 py-6 h-auto">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline" className="text-lg px-8 py-6 h-auto border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-brand-gold" />
                    <span className="text-xl font-bold">₹80Cr+</span>
                  </div>
                  <span className="text-sm text-gray-500 mt-1">Disbursed</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-brand-gold" />
                    <span className="text-xl font-bold">10,000+</span>
                  </div>
                  <span className="text-sm text-gray-500 mt-1">Entrepreneurs</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-brand-gold" />
                    <span className="text-xl font-bold">96%</span>
                  </div>
                  <span className="text-sm text-gray-500 mt-1">Success Rate</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-brand-gold/20 rounded-lg z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-brand-purple/20 rounded-lg z-0"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white">
                  <img 
                    src="/hero.png" 
                    alt="Indian woman entrepreneur" 
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
