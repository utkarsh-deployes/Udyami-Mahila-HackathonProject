
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Priya Sharma",
      business: "Eco-friendly packaging solutions",
      location: "Pune, Maharashtra",
      image: "./f1.jpg",
      quote: "Udyami Mahila helped me secure a ₹15 lakh loan when traditional banks rejected my application. Now my business employs 12 women from my community.",
      category: "Manufacturing"
    },
    {
      id: 2,
      name: "Lakshmi Patel & Anjali Patel",
      business: "Organic farming collective",
      location: "Ahmedabad, Gujarat",
      image: "./f3.jpg",
      quote: "The MUDRA loan through Udyami Mahila and their mentorship program transformed my small farming initiative into a successful cooperative.",
      category: "Agriculture"
    },
    {
      id: 3,
      name: "Fatima Begam",
      business: "Artisan handicrafts",
      location: "Jaipur, Rajasthan",
      image: "./f2.jpg",
      quote: "I received a grant through Udyami Mahila that helped me take my traditional craft business online, reaching customers across India and abroad.",
      category: "Handicrafts"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the inspiring entrepreneurs who have grown their businesses with support from Udyami Mahila.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover">
              <div className="h-60 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-semibold rounded-full mb-4">
                  {story.category}
                </div>
                <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{story.business} • {story.location}</p>
                <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                <Link to={`/success-stories/${story.id}`} className="text-brand-purple font-medium hover:underline inline-flex items-center">
                  Read full story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
         
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
