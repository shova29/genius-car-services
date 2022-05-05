import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    const url = `https://floating-depths-55387.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Your Items is added successfully!!");
      });
    e.target.reset();
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please add a service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="ps-2 mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="ps-2 mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="ps-2 mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input
          className="ps-2 mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
