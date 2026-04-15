import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

// July 2026 starts on Wednesday (index 2)
const julyDays: (number | null)[] = [
  null, null, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, null, null,
];

const CalendarSection = () => {
  return (
    <section className="wedding-section text-center">
      <motion.div
        className="max-w-xs mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="calendar-cell text-xs tracking-wider uppercase text-wedding-text-light font-medium"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {julyDays.map((day, i) => (
            <div
              key={i}
              className={`calendar-cell ${
                day === 25 ? "calendar-cell-active relative" : ""
              } ${day ? "text-wedding-text" : ""}`}
            >
              {day === 25 ? (
                <div className="flex flex-col items-center">
                  <Heart className="w-3 h-3 mb-0.5 fill-current" />
                  <span className="text-xs font-medium">{day}</span>
                </div>
              ) : (
                day
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CalendarSection;
