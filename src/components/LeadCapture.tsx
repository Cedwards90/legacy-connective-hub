import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { LeadForm } from "./lead-capture/LeadForm";

export const LeadCapture = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const formData = {
        name,
        email,
        phone,
        timestamp: new Date().toISOString(),
        source: window.location.origin,
      };

      const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfYXKjJ9KbBZqeqNpxXXHUF_q9CkZcKKLhE_kzUqWIxHAiOAw/formResponse", {
        method: "POST",
        mode: "no-cors", // This is important for CORS handling
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          'entry.2005620554': formData.name,
          'entry.1045781291': formData.email,
          'entry.1166974658': formData.phone,
          'entry.839337160': formData.timestamp,
          'entry.1065046570': formData.source
        }).toString()
      });

      // Since no-cors mode doesn't give us response details, we assume success if no error is thrown
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon!",
      });

      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="join-us" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Join Our Community</h2>
          <p className="text-lg text-[#221F26] max-w-2xl mx-auto">
            Stay updated with our latest initiatives and community events. Join the Legacy Families of West Garfield Park.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <LeadForm
            name={name}
            email={email}
            phone={phone}
            isLoading={isLoading}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};