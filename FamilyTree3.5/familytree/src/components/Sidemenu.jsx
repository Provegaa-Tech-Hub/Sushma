// src/components/Sidebar.jsx

import { useRef } from "react";


function Sidebar({
  hidden,
  setHidden,
  uploadedPhotos,
  setUploadedPhotos,
}) {
  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      setUploadedPhotos((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: file.name,
          data: event.target.result,
        },
      ]);
    };

    reader.readAsDataURL(file);

    e.target.value = "";
  };

  return (
    <aside className={`sidebar ${hidden ? "hide" : ""}`}>
      <div className="sidebar-header">
        <h3>Family Tree</h3>

        <button onClick={() => setHidden(!hidden)}>
          {hidden ? "➜" : "⬅"}
        </button>
      </div>

      {/* Shapes */}

      <div className="sidebar-section">
        <h4>Card Shapes</h4>

        <div className="shape-grid">
          <button>Rectangle</button>
          <button>Rounded</button>
          <button>Circle</button>
          <button>Hexagon</button>
          <button>Apple</button>
          <button>Rose</button>
        </div>
      </div>

      {/* Upload */}

      <div className="sidebar-section">
        <h4>Upload Photos</h4>

        <button
          className="upload-btn"
          onClick={() => fileInputRef.current.click()}
        >
          Upload
        </button>

        <input
          ref={fileInputRef}
          type="file"
          hidden
          accept="image/*"
          onChange={handleUpload}
        />
      </div>

      {/* Photos */}

      <div className="sidebar-section">
        <h4>Recent Uploads</h4>

        <div className="photo-grid">
          {uploadedPhotos.length === 0 ? (
            <p>No Photos</p>
          ) : (
            uploadedPhotos.map((photo) => (
              <div className="photo-card" key={photo.id}>
                <img src={photo.data} alt={photo.name} />
                <span>{photo.name}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;