import CardTestimonials from "./cardTestimonial";
import { client } from "../sanity/lib/client";

async function fetchTestimonials() {
  try {
    const queryTestimonials = `*[_type == "testimonials"]`;
    const testimonial = await client.fetch(queryTestimonials, {
      cache: "no-store",
    });
    return testimonial;
  } catch (error) {
    console.error("Error fetching featured cars:", error);
    return [];
  }
}
export default async function Testimonials() {
  const testimonials = await fetchTestimonials();

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
