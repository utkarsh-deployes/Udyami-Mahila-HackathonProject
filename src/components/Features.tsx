
import React from "react";
import { CreditCard, BarChart3, Award, BookOpen, Users, MessageCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Easy Loan Applications",
      description: "Simple application process with faster approval times designed for women entrepreneurs."
    },
    {
      icon: BarChart3,
      title: "AI-Powered Credit Assessment",
      description: "Fair evaluation using intelligent algorithms designed specifically for women-owned businesses."
    },
    {
      icon: Award,
      title: "Access to Grants",
      description: "Curated list of grants from NGOs and government schemes exclusively for women entrepreneurs."
    },
    {
      icon: BookOpen,
      title: "Financial Literacy",
      description: "Resources to help you understand and manage your business finances effectively."
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with experienced mentors who can guide your business journey."
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Our support team and AI chatbot are always available to answer your questions."
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Udyami Mahila?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've designed our platform specifically for women entrepreneurs in India, with features that address your unique financial needs and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm card-hover"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
