import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
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
  );
};