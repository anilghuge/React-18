import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
let UserDetailsContext = createContext(null);

export function FirstLevelComponent() {
  const user = useContext(UserDetailsContext);

  return (
    <div className="bg-warning p-4 text-dark">
      <h2 className="text-white">First Level Component {user}</h2>
      <SecondLevelComponent />
    </div>
  );
}

export function SecondLevelComponent() {
  const user = useContext(UserDetailsContext);
  return (
    <div className="bg-danger p-4 text-dark">
      <h2 className="text-white">Second Level Component -{user}</h2>
    </div>
  );
}

export function ContextDemo() {
  const [userName, setUserName] = useState("Anil");

  function UserChange(e) {
    setUserName(e.target.value);
  }

  return (
    <div className="container-fluid p-4 bg-dark">
      <UserDetailsContext.Provider value={userName}>
        <div>
          <label className="text-white">User Name:</label>
          <input type="text" onChange={UserChange} />
        </div>
        <h2 className="text-white">Context Parent -{userName}</h2>
        <FirstLevelComponent></FirstLevelComponent>
      </UserDetailsContext.Provider>
    </div>
  );
}
