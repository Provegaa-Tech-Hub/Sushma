// src/utils/constants.js

// Application
export const APP_NAME = "Family Tree";
export const APP_VERSION = "1.0.0";

// Default Colors
export const DEFAULT_COLORS = {
  fill: "#ffffff",
  border: "#4f46e5",
  text: "#000000",
};

// Card Shapes
export const CARD_SHAPES = [
  "rectangle",
  "rounded",
  "circle",
  "hexagon",
  "apple",
  "rose",
  "diamond",
  "oval",
];

// Photo Shapes
export const PHOTO_SHAPES = [
  "circle",
  "rounded",
  "square",
];

// Gender Options
export const GENDERS = [
  {
    value: "male",
    label: "Male",
    icon: "♂",
  },
  {
    value: "female",
    label: "Female",
    icon: "♀",
  },
  {
    value: "other",
    label: "Other",
    icon: "⚧",
  },
];

// Theme Colors
export const COLOR_PALETTE = [
  "#4f46e5",
  "#2563eb",
  "#0ea5e9",
  "#10b981",
  "#22c55e",
  "#eab308",
  "#f97316",
  "#ef4444",
  "#ec4899",
  "#8b5cf6",
  "#14b8a6",
  "#64748b",
];

// Relationship Types
export const RELATIONSHIP_TYPES = [
  "Parent",
  "Child",
  "Spouse",
  "Sibling",
];

// Default Person
export const DEFAULT_PERSON = {
  id: null,
  name: "",
  gender: "male",
  dates: "",
  occupation: "",
  photo: "",

  parentId: null,
  spouseId: null,
  children: [],

  shape: "rounded",
  photoShape: "circle",

  fillColor: DEFAULT_COLORS.fill,
  borderColor: DEFAULT_COLORS.border,
  textColor: DEFAULT_COLORS.text,
};

// Export Types
export const EXPORT_TYPES = [
  "JSON",
  "PNG",
  "PDF",
];

// Local Storage Keys
export const STORAGE_KEYS = {
  FAMILY_TREE: "familyTree",
  LANGUAGE: "language",
  THEME: "theme",
};

// Supported Languages
export const LANGUAGES = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "hi",
    name: "Hindi",
  },
  {
    code: "te",
    name: "Telugu",
  },
];

// Image Upload
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB

export const IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
];

// Zoom
export const MIN_ZOOM = 0.5;
export const MAX_ZOOM = 2;
export const DEFAULT_ZOOM = 1;

// Grid
export const CARD_WIDTH = 220;
export const CARD_HEIGHT = 280;
export const CARD_GAP = 40;

// Toast
export const TOAST_DURATION = 3000;

// Animation
export const ANIMATION_DURATION = 300;

// Default Font
export const DEFAULT_FONT = "Segoe UI";