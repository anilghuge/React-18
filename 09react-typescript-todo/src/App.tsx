import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToDoLogin } from "./components/todo-login";
import { ToDoRegister } from "./components/todo-register";
import { TodoAppointmentHome } from "./components/todo-appointment-home";
import { TodoError } from "./components/todo-error";

function App() {
  return (
    <div className="conatiner-fluid">
      <div className="shade">
        <header className="p-2 text-center bg-dark text-white">
          <h1>To-Do -Your Appointment</h1>
        </header>
        <section>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ToDoLogin />}></Route>
              <Route path="/register" element={<ToDoRegister />}></Route>
              <Route path="/appointments" element={<TodoAppointmentHome />} />
              <Route path="/error" element={<TodoError />}></Route>
            </Routes>
          </BrowserRouter>
        </section>
      </div>
    </div>
  );
}

export default App;
