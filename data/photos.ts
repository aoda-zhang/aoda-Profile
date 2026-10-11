export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export const hikeImages: Photo[] = [
  {
    src: "/assets/hike/hike-01.jpg",
    alt: "Hiking a mountain trail with a loaded backpack",
    caption: "Every step on the trail reminds me that life is not standing still.",
  },
  {
    src: "/assets/hike/hike-02.jpg",
    alt: "Standing below snow-covered peaks under a blue sky",
    caption: "Instead of scrolling, we walk.",
  },
  {
    src: "/assets/hike/hike-03.jpg",
    alt: "An alpine lake mirroring the surrounding mountains",
    caption: "After every summit, another path begins.",
  },
];

export const babyImages: Photo[] = [
  {
    src: "/assets/family/baby-01.jpg",
    alt: "Walking hand in hand with my wife and our son at sunset",
    caption: "On June 7, 2025, I became a father.",
  },
  {
    src: "/assets/family/baby-02.jpg",
    alt: "Our newborn son sleeping peacefully",
    caption: "He has my complete attention.",
  },
];
