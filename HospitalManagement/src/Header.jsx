import { ShoppingCart, Search, Home, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaSkype, FaVimeoV, FaShareAlt, } from "react-icons/fa";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const Header = () => {
    const navLinks = [
        {
            title: "Home",
            submenu: ["Home-1", "Home-2", "Home-3", "Home-4", "Home-5"],
        },
        {
            title: "Departments",
            submenu: ["Cardiology", "Neurology", "Orthopedics", "Pulmonary"],
        },
        {
            title: "Pages",
            submenu: ["About Us", "Doctors", "Gallery", "FAQ"],
        },
        {
            title: "Blog",
            submenu: ["Blog Grid", "Blog List", "Blog Details"],
        },
        {
            title: "Shop",
            submenu: ["Products", "Cart", "Checkout", "My Account"],
        },
    ];

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

    const [open, setOpen] = useState(false);


    const languages = [
        {
            code: "FRA",
            flag: "./images/language-1.jpg",
        },
        {
            code: "GRE",
            flag: "./images/language-2.jpg",
        },
        {
            code: "FRA",
            flag: "./images/language-1.jpg",
        }
    ];
    const topBar = {
        title: " 7088 Micaela Cliffs, Thielshire, OK 95062"
    }

    return (
        <header>
            <div className="top-bar">
                <div className="row">
                    <div className="col3">
                        <div className="float-left">

                            <p>
                                <MapPin size={15} />  {topBar.title}
                            </p>

                        </div>
                        <div className="float-right">
                            <div className="inner-sec">
                                <ul className="social-icons1">
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
                        </div>

                        <div className="language-dropdown language-drp">
                            <button
                                className="dropdown-btn"
                                onClick={() => setOpen(!open)}
                            >
                                <img
                                    src="./images/language-1.jpg"
                                    alt="ENG"
                                />
                                <span>
                                    {languages.code}
                                </span>
                                
                                <ChevronDown size={18} />
                            </button>

                            {open && (
                                <ul className="dropdown-menu">
                                    {languages.map((item) => (
                                        <li key={item.code}>
                                            <img
                                                src={item.flag}
                                                alt={item.code}
                                            />
                                            <span>{item.code}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>


                    </div>

                </div>

            </div>
            <nav className="navbar">
                <img src="./images/default-logo.png" alt="logo" />

                <ul className="nav-menu">
                    {navLinks.map((item) => (
                        <li className="nav-item" key={item.title}>
                            <a href="#">{item.title}</a>

                            <ul className="submenu">
                                {item.submenu.map((subItem) => (
                                    <li key={subItem}>
                                        <a href="#">{subItem}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <div className="header-icons">
                    <Search size={14} />
                    <ShoppingCart size={14} />
                </div>
            </nav>
        </header>
    );
};

export default Header;