import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
export function TutorialRegister() {
  let navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [userError, setUserError] = useState("");
  const [validClass, setValidClass] = useState("");

  const formik = useFormik({
    initialValues: {
      UserId: "",
      UserName: "",
      Password: "",
      Mobile: "",
    },
    onSubmit: (user) => {
      axios.post("http://127.0.0.1:4040/registeruser", user);
      alert("Registered Successfully..!!");
      navigate("/login");
    },
  });

  useEffect(() => {
    axios.get("http://127.0.0.1:4040/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  function VerifyUserId(e) {
    for (var user of users) {
      if (user.UserId === e.target.value) {
        setUserError("User Id Token -Try Another");
        setValidClass("text-danger");
        break;
      } else {
        setUserError("User Id Avaiable");
        setValidClass("text-success");
      }
    }
  }

  return (
    <div>
      <form className="w-25" onSubmit={formik.handleSubmit}>
        <h3>Register User</h3>
        <dl>
          <dt>User ID</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              name="UserId"
              onChange={formik.handleChange}
              onKeyUp={VerifyUserId}
            />
          </dd>
          <dd className={validClass}>{userError}</dd>
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              name="UserName"
              className="form-control"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="text"
              name="Password"
              className="form-control"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              className="form-control"
              onChange={formik.handleChange}
            />
          </dd>
        </dl>
        <button className="btn btn-primary w-100">Register</button>
      </form>
      <p>
        <Link to="/login">Existing User?Login</Link>
      </p>
    </div>
  );
}
