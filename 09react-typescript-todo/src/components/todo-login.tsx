import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { UserContract } from "../contracts/UserContract";
import axios from "axios";
import { useCookies } from "react-cookie";

export function ToDoLogin() {
  let navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["userId"]);
  const formik = useFormik<UserContract>({
    initialValues: {
      UserId: "",
      Password: "",
    },
    onSubmit(value) {
      axios.get("http://localhost:4000/users").then((res) => {
        let user: UserContract = { UserId: "", Password: "" };
        let found: boolean = false;
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].UserId === parseInt(value.UserId)) {
            user = res.data[i];
            found = true;
            break;
          }
        }
        if (
          user &&
          found &&
          user.UserId.toString() === value.UserId &&
          user.Password === value.Password
        ) {
          setCookies("userId", value.UserId);
          navigate("/appointments");
        } else {
          //alert("Invalid Crendentials");
          navigate("/error");
        }
      });
    },
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form
        className="w-25 bg-dark p-2 text-white rounded-2"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="bi bi-person">User Login</h2>
        <div className="mb-3">
          <label className="form-label fw-bold text-white">User Id</label>
          <div>
            <input
              type="text"
              onChange={formik.handleChange}
              name="UserId"
              className="form-control"
              autoComplete="false"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold text-white">Password</label>
          <div>
            <input
              type="password"
              onChange={formik.handleChange}
              name="Password"
              className="form-control"
              autoComplete="false"
            />
          </div>
        </div>
        <div className="mb-2">
          <button className="btn btn-warning w-100">Login</button>
        </div>
        <div>
          <Link to={"/register"} className="btn btn-light w-100">
            New UserRegister
          </Link>
        </div>
      </form>
    </div>
  );
}
