export const siteConfig = {
  name: "SHAN FITNESS",
  description:
    "Personal training, online coaching, customized workout plans, nutrition guidance, and progress follow-ups in Pulpatta, Malappuram.",
  whatsappNumberE164: "+918129961000",
  instagramUrl: "https://www.instagram.com/shan__fitness/",
  youtubeUrl: "https://www.youtube.com/@shanfitness4941/featured",
  address: {
    streetAddress: "South Trippanachi, Manjeri–Kizhisseri Road, Pulpatta",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    postalCode: "676123",
    addressCountry: "IN",
    display:
      "South Trippanachi, Manjeri–Kizhisseri Road, Pulpatta, Malappuram, Kerala 676123, India.",
  },
  featuredTrainer: {
    name: "Shanoob CK",
    achievement: "Mr. Kerala 2019 — Second Runner-up",
    // Keep rank optional until the owner confirms lead/main trainer wording.
    role: "",
  },
} as const;

const messages = {
  personal:
    "Hi SHAN FITNESS! I'd like to know more about your personal training programs.",
  online:
    "Hi SHAN FITNESS! I'd like to know more about your online personal training programs.",
  general:
    "Hi SHAN FITNESS! I'd like some guidance on getting started with my fitness goals.",
} as const;

export function whatsappUrl(
  context: keyof typeof messages = "personal",
): string {
  return `https://wa.me/${siteConfig.whatsappNumberE164.replace(/\D/g, "")}?text=${encodeURIComponent(messages[context])}`;
}
