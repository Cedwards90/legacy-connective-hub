import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

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
      const response = await fetch(webhookUrl, {
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

      // Reset form
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
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Zapier Webhook URL"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="mb-4 text-[#221F26]"
            />
            <p className="text-sm text-[#403E43]">
              Set your Zapier webhook URL to start collecting leads
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="text-[#221F26]"
            />
            <Input
              type="email"
              placeholder="Your Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-[#221F26]"
            />
            <Input
              type="tel"
              placeholder="Your Phone (Optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="text-[#221F26]"
            />
            <Button
              type="submit"
              className="w-full bg-[#1A1F2C] text-white hover:bg-[#403E43]"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Join Now"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};