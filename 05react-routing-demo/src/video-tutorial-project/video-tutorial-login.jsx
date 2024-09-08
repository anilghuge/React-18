import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function TutorialLogin() {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["uname"]);

  const formik = useFormik({
    initialValues: {
      UserId: "",
      Password: "",
    },
    onSubmit: (user) => {
      axios.get("http://localhost:4040/users").then((res) => {
        // for (var item of res.data) {
        //   if (item.UserId === user.UserId && item.Password === user.Password) {
        //     navigate("/videos");
        //   } else {
        //     navigate("/invalid");
        //   }
        // }
        var userDetails = res.data.find((item) => item.UserId === user.UserId);
        if (
          (userDetails.UserId === user.UserId ** userDetails.Password) ===
          user.Password
        ) {
          setCookie("uname", user.UserId, [
            { expires: new Date("2024-03-15") },
          ]);
          navigate("/videos");
        } else {
          navigate("/invalid");
        }
      });
    },
  });

  useEffect(() => {
    if (window.navigator.cookieEnabled) {
      alert("You can login");
    } else {
      alert("Please Enable Cookie on your browser");
    }
    if (cookies.uname == null) {
      alert("Please Login");
    } else {
      navigate("/videos");
    }
  }, []);

  return (
    <div>
      <form className="w-25" onSubmit={formik.handleSubmit}>
        <h3>Login User</h3>
        <dl>
          <dt>User ID</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              name="UserId"
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              name="Password"
              onChange={formik.handleChange}
            />
          </dd>
        </dl>
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>
      <p>
        <Link to="/register">New User Register</Link>
      </p>
    </div>
  );
}
