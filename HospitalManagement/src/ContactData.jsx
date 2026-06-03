import {
    Phone,
    MapPin,
    Mail,
    CalendarDays,
} from "lucide-react";

const ContactSection = () => {
    const contactData = [
        {
            id: 1,
            icon: Phone,
            title: "Emergency Cases:",
            text: "(052) 611-5711",
        },
        {
            id: 2,
            icon: MapPin,
            title: "E7088 Micaela Cliffs",
            text: " Thielshire, OK 95062",
        },
        {
            id: 3,
            icon: Mail,
            title: "Email Address",
            text: "contact@meditex.com",
        },
        {
            id: 4,
            icon: CalendarDays,
            title: "Book Online",
            text: "Appointment Now",
        },
    ];




    return (
        <div className="contact_through">
                <div className="row">
                    {contactData.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                className="col1"
                                key={item.id}
                            >
                                <div className="contact_through_inner">
                                    <Icon className="icon" size={40} color="#568701" />

                                    <p>
                                        {item.title}
                                        <br />
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
        </div>
    )
}
export default ContactSection;
