
import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";
import { useState } from "react";

const photos = [
  { title: "Pretty little moment", date: "A lovely day", image: "/images/photo1.jpg" },
  { title: "Sweet memories", date: "A happy moment", image: "/images/photo2.jpg" },
  { title: "My favorite smile", date: "A special day", image: "/images/photo3.jpg" },
  { title: "Simply beautiful", date: "One of a kind", image: "/images/photo4.jpg" },
  { title: "Little sunshine", date: "A warm memory", image: "/images/photo5.jpg" },
  { title: "Forever precious", date: "A lovely memory", image: "/images/photo6.jpg" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-heading">
        <span className="section-tag">
          <Camera size={15} /> OUR LITTLE GALLERY
        </span>

        <h2>
          Moments worth <span>keeping</span>
        </h2>

        <p>Every picture tells a story, and every story is special.</p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.button
            className={`polaroid polaroid-${index + 1}`}
            key={photo.title}
            onClick={() => setSelected(photo)}
            whileHover={{ y: -9, rotate: 0, scale: 1.03 }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="polaroid-image">
              <img
                src={photo.image}
                alt={photo.title}
                className="gallery-photo"
                loading="lazy"
              />
            </div>

            <div className="polaroid-caption">
              <strong>{photo.title}</strong>
              <small>{photo.date}</small>
            </div>

            <Heart className="polaroid-heart" size={17} />
          </motion.button>
        ))}
      </div>

      <p className="gallery-note">
        <Heart size={14} fill="currentColor" />
        Six little spaces filled with your favorite photos.
      </p>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              ×
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="modal-photo"
            />

            <h3>{selected.title}</h3>
            <p>{selected.date}</p>
            <span>♡ a little memory ♡</span>
          </div>
        </div>
      )}
    </section>
  );
}
