import React from "react";
import { urlForImage } from "../sanity/lib/image";

export default function Card({ car }) {
  const imageUrl = urlForImage(car.image);

  return (
    <div className="card w-full bg-white text-black shadow-3xl ">
      <figure>
        <img src={imageUrl} alt={car.name} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{car.name}</h2>
        <div className="text-sm mt-2">
          <span>{car.model}</span> &bull; <span>{car.modelNumber}</span> &bull;{" "}
          <span>{car.transmission}</span> &bull; <span>{car.km_runed} km</span>{" "}
          &bull; <span>{car.noOfOwners}</span> &bull; <span>{car.fuel}</span>{" "}
          &bull;
          <span>{car.engineCapacity} CC</span>&bull;
          <span> Seat : {car.seating}</span>
        </div>

        <div className="flex gap-2 mt-2">
          <div className="badge badge-info "> {car.Insurance}</div>

          <div className="badge badge-info ">
            <span>Mileage:</span> {car.mileage}
          </div>
        </div>

        <div className="text-sm">
          <strong>Manufactured Date:</strong> {car.mfg}
        </div>

        <div className="text-sm">
          <strong>Registration Year:</strong> {car.regYear}
        </div>

        <div className="card-actions justify-end">
          <div className="badge badge-success">₹{car.emi}</div>
          <div className="badge badge-success">₹{car.price}</div>
        </div>
      </div>
    </div>
  );
}
