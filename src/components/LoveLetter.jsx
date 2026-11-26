import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, Sparkles } from "lucide-react";

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="section letter-section" id="letter">
      <div className="section-heading">
        <span className="section-tag">
          <Mail size={15} /> A LITTLE SURPRISE
        </span>

        <h2>
          Something <span>for you</span>
        </h2>

        <p>
          There's a little message waiting just for you.
        </p>
      </div>

      <motion.div
        className={`envelope ${opened ? "opened" : ""}`}
        whileHover={!opened ? { y: -7 } : {}}
      >
        <div className="envelope-top"></div>

        <div className="envelope-paper">
          <Heart fill="currentColor" size={25} />
          <span>A little letter</span>
        </div>

        <div className="envelope-front"></div>

        {!opened && (
          <button
            className="envelope-button"
            onClick={() => setOpened(true)}
          >
            <Heart fill="currentColor" size={15} />
          </button>
        )}
      </motion.div>

      <button
        className="primary-btn letter-btn"
        onClick={() => setOpened(!opened)}
      >
        {opened ? "Close my letter" : "Open your little letter"}
        <Mail size={17} />
      </button>

      <AnimatePresence>
        {opened && (
          <motion.div
            className="letter-content"
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={22} className="letter-sparkle" />

            <h3>Dear, my favorite person ♡</h3>

            <p>
              Haiii, adikk!
              <br />
              <br />
              Aku cuma mau bilang kalau kamu kamuuu jangann btt okee nantii kaloo adikk bt takuttnyaaa cantiknyaa ilangg, yaa meskipunn ngga bakall ilangg sii
              <br />
              <br />
              Semoga kamu selalu punya alasan untuk tersenyum,
              selalu dikelilingi hal-hal baik, dan jangan pernah
              lupa betapa berharganya adikk inii.
              <br />
              <br />

            </p>

            <div className="letter-signature">
              With lots of love,
              <strong>Someone who cares about you ♡</strong>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}