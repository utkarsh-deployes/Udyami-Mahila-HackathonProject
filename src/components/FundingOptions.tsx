
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const FundingOptions = () => {
  const options = [
    {
      title: "Business Loans",
      description: "Low-interest loans tailored for women entrepreneurs with flexible repayment options",
      features: [
        "Loans from ₹50,000 to ₹50 lakhs",
        "Interest rates starting at 8.5%",
        "No collateral required for loans up to ₹10 lakhs",
        "Repayment periods from 1-5 years"
      ],
      buttonText: "Apply for Loan",
      link: "/apply/business-loan"
    },
    {
      title: "MUDRA Loans",
      description: "Government-backed microfinance solutions to help start and grow your small business",
      features: [
        "Shishu: Loans up to ₹50,000",
        "Kishore: Loans up to ₹5 lakhs",
        "Tarun: Loans up to ₹10 lakhs",
        "Simplified application process"
      ],
      buttonText: "Apply for MUDRA",
      link: "/apply/mudra-loan"
    },
    {
      title: "Grants & Schemes",
      description: "Non-repayable funds from government programs and NGOs specifically for women entrepreneurs",
      features: [
        "Stand-Up India Scheme",
        "Mahila Udyam Nidhi Scheme",
        "Trade Related Entrepreneurship Assistance (TREAD)",
        "Dena Shakti Scheme"
      ],
      buttonText: "Explore Grants",
      link: "/grants"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Funding Options</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore a range of financial solutions designed specifically for women entrepreneurs in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div 
              key={index}
              className="border border-gray-100 rounded-xl overflow-hidden shadow-sm relative flex flex-col card-hover"
            >
              <div className="p-6 bg-white flex-grow">
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <BadgeCheck className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <Link to={option.link}>
                  <Button className="w-full gradient-bg">
                    {option.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundingOptions;
