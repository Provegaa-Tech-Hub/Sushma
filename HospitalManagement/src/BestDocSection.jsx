import { ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import {FaFacebookF,FaTwitter,FaSkype,FaVimeoV,FaShareAlt,} from "react-icons/fa";

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
        icon: FaSkype,
        link: "#",
    },
    {
        id: 4,
        icon: FaVimeoV,
        link: "#",
    },
    {
         id: 5,
        icon: FaShareAlt,
        link: "#",
    }
];

const doctors = [
    {
        id: 1,
        image: "./images/best-doctors1.jpg",
        name: "Dr. Genoveva Leannon",
        department: "Internal Medicine",
        title: "Dr. Will Marvin is an internist in Rochester, MN, and has been in practicebetween 5-10 years."
    },
    {
        id: 2,
        image: "./images/best-doctors2.jpg",
        name: "Dr. Bethany Kertzmann",
        department: "Anesthesiology",
        title: "Dr. Bethany Kertzmann is an anesthesiologist in Rochester, MN, and has been in practice between 3-5 years."
    },
    {
        id: 3,
        image: "./images/best-doctors3.jpg",
        name: "Dr. Danielle Bechtelar",
        department: "Cardiology",
        title: "Dr. Danielle Bechtelar is a cardiologist in Rochester, MN, and has been in practice between 5-10 years"
    },
    {
        id: 4,
        image: "./images/best-doctors1.jpg",
        name: "Dr. John Smith",
        department: "Neurology",
        title: "Dr. John Smith is a cardiologist inRochester, MN, and has been in practicebetween 5-10 years"
    },

];

const BestDocSection = () => {
    const [index, setIndex] = useState(0);

    const cardWidth = 390; // card width + gap

    const nextSlide = () => {
        if (index < doctors.length - 3) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const bestDocData = {
        title: "Best Doctors ",
        subtitle: "For You",
    };

    return (
        <div className="best-doctors">
            <div className="row">
                <div className="col3">
                    <div className="heading">
                        <h1>
                            {bestDocData.title}
                            <span>{bestDocData.subtitle}</span>
                        </h1>

                        <div className="arrow-btns">
                            <button
                                className="btn-right"
                                onClick={prevSlide}
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                className="btn-right"
                                onClick={nextSlide}
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-wrapper">
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${index * cardWidth}px)`,
                    }}
                >
                    {doctors.map((doctor) => (
                        <div className="doctor-card" key={doctor.id}>
                            <img className="doctor-img"
                                src={doctor.image}
                                alt={doctor.name}
                            />

                            <div className="doctor-content">
                                <h3>{doctor.name}</h3>
                                <span>{doctor.department}</span>
                            </div>
                            <p>
                                {doctor.title}
                            </p>

                            <ul className="social-icons">
                                {socialLinks.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <li key={item.id}>
                                            <a href={item.link}>
                                                <Icon size={18} />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}


                </div>
            </div>

            <button className="seeall-btn">
                See All Doctors
            </button>
        </div>
    );
};

export default BestDocSection;