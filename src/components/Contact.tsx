import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
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
    <section id="contact" className="py-20 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1F2C]">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-[#1A1F2C]">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-accent" />
                <span className="text-[#221F26]">admin@wgplegacy.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-accent" />
                <span className="text-[#221F26]">773.287.5051</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-accent" />
                <span className="text-[#221F26]">4301 W. Washington Blvd, Chicago, IL 60624</span>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};