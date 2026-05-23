import React from "react";

export const featureData = [
    {
        id: 1,
        subtitle: "Memory",
        title: "200TB",
        badge: "+2.5%",
        image: "/images/feature-2.svg",
    },
    {
        id: 2,
        subtitle: "Visitors",
        title: "87,245k",
        badge: "-4.4%",
        badgeColor:"#FF0000",
        image: "/images/feature-3.svg",
    },
    {
        id: 3,
        subtitle: "New Users",
        title: "4,750",
        badge: " +2.5%",
        image: "/images/feature-3.svg",
    },
];

const FeatureCard = () => {
  return (
    <div className="feature-container">
      {featureData.map((item) => (
        <div className="geex-content__feature__card" key={item.id}>
          <div>
            <p className="geex-content__feature__card__subtitle">
              {item.subtitle}
            </p>

            <h4 className="geex-content__feature__card__title">
              {item.title}
            </h4>

            <span
              className="geex-content__feature__card__badge"
              style={{
                color: item.badgeColor,
                backgroundColor: item.badgeBg,
              }}
            >
              {item.badge}
            </span>
          </div>

          <div className="geex-content__feature__card__img">
            <img src={item.image} alt={item.subtitle} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default FeatureCard;