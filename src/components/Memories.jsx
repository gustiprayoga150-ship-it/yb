import { motion } from "framer-motion";
import { Heart, Star, Flower2 } from "lucide-react";

const memories = [
  {
    icon: "🌷",
    title: "The beginning",
    description:
      "Every beautiful story has a beginning. This is one of my favorites.",
  },
  {
    icon: "🧸",
    title: "Little happy things",
    description:
      "The silly conversations, random laughs, and little things that make ordinary days special.",
  },
  {
    icon: "💗",
    title: "My favorite person",
    description:
      "Out of all the little things in life, getting to know you is something I treasure.",
  },
];

export default function Memories() {
  return (
    <section className="section memories-section" id="memories">
      <div className="section-heading">
        <span className="section-tag">
          <Star size={15} /> LITTLE MEMORIES
        </span>

        <h2>
          Our story, <span>our moments</span>
        </h2>

        <p>
          Some moments are too precious to simply let them pass.
        </p>
      </div>

      <div className="timeline">
        {memories.map((memory, index) => (
          <motion.div
            className="timeline-item"
            key={memory.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-icon">{memory.icon}</div>

            <div className="timeline-card">
              <span className="memory-number">
                MEMORY NO. 0{index + 1}
              </span>
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
              <Heart size={17} className="memory-heart" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="memory-footer">
        <Flower2 size={20} />
        <span>And the best chapters are still being written...</span>
        <Heart size={16} fill="currentColor" />
      </div>
    </section>
  );
}