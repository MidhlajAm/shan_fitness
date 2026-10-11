import gymMoments from "../assets/video-covers/gym-floor.webp";
import teamTraining from "../assets/video-covers/training-together.webp";
import focusedTraining from "../assets/video-covers/focused-training.webp";
import gymCelebration from "../assets/video-covers/gym-celebration.webp";

// Downloaded from the four owner-supplied Instagram links on 2026-10-11.
// Playback files: public/videos/, H.264/AAC with fast-start metadata.
export const videos = [
  {
    title: "Inside the gym",
    duration: "0:19",
    poster: gymMoments,
    src: "/videos/gym-floor.mp4",
    source: "https://www.instagram.com/reel/Db3ZslLvhHg/",
  },
  {
    title: "Training together",
    duration: "0:33",
    poster: teamTraining,
    src: "/videos/training-together.mp4",
    source: "https://www.instagram.com/reel/DY99swBvKyP/",
  },
  {
    title: "Focused on the work",
    duration: "0:31",
    poster: focusedTraining,
    src: "/videos/focused-training.mp4",
    source: "https://www.instagram.com/reel/DeJ_ntPvOVd/",
  },
  {
    title: "Celebrating together",
    duration: "1:19",
    poster: gymCelebration,
    src: "/videos/gym-celebration.mp4",
    source: "https://www.instagram.com/reel/DcYqY8RCN06/",
  },
] as const;
