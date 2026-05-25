import React from "react";

const activityData = [
  {
    id: 1,
    date: "January 2nd, 04:35 AM",
    description:
      "Illum omnis quo illum nisi. Nesciunt est accusamus. Blanditiis nisi quae eum nisi similique.",
  },
  {
    id: 2,
    date: "January 4th, 06:19 AM",
    description:
      "Corrupti unde qui molestiae labore ad adipisci veniam perspiciatis quasi.",
  },
  {
    id: 3,
    date: "January 5th, 12:34 AM",
    description:
      "Maiores doloribus qui. Repellat accusamus minima ipsa ipsam aut debitis.",
  },
];

const DashBoard = () => {
  return (
    <div className="activity-card">
      <h2 className="activity-title">
        Latest Activity
      </h2>

      <p className="activity-subtitle">
        Sit et tempora dicta omnis ab quia quo quo.
      </p>

      {activityData.map((item) => (
        <div className="timeline-item" key={item.id}>
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h4>{item.date}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoard;