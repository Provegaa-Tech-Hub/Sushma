// src/utils/helpers.js

// Generate unique ID
export const generateId = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

// Deep copy object
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Format Date
export const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString();
};

// Find member by ID
export const findMemberById = (members, id) => {
  return members.find((member) => member.id === id);
};

// Find children
export const findChildren = (members, parentId) => {
  return members.filter((member) => member.parentId === parentId);
};

// Find spouse
export const findSpouse = (members, personId) => {
  return members.find((member) => member.spouseId === personId);
};

// Check if member has children
export const hasChildren = (members, personId) => {
  return members.some((member) => member.parentId === personId);
};

// Random color
export const randomColor = () => {
  const colors = [
    "#4f46e5",
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
    "#14b8a6",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

// Capitalize text
export const capitalize = (text = "") => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Download file
export const downloadFile = (filename, content, type = "text/plain") => {
  const blob = new Blob([content], { type });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = filename;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);
};

// Convert File to Base64
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
};

// Debounce
export const debounce = (func, delay = 300) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// Clamp number
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

// Sort members by name
export const sortByName = (members) => {
  return [...members].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
};

// Get initials
export const getInitials = (name = "") => {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

// Validate image file
export const isImageFile = (file) => {
  return file && file.type.startsWith("image/");
};

// Validate JSON file
export const isJsonFile = (file) => {
  return file && file.type === "application/json";
};

// Empty object check
export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};