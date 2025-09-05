
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home, 
  CreditCard, 
  BookOpen, 
  Users, 
  MessageCircle,
  UserCircle2,
  LogIn,
  UserPlus
} from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Apply for Funding", path: "/apply", icon: CreditCard },
    { name: "Resources", path: "/resources", icon: BookOpen },
    { name: "Contact", path: "/contact", icon: MessageCircle },
  ];

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="h-8 w-8 rounded-full flex items-center justify-center">
                <img src="./bank.png" alt="" />
              </div>
              <span className="font-bold text-xl gradient-text">Udyami Mahila</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 hover:text-brand-purple transition-colors flex items-center gap-1.5 font-medium"
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link to="/dashboard">
                    <Button className="gradient-bg">
                      <UserCircle2 className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/login">
                    <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                      <LogIn className="mr-2 h-4 w-4" />
                      Log In
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="gradient-bg">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: "64px" }}
      >
        <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-3 text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md flex items-center"
              onClick={closeMenu}
            >
              <link.icon className="mr-3 h-5 w-5" />
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-100">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={closeMenu} className="mb-3 block">
                  <Button className="gradient-bg w-full">
                    <UserCircle2 className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple/5"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={closeMenu} className="mb-3 block">
                  <Button variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                    <LogIn className="mr-2 h-4 w-4" />
                    Log In
                  </Button>
                </Link>
                <Link to="/register" onClick={closeMenu}>
                  <Button className="gradient-bg w-full">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
