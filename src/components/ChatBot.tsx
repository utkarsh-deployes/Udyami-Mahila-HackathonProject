
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hello! I'm Tara, your financial assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const { toast } = useToast();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Simulate bot response (in a real app, this would be connected to an API)
    setTimeout(() => {
      let responseText = "";
      
      const lowercaseInput = input.toLowerCase();
      if (lowercaseInput.includes("loan")) {
        responseText = "We offer various loan options for women entrepreneurs, including business loans and MUDRA loans. Would you like to learn more about our loan options or start an application?";
      } else if (lowercaseInput.includes("grant") || lowercaseInput.includes("scheme")) {
        responseText = "We help connect women entrepreneurs with various grants and government schemes like Stand-Up India and Mahila Udyam Nidhi. You can explore all options in the Grants section of our website.";
      } else if (lowercaseInput.includes("apply")) {
        responseText = "To apply for funding, you'll need to create an account, complete your profile, and submit the required documents. Would you like me to guide you through the application process?";
      } else if (lowercaseInput.includes("document")) {
        responseText = "For loan applications, you'll typically need identity proof, address proof, business registration documents, bank statements, and a business plan. The specific requirements vary by loan type.";
      } else {
        responseText = "Thank you for your message. Would you like to know about our loan options, grants, or application process? Or would you prefer to speak with one of our financial advisors?";
      }
      
      const botMessage = { text: responseText, sender: 'bot' as const };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <Button
        onClick={toggleChat}
        className={`rounded-full shadow-lg w-14 h-14 p-0 ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'gradient-bg'}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Chat header */}
          <div className="p-4 gradient-bg">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <span className="text-white font-semibold">T</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Tara</h3>
                <p className="text-xs text-white/80">Financial Assistant</p>
              </div>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg py-2 px-4 max-w-[80%] ${
                    message.sender === 'user'
                      ? 'bg-brand-purple text-white'
                      : 'bg-white border border-gray-200 text-gray-700'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 mr-2"
            />
            <Button
              type="submit"
              className="gradient-bg w-10 h-10 p-0 flex items-center justify-center"
              disabled={!input.trim()}
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
