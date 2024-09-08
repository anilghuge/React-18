import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function TutorialVideos() {
  const [cookie, setCookie, removeCookie] = useCookies(["uname"]);
  let navigate = useNavigate();
  useEffect(() => {
    if (cookie.uname == null) {
      navigate("/login");
    }
  }, []);

  function handleSignoutClick() {
    removeCookie("uname");
    navigate("/login");
  }

  return (
    <div>
      <h3>
        Our Tutorials Videos -{cookie.uname}{" "}
        <button className="btn btn-link" onClick={handleSignoutClick}>
          Signout
        </button>
      </h3>
      <iframe
        width="400"
        height="300"
        src="https://www.youtube.com/embed/woMAXn4e8NA"
      ></iframe>
    </div>
  );
}
