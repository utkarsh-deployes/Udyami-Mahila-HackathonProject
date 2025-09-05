
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SuccessStoryDetail = () => {
  const { id } = useParams<{ id: string }>();

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
      fullStory: `
        <p>After working in the packaging industry for over 8 years, I noticed the enormous amount of plastic waste being generated and decided there had to be a better way.</p>
        
        <p>I started EcoPackage Solutions in 2019 with a vision to create sustainable packaging alternatives for businesses. My initial prototype used agricultural waste to create biodegradable packaging materials, but I needed capital to scale production.</p>
        
        <p>Unfortunately, traditional banks were hesitant to finance what they saw as an "unproven concept." That's when I discovered Udyami Mahila through a women entrepreneurs' workshop in Pune.</p>
        
        <p>With their guidance, I refined my business plan and secured a ₹15 lakh loan through the Stand-Up India scheme. The funding allowed me to purchase essential machinery and rent a small manufacturing facility.</p>
        
        <p>Today, EcoPackage Solutions provides eco-friendly packaging to over 35 businesses across Maharashtra and Gujarat. We've expanded our product line to include food containers, shipping materials, and gift packaging.</p>
        
        <p>What makes me most proud is that we now employ 12 women from my community, many of whom were previously homemakers without formal employment. Our revenue has grown 300% since our first year, and we're currently exploring export opportunities.</p>
        
        <p>The mentorship provided by Udyami Mahila has been just as valuable as the funding. Their network connected me with sustainability experts and potential clients who believed in our mission.</p>
      `,
      fundingType: "Stand-Up India Scheme",
      fundingAmount: "₹15 lakh",
      impact: [
        "Created sustainable packaging alternatives for 35+ businesses",
        "Employed 12 women from local community",
        "Reduced plastic waste by approximately 8 tons annually",
        "Revenue growth of 300% in 3 years"
      ],
      advice: "Don't be discouraged by initial rejections. Keep refining your business model and look for funding partners who share your vision and values."
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
      fullStory: `
        <p>Coming from a farming family, I witnessed firsthand the struggles of small farmers dealing with rising costs, climate change, and uncertain market conditions.</p>
        
        <p>In 2018, I started Fertile Roots with just 2 acres of land, focusing on organic farming methods. My vision was to create a farmers' collective where we could share resources, knowledge, and access better markets together.</p>
        
        <p>With limited resources, growth was slow. Traditional financing options were hesitant to fund an agricultural venture led by a woman. That's when I learned about MUDRA loans through Udyami Mahila.</p>
        
        <p>The application process was straightforward, and their team helped me navigate all the paperwork. I received a Kishore category loan of ₹3.5 lakhs, which allowed me to expand operations to 10 acres and invest in drip irrigation and organic certification.</p>
        
        <p>The real game-changer was Udyami Mahila' mentorship program. They connected me with agricultural experts who helped optimize our farming practices and business mentors who guided our market strategy.</p>
        
        <p>Today, Fertile Roots Collective includes 18 women farmers managing over 45 acres of organic farmland. We supply organic produce to premium grocery chains in Gujarat and have launched our own line of organic food products.</p>
        
        <p>Our collective model ensures that all member farmers receive fair prices for their produce and access to training in sustainable farming methods. We've also established a seed bank to preserve indigenous crop varieties.</p>
      `,
      fundingType: "MUDRA Loan (Kishore category)",
      fundingAmount: "₹3.5 lakhs",
      impact: [
        "Expanded from 2 acres to 45 acres of organic farmland",
        "Created a collective of 18 women farmers",
        "Established direct supply relationships with premium retailers",
        "Launched a line of organic food products"
      ],
      advice: "Build a strong community around your business. Our success came not just from funding, but from creating a supportive network of farmers who share knowledge and resources."
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
      fullStory: `
        <p>I come from a family of traditional artisans in Jaipur, where we've preserved age-old handicraft techniques for generations. While our craftsmanship was exceptional, we struggled to find markets beyond local tourists.</p>
        
        <p>In 2020, the pandemic hit our business hard as tourism came to a standstill. That's when I realized we needed to adapt and find new ways to reach customers.</p>
        
        <p>With basic digital skills but limited resources, I started Heritage Hands with a vision to bring Rajasthan's traditional crafts to a global audience. However, setting up an e-commerce platform, product photography, and digital marketing required investment.</p>
        
        <p>Through a women entrepreneurs' workshop, I learned about Udyami Mahila and their grant program for traditional arts businesses. I applied and received a grant of ₹2.5 lakhs through the Ministry of Textiles' support scheme.</p>
        
        <p>The grant allowed me to create a professional website, invest in product photography, and implement digital marketing strategies. But the most valuable support came through Udyami Mahila' digital skills training program, which taught me everything from social media marketing to inventory management.</p>
        
        <p>Today, Heritage Hands works with 35 artisans, primarily women, from rural Rajasthan. Our products are shipped across India and to 12 countries internationally. We've been featured in Vogue India and have collaborated with several luxury hotel chains for custom creations.</p>
        
        <p>What began as a survival strategy during the pandemic has transformed into a thriving business that preserves traditional crafts while providing sustainable livelihoods for artisan families.</p>
      `,
      fundingType: "Ministry of Textiles Grant (facilitated by Udyami Mahila)",
      fundingAmount: "₹2.5 lakhs",
      impact: [
        "Created sustainable income for 35 artisans",
        "Exports to 12 countries internationally",
        "Featured in major publications and design showcases",
        "Preserving traditional craft techniques"
      ],
      advice: "Don't view digital transformation as abandoning tradition. Technology can be the bridge that connects ancient crafts with modern markets."
    }
  ];

  const story = stories.find(s => s.id === Number(id)) || stories[0];
  const nextId = story.id < stories.length ? story.id + 1 : 1;
  const prevId = story.id > 1 ? story.id - 1 : stories.length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/success-stories" className="inline-flex items-center text-brand-purple hover:text-brand-teal transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Success Stories
              </Link>
            </div>

            <div className="mb-10">
              <div className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple text-sm font-semibold rounded-full mb-4">
                {story.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{story.name}'s Journey</h1>
              <p className="text-xl text-gray-600">{story.business}: {story.subtitle}</p>
            </div>

            <div className="rounded-xl overflow-hidden mb-10">
              <img 
                src={story.image} 
                alt={story.name} 
                className="w-full h-auto object-cover" 
              />
            </div>

            <div className="bg-brand-purple/5 border border-brand-purple/20 rounded-xl p-6 mb-10">
              <div className="flex">
                <Quote className="h-10 w-10 text-brand-purple opacity-50 mr-4 flex-shrink-0" />
                <p className="text-xl italic">{story.quote}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2>Her Story</h2>
              <div dangerouslySetInnerHTML={{ __html: story.fullStory }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Funding Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{story.fundingType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">{story.fundingAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{story.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Impact Created</h3>
                <ul className="space-y-2">
                  {story.impact.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-brand-teal mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold mb-4">Advice for Other Entrepreneurs</h3>
              <p className="text-gray-700">{story.advice}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-100 pt-6">
              <div className="flex space-x-2 mb-4 sm:mb-0">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Story
                </Button>
              </div>

              <div className="flex space-x-4">
                <Link to={`/success-stories/${prevId}`}>
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous Story
                  </Button>
                </Link>
                <Link to={`/success-stories/${nextId}`}>
                  <Button variant="outline" size="sm">
                    Next Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStoryDetail;
