import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <Sparkles size={18} />
      <p>Made with lots of love and a little bit of magic.</p>
      <div>
        <Heart size={15} fill="currentColor" />
        <span>your little world · 2026</span>
        <Heart size={15} fill="currentColor" />
      </div>
    </footer>
  );
}