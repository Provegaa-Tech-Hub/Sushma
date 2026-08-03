import { useRef, useState } from "react";

export default function usePhotoUpload(initialPhoto = "") {
  const [photo, setPhoto] = useState(initialPhoto);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

  const readFile = (file) => {
    if (!file) return;

    setError("");

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    if (file.size > MAX_SIZE) {
      setError("Image size must be less than 5 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      setPhoto(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    readFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.files.length > 0) {
      readFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const removePhoto = () => {
    setPhoto("");
    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return {
    photo,
    setPhoto,

    dragging,
    error,

    fileInputRef,

    openFilePicker,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    removePhoto,
  };
}