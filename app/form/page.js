"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the submitted data to the console

    fetch("/api/contact/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          toast("Thank you for contacting us!");
        } else {
          toast("Email/Password is invalid.");
        }
      })
      .catch((e) => console.log(e));
    reset();
  };

  return (
    <>
      <div className="h-screen w-screen  bg-base-100 text-base-content p-7 grid grid-cols-2 space-x-7">
        <div className="flex flex-col  justify-center items-center  ">
          <h1 className="text-3xl font-bold py-5">Madhura</h1>
          <p>Affordable Wheels, Unbelievable Deals.</p>
        </div>
        <div className="justify-center my-auto  items-center">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label">
                <span className=" label-text text-black ">Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="name"
                placeholder="Full name"
                {...register("fullName", { required: true })}
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-black label-text">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-black label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                placeholder="Phone"
                {...register("phone", { required: true })}
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-black label-text">Model</span>
              </label>
              <input
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                defaultValue={""}
                {...register("message", { required: true })}
                className="w-full input input-bordered"
              />
            </div>

            <div>
              <button type="submit" className="btn btn-primary btn-block">
                Start Ride
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
