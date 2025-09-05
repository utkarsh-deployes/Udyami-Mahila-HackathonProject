
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Files, FileText, CheckCircle2, Clock, AlertCircle, UserCircle, CreditCard, FileEdit } from "lucide-react";

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please log in to access your dashboard");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const applications = [
    {
      id: 1,
      type: "Business Loan",
      amount: "₹15,00,000",
      date: "15 Aug 2023",
      status: "Approved",
      statusColor: "text-green-600 bg-green-50"
    },
    {
      id: 2,
      type: "MUDRA Loan",
      amount: "₹5,00,000",
      date: "03 Sep 2023",
      status: "In Review",
      statusColor: "text-amber-600 bg-amber-50"
    },
    {
      id: 3,
      type: "Grant Application",
      amount: "₹2,50,000",
      date: "22 Sep 2023",
      status: "Documents Needed",
      statusColor: "text-blue-600 bg-blue-50"
    }
  ];

  const recommendedResources = [
    {
      title: "Financial Management Basics",
      type: "Guide",
      path: "/resources/financial-management"
    },
    {
      title: "Business Plan Template",
      type: "Template",
      path: "/templates/business-plan.docx"
    },
    {
      title: "Women's Business Conference",
      type: "Event",
      path: "/events/women-business-conference"
    }
  ];

  const upcomingPayments = [
    {
      id: 1,
      description: "Business Loan EMI",
      amount: "₹32,500",
      dueDate: "05 Oct 2023"
    },
    {
      id: 2,
      description: "MUDRA Loan EMI",
      amount: "₹12,800",
      dueDate: "15 Oct 2023"
    }
  ];

  if (!isAuthenticated) {
    return null; // Will redirect in the useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back{user ? `, ${user.name}` : ""}!</h1>
            <p className="text-gray-600">Here's an overview of your funding applications and resources.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-brand-purple/10 flex items-center justify-center mr-4">
                  <Files className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <p className="text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold">{applications.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600">Approved Funding</p>
                  <p className="text-2xl font-bold">₹15,00,000</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold">₹7,50,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Applications</h2>
              <Link to="/apply">
                <Button variant="outline">
                  New Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {applications.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-gray-100">
                      <th className="pb-3 font-medium text-gray-600">Type</th>
                      <th className="pb-3 font-medium text-gray-600">Amount</th>
                      <th className="pb-3 font-medium text-gray-600">Applied on</th>
                      <th className="pb-3 font-medium text-gray-600">Status</th>
                      <th className="pb-3 font-medium text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {applications.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50">
                        <td className="py-4 font-medium">{app.type}</td>
                        <td className="py-4">{app.amount}</td>
                        <td className="py-4">{app.date}</td>
                        <td className="py-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${app.statusColor}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <Link to={`/dashboard/applications/${app.id}`}>
                            <Button size="sm" variant="ghost">
                              <FileText className="h-4 w-4 mr-2" />
                              View
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <FileText className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-4">You haven't submitted any applications yet</p>
                <Link to="/apply">
                  <Button className="gradient-bg">
                    Apply for Funding
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Payments */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Upcoming Payments</h2>
              
              {upcomingPayments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingPayments.map((payment) => (
                    <div key={payment.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                          <CreditCard className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium">{payment.description}</p>
                          <p className="text-sm text-gray-600">Due: {payment.dueDate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{payment.amount}</p>
                        <Link to="/dashboard/payments" className="text-sm text-brand-purple hover:underline">
                          Pay now
                        </Link>
                      </div>
                    </div>
                  ))}

                  <div className="mt-4 text-center">
                    <Link to="/dashboard/payments">
                      <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5 w-full">
                        View All Payments
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto mb-2" />
                  <p className="text-gray-600">No upcoming payments due</p>
                </div>
              )}
            </div>

            {/* Recommended Resources */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Recommended Resources</h2>
              
              <div className="space-y-4">
                {recommendedResources.map((resource, index) => (
                  <Link key={index} to={resource.path}>
                    <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-brand-purple/10 flex items-center justify-center mr-4">
                          <FileEdit className="h-5 w-5 text-brand-purple" />
                        </div>
                        <div>
                          <p className="font-medium">{resource.title}</p>
                          <p className="text-sm text-gray-600">{resource.type}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </Link>
                ))}

                <div className="mt-4 text-center">
                  <Link to="/resources">
                    <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5 w-full">
                      Explore All Resources
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <UserCircle className="h-10 w-10 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{user ? user.name : "User"}</h3>
                  <p className="text-gray-600">{user ? user.email : "user@example.com"}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
               
                <Button variant="outline" className="border-red-200 text-red-500 hover:bg-red-50" onClick={() => navigate("/")}>
                  Log Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
