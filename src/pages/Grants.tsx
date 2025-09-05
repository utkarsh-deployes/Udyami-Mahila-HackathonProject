
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Calendar, Bookmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Grants = () => {
  const grants = [
    {
      title: "Stand-Up India Scheme",
      provider: "Government of India",
      description: "Facilitates bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste or Scheduled Tribe borrower and at least one woman borrower per bank branch.",
      deadline: "Rolling applications",
      eligibility: [
        "Women entrepreneurs",
        "SC/ST entrepreneurs",
        "Must be a new enterprise",
        "In manufacturing, services, or trading sector"
      ],
      benefits: [
        "Loans from ₹10 lakhs to ₹1 crore",
        "Composite loan for meeting working capital and term loan needs",
        "Margin money of only 25% for women entrepreneurs"
      ],
      link: "https://www.standupmitra.in/"
    },
    {
      title: "Mahila Udyam Nidhi Scheme",
      provider: "Small Industries Development Bank of India (SIDBI)",
      description: "Provides financial assistance to women entrepreneurs to set up new projects in the small scale sector.",
      deadline: "Ongoing",
      eligibility: [
        "Women entrepreneurs",
        "Must be setting up a new project",
        "Small scale sector focus",
        "Viable business plan required"
      ],
      benefits: [
        "Loans up to ₹10 lakhs",
        "Soft loan assistance",
        "Interest rate concessions",
        "Longer repayment period up to 10 years"
      ],
      link: "https://www.sidbi.in/"
    },
    {
      title: "Trade Related Entrepreneurship Assistance and Development (TREAD)",
      provider: "Ministry of Micro, Small & Medium Enterprises",
      description: "Aims at economic empowerment of women through trade-related training, information and counseling activities.",
      deadline: "Year-round applications",
      eligibility: [
        "Non-Governmental Organizations (NGOs)",
        "Working with women entrepreneurs",
        "Focus on non-farm sectors",
        "Registered for at least 3 years"
      ],
      benefits: [
        "Government grants up to 30% of the total project cost",
        "Remaining cost financed through financial institutions",
        "Training and counseling support",
        "Marketing assistance"
      ],
      link: "https://msme.gov.in/"
    },
    {
      title: "Dena Shakti Scheme",
      provider: "Dena Bank",
      description: "Special scheme for financing women entrepreneurs across various sectors including agriculture, retail, and manufacturing.",
      deadline: "Open throughout the year",
      eligibility: [
        "Women entrepreneurs",
        "Individual or group of women entrepreneurs",
        "Valid business proposal",
        "Various sectors covered including agriculture and education"
      ],
      benefits: [
        "Concession of 0.25% on rate of interest",
        "Loans up to ₹20 lakhs",
        "Covers various sectors including retail, manufacturing, and services",
        "Micro enterprises and small enterprises eligible"
      ],
      link: "https://www.bankofbaroda.in/"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Grants & Government Schemes</h1>
              <p className="text-lg text-gray-600">
                Explore non-repayable funds and schemes specifically designed for women entrepreneurs in India. These opportunities can help you start or grow your business without taking on debt.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {grants.map((grant, index) => (
                <div key={index} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div>
                        <h2 className="text-2xl font-bold">{grant.title}</h2>
                        <p className="text-brand-purple">{grant.provider}</p>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{grant.deadline}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{grant.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Eligibility Criteria</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {grant.eligibility.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Benefits</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {grant.benefits.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="gradient-bg" 
                        asChild
                      >
                        <Link to={`/apply/grant/${index + 1}`}>
                          Apply Through Udyami Mahila
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-brand-purple text-brand-purple hover:bg-brand-purple/5"
                        asChild
                      >
                        <a href={grant.link} target="_blank" rel="noopener noreferrer">
                          Visit Official Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start">
                <Bookmark className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Need Help Applying?</h3>
                  <p className="text-gray-600 mb-4">
                    Our team can guide you through the grant application process, help prepare documentation, and improve your chances of approval.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                      Get Application Assistance
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Grants;
