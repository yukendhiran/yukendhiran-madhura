import Navbar from "./nav";
import Hero from "./hero";
import Footer from "./foot";
import SearchVehical from "./searchVehical";
import FeaturedCars from "./featuredCars";
import Testimonials from "./testimonials";
import Categories from "./categoriesOfCars";

//////////////////////////////////////////////////

export default function Home() {
  return (
    <main className="text-base">
      <Navbar />
      <Hero />
      <SearchVehical />
      <FeaturedCars />

      <Testimonials />
      <Categories />
      <Footer />
    </main>
  );
}
