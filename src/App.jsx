
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Memories from "./components/Memories";
import LoveLetter from "./components/LoveLetter";
import Footer from "./components/Footer";
import WelcomeLetter from "./components/WelcomeLetter";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!entered ? (
          <WelcomeLetter
            key="welcome"
            onOpen={() => setEntered(true)}
          />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />

            <main>
              <Hero />
              <Gallery />
              <Memories />
              <LoveLetter />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
