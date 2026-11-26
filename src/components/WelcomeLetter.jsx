
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Mail } from "lucide-react";

export default function WelcomeLetter({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <AnimatePresence>
      <motion.section
        className="welcome-screen"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8 }}
      >
        <div className="welcome-decoration decor-a">♡</div>
        <div className="welcome-decoration decor-b">✿</div>
        <div className="welcome-decoration decor-c">🎀</div>
        <div className="welcome-decoration decor-d">♡</div>

        <motion.div
          className="welcome-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="welcome-tag">
            <Sparkles size={14} />
            A SPECIAL SURPRISE
            <Sparkles size={14} />
          </div>

          <h1>
            Someone has a
            <br />
            <span>little letter for you</span>
          </h1>

          <p className="welcome-description">
            A tiny surprise, made with love.
            <br />
            Take your time and open it ♡
          </p>

          <motion.div
            className={`welcome-envelope ${opening ? "opening" : ""}`}
            animate={opening ? { y: -20, scale: 1.08 } : { y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="welcome-paper">
              <Heart fill="currentColor" size={32} />
              <span>For someone special</span>
              <small>with love ♡</small>
            </div>

            <div className="welcome-envelope-back" />

            <motion.div
              className="welcome-flap"
              animate={opening ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.8 }}
            />

            <div className="welcome-envelope-front" />

            <motion.div
              className="welcome-seal"
              animate={opening ? { scale: 0, opacity: 0 } : {}}
            >
              <Heart fill="currentColor" size={25} />
            </motion.div>
          </motion.div>

          <motion.button
            className="welcome-button"
            onClick={handleOpen}
            disabled={opening}
            whileHover={!opening ? { scale: 1.05 } : {}}
            whileTap={!opening ? { scale: 0.96 } : {}}
          >
            {opening ? (
              <>
                Opening your letter...
                <Sparkles size={17} />
              </>
            ) : (
              <>
                Open your letter
                <Mail size={17} />
              </>
            )}
          </motion.button>

          <p className="welcome-footer">
            <Heart size={12} fill="currentColor" />
            made just for you
            <Heart size={12} fill="currentColor" />
          </p>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
