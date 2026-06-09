import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "919543611112";
  const message = encodeURIComponent("Hello, I would like to enquire about Bharatanatyam classes");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.3)] transition-all duration-300 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
