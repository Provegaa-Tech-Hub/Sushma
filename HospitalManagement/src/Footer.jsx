import React from "react";

import { FaFacebookF, FaTwitter, FaVimeoV, FaRss } from "react-icons/fa";


const FooterSection = () => {
    const footerData = {
        title: "As the only hospital in our growing county, things are buzzing as we expand our facilities and services. We are an intimate, 200 licensed bed hospital and the caregivers of neighbors we love."

    }


    const socialLinks = [
        {
            id: 1,
            icon: FaFacebookF,
            link: "#",
        },
        {
            id: 2,
            icon: FaTwitter,
            link: "#",
        },
        {
            id: 3,
            icon: FaVimeoV,
            link: "#",
        },
        {
            id: 4,
            icon: FaRss,
            link: "#",
        },
    ];

    const departmentData = [
        "Psychiatry",
        "Ophthalmology",
        "Cardiology",
        "Immunology",
        "Hematology",
        "Gastroenterology",
        "Orthopedics",
        "Pulmonary",
    ];

    const linksData = [
        "About Us",
        "Appointment",
        "Contact Us",
        "Blog",
        "Doctors",
        "Gallery",
        "Timetable",
        "FAQs",
    ]

    const footerLinks = [
        {
            id: 1,
            name: "Privacy Policy",
            link: "#",
        },
        {
            id: 2,
            name: "Terms & Conditions",
            link: "#",
        },
        {
            id: 3,
            name: "Help Center",
            link: "#",
        },
    ];

    const copyrightData = {
        year: 2019,
        company: "Meditex",
        text: "All rights reserved.",
    };

    const newsLetterData = {
        title: "NEWSLETTER",
        description:
            "Subscribe to our newsletter. We are not spammers.!",
        fields: [
            {
                id: "email",
                type: "email",
                placeholder: "Enter Your Email*",
            },
        ],
        buttonText: "SUBSCRIBE",
    }
    const { title, description, placeholder, buttonText } =
        newsLetterData;
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col4">
                            <div className="footer-widget">
                                <h2>About Us</h2>
                                <p> {footerData.title}</p>
                                <ul className="social-media">
                                    <li>
                                        <a href="#">
                                            <FaFacebookF />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <FaTwitter />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <FaVimeoV />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <FaRss />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-dep-1">
                            <div className="footer-widget ">
                                <h2>Departments</h2>
                                <ul>
                                    {departmentData.map((department) => (
                                        <li key={department}>
                                            {department}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>


                        <div className="col-dep-1">
                            <div className="footer-widget">
                                <h2>Links</h2>
                                <ul>
                                    {linksData.map((link) => (
                                        <li key={link}>
                                            {link}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col4">
                            <div className="footer-widget">
                                <h2>{title}</h2>
                                <p> {description}</p>
                                <form>
                                    {newsLetterData.fields.map((field) => (
                                        <div className="form-group" key={field.id}>
                                            <input
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                required
                                            />
                                        </div>
                                    ))}

                                    <button type="submit" className="theme-btn">
                                        {newsLetterData.buttonText}
                                    </button>
                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div className="footer-last">
                <div className="container">
                    <div className="row">
                        <div className="col3">
                            <div className="left">
                                <p>
                                    &copy; {copyrightData.year}
                                    <span>{copyrightData.company}.{" "}</span>
                                    {copyrightData.text}
                                </p>

                            </div>
                            <div className="right">
                                <ul>
                                    {footerLinks.map((item) => (
                                        <li key={item.id}>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}
export default FooterSection;