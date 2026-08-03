import PersonCard from "./PersonCard";


function FamilyTree({
  members,
  selectedPerson,
  setSelectedPerson,
  onAddPerson,
  onEditPerson,
  onDeletePerson,
}) {
  return (
    <div className="tree-container">
      <div className="tree-header">
        <h2>🌳 Family Tree</h2>

        <button
          className="add-btn"
          onClick={onAddPerson}
        >
          + Add Member
        </button>
      </div>

      {members.length === 0 ? (
        <div className="empty-tree">
          <h3>No Family Members</h3>
          <p>Click "Add Member" to begin building your family tree.</p>
        </div>
      ) : (
        <div className="tree-grid">
          {members.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              selected={selectedPerson?.id === person.id}
              onSelect={() => setSelectedPerson(person)}
              onEdit={() => onEditPerson(person)}
              onDelete={() => onDeletePerson(person.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FamilyTree;