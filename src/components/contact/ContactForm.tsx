import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Sending message to admin@wgplegacy.com:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-8 rounded-xl shadow-sm">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        placeholder="Your Name"
        className="w-full p-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:border-accent text-[#221F26] placeholder:text-gray-500"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        placeholder="Your Email"
        className="w-full p-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:border-accent text-[#221F26] placeholder:text-gray-500"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        placeholder="Your Message"
        rows={4}
        className="w-full p-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:border-accent text-[#221F26] placeholder:text-gray-500"
        required
      />
      <button 
        type="submit"
        className="bg-[#1A1F2C] text-white px-6 py-3 rounded-md hover:bg-[#403E43] transition-colors w-full shadow-sm"
      >
        Send Message
      </button>
    </form>
  );
};