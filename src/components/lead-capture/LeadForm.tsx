import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface LeadFormProps {
  name: string;
  email: string;
  phone: string;
  isLoading: boolean;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const LeadForm = ({
  name,
  email,
  phone,
  isLoading,
  setName,
  setEmail,
  setPhone,
  onSubmit
}: LeadFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
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
  );
};