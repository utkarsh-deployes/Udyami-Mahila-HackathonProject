
import React, { useState } from "react";
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
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });

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
      toast.success("Your message has been sent. We'll get back to you soon!");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: ""
      });
    }, 1500);
  };

  const offices = [
    {
      city: "Mumbai",
      address: "Level 8, Vibgyor Tower, G Block BKC, Mumbai, Maharashtra 400098",
      phone: "+91 22 6143 1800",
      email: "mumbai@Udyami Mahila.in"
    },
    {
      city: "Delhi",
      address: "4th Floor, Rectangle One, Saket District Centre, New Delhi 110017",
      phone: "+91 11 4949 8000",
      email: "delhi@Udyami Mahila.in"
    },
    {
      city: "Bangalore",
      address: "WeWork Galaxy, #43, Residency Road, Shanthala Nagar, Bengaluru 560025",
      phone: "+91 80 4718 2000",
      email: "bangalore@Udyami Mahila.in"
    }
  ];

  const faqs = [
    {
      question: "How long does the loan application process take?",
      answer: "The application review typically takes 3-5 business days. If approved, funds are disbursed within 7-10 business days."
    },
    {
      question: "Do you provide assistance with business plan writing?",
      answer: "Yes, our team can help you develop or refine your business plan. Check our Resources section for templates and guides."
    },
    {
      question: "What are the eligibility criteria for your funding programs?",
      answer: "Basic eligibility includes being a woman entrepreneur with a registered business or a business idea, Indian citizenship, and age between 18-65 years. Specific programs may have additional criteria."
    },
    {
      question: "Can I apply for multiple funding options?",
      answer: "Yes, you can apply for different funding options, but we recommend focusing on the most suitable option for your business needs first."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-gray-600">
                Have questions or need assistance? Our team is here to help you on your entrepreneurial journey.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <Label htmlFor="phone">Phone</Label>
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
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleSelectChange("inquiryType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="funding">Funding Options</SelectItem>
                        <SelectItem value="application">Application Assistance</SelectItem>
                        <SelectItem value="mentorship">Mentorship Program</SelectItem>
                        <SelectItem value="resources">Business Resources</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe how we can help you"
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="gradient-bg w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4">
                        <h4 className="font-medium text-lg mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-8">
                  {offices.map((office, index) => (
                    <div key={index} className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm">
                      <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                      <div className="space-y-3">
                        <div className="flex">
                          <MapPin className="h-5 w-5 text-brand-purple mr-3 flex-shrink-0" />
                          <p className="text-gray-600">{office.address}</p>
                        </div>
                        <div className="flex">
                          <Phone className="h-5 w-5 text-brand-purple mr-3 flex-shrink-0" />
                          <p className="text-gray-600">{office.phone}</p>
                        </div>
                        <div className="flex">
                          <Mail className="h-5 w-5 text-brand-purple mr-3 flex-shrink-0" />
                          <p className="text-gray-600">{office.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border border-gray-100 rounded-xl p-6 bg-white shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="flex mb-3">
                    <Clock className="h-5 w-5 text-brand-purple mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Monday to Friday</p>
                      <p className="text-gray-600">9:30 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex">
                    <Clock className="h-5 w-5 text-brand-purple mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="mt-4 text-gray-600">
                    <p>Closed on Sundays and National Holidays</p>
                  </div>
                </div>

                <div className="mt-8 bg-brand-purple/5 border border-brand-purple/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Need Immediate Assistance?</h3>
                  <p className="text-gray-600 mb-4">
                    For urgent inquiries, you can reach our support team directly:
                  </p>
                  <div className="flex items-center mb-2">
                    <Phone className="h-5 w-5 text-brand-purple mr-3 flex-shrink-0" />
                    <p className="font-medium">+91 98XXXXXXXX</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-brand-purple mr-3 flex-shrink-0" />
                    <p className="font-medium">support@Udyami Mahila.in</p>
                  </div>
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

export default Contact;
