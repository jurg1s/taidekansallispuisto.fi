import React from "react";
import "./Base.css";

const Base = () => {
  return (
    <>
      <div className="bg-blend"></div>
      <div className="container-soc">
        <div className="nav-box ">
          <div className="news">
            <p>uutiset&nbsp;&#8628;</p>
          </div>

          <div className="soc-f">
            <a href="https://www.facebook.com/taidekansallispuisto">
              <img src="/images/icons/icon-facebook.svg" alt="facebook" />
            </a>
          </div>

   

          <div className="soc-i">
            <a href="https://www.instagram.com/taidekansallispuisto/">
              <img src="/images/icons/icon-instagram.svg" alt="instagram" />
            </a>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default Base;
