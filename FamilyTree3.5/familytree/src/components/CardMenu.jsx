

function CardMenu({
  visible,
  x,
  y,
  onAddChild,
  onAddSpouse,
  onEdit,
  onDelete,
  onClose,
}) {
  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="menu-overlay"
        onClick={onClose}
      />

      {/* Context Menu */}
      <div
        className="card-menu"
        style={{
          top: y,
          left: x,
        }}
      >
        <button onClick={onAddChild}>
          👶 Add Child
        </button>

        <button onClick={onAddSpouse}>
          ❤️ Add Spouse
        </button>

        <button onClick={onEdit}>
          ✏ Edit
        </button>

        <button
          className="delete"
          onClick={onDelete}
        >
          🗑 Delete
        </button>
      </div>
    </>
  );
}

export default CardMenu;