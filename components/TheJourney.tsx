"use client";

import { motion } from "framer-motion";
import { hikeImages } from "@/data/mockImages";

export default function TheJourney() {
  return (
    <section id="journey" className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-10"
        >
          The Journey
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-lg md:text-xl font-medium text-[var(--color-text-secondary)] leading-relaxed mb-12 max-w-xl"
        >
          From a young age, I&apos;ve been curious about many things. To me, every
          day feels like a new beginning. I enjoy exploring the world — after
          all, isn&apos;t life itself a journey of continuous discovery?
        </motion.p>

        <div className="space-y-10 md:space-y-14">
          {hikeImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-void)]/20 to-transparent" />
                {/* Location dot */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[var(--color-void)]/50 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span className="text-[10px] text-[var(--color-text-muted)] tracking-wide">
                    Trail {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <p className="text-sm md:text-base text-[var(--color-text-muted)] italic leading-relaxed px-1">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg"
        >
          After my wife and I came together through our shared interests, hiking
          became a regular part of our weekends. Instead of staying at home
          scrolling through social media, we prefer being close to nature — the
          flowers, the trees, the sunlight.
        </motion.div>
      </div>
    </section>
  );
}
