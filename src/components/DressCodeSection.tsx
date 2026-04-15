import { motion } from "framer-motion";
import dresscodePhoto from "@/assets/dresscode-photo.jpg";

const blueShades = [
  { color: "hsl(213, 60%, 30%)", label: "Navy" },
  { color: "hsl(213, 50%, 45%)", label: "Royal" },
  { color: "hsl(213, 45%, 55%)", label: "Blue" },
  { color: "hsl(213, 40%, 70%)", label: "Sky" },
  { color: "hsl(213, 35%, 82%)", label: "Powder" },
];

const DressCodeSection = () => {
  return (
    <section className="wedding-section text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="wedding-heading mb-2">Дресс-код</h2>
        <p className="font-sans-wedding text-lg tracking-[0.3em] uppercase text-wedding-blue mb-8 font-medium">
          Blue Palette
        </p>

        <div className="flex justify-center gap-3 mb-8">
          {blueShades.map((shade, i) => (
            <motion.div
              key={i}
              className="w-10 h-10 rounded-full shadow-sm"
              style={{ backgroundColor: shade.color }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            />
          ))}
        </div>

        <img
          src={dresscodePhoto}
          alt="Дресс-код"
          className="w-full max-w-sm mx-auto rounded-lg shadow-md"
          loading="lazy"
          width={800}
          height={512}
        />
      </motion.div>
    </section>
  );
};

export default DressCodeSection;
