import { motion } from "framer-motion";
import venueIllustration from "@/assets/venue-illustration.png";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="wedding-section text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="wedding-heading mb-8">Локация</h2>

        <img
          src={venueIllustration}
          alt="Усадьба Грибаново"
          className="w-full max-w-sm mx-auto mb-6"
          loading="lazy"
          width={1200}
          height={512}
        />

        <p className="wedding-body mb-4">
          Мероприятие и праздничный банкет пройдут в<br />
          <span className="font-serif-wedding text-lg font-medium italic text-wedding-text">
            «Усадьба Грибаново»
          </span>
        </p>

        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="w-4 h-4 text-wedding-blue" />
          <p className="wedding-body">
            Московская обл., г. Ярославль, д. Грибаново
          </p>
        </div>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="wedding-button"
        >
          Как добраться
        </a>
      </motion.div>
    </section>
  );
};

export default LocationSection;
