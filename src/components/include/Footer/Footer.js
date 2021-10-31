import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className=" p-5" id="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4 border-end">
            <div className="p-3 text-center">
              <h4 className="text-white ms-2">
                {" "}
                <span className="text-primary">Travel</span> Boss
              </h4>
              <ul className="me-4">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/myorders">My Orders</Link>
                </li>
                <li>
                  <Link to="/allorders">All Orders</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 border-end">
            <div className="p-3 text-center">
              <h4 className="text-white ms-2">Hot Line</h4>
              <ul className="me-4">
                <li>
                  <Link to="">+0202020202</Link>
                </li>
                <li>
                  <Link to="">+0303030303</Link>
                </li>
                <li>
                  <Link to="">+0404040404</Link>
                </li>
                <li>
                  <Link to="">+0505050505</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 text-center">
              <h4 className="text-white">Follow Us</h4>
              <div>
                <Link to="" className="d-block custom-icon-border">
                  <FontAwesomeIcon icon={faLinkedinIn} className="faIcon" />
                </Link>
                <Link to="" className="d-block custom-icon-border">
                  <FontAwesomeIcon icon={faFacebookF} className="faIcon" />
                </Link>
                <Link to="" className="d-block custom-icon-border">
                  <FontAwesomeIcon icon={faTwitter} className="faIcon" />
                </Link>
                <Link to="" className="d-block custom-icon-border">
                  <FontAwesomeIcon icon={faInstagram} className="faIcon" />
                </Link>
              </div>
            </div>
          </div>

          <hr className="text-white mt-4 border" />

          <div className="col-md-12">
            <p className="text-center text-white mt-4">
              &copy; All Right Reserved By<span className="text-primary fw-bold"> Travel Boss</span> Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
