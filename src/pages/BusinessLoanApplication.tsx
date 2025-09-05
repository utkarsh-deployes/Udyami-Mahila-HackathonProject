
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft, FileText, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";

const BusinessLoanApplication = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    businessAge: "",
    loanAmount: "",
    purpose: "",
    revenue: "",
    address: "",
    panNumber: "",
    gstin: "",
    additionalInfo: ""
  });

  React.useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      toast.error("Please log in to apply for a loan");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Application submitted successfully!");
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
              onClick={() => navigate("/apply")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Funding Options
            </Button>

            <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-3">Business Loan Application</h1>
                <p className="text-gray-600">
                  Please fill out the form below to apply for a business loan. All information will be kept secure and confidential.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => handleSelectChange("businessType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="private-limited">Private Limited</SelectItem>
                        <SelectItem value="llp">LLP</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessAge">Years in Business</Label>
                    <Select
                      value={formData.businessAge}
                      onValueChange={(value) => handleSelectChange("businessAge", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="more-than-10">More than 10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                    <Input
                      id="loanAmount"
                      name="loanAmount"
                      type="number"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      min="50000"
                      max="5000000"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="revenue">Annual Revenue (₹)</Label>
                    <Input
                      id="revenue"
                      name="revenue"
                      type="number"
                      value={formData.revenue}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Loan Purpose</Label>
                  <Select
                    value={formData.purpose}
                    onValueChange={(value) => handleSelectChange("purpose", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="working-capital">Working Capital</SelectItem>
                      <SelectItem value="equipment">Equipment Purchase</SelectItem>
                      <SelectItem value="expansion">Business Expansion</SelectItem>
                      <SelectItem value="inventory">Inventory Purchase</SelectItem>
                      <SelectItem value="debt-consolidation">Debt Consolidation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="panNumber">PAN Number</Label>
                    <Input
                      id="panNumber"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleChange}
                      maxLength={10}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gstin">GSTIN (if applicable)</Label>
                    <Input
                      id="gstin"
                      name="gstin"
                      value={formData.gstin}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information (optional)</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Please share any additional information relevant to your loan application"
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate("/apply")}
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

            <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Documents Required:</h3>
                  <p className="text-gray-600 mb-4">
                    You'll need to upload these documents after submitting your application:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Business registration proof</li>
                    <li>Last 6 months' bank statements</li>
                    <li>Income tax returns (last 2 years)</li>
                    <li>KYC documents (Aadhaar, PAN)</li>
                    <li>Proof of business address</li>
                  </ul>
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

export default BusinessLoanApplication;
