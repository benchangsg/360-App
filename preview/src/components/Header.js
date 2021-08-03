import React from "react";
import HeaderItem from "./HeaderItem";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            John's
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
              {props.data.map((data) => (
                <HeaderItem id={data.id} title={data.title} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
