import { useRef, useState } from "react";


function PhotoUploader({ photo, onPhotoChange }) {
  const fileInputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      onPhotoChange(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleInput = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="photo-uploader">
      <div
        className={`upload-box ${dragging ? "dragging" : ""}`}
        onClick={() => fileInputRef.current.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        {photo ? (
          <img
            src={photo}
            alt="Preview"
            className="preview-image"
          />
        ) : (
          <>
            <div className="upload-icon">📷</div>
            <p>Click or Drag Photo Here</p>
          </>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleInput}
      />

      {photo && (
        <button
          className="remove-photo-btn"
          onClick={() => onPhotoChange("")}
        >
          Remove Photo
        </button>
      )}
    </div>
  );
}

export default PhotoUploader;