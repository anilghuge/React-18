import React from "react";
import {Link} from "react-router-dom"

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Data Binding</Link>
        </li>
        <li>
          <Link to="/twowaybinding">Two-Way Data Binding</Link>
        </li>
        <li>
          <Link to="/databindingarray">Data Binding Array</Link>
        </li>
        <li>
          <Link to="/databindingobject">Data Binding Object</Link>
        </li>
        <li>
          <Link to="/databindingdate">Data Binding Date</Link>
        </li>

      </ul>
    </nav>
  );
}
