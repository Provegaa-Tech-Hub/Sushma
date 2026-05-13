import { useState } from "react";

function StudentForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    return (

        <div className="container">

            <h1>Student Registration Form</h1>

            {/* Name Input */}

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {/* Email Input */}

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {/* Course Input */}

            <input
                type="text"
                placeholder="Enter Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />

            {/* Live Preview */}

            <div className="preview">

                <h2>Live Preview</h2>

                <p>
                    <strong>Name:</strong> {name}
                </p>

                <p>
                    <strong>Email:</strong> {email}
                </p>

                <p>
                    <strong>Course:</strong> {course}
                </p>

            </div>

        </div>

    );
}

export default StudentForm;