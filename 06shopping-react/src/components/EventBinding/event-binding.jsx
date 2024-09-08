import { useState } from "react";

export function EventBinding() {
  const [msg, setMsg] = useState();

  function InsertClick(e) {
    switch (e.target.name) {
      case "Insert":
        setMsg("Record Insert..");
        break;
      case "Update":
        setMsg("Record Update..");
        break;
      case "Delete":
        setMsg("Record Delete..");
        break;
      default:
        console.log("No Option Select");
    }

    console.log(`
    X Position:${e.clientX}\n
    Button Name:${e.target.name}`);
  }

  return (
    <div className="container-fluid">
      <h2>Event Binding</h2>
      <button name="Insert" onClick={InsertClick}>
        Insert
      </button>
      <button name="Update" onClick={InsertClick}>
        Update
      </button>
      <button name="Delete" onClick={InsertClick}>
        Delete
      </button>
      <p>{msg}</p>
    </div>
  );
}
