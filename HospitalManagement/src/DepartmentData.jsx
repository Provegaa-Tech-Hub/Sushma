import {
    Brain,
    Eye,
    Heart,
    Droplets,
    ScanHeart,
    Accessibility,
    Activity,
    Orbit,
} from "lucide-react";

const DeparmentSection = () => {
    const departmentData = [
        {
            id: 1,
            icon: Brain,
            title: "Psychiatry",
            subtitle: "In its ongoing attempts to define, understand, and categorize disorders...",

        },
        {
            id: 2,
            icon: Eye,
            title: "Ophthalmology",
            subtitle: "Our mission is to improve quality of life through the enhancement of vision...",
        },
        {
            id: 3,
            icon: Heart,
            title: "Cardiology",
            subtitle: "​Our areas of expertise make the department a national cardiac referral centre...",
        },
        {
            id: 4,
            icon: Orbit,
            title: "Immunology",
            subtitle: "The immune system provides the defense for an organism to repel invasion...",
        },
        {
            id: 5,
            icon: Droplets,
            title: "Hematology",
            subtitle: "In the medical field, hemato- logy includes the treatment of blood...",
        },
        {
            id: 6,
            icon: ScanHeart,
            title: "Gastroenterology",
            subtitle: "With nationally and inter- nationally known experts in gastroenterology...",
        },
        {
            id: 7,
            icon: Accessibility,
            title: "Orthopedics",
            subtitle: "We have a diverse team of clinicians, administrators, and researchers...",
        },
        {
            id: 8,
            icon: Activity,
            title: "Pulmonary",
            subtitle: "Medicol is one of the leading medical facilities in America for the diagnosis...",
        }

    ];
    const departmentHeader = {
        title: "OUR",
        highlight: "DEPARTMENTS",
        buttonText: "VIEW ALL CASES",
        buttonLink: "#",
    };

    return (
        <div className="department_section">
            <div className="row">
                <div className="col3">
                    <div className="heading clearfix">
                        <h1>
                            {departmentHeader.title}{" "}
                            <span>{departmentHeader.highlight}</span>
                        </h1>

                        <p>
                            <a href={departmentHeader.buttonLink}>
                                {departmentHeader.buttonText}
                            </a>
                        </p>
                    </div>
                </div>
                <div className="department_inner">
                    <div className="row">
                        <div className="col3">
                            {departmentData.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div className="department_icon_content" key={item.id}>
                                        <Icon
                                            size={70}
                                            strokeWidth={1.5}
                                            color="#5c8f00"
                                            className="dep-icon"
                                        />

                                        <h2>{item.title}</h2>
                                        <p>{item.subtitle}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default DeparmentSection

