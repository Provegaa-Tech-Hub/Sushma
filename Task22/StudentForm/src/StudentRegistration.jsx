import { useState } from "react";
function StudentRegistration() {

    const [student, setStudent] = useState({
        name: "",
        email: "",
        cousre: ""

    });
    function handleChange(e) {
        setStudent({
            ...student, [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Form is Submitted Successfully");
        console.log(student);

    }

    return (
        <div className="container-form">
            <h1>
                Student Registration Form
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" value={student.name} onChange={handleChange}>
                </input>

                <br></br>
                <br></br>
                <input type="email" name="email" placeholder="Enter Email" value={student.email} onChange={handleChange}>
                </input>
                <br></br>
                <br></br>
                <input type="text" name="course" placeholder="Enter Course" value={student.course} onChange={handleChange}>
                </input>
                <br></br>
                <br></br>
                <button type="submit" className="btn">Register</button>
            </form>

            <hr />
            <h2>Live Preview</h2>
            <p>
                <strong>Name:</strong>{student.name}
            </p>
            <p>
                <strong>Email:</strong>{student.email}
            </p>
            <p>
                <strong>Course:</strong>{student.course}
            </p>


        </div>
    );
}
export default StudentRegistration;