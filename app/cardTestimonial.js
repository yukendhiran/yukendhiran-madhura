import React from "react";
import { urlForImage } from "../sanity/lib/image";

export default function CardTestimonials({ testimonial }) {
  const imageUrl = urlForImage(testimonial.image);
  return (
    <div className="card w-full h-full image-full shadow-xl">
      <figure>
        <img src={imageUrl} alt={testimonial.name} />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{testimonial.name}</h2>
        <p>{testimonial.description}</p>
      </div>
    </div>
  );
}
