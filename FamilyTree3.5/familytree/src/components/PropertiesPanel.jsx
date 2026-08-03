

function PropertiesPanel({
  selectedPerson,
  familyMembers,
  setFamilyMembers,
}) {
  if (!selectedPerson) {
    return (
      <aside className="properties-panel">
        <h3>Properties</h3>
        <p>Select a family member to edit.</p>
      </aside>
    );
  }

  const updateProperty = (property, value) => {
    setFamilyMembers((prev) =>
      prev.map((member) =>
        member.id === selectedPerson.id
          ? {
              ...member,
              [property]: value,
            }
          : member
      )
    );
  };

  return (
    <aside className="properties-panel">
      <h3>Properties</h3>

      <div className="property-group">
        <label>Name</label>
        <input
          type="text"
          value={selectedPerson.name}
          onChange={(e) => updateProperty("name", e.target.value)}
        />
      </div>

      <div className="property-group">
        <label>Occupation</label>
        <input
          type="text"
          value={selectedPerson.occupation || ""}
          onChange={(e) =>
            updateProperty("occupation", e.target.value)
          }
        />
      </div>

      <div className="property-group">
        <label>Birth / Death</label>
        <input
          type="text"
          value={selectedPerson.dates || ""}
          onChange={(e) =>
            updateProperty("dates", e.target.value)
          }
        />
      </div>

      <div className="property-group">
        <label>Gender</label>

        <select
          value={selectedPerson.gender}
          onChange={(e) =>
            updateProperty("gender", e.target.value)
          }
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="property-group">
        <label>Card Color</label>

        <input
          type="color"
          value={selectedPerson.fillColor || "#ffffff"}
          onChange={(e) =>
            updateProperty("fillColor", e.target.value)
          }
        />
      </div>

      <div className="property-group">
        <label>Border Color</label>

        <input
          type="color"
          value={selectedPerson.borderColor || "#4f46e5"}
          onChange={(e) =>
            updateProperty("borderColor", e.target.value)
          }
        />
      </div>

      <div className="property-group">
        <label>Text Color</label>

        <input
          type="color"
          value={selectedPerson.textColor || "#000000"}
          onChange={(e) =>
            updateProperty("textColor", e.target.value)
          }
        />
      </div>

      <div className="property-group">
        <label>Photo Shape</label>

        <select
          value={selectedPerson.photoShape || "circle"}
          onChange={(e) =>
            updateProperty("photoShape", e.target.value)
          }
        >
          <option value="circle">Circle</option>
          <option value="rounded">Rounded</option>
          <option value="square">Square</option>
        </select>
      </div>

      <div className="property-group">
        <label>Card Shape</label>

        <select
          value={selectedPerson.shape || "rounded"}
          onChange={(e) =>
            updateProperty("shape", e.target.value)
          }
        >
          <option value="rounded">Rounded</option>
          <option value="rectangle">Rectangle</option>
          <option value="circle">Circle</option>
          <option value="hexagon">Hexagon</option>
          <option value="apple">Apple</option>
          <option value="rose">Rose</option>
        </select>
      </div>
    </aside>
  );
}

export default PropertiesPanel;