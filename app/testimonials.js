"use client";

import { useEffect, useState } from "react";
import CardTestimonials from "./cardTestimonial";
import { client } from "../sanity/lib/client";

async function fetchTestimonials() {
  try {
    const queryTestimonials = `*[_type == "testimonials"]`;
    const testimonial = await client.fetch(queryTestimonials);
    return testimonial;
  } catch (error) {
    console.error("Error fetching featured cars:", error);
    return [];
  }
}
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTestimonials = await fetchTestimonials();
      setTestimonials(fetchedTestimonials);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-base-100 text-base-content p-7">
      <div className="w-auto mx-auto">
        <h1 className="text-3xl font-bold py-5">Testimonials</h1>
        <div className="overflow-hidden">
          <div className="relative">
            <div className="py-12 marquee-element flex gap-3 whitespace-nowrap">
              {testimonials.map((testimonial) => (
                <div className="" key={testimonial._id}>
                  <CardTestimonials testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
