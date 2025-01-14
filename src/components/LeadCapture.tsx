import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { WebhookInput } from "./lead-capture/WebhookInput";
import { LeadForm } from "./lead-capture/LeadForm";

export const LeadCapture = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please set up your Zapier webhook URL first",
        variant: "destructive",
      });
      return;
    }

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
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name,
          email,
          phone,
          timestamp: new Date().toISOString(),
          source: window.location.origin,
        }),
      });

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
    <section id="join-us" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-6">Join Our Community</h2>
          <p className="text-lg text-[#221F26] max-w-2xl mx-auto">
            Stay updated with our latest initiatives and community events. Join the Legacy Families of West Garfield Park.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <WebhookInput webhookUrl={webhookUrl} setWebhookUrl={setWebhookUrl} />
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