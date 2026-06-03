const MeditexSection = () => {
    const meditexData = {
        title: "WELCOME TO ",
        title1: "MEDITEX",
        highlight: "Our mission is to provide first-class independent healthcare for the local community in a safe, comfortable, and welcoming environment.",
        subtitle: "In addition to delivering excellent care and service, we want to inspire people to see their health in a new way. More than doctor visits and medical tests, but a lifelong journey of small, manageable steps. These are some of the things we’ve been recognized for again and again over the years",
        buttonText: "Get In Touch",
    };

    const communityData = {
        title: "DOCTOR TO THE",
        highlight: "COMMUNITY.",
        description:
            "We offer extensive medical procedures to outbound and inbound patients.",
        buttonText: "MAKE AN APPOINTMENT",
        buttonLink: "#",
    };

    const awardsData = [
        {
            id: 1,
            image: "./images/awards-1.png",
            alt: "Award 1",
        },
        {
            id: 2,
            image: "./images/awards-2.png",
            alt: "Award 2",
        },
        {
            id: 3,
            image: "./images/awards-3.png",
            alt: "Award 3",
        },
        {
            id: 4,
            image: "./images/awards-4.png",
            alt: "Award 4",
        },
    ];
    return (
        <>
            <section className="welcome_section">
                <div className="row">
                    <div className="col2">
                        <div className="heading">
                            <h1>
                                {meditexData.title}{" "}
                                <span>{meditexData.title1} </span>
                            </h1>

                            <h6>{meditexData.highlight}</h6>{" "}
                            <p>
                                {meditexData.subtitle}
                            </p>

                        </div>
                        <ul className="awards-list">
                            {awardsData.map((award) => (
                                <li key={award.id}>
                                    <img
                                        src={award.image}
                                        alt={award.alt}
                                        className="img-fluid"
                                    />
                                </li>
                            ))}
                        </ul>
                        <button className="read-btn">
                            {meditexData.buttonText}
                        </button>
                    </div>
                </div>
            </section>
            <section className="doc-community">
                <div className="row">
                    <div className="col3">
                        <div className="doc_community_text">
                            <h1>
                                {communityData.title}
                                <span> {communityData.highlight}</span>
                            </h1>

                            <p>{communityData.description}</p>
                        </div>

                        <div className="mak_appointment">
                            <a href={communityData.buttonLink}>
                                {communityData.buttonText}
                            </a>
                        </div>

                    </div>

                </div>

            </section>
        </>

    )
}
export default MeditexSection