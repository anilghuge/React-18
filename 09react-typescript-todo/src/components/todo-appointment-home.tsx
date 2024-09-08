import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { AppointmentContract } from "../contracts/AppointmentContract";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function TodoAppointmentHome() {
  const [Cookies, setCookies, removeCookies] = useCookies(["userId"]);
  const [appointments, setAppointments] = useState<AppointmentContract[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/userappointments/${Cookies[`userId`]}`)
      .then((res) => {
        setAppointments(res.data);
      });
  }, [appointments]);

  let navigate = useNavigate();

  function handleSignout() {
    removeCookies("userId");
    navigate("/");
  }

  function handleRemoveClick(e: any) {
    axios.delete(`http://localhost:4000/deletetask/${e.target.value}`);
    //navigate("/appointments");
    window.location.reload();
  }

  return (
    <div className="p-4 text-white">
      <h4>
        Your Appointments -{Cookies["userId"]}{" "}
        <button className="btn btn-warning" onClick={handleSignout}>
          Sigout
        </button>
        <div className="mt-2 mb-2">
          <button className="bi bi-calendar btn btn-light">
            Add Appointment
          </button>
        </div>
      </h4>
      <main>
        {appointments.map((appointment) => (
          <div className="alert alert-warning alert-dismissible p-2">
            <div className="card-header">
              <h4>{appointment.Title}</h4>
              <button
                className="btn btn-close"
                value={appointment.Id}
                onClick={handleRemoveClick}
              ></button>
            </div>
            <div className="card-body">
              <p>{appointment.Description}</p>
              <p className="text-end text-secondary">
                {appointment.Date
                  ? new Date(appointment.Date).toLocaleDateString()
                  : "Invalid Date"}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
