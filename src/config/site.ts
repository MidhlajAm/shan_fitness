export const siteConfig = {
  name: "SHAN FITNESS",
  description:
    "Personal and home training, weight loss, bodybuilding, ACL recovery support, Pilates, aerobics, and online coaching in Pulpatta, Malappuram.",
  whatsappNumberE164: "+918129961000",
  instagramUrl: "https://www.instagram.com/shan__fitness/",
  youtubeUrl: "https://www.youtube.com/@shanfitness4941/featured",
  googleMapsUrl:
    "https://www.google.com/maps/dir//526X%2BVV5+SHAN+FITNESS,+Manjeri+-+Kizhisseri+Rd,+Pulpatta,+South+Trippanachi,+Keralam+676123,+India/@11.0963583,76.0972005,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3ba649006fe1530f:0xc60e6c7c83f77d6c!2m2!1d76.049735!2d11.162097",
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
    name: "Shanoop CK",
    achievements: [
      "Mr. Kerala Men's Physique — 2017",
      "Mr. India participation",
    ],
    // Keep rank optional until the owner confirms lead/main trainer wording.
    role: "",
  },
} as const;

const messages = {
  personal:
    "Hi SHAN FITNESS! I'd like to know more about your personal training programs.",
  online:
    "Hi SHAN FITNESS! I'd like to know more about your online personal training programs.",
  home: "Hi SHAN FITNESS! I'd like to enquire about personal training at my home and check availability for my location.",
  weightLoss:
    "Hi SHAN FITNESS! I'd like to know more about your weight loss training.",
  bodybuilding:
    "Hi SHAN FITNESS! I'd like to know more about your bodybuilding training.",
  aclRecovery:
    "Hi SHAN FITNESS! I'd like to discuss training support during ACL recovery.",
  pilates:
    "Hi SHAN FITNESS! I'd like to know more about your Pilates sessions.",
  aerobics:
    "Hi SHAN FITNESS! I'd like to know more about your aerobics sessions.",
  general:
    "Hi SHAN FITNESS! I'd like some guidance on getting started with my fitness goals.",
} as const;

export function whatsappUrl(
  context: keyof typeof messages = "personal",
): string {
  return `https://wa.me/${siteConfig.whatsappNumberE164.replace(/\D/g, "")}?text=${encodeURIComponent(messages[context])}`;
}
