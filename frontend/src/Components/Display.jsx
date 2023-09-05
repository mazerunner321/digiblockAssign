import React, { useState } from "react";
import "./display.css";

const Display = () => {
  const [text, setText] = useState("");
  const [info, setInfo] = useState({});

  const getGST = () => {
    return fetch(`https://busy-pear-seahorse-wear.cyclic.app/getData`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div className="container mx-auto text-center">
          <a className="navbar-brand" href="#">
            <h1 className="heading">GSTIN</h1>
          </a>
        </div>
      </nav>

      <div className="container">
        <form className="form-inline">
          <input
            className="form-control mr-2 mt-5"
            type="text"
            placeholder="Enter GSTIN"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="btnDiv mt-3">
            <button
              id="getButton"
              className="btn btn-primary "
              type="button"
              onClick={getGST}
            >
              Get
            </button>
          </div>
        </form>
      </div>

      <div className="container info_container">
        <h1 className="display-4 text-center">{info.lgnm}</h1>
        <h3 className="mt-3 mb-3">
          <span className="text-muted">{info.stj}</span> {info.stjCd}
        </h3>
        <p className="lead">{info.tradeNam}</p>
        <p>{info.ctj}</p>
      </div>
    </div>
  );
};

export default Display;
