import { motion } from "framer-motion";

const DearGuestsSection = () => {
  return (
    <section className="wedding-section text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="wedding-subheading mb-6">«Дорогие гости!»</h2>
        <p className="wedding-body max-w-sm mx-auto">
          Мы рады сообщить вам, что наша свадьба состоится 25 июля 2026 года.
          Будем счастливы разделить этот важный день с вами!
        </p>
      </motion.div>
    </section>
  );
};

export default DearGuestsSection;
