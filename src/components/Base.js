import React from "react";
import "./Base.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Base(){
  return (
    <>
      <div className="bg-blend"></div>
      <div className="container-soc">
        <div className="nav-box ">
   
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


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <p className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children} 
      </Link>
    </p>
  )
}