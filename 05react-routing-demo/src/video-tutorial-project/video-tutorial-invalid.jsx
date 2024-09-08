import { Link } from "react-router-dom";

export function TutorialInvalid() {
  return (
    <div>
      <h2 className="text-danger">Invalid Credentials</h2>
      <Link to={"/login"}>Try Again</Link>
    </div>
  );
}
