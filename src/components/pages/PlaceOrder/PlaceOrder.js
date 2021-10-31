import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [packagesData, setPackagesData] = useState([]);

  const { id } = useParams();
  const matchedItem = packagesData?.find((singlePackage) => singlePackage.id === id);

  useEffect(() => {
    fetch(`/fakeData.json`)
      .then((res) => res.json())
      .then((data) => setPackagesData(data));
  }, []);

  return (
    <div className="section-margin">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="w-50 mx-auto text-center py-3">
              <h2>
                Our <span className="text-primary">Gallery</span>
              </h2>
              <p>
                Independent and unbiased travel reviews by The Travel Magazine. We test travel products, hotels,
                tours and activities to help you make an informed decision.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div>
              <h1>the package you have wanted</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
