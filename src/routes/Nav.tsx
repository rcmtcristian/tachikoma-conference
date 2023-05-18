import React from "react";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

function nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <a className="link-styled" href="https://rcmtcristian.com/">
              Buy
            </a>
          </li>
          <li>
            <a className="link-styled" href="https://rcmtcristian.com/">
              History
            </a>
          </li>
          <li>
            <a className="link-styled" href="https://rcmtcristian.com/">
              Gallery
            </a>
          </li>
          <li>
            <a className="link-styled" href="https://rcmtcristian.com/">
              Ethos
            </a>
          </li>
          <li>
            <a className="link-styled" href="https://rcmtcristian.com/">
              Contact
            </a>
          </li>
          <li>
            <a className="link-styled" href="https://rcmtcristian.com/">
              About
            </a>
          </li>
          <li>
            <a className="link-styled" href="https://rcmtcristian.com/">
              AI
            </a>
          </li>
          <li>
            <img src={Search} alt="search" />
          </li>
          <li>
            <img src={Store} alt="store" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default nav;
