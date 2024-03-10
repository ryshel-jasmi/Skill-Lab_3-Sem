import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Myblogs() {
  const [fdata, setFData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000").then((res) => {
      console.log(res.data);
      setFData(res.data);
    });
  }, []);

  //******************delete db data */
  const deleteHandler = (e) => {
    console.log(e);
    Axios.post("http://localhost:4000/delete", { id: e }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        alert("data deleted not succesful");
      } else {
        alert("data deleted succesful");
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
      <div>My Blogs</div>
      <div style={{ backgroundColor: "greenyellow", width: "50%" }}></div>

      <div>
        {fdata.map((sdata) => {
          return (
            <div
              style={{
                backgroundColor: "aqua",
                width: "25%",
                float: "left",
                margin: "10px",
              }}
              key={sdata._id}
            >
              {sdata.title}
              <br></br>
              {sdata.content}
              <br></br>
              {sdata.author}
              <br></br>
              <button type="submit" onClick={() => deleteHandler(sdata._id)}>
                delete
              </button>
              --
              <Link to={{ pathname: `/update/${sdata._id}` }}>Update</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Myblogs;
