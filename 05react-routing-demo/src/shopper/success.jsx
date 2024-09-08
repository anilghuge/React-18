import { useParams } from "react-router-dom";

export function Success() {
  let param = useParams();
  return (
    <div>
      <h3>Success {param.uname}</h3>
    </div>
  );
}
