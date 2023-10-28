import Hero from "./hero";

import Testimonials from "./testimonials";
import Categories from "./categoriesOfCars";

//////////////////////////////////////////////////

export default function Home() {
  return (
    <main className="text-base">
      <Hero />
      <div className="bg-base-100 text-base-content flex p-10">
        <a className="btn btn-primary mx-auto" href="/products">
          See Products
        </a>
      </div>

      <Testimonials />
      <Categories />
    </main>
  );
}
