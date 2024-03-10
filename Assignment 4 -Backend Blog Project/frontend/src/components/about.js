import React from "react";
import { Link } from "react-router-dom";

export default function about() {
  return (
    <>
      <ul>
        <li>
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
        <li>
          {" "}
          <Link to={{ pathname: "/blog" }}>My Blogs</Link>
        </li>
        <li>
          <Link to={{ pathname: "/about" }}>About Me</Link>
        </li>
      </ul>
      <hr></hr>
      <div>About Me</div>

      {/* please enter your detail here  */}
    </>
  );
}
