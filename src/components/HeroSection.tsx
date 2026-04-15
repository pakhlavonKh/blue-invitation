import { motion } from "framer-motion";
import floralHeader from "@/assets/floral-header.png";

const HeroSection = () => {
  const handleRSVPScroll = () => {
    const el = document.getElementById("rsvp-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#faf7f5]">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-[#e8d8cf]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#d9c2b5]/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 items-center gap-12">

        {/* LEFT — TEXT */}
        <div className="text-center md:text-left">

          <motion.p
            className="text-xs tracking-[0.5em] uppercase text-[#9c8f88] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            25 июля 2026
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-[#2a2a2a]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Мы женимся
          </motion.h1>

          <motion.p
            className="mt-6 text-lg italic text-[#b08b7a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            и будем рады видеть вас
          </motion.p>

          {/* LINE */}
          <div className="w-16 h-[1px] bg-[#b08b7a] my-10 mx-auto md:mx-0" />

          {/* CTA (not a button anymore) */}
          <motion.button
            onClick={handleRSVPScroll}
            className="text-sm tracking-[0.3em] uppercase text-[#2a2a2a] border-b border-[#b08b7a] pb-1 hover:opacity-70 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Подтвердить участие
          </motion.button>

        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative flex justify-center md:justify-end">

          <motion.img
            src={floralHeader}
            alt="Floral"
            className="w-[260px] md:w-[360px] lg:w-[420px] object-contain opacity-90"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          {/* FLOATING DECOR */}
          <motion.div
            className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#e8d8cf]/50 rounded-full blur-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;