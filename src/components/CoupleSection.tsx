import { motion } from "framer-motion";
import ornateFrame from "@/assets/ornate-frame.png";
import couplePhoto from "@/assets/couple-photo.jpg";

const CoupleSection = () => {
  return (
    <section className="wedding-section text-center py-4">
      <motion.h1
        className="font-serif-wedding text-5xl md:text-6xl font-light italic text-wedding-text mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Саймон и Дафна
      </motion.h1>

      <motion.div
        className="relative w-64 h-80 mx-auto mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={ornateFrame}
          alt="Рамка"
          className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
          width={800}
          height={960}
        />
        <div className="absolute inset-[12%] overflow-hidden rounded-[50%]">
          <img
            src={couplePhoto}
            alt="Саймон и Дафна"
            className="w-full h-full object-cover"
            width={640}
            height={800}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CoupleSection;
