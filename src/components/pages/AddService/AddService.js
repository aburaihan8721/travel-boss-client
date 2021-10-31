import React from "react";
import axios from "axios";
import "./AddService.css";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("https://safe-tor-64824.herokuapp.com/", data).then((res) => {
      if (res.data.insertedId) {
        alert("Data Added Successfully");
        reset();
      }
    });
  };

  return (
    <div className="section-margin py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="w-50 mx-auto border border-info p-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center py-3">
                  Add <span className="text-primary">Service</span>
                </h2>
                <input
                  className="form-control mb-3"
                  {...register("title", { required: true })}
                  placeholder="Name"
                />
                <textarea className="form-control mb-3" {...register("shortDes")} placeholder="Description" />
                <input className="form-control mb-3" {...register("price")} placeholder="Price" />
                <input className="form-control mb-3" {...register("image")} placeholder="image" />
                <input className="form-control mb-3 btn btn-success text-uppercase" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
