import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
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
                <span>contact@legacyfamilies.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                <span>123 Community Street, City, State 12345</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-white/10 border border-secondary/20 focus:outline-none focus:border-secondary text-secondary placeholder:text-secondary/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-white/10 border border-secondary/20 focus:outline-none focus:border-secondary text-secondary placeholder:text-secondary/50"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-md bg-white/10 border border-secondary/20 focus:outline-none focus:border-secondary text-secondary placeholder:text-secondary/50"
            />
            <button className="bg-secondary text-primary px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};