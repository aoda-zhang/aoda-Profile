"use client";

import { motion } from "framer-motion";
import scrollDownLottie from "../public/assets/lotties/scrollDown.json";
import { useEffect, useState } from "react";

export default function Hero() {
  const [Player, setPlayer] = useState<
    typeof import("@lottiefiles/react-lottie-player").Player | null
  >(null);

  useEffect(() => {
    import("@lottiefiles/react-lottie-player").then((module) => {
      setPlayer(() => module.Player);
    });
  }, []);

  if (!Player) {
    return null;
  }

  return (
    <div
      id="hero"
      className="relative flex flex-col items-center text-center space-y-6 min-h-[80vh]"
    >
      <motion.div
        className="text-5xl md:text-8xl neon-text mt-32 mb-10 font-bold"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I&#39;m Aoda
      </motion.div>

      <motion.div
        className="text-text-secondary px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        With 8+ years of development experience, specializing in the MERN stack
        (MongoDB, NestJS, React, Node.js), I love turning ideas into
        high-quality applications with modern technologies.
      </motion.div>

      <div className="absolute bottom-4">
        <Player autoplay loop src={scrollDownLottie} className="h-16 w-16" />
      </div>
    </div>
  );
}
