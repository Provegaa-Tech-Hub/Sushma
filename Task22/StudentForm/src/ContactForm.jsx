import { useState } from "react";
function ContactForm() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: ""
    })
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setContact({
            ...contact, [e.target.name]: e.target.value

        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        console.log(contact);
    }


    return (
        <div className="main-container">
            <div className="form-box">
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <span>*</span>
                </label>
                <input type="text" name="name" placeholder="Enter Name" value={contact.name} onChange={handleChange} required>
                </input>
                <br></br>
                <br></br>
                <label>
                    Email: <span>*</span>
                </label>
                <input type="email" name="email" placeholder="Enter Email" value={contact.email} onChange={handleChange} required>
                </input>
                <br></br>
                <br></br>
                <label>
                    Contact No: <span>*</span>
                </label>
                <input type="text" name="phonenumber" placeholder="Enter Phone Number" value={contact.phonenumber} onChange={handleChange} required>
                </input>
                <br></br>
                <br></br>
                <label>
                    Message:
                </label>
                <textarea name="message" placeholder="Enter your message" rows={5} value={contact.message} onChange={handleChange} required>
                </textarea>
                <br></br>
                <br></br>
                <button type="submit" className="btn2">Send Message</button>

            </form>

                {
                    submitted && (

                        <p className="success-msg">
                            Your Query has been received.
                            <br />
                            We'll contact you soon.
                        </p>

                    )
                }
        </div>
        </div>
        
    )

}
export default ContactForm;