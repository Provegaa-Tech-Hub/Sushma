

function PersonCard({
  person,
  selected,
  onSelect,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className={`person-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {/* Photo */}
      <div className="photo-wrapper">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className={`photo ${person.photoShape || "circle"}`}
          />
        ) : (
          <div className={`photo placeholder ${person.photoShape || "circle"}`}>
            👤
          </div>
        )}
      </div>

      {/* Details */}
      <div className="person-info">
        <h3>{person.name}</h3>

        <span className={`gender ${person.gender}`}>
          {person.gender === "male"
            ? "♂"
            : person.gender === "female"
            ? "♀"
            : "⚥"}
        </span>

        {person.dates && (
          <p className="dates">{person.dates}</p>
        )}

        {person.occupation && (
          <p className="occupation">{person.occupation}</p>
        )}
      </div>

      {/* Actions */}
      <div className="card-actions">
        <button
          className="edit-btn"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        >
          ✏ Edit
        </button>

        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();

            if (window.confirm("Delete this family member?")) {
              onDelete();
            }
          }}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default PersonCard;