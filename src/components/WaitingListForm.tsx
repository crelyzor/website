import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle, Mail, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const WaitingListForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "We'll notify you when Crelyzor launches.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 bg-gradient-card border-primary/20 shadow-glow max-w-md">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">You're in! 🚀</h3>
          <p className="text-muted-foreground">
            Welcome to the Crelyzor waitlist. We'll email you when it's ready!
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-card border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center mb-6">
          <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-3">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Join the Waitlist</h3>
          <p className="text-sm text-muted-foreground">
            Be the first to know when Crelyzor launches
          </p>
        </div>

        <div className="relative w-full">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 w-full"
            required
          />
        </div>

        <Button
          type="submit"
          variant="hero"
          size="xl"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Joining..." : "Join Waitlist"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          No spam, just updates on your creator journey
        </p>
      </form>
    </Card>
  );
};
