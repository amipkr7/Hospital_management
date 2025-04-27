import React, { useEffect, useState } from "react";

const AppointmentUser = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const email = sessionStorage.getItem("email");
        console.log("Fetching appointments for:", email);

        const response = await fetch(
          "http://localhost:5000/api/v1/appointment/user/getAllAppointments",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email }),
          }
        );

        const data = await response.json();
        console.log("Appointments:", data);
        if (data.appointments) {
          setAppointments(data.appointments);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div
      className="appointment-user-container"
      style={{
        width: "80%",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Your Appointments
      </h2>

      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <div
            key={appointment._id}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#007bff" }}>
              Dr. {appointment.doctor?.firstName} {appointment.doctor?.lastName}
            </h3>
            <p>
              <strong>Patient Name:</strong> {appointment.firstName}{" "}
              {appointment.lastName}
            </p>
            <p>
              <strong>Department:</strong> {appointment.department}
            </p>
            <p>
              <strong>Date of Appointment:</strong>{" "}
              {new Date(appointment.appointment_date).toLocaleDateString()}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    appointment.status === "Accepted"
                      ? "green"
                      : appointment.status === "Rejected"
                      ? "red"
                      : "orange",
                  fontWeight: "bold",
                }}
              >
                {appointment.status}
              </span>
            </p>
            <p>
              <strong>Gender:</strong> {appointment.gender}
            </p>
            <p>
              <strong>DOB:</strong>{" "}
              {new Date(appointment.dob).toLocaleDateString()}
            </p>
            <p>
              <strong>Phone:</strong> {appointment.phone}
            </p>
            <p>
              <strong>Address:</strong> {appointment.address}
            </p>
            <p>
              <strong>Visited:</strong> {appointment.hasVisited ? "Yes" : "No"}
            </p>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#777" }}>
          No appointments found.
        </p>
      )}
    </div>
  );
};

export default AppointmentUser;
