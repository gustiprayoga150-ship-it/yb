import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Gallery", "#gallery"],
    ["Memories", "#memories"],
    ["For You", "#letter"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <Heart size={19} fill="currentColor" />
        <span>little world</span>
      </a>

      <div className={`nav-links ${open ? "show" : ""}`}>
        {links.map(([name, link]) => (
          <a key={name} href={link} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
      </div>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </nav>
  );
}