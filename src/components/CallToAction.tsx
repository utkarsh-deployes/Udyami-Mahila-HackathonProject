
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-teal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of women entrepreneurs who have found the right financial support and resources through Udyami Mahila.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply">
              <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-brand-purple hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
