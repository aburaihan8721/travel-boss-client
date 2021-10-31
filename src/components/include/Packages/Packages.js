import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Packages.css";

const Packages = () => {
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    fetch(`/fakeData.json`)
      .then((res) => res.json())
      .then((data) => setPackagesData(data));
  }, []);

  return (
    <div className="packages-area py-4" id="packages-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="w-50 mx-auto text-center py-3">
              <h2>
                Our <span className="text-primary">Packages</span>
              </h2>
              <p>
                Independent and unbiased travel reviews by The Travel Magazine. We test travel products, hotels,
                tours and activities to help you make an informed decision.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {packagesData.map((singlePackage) => (
            <div className="col-md-4">
              <div className="single-package border p-2 shadow">
                <div>
                  <img className="img-fluid" src={singlePackage.image} alt="img" />
                </div>
                <h4>{singlePackage.title}</h4>
                <p>{singlePackage.shortDes}</p>
                <h5>{singlePackage.price}</h5>

                <Link to={`/package/${singlePackage.id}`}>
                  <button className="btn btn-outline-info text-capitalize text-dark">book now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
