import { motion } from "framer-motion";
import { Wine, Music, Camera, Utensils, Sparkles } from "lucide-react";
import programCeremony from "@/assets/program-ceremony.jpg";
import programDinner from "@/assets/program-dinner.jpg";
import programCake from "@/assets/program-cake.jpg";

const scheduleItems = [
  { time: "15:00", label: "Сбор гостей", icon: Wine, image: null },
  { time: "15:30 – 16:00", label: "Церемония", icon: Sparkles, image: programCeremony },
  { time: "16:00 – 17:00", label: "Фотосессия", icon: Camera, image: null },
  { time: "17:00 – 18:30", label: "Банкет", icon: Utensils, image: programDinner },
  { time: "18:30 – 19:30", label: "Развлекательная программа", icon: Music, image: null },
  { time: "20:00", label: "Торт", icon: Sparkles, image: programCake },
  { time: "21:00", label: "Вечеринка", icon: Music, image: null },
];

const ProgramSection = () => {
  return (
    <section className="wedding-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="wedding-heading text-center mb-10">Программа дня</h2>

        <div className="relative">
          {scheduleItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex gap-4 mb-6 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="timeline-dot flex items-center justify-center w-8 h-8">
                    <Icon className="w-3.5 h-3.5 text-wedding-blue" />
                  </div>
                  {index < scheduleItems.length - 1 && (
                    <div className="timeline-line flex-1 min-h-[24px]" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <p className="font-sans-wedding text-xs tracking-wider text-wedding-text-light mb-1">
                    {item.time}
                  </p>
                  <p className="font-serif-wedding text-lg text-wedding-text">
                    {item.label}
                  </p>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-20 h-20 rounded-full object-cover mt-2 border-2 border-wedding-blue-light"
                      loading="lazy"
                      width={512}
                      height={512}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ProgramSection;
