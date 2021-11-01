import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="py-5" id="review">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center py-3">
              <h2>
                What Our <span className="text-primary">Client</span> Say
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
            <div className="single-clint p-3 border mb-2">
              <div className="">
                <img
                  className="img-fluid"
                  src="https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508_960_720.jpg"
                  alt="profile img"
                />
              </div>
              <p>
                Approaching the imposing Sofitel St James hotel just off Pall Mall in St James, I felt compelled to
                stop and stare for a long lingering moment to enjoy its stunning Grade II-listed neoclassical
                façade. Part of AccorHotels the building is just beautiful. It was designed by E. Keynes Purchase
                in association with Durward Brown and was completed in 1923. It had a long life as a bank for many
                years before the French hotel group took it over and turned it into this fabulous hotel.
              </p>
              <h5>Juel Rana</h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-6">
            <div className="single-clint p-3 border">
              <div className="">
                <img
                  className="img-fluid"
                  src="https://ceduema.com/wp-content/uploads/2014/01/college-student-520x378.jpg"
                  alt="profile img"
                />
              </div>
              <p>
                The dark marble reception desk with its green cushioned backdrop and seemingly sky-high ceilings
                suggest that pleasure is a serious business delivered with precision. Staff are amazingly attentive
                and as this is a French hotel you are greeted in both French and English. Checking in is easy and
                my bags were taken to my room without any prompting. Later a text popped up on my WhatsApp asking
                if I was happy with my room. A nice touch.
              </p>
              <h5>Jasmin Akter</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
