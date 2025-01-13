import { Input } from "@/components/ui/input";

interface WebhookInputProps {
  webhookUrl: string;
  setWebhookUrl: (url: string) => void;
}

export const WebhookInput = ({ webhookUrl, setWebhookUrl }: WebhookInputProps) => {
  return (
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
  );
};