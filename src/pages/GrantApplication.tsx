
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowLeft, FileText, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Checkbox } from "@/components/ui/checkbox";

const GrantApplication = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const grantSchemes = [
    "Stand-Up India Scheme",
    "Mahila Udyam Nidhi Scheme",
    "Trade Related Entrepreneurship Assistance and Development (TREAD)",
    "Dena Shakti Scheme"
  ];

  const grantName = grantSchemes[Number(id) - 1] || "Grant Scheme";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessDescription: "",
    projectProposal: "",
    fundingAmount: "",
    businessRegistered: false,
    hasBusinessPlan: false,
    address: ""
  });

  React.useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      toast.error("Please log in to apply for grants");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Grant application submitted successfully!");
      setIsSubmitting(false);
      navigate("/dashboard");
    }, 1500);
  };

  if (!isAuthenticated) {
    return null; // Will redirect in the useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Button 
              variant="ghost" 
              className="mb-6"
              onClick={() => navigate("/grants")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Grants
            </Button>

            <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
              <div className="mb-8">
                <div className="inline-flex items-center bg-brand-purple/10 rounded-full px-3 py-1 text-brand-purple text-sm font-medium mb-4">
                  Grant Application
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-3">{grantName}</h1>
                <p className="text-gray-600">
                  Complete the form below to apply for this grant through Udyami Mahila. Our team will review your application and guide you through the process.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessDescription">Business Description</Label>
                  <Textarea
                    id="businessDescription"
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleChange}
                    placeholder="Describe your business, its mission, and current status"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectProposal">Project Proposal</Label>
                  <Textarea
                    id="projectProposal"
                    name="projectProposal"
                    value={formData.projectProposal}
                    onChange={handleChange}
                    placeholder="Explain how you plan to use the grant funds and how it will benefit your business"
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fundingAmount">Funding Amount Requested (₹)</Label>
                  <Input
                    id="fundingAmount"
                    name="fundingAmount"
                    type="number"
                    value={formData.fundingAmount}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Business Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="businessRegistered" 
                      checked={formData.businessRegistered}
                      onCheckedChange={(checked) => handleCheckboxChange("businessRegistered", checked === true)}
                    />
                    <Label htmlFor="businessRegistered" className="text-sm font-normal">
                      My business is officially registered
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hasBusinessPlan" 
                      checked={formData.hasBusinessPlan}
                      onCheckedChange={(checked) => handleCheckboxChange("hasBusinessPlan", checked === true)}
                    />
                    <Label htmlFor="hasBusinessPlan" className="text-sm font-normal">
                      I have a detailed business plan
                    </Label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate("/grants")}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="gradient-bg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-8 space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Documents Required:</h3>
                    <p className="text-gray-600 mb-4">
                      You'll need to upload these documents after submitting your application:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Identity proof (Aadhaar, PAN card)</li>
                      <li>Business registration documents (if applicable)</li>
                      <li>Business plan or project proposal</li>
                      <li>Financial statements or projections</li>
                      <li>Bank account details</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-brand-purple/5 p-6 rounded-xl border border-brand-purple/20">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-brand-purple">Udyami Mahila Advantage</h3>
                    <p className="text-gray-600 mb-4">
                      When you apply through Udyami Mahila, we'll help you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Review and strengthen your application before submission</li>
                      <li>Connect with a grant advisor who understands the specific requirements</li>
                      <li>Track your application status through your Udyami Mahila dashboard</li>
                      <li>Access resources to help improve your chances of approval</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GrantApplication;
