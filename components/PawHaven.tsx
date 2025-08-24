"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import pawHavenLogo from "../public/assets/images/logo.png";

interface ProjectShowcaseProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  screenshots: string[];
}

const PawHaven = ({
  title,
  description,
  tech,
  liveUrl,
  screenshots,
}: ProjectShowcaseProps) => {
  const [active, setActive] = useState(0);
  const total = screenshots.length;

  const cardRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => setActive((a) => (a + 1) % total);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = (y / rect.height - 0.5) * -10;
    const ry = (x / rect.width - 0.5) * 15;
    cardRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
    cardRef.current.style.boxShadow = `${-ry * 2}px ${
      rx * 2
    }px 25px rgba(16,185,129,0.5)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    cardRef.current.style.boxShadow = "0 0 25px rgba(16,185,129,0.25)";
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 30) next();
    else if (diff < -30) setActive((a) => (a - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => next(), 20000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative min-h-screen w-full bg-black text-green-400 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-mono text-primary">
            {title}
          </h2>
          <Image
            src={pawHavenLogo}
            alt={""}
            className="w-30 h-auto m-auto mb-10"
          ></Image>
          <p className="text-white leading-relaxed max-w-prose mx-auto">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-md border text-primary border-primary bg-black/60 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-green-500 bg-green-400 text-black font-mono hover:bg-green-300 transition"
            >
              Visit Site
            </a>

            <a
              href="/projects/pawHaven"
              className="px-4 py-2 rounded-lg border border-green-700 text-green-300 font-mono hover:text-white hover:bg-green-400/20 hover:border-green-500 transition"
            >
              Read More
            </a>
          </div>
        </div>

        <div className="relative w-full flex justify-center">
          <div
            className="relative w-full max-w-[800px] h-[360px] md:h-[420px] perspective overflow-visible"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {screenshots.map((src, i) => {
              const offset = i - active;
              const isActive = i === active;
              const translateX = offset * 180;
              const translateZ = offset === 0 ? 120 : -50;
              const rotateY = offset * -15;
              const scale = isActive ? 1 : 0.85;
              const zIndex = isActive ? 20 : 5;
              const opacity = Math.abs(offset) > 2 ? 0 : 1;

              return (
                <div
                  key={i}
                  ref={isActive ? cardRef : null}
                  onMouseMove={isActive ? handleMouseMove : undefined}
                  onMouseLeave={isActive ? handleMouseLeave : undefined}
                  onClick={() => {
                    if (isActive) {
                      setActive((prev) => (prev + 1) % screenshots.length);
                    } else {
                      setActive(i);
                    }
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[580px] md:w-[680px] h-full rounded-lg overflow-hidden border border-green-600 bg-black cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    transition: "all 0.3s ease",
                    boxShadow: isActive
                      ? "0 0 30px rgba(16,185,129,0.5)"
                      : "0 0 20px rgba(16,185,129,0.25)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`screenshot-${i + 1}`}
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PawHaven;
