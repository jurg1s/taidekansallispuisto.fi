import React from "react";
import "./Uutiset.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"


const Uutiset = () => {
  return (
    <div>
            <div className="container-soc">
        <div className="nav-box ">
          <div className="news">
            <Link  to="/">
              <p>takaisin&nbsp;&#8628;</p>
            </Link >
            </div>
            </div>
            </div>
      <div className="container">
        <div className="cont-box ">
          <div className="inside ">
            <div className="uutiset">
            <h1>tulossa pian!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uutiset;
