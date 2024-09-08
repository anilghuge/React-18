import { Link } from "react-router-dom";

export function Invalid() {
  return (
    <div>
      <h3>Invalid</h3>
      <Link to={"/login"}>Try Again</Link>
    </div>
  );
}
