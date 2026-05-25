import { Subtitles } from "lucide-react";
import React from "react";

const widgetData = [
    {
        id: 1,
        title: "User Review",
        subtitle: "Eum fuga consequuntur ut et.",

    }
];


const users = [
    {
        id: 1,
        name: "John Doe",
        time: "4 days ago",
        image: "./images/1.svg",
        message:
            "Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n",
    },
];

const WidgetHeader = () => {
    return (
        <>
        <div>
             {
                widgetData.map((item) =>
                    <div className="geex-content__widget__single__user" key={item.id}>

                        <h4 className="geex-content__widget__single__usertitle" >
                            {item.title}
                        </h4>

                        <p className="geex-content__widget__single__usersubtitle" >
                            {item.subtitle}
                        </p>

                    </div>
                )}
        </div>


        <div className="user-card-container">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          {/* Header */}
          <div className="user-header">
            <img
              src={user.image}
              alt={user.name}
              className="user-image"
            />

            <div>
              <h4>{user.name}</h4>
              <p>{user.time}</p>
            </div>
          </div>

          {/* Message */}
          <div className="user-message">
            <p>{user.message}</p>
          </div>

          {/* Actions */}
          <div className="user-actions">
            <button className="archive-btn">
              Archive
            </button>

            <button className="accept-btn">
              Accept
            </button>
          </div>
        </div>
      ))}
    </div>
           
        </>
    );
};
export default WidgetHeader;