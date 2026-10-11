import shanoobPhoto from "../assets/trainers/shanoob-ck.webp";
import ganeshPhoto from "../assets/trainers/ganesh.png";
import praveenPhoto from "../assets/trainers/praveen.webp";
import { siteConfig } from "../config/site";

// The owner confirmed the portrait, spelling "Shanoop CK", and achievements.
// Array order controls display order. Rank remains optional, without guessing.
export const trainers = [
  {
    name: siteConfig.featuredTrainer.name,
    photo: shanoobPhoto,
    position: "50% 55%",
    achievements: siteConfig.featuredTrainer.achievements,
    role: siteConfig.featuredTrainer.role || "Trainer",
  },
  {
    name: "Ganesh",
    photo: ganeshPhoto,
    position: "45% 35%",
    achievements: [],
    role: "Trainer",
  },
  {
    name: "Praveen",
    photo: praveenPhoto,
    position: "50% 20%",
    achievements: [],
    role: "Trainer",
  },
];
