
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Apply from "./pages/Apply";
import BusinessLoanApplication from "./pages/BusinessLoanApplication";
import MudraLoanApplication from "./pages/MudraLoanApplication";
import Grants from "./pages/Grants";
import GrantApplication from "./pages/GrantApplication";
import Resources from "./pages/Resources";
import SuccessStories from "./pages/SuccessStories";
import SuccessStoryDetail from "./pages/SuccessStoryDetail";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/apply/business-loan" element={<BusinessLoanApplication />} />
            <Route path="/apply/mudra-loan" element={<MudraLoanApplication />} />
            <Route path="/grants" element={<Grants />} />
            <Route path="/apply/grant/:id" element={<GrantApplication />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/success-stories/:id" element={<SuccessStoryDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
