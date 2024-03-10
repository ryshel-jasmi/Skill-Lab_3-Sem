import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import Axios from "axios";

function Home() {
  const [fdata, setFdata] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [msg, setMsg] = useState();

  //*************change handler */
  const ChangeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };

  //*************submit handler */
  const SubmitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/ins", { fdata }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        setMsg("Data inserted successful");
        console.log(msg);
        alert("data inserted successfully");
      } else {
        setMsg("Data not inserted ");
        console.log(msg);
        alert("data not inserted");
      }
    });
  };
  return (
    <>
      <ul>
        <li>
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
        <li>
          <Link to={{ pathname: "/blog" }}>My Blogs</Link>
        </li>
        <li>
          <Link to={{ pathname: "/about" }}>About Me</Link>
        </li>
      </ul>

      <hr></hr>
      <div>Enter Blog Detail</div>

      <form onSubmit={SubmitHandler}>
        <label>title: </label>
        <input
          type="text"
          name="title"
          value={fdata.title}
          onChange={ChangeHandler}
        />
        <br></br>

        <label>content: </label>
        <input
          type="text"
          name="content"
          value={fdata.content}
          onChange={ChangeHandler}
        />
        <br></br>

        <label>author: </label>
        <input
          type="text"
          name="author"
          value={fdata.author}
          onChange={ChangeHandler}
        />

        <br></br>

        <button type="submit">Insert</button>
      </form>
    </>
  );
}

export default Home;
