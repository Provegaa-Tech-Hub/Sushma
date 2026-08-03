import PersonCard from "./PersonCard";


function CoupleCard({
  husband,
  wife,
  marriageDate,
  onSelect,
  onEdit,
  onDelete,
}) {
  return (
    <div className="couple-card">

      <div className="couple-header">
        <span className="couple-title">💍 Couple</span>

        {marriageDate && (
          <span className="marriage-date">
            Married: {marriageDate}
          </span>
        )}
      </div>

      <div className="couple-members">
        {husband && (
          <PersonCard
            person={husband}
            selected={false}
            onSelect={() => onSelect(husband)}
            onEdit={() => onEdit(husband)}
            onDelete={() => onDelete(husband.id)}
          />
        )}

        <div className="marriage-line">
          ❤
        </div>

        {wife && (
          <PersonCard
            person={wife}
            selected={false}
            onSelect={() => onSelect(wife)}
            onEdit={() => onEdit(wife)}
            onDelete={() => onDelete(wife.id)}
          />
        )}
      </div>

    </div>
  );
}

export default CoupleCard;