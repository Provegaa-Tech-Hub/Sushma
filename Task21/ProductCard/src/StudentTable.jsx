function StudentTable() {

    const students = [

        { id: 1, name: "Rahul", email: "rahul@gmail.com", course: "React JS" },

        { id: 2, name: "Sushma", email: "sushma@gmail.com", course: "Node JS" },

        { id: 3, name: "Arjun", email: "arjun@gmail.com", course: "JavaScript" }
    ];

    return (
        <div>
            <h1>Student List</h1>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student) => (

                            <tr key={student.id}>

                                <td>{student.id}</td>

                                <td>{student.name}</td>

                                <td>{student.email}</td>

                                <td>{student.course}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );
}

export default StudentTable;