import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, CheckCircle } from "lucide-react";

interface NotifyMeModalProps {
  productTitle: string;
  trigger?: React.ReactNode;
}

export const NotifyMeModal = ({ productTitle, trigger }: NotifyMeModalProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 300);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="w-full rounded-full font-bold text-sm" size="sm">
            <Bell className="h-4 w-4 mr-1" />
            Notify Me
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-extrabold text-xl">Get Notified</DialogTitle>
        </DialogHeader>
        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
            <p className="font-bold text-lg">Thanks! We'll let you know when this is available.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Enter your email and we'll notify you when <strong>{productTitle}</strong> is back in stock!
            </p>
            <Input
              type="email"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full"
            />
            <Button type="submit" className="w-full rounded-full font-bold">
              Notify Me When Available
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
