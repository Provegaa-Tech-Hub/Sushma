import { useEffect, useState } from "react";
function AddPersonModal({
  editMode,
  person,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    gender: "male",
    dates: "",
    occupation: "",
    photo: "",
    photoShape: "circle",
    shape: "rounded",
    fillColor: "#ffffff",
    borderColor: "#4f46e5",
    textColor: "#000000",
  });

  useEffect(() => {
    if (editMode && person) {
      setFormData({
        ...formData,
        ...person,
      });
    }
  }, [editMode, person]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      setFormData((prev) => ({
        ...prev,
        photo: event.target.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter a name.");
      return;
    }

    onSave(formData);
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-header">
          <h2>
            {editMode ? "Edit Person" : "Add Person"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Gender</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Birth / Death</label>

          <input
            type="text"
            name="dates"
            placeholder="1990 - Present"
            value={formData.dates}
            onChange={handleChange}
          />

          <label>Occupation</label>

          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          />

          <label>Photo</label>

          <input
            type="file"
            accept="image/*"
            onChange={handlePhoto}
          />

          {formData.photo && (
            <img
              src={formData.photo}
              alt="Preview"
              className="photo-preview"
            />
          )}

          <label>Photo Shape</label>

          <select
            name="photoShape"
            value={formData.photoShape}
            onChange={handleChange}
          >
            <option value="circle">Circle</option>
            <option value="rounded">Rounded</option>
            <option value="square">Square</option>
          </select>

          <label>Card Color</label>

          <input
            type="color"
            name="fillColor"
            value={formData.fillColor}
            onChange={handleChange}
          />

          <label>Border Color</label>

          <input
            type="color"
            name="borderColor"
            value={formData.borderColor}
            onChange={handleChange}
          />

          <label>Text Color</label>

          <input
            type="color"
            name="textColor"
            value={formData.textColor}
            onChange={handleChange}
          />

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              {editMode ? "Update" : "Save"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddPersonModal;