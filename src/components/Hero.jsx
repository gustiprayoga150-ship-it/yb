
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-decoration decor-one">♡</div>
      <div className="hero-decoration decor-two">✿</div>
      <div className="hero-decoration decor-three">♡</div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="eyebrow">
          <Sparkles size={15} />
          A little place made for you
          <Sparkles size={15} />
        </div>

        <h1>
          Welcome to
          <br />
          <span>your little world</span>
        </h1>

        <p className="hero-description">
          A little corner of the internet filled with memories,
          happiness, and everything that makes you special.
        </p>

        <a href="#gallery" className="primary-btn">
          Explore our little world
          <Heart size={17} fill="currentColor" />
        </a>

        <div className="hero-note">
          <span>made with</span>
          <Heart size={13} fill="currentColor" />
          <span>just for you</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-photo"
        initial={{ opacity: 0, rotate: 8, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 4, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src="/images/photo1.jpg"
          alt="My favorite person"
          className="hero-real-photo"
        />

        <div className="photo-caption">
          my favorite person ♡
        </div>

        <div className="photo-sticker">LOVE</div>
      </motion.div>

      <a href="#gallery" className="scroll-down">
        <ArrowDown size={18} />
        <span>scroll a little</span>
      </a>
    </section>
  );
}
