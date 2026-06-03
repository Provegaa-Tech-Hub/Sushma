import React from "react";
import { CalendarDays } from "lucide-react";

const AppointmentForm = () => {
  const appointmentData = {
    title: "Emergency",
    phone: "(052) 611-5711",
    subtitle: "Urgent cases are always seen immediately. Always stand out In the event of an emergency, please call us as soon as like out possible we can.",
  };
  const workHours = [
    { day: "Mon - Thu........", time: "7:00 - 17:00" },
    { day: "Friday........", time: "7:30 - 17:00" },
    { day: "Saturday........", time: "8:00 - 16:00" },
    { day: "Sunday........", time: "9:00 - 16:00" },
    { day: "Holiday........", time: "9:00 - 11:00" },
  ];

  const fields = [
    {
      id: "name",
      type: "text",
      placeholder: "Name*",
    },
    {
      id: "email",
      type: "email",
      placeholder: "Email*",
    },
    {
      id: "phone",
      type: "text",
      placeholder: "Phone*",
    },
  ];

  return (
    <section className="appointment_section">
      <div className="container">
        <div className="appointment_inner">
          <div className="row">
            <div className="col1">
              <div className="appont_sec_inner">
                <h1>
                  {appointmentData.title}{" "}
                </h1>
                <span>
                  {appointmentData.phone}
                </span>{" "}
                <p>
                  {appointmentData.subtitle}
                </p>
              </div>
            </div>
            <div className="col1">
              <div className="appont_sec_inner1">
                <h6>WORK HOURS</h6>
                <ul>
                  {workHours.map((item, index) => (
                    <li key={index}>
                      {item.day}
                      <span className="work-time"> {item.time}</span>

                    </li>
                  ))}
                </ul>

              </div>

            </div>

            <div className="col2">
              <div className="appont_sec_inner1">
                <h6>
                  Book an appointment
                </h6>
                <form>
                  <div className="row">
                    {fields.map((field) => (
                      <div
                        key={field.id}
                        className="col2"
                      >
                        <div className="form-group">
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                          />
                        </div>
                      </div>
                    ))}

                    <div className="col2">
                      <div className="form-group  ">
                        <input
                          type="date"
                          placeholder="Date"
                        />
                       
                      </div>
                    </div>

                    <div className="col3">
                      <button
                        className="theme-btn"
                        type="submit"
                      >
                        BOOK YOUR APPOINTMENT NOW
                      </button>
                    </div>
                  </div>
                </form>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  )

}
export default AppointmentForm;