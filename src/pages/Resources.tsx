
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  Video, 
  BarChart, 
  Calendar, 
  Users, 
  Download 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resources = () => {
  const guides = [
    {
      title: "Business Plan Writing Guide",
      description: "Learn how to create a compelling business plan that attracts investors and funding.",
      icon: FileText,
      link: "/resources/business-plan-guide"
    },
    {
      title: "Financial Management Basics",
      description: "Essential financial management practices for small business owners.",
      icon: BarChart,
      link: "/resources/financial-management"
    },
    {
      title: "Marketing on a Budget",
      description: "Effective marketing strategies that don't break the bank.",
      icon: BookOpen,
      link: "/resources/marketing-guide"
    },
    {
      title: "Digital Transformation",
      description: "How to take your business online and leverage digital tools.",
      icon: Video,
      link: "/resources/digital-transformation"
    }
  ];

  const events = [
    {
      title: "Entrepreneurship Workshop",
      date: "August 15, 2023",
      location: "Mumbai",
      description: "A hands-on workshop covering fundamentals of entrepreneurship.",
      link: "/events/entrepreneurship-workshop"
    },
    {
      title: "Funding Masterclass",
      date: "September 5, 2023",
      location: "Delhi",
      description: "Learn how to pitch to investors and secure funding.",
      link: "/events/funding-masterclass"
    },
    {
      title: "Women in Business Conference",
      date: "October 12-14, 2023",
      location: "Bangalore",
      description: "Annual conference featuring successful women entrepreneurs sharing insights.",
      link: "/events/women-business-conference"
    }
  ];

  const templates = [
    {
      title: "Business Plan Template",
      description: "A comprehensive template to create your business plan.",
      format: "DOCX",
      link: "/templates/business-plan.docx"
    },
    {
      title: "Financial Projection Spreadsheet",
      description: "Pre-built Excel template for financial forecasting.",
      format: "XLSX",
      link: "/templates/financial-projections.xlsx"
    },
    {
      title: "Marketing Strategy Template",
      description: "Framework for developing your marketing strategy.",
      format: "PDF",
      link: "/templates/marketing-strategy.pdf"
    },
    {
      title: "Investor Pitch Deck Template",
      description: "Professional slides template for pitching to investors.",
      format: "PPT",
      link: "/templates/pitch-deck.ppt"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Business Resources</h1>
              <p className="text-lg text-gray-600">
                Tools, guides, and resources to help you start, grow, and manage your business successfully.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Business Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guides.map((guide, index) => (
                
                  <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="h-12 w-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                      <guide.icon className="h-6 w-6 text-brand-purple" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{guide.description}</p>
                    <div className="text-brand-purple font-medium inline-flex items-center">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event, index) => (
                  <div key={index} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-5 w-5 text-brand-purple mr-2" />
                        <span className="text-sm font-medium text-gray-600">{event.date} • {event.location}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      
                        <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5 w-full">
                          View Event Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                
                  <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Templates & Downloads</h2>
              <div className="border border-gray-100 rounded-xl overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-4 px-6 text-gray-600 font-medium">Template</th>
                        <th className="text-left py-4 px-6 text-gray-600 font-medium">Description</th>
                        <th className="text-left py-4 px-6 text-gray-600 font-medium">Format</th>
                        <th className="text-left py-4 px-6 text-gray-600 font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {templates.map((template, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium">{template.title}</td>
                          <td className="py-4 px-6 text-gray-600">{template.description}</td>
                          <td className="py-4 px-6 text-gray-600">{template.format}</td>
                          <td className="py-4 px-6">
                            
                              <Button size="sm" variant="outline" className="inline-flex items-center">
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </Button>
                            
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Mentorship Program</h2>
                  <p className="text-gray-600 mb-6">
                    Connect with experienced mentors who can guide you on your entrepreneurial journey. Our mentors include successful entrepreneurs, financial experts, and industry leaders.
                  </p>
                
                    <Button className="gradient-bg">
                      Find a Mentor
                      <Users className="ml-2 h-4 w-4" />
                    </Button>
                  
                </div>
                <div className="md:w-1/3 bg-white p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-lg mb-4">Top Mentors</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-medium">Priya Sharma</p>
                        <p className="text-sm text-gray-600">Tech Entrepreneur</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-medium">Neha Patel</p>
                        <p className="text-sm text-gray-600">Finance Expert</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-medium">Anita Desai</p>
                        <p className="text-sm text-gray-600">Marketing Specialist</p>
                      </div>
                    </li>
                  </ul>
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

export default Resources;
