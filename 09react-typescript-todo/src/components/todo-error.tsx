import { Link } from "react-router-dom";

export function TodoError() {
  return (
    <div className="text-center bg-white">
      <h2 className="text-danger">Invalid Credentials</h2>
      <Link to={"/"}>Try Again</Link>
    </div>
  );
}
