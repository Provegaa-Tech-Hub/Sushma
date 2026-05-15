import { useState } from "react";
function FeedbackForm() {
    const [feedback, setFeedback] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    function handleChange(e) {
        setFeedback({
            ...feedback, [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Feedback Submitted");
        console.log(feedback);
    }

    return (
        <div className="container-form">
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" value={feedback.name} onChange={handleChange}>
                </input>
                <br></br>
                <br></br>
                <input type="email" name="email" placeholder="Enter Email" value={feedback.email} onChange={handleChange}>
                </input>
                <br></br>
                <br></br>
                <input type="text" name="subject" placeholder="Enter Subject" value={feedback.subject} onChange={handleChange}>
                </input>
                <br></br>
                <br></br>
                <textarea name="message" placeholder="Enter your feedback" rows={5} value={feedback.message} onChange={handleChange}>
                </textarea>
                <br></br>
                <br></br>
                <button type="submit" className="btn1">Submit</button>

            </form>

        </div>
    )
}
export default FeedbackForm;