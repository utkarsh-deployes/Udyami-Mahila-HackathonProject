
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { ArrowLeft, FileText, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";

const MudraLoanApplication = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    businessActivity: "",
    businessAge: "",
    category: "",
    loanCategory: "shishu",
    loanAmount: "",
    purpose: "",
    address: "",
    panNumber: "",
    aadharNumber: "",
    additionalInfo: ""
  });

  React.useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      toast.error("Please log in to apply for a MUDRA loan");
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
      toast.success("MUDRA loan application submitted successfully!");
      setIsSubmitting(false);
      navigate("/dashboard");
    }, 1500);
  };

  if (!isAuthenticated) {
    return null; // Will redirect in the useEffect
  }

  const maxLoanAmount = 
    formData.loanCategory === "shishu" ? 50000 : 
    formData.loanCategory === "kishore" ? 500000 : 1000000;

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
                <h1 className="text-2xl md:text-3xl font-bold mb-3">MUDRA Loan Application</h1>
                <p className="text-gray-600">
                  Apply for a MUDRA loan under the Pradhan Mantri Mudra Yojana (PMMY) scheme to fund your micro enterprise.
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
                    <Label htmlFor="businessActivity">Business Activity</Label>
                    <Select
                      value={formData.businessActivity}
                      onValueChange={(value) => handleSelectChange("businessActivity", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select business activity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Retail Trade</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="handicrafts">Handicrafts</SelectItem>
                        <SelectItem value="food">Food Processing</SelectItem>
                        <SelectItem value="agriculture">Agriculture & Allied</SelectItem>
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
                        <SelectItem value="not-started">Not started yet</SelectItem>
                        <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="more-than-5">More than 5 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleSelectChange("category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="sc">Scheduled Caste (SC)</SelectItem>
                      <SelectItem value="st">Scheduled Tribe (ST)</SelectItem>
                      <SelectItem value="obc">Other Backward Class (OBC)</SelectItem>
                      <SelectItem value="minority">Minority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>MUDRA Loan Category</Label>
                  <RadioGroup 
                    value={formData.loanCategory}
                    onValueChange={(value) => handleSelectChange("loanCategory", value)}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2"
                  >
                    <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="shishu" id="shishu" />
                      <Label htmlFor="shishu" className="cursor-pointer">
                        <div className="font-medium">Shishu</div>
                        <div className="text-sm text-gray-500">Loans up to ₹50,000</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="kishore" id="kishore" />
                      <Label htmlFor="kishore" className="cursor-pointer">
                        <div className="font-medium">Kishore</div>
                        <div className="text-sm text-gray-500">Loans up to ₹5 lakhs</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="tarun" id="tarun" />
                      <Label htmlFor="tarun" className="cursor-pointer">
                        <div className="font-medium">Tarun</div>
                        <div className="text-sm text-gray-500">Loans up to ₹10 lakhs</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                  <Input
                    id="loanAmount"
                    name="loanAmount"
                    type="number"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    min="5000"
                    max={maxLoanAmount}
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Max amount for {formData.loanCategory === "shishu" ? "Shishu" : formData.loanCategory === "kishore" ? "Kishore" : "Tarun"}: 
                    ₹{formData.loanCategory === "shishu" ? "50,000" : formData.loanCategory === "kishore" ? "5,00,000" : "10,00,000"}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Loan Purpose</Label>
                  <Textarea
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="Briefly describe how you plan to use the loan amount"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
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
                    <Label htmlFor="aadharNumber">Aadhaar Number</Label>
                    <Input
                      id="aadharNumber"
                      name="aadharNumber"
                      value={formData.aadharNumber}
                      onChange={handleChange}
                      maxLength={12}
                      required
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
                    <li>Identity proof (Aadhaar)</li>
                    <li>Address proof</li>
                    <li>Passport size photograph</li>
                    <li>Business registration proof (if applicable)</li>
                    <li>Bank account statements (last 6 months)</li>
                    <li>Business plan or project proposal</li>
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

export default MudraLoanApplication;
