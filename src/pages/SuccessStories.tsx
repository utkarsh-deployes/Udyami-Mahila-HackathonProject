
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  ArrowRight, 
  Filter, 
  ChevronRight 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const SuccessStories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [fundingFilter, setFundingFilter] = useState("all");

  const stories = [
    {
      id: 1,
      name: "Priya Sharma",
      business: "EcoPackage Solutions",
      subtitle: "Eco-friendly packaging solutions",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      quote: "Udyami Mahila helped me secure a ₹15 lakh loan when traditional banks rejected my application. Now my business employs 12 women from my community.",
      category: "Manufacturing",
      fundingType: "Loan",
      readTime: "5 min read"
    },
    {
      id: 2,
      name: "Anjali Patel",
      business: "Fertile Roots Collective",
      subtitle: "Organic farming collective",
      location: "Ahmedabad, Gujarat",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      quote: "The MUDRA loan through Udyami Mahila and their mentorship program transformed my small farming initiative into a successful cooperative.",
      category: "Agriculture",
      fundingType: "MUDRA",
      readTime: "4 min read"
    },
    {
      id: 3,
      name: "Fatima Khan",
      business: "Heritage Hands",
      subtitle: "Artisan handicrafts",
      location: "Jaipur, Rajasthan",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      quote: "I received a grant through Udyami Mahila that helped me take my traditional craft business online, reaching customers across India and abroad.",
      category: "Handicrafts",
      fundingType: "Grant",
      readTime: "6 min read"
    },
    {
      id: 4,
      name: "Meera Reddy",
      business: "TechMoms",
      subtitle: "Coding education for women",
      location: "Hyderabad, Telangana",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      quote: "With the funding from Udyami Mahila, we've trained over 500 women in coding and helped 70% of them secure tech jobs or freelance projects.",
      category: "Education",
      fundingType: "Grant",
      readTime: "5 min read"
    },
    {
      id: 5,
      name: "Sana Mirza",
      business: "Nourish & Bloom",
      subtitle: "Organic skincare products",
      location: "Lucknow, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      quote: "From making products in my kitchen to now having my own manufacturing unit, Udyami Mahila' business loan made scaling possible.",
      category: "Healthcare",
      fundingType: "Loan",
      readTime: "4 min read"
    },
    {
      id: 6,
      name: "Lakshmi Venkatesh",
      business: "Rural Reach Logistics",
      subtitle: "Last-mile delivery services",
      location: "Chennai, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      quote: "Our delivery network now connects 200+ villages to e-commerce platforms, creating jobs for rural women. It all started with MUDRA funding through Udyami Mahila.",
      category: "Logistics",
      fundingType: "MUDRA",
      readTime: "7 min read"
    }
  ];

  const categories = ["Manufacturing", "Agriculture", "Handicrafts", "Education", "Healthcare", "Logistics"];
  const fundingTypes = ["Loan", "MUDRA", "Grant"];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        story.business.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        story.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" || story.category === categoryFilter;
    const matchesFunding = fundingFilter === "all" || story.fundingType === fundingFilter;
    
    return matchesSearch && matchesCategory && matchesFunding;
  });

  const featuredStory = stories[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h1>
              <p className="text-lg text-gray-600">
                Inspiring journeys of women entrepreneurs who have grown their businesses with Udyami Mahila support.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Story */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={featuredStory.image} 
                    alt={featuredStory.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <div className="flex-grow">
                    <div className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-semibold rounded-full mb-4">
                      {featuredStory.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{featuredStory.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{featuredStory.business} • {featuredStory.location}</p>
                    <p className="text-gray-600 italic mb-6 text-lg">"{featuredStory.quote}"</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{featuredStory.readTime}</span>
                    <Link to={`/success-stories/${featuredStory.id}`}>
                      <Button className="gradient-bg">
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="md:col-span-3 relative">
                    <Input
                      placeholder="Search stories by name or business..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                  <div>
                    <Select 
                      value={categoryFilter} 
                      onValueChange={setCategoryFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select 
                      value={fundingFilter} 
                      onValueChange={setFundingFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Funding Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Funding Types</SelectItem>
                        {fundingTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Stories Grid */}
            {filteredStories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStories.map((story) => (
                  <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-semibold rounded-full">
                          {story.category}
                        </div>
                        <span className="text-xs text-gray-500">{story.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">{story.business} • {story.location}</p>
                      <p className="text-gray-600 italic mb-6 line-clamp-3">"{story.quote}"</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-brand-purple">{story.fundingType} funding</span>
                        <Link to={`/success-stories/${story.id}`} className="text-brand-purple font-medium hover:underline inline-flex items-center">
                          Read more
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center p-12 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-2">No stories found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("all");
                    setFundingFilter("all");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Share Your Success Story</h2>
              <p className="text-lg text-gray-600 mb-8">
                Are you a Udyami Mahila success story? We'd love to feature your journey and inspire other women entrepreneurs.
              </p>
              <Link to="/contact">
                <Button className="gradient-bg">
                  Submit Your Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
