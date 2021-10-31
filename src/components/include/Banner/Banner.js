import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner d-flex justify-content-center align-items-center">
              <div className="banner-text text-center">
                <h1 className="text-white text-uppercase">adventure is worthwhile</h1>
                <h5 className="text-white text-capitalize">discover new places with us, adventure awaits</h5>
                <button className="btn btn-outline-warning mt-3 text-capitalize">discover more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
