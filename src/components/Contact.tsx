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
    
    // Here you would typically send this to your backend
    // For now, we'll simulate the email being sent
    console.log("Sending message to admin@wgplegacy.com:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <span>admin@wgplegacy.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <span>773.287.5051</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                <span>4301 W. Washington Blvd, Chicago, IL 60624</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-white/10 border border-secondary/20 focus:outline-none focus:border-secondary text-secondary placeholder:text-secondary/50"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-white/10 border border-secondary/20 focus:outline-none focus:border-secondary text-secondary placeholder:text-secondary/50"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-md bg-white/10 border border-secondary/20 focus:outline-none focus:border-secondary text-secondary placeholder:text-secondary/50"
              required
            />
            <button 
              type="submit"
              className="bg-secondary text-primary px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};