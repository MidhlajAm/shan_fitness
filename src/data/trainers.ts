import shanoobPhoto from "../assets/trainers/shanoob-ck.webp";
import ganeshPhoto from "../assets/trainers/ganesh.png";
import praveenPhoto from "../assets/trainers/praveen.webp";
import { siteConfig } from "../config/site";

// The owner confirmed the new portrait and spelling "Shanoob CK", 2026-10-11.
// Array order controls display order. Rank remains optional, without guessing.
export const trainers = [
  {
    name: siteConfig.featuredTrainer.name,
    photo: shanoobPhoto,
    position: "50% 55%",
    achievement: siteConfig.featuredTrainer.achievement,
    role: siteConfig.featuredTrainer.role || "Trainer",
  },
  {
    name: "Ganesh",
    photo: ganeshPhoto,
    position: "45% 35%",
    achievement: "",
    role: "Trainer",
  },
  {
    name: "Praveen",
    photo: praveenPhoto,
    position: "50% 20%",
    achievement: "",
    role: "Trainer",
  },
];
