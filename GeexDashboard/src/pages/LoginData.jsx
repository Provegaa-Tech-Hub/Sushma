import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa"



const LoginData = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const fields = [

        {
            name: "email",
            label: "Your Email",
            type: "email",
            placeholder: "Enter Your Email",
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter Password",
        },

    ];

    const socialButtons = [
        { id: 1, name: "Google", icon: FaGoogle },
        { id: 2, name: "Apple", icon: FaApple },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="signup-container">
            {/* Left Section */}
            <div className="signup-form-section">

                <img
                    src="/images/logo-dark.svg"
                    alt="Logo"
                    className="logo"
                />

                <h2>Sing In to Your Account👋</h2>

                <form onSubmit={handleSubmit}>
                    {fields.map((field) => (
                        <div className="input-group" key={field.name}>
                            <label>{field.label}</label>

                            <input
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    <button type="submit" className="signup-btn">
                        Sign Up
                    </button>
                </form>

                <div className="divider">
                    Or
                </div>

                <div className="social-buttons">
                    {socialButtons.map((item) => (
                        <button
                            key={item.id}
                            className="social-btn"
                        >
                            <item.icon size={22} />

                            {item.name}
                        </button>
                    ))}
                </div>

                <p className="signin-text">
                    Already have an account?
                    <a href="/signin"> Sign In</a>
                </p>
            </div>

            {/* Right Section */}
            <div className="signup-banner-section">
                <img
                    src="./images/authentication.svg"
                    alt="Signup Illustration"
                />
            </div>
        </div>
    );
};

export default LoginData;