import { ContactInfo } from "./contact/ContactInfo";
import { ContactForm } from "./contact/ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1F2C]">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};