import { motion } from "framer-motion";
import floralFooter from "@/assets/floral-footer.png";

const DetailsSection = () => {
  return (
    <section className="wedding-section text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="wedding-heading mb-6">Детали</h2>

        <div className="space-y-4 mb-8">
          <p className="wedding-body">
            Просим вас подтвердить своё присутствие на нашем торжестве
            до 1 июля 2026 года.
          </p>
          <p className="wedding-body">
            Если у вас есть пожелания по меню или аллергии,
            пожалуйста, сообщите нам заранее.
          </p>
          <p className="wedding-body">
            На территории усадьбы предусмотрена парковка для гостей.
          </p>
        </div>

        <div className="wedding-divider" />

        <p className="font-serif-wedding text-xl italic text-wedding-text-light mt-8 mb-4">
          Мы будем Саймон и Дафна !
        </p>

        <a href="#rsvp" className="wedding-button">
          Подтвердить
        </a>
      </motion.div>

      <motion.img
        src={floralFooter}
        alt="Цветочный декор"
        className="w-full max-w-sm mx-auto mt-12"
        loading="lazy"
        width={1200}
        height={512}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default DetailsSection;
