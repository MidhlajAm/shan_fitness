import firstBefore from "../assets/transformations/member-01-before.webp";
import firstAfter from "../assets/transformations/member-01-after.webp";
import secondBefore from "../assets/transformations/member-02-before.webp";
import secondAfter from "../assets/transformations/member-02-after.webp";

// Exact source mapping; originals are kept locally with descriptive filenames.
// Both pairs explicitly approved by the owner in this chat, 2026-10-11.
// Permission is per member; set publicationApproved=false to remove a pair.
export const transformations = [
  {
    id: "member-01",
    publicationApproved: true,
    before: firstBefore,
    after: firstAfter,
    sources: [
      "source-assets/transformations/member-01-before.heic",
      "source-assets/transformations/member-01-after.heic",
    ],
  },
  {
    id: "member-02",
    publicationApproved: true,
    before: secondBefore,
    after: secondAfter,
    sources: [
      "source-assets/transformations/member-02-before.heic",
      "source-assets/transformations/member-02-after.heic",
    ],
  },
];
