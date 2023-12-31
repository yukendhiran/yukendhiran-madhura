import Card from "./card";
import { client } from "../sanity/lib/client";

async function fetchFeaturedCars() {
  try {
    const queryFeaturedCars = `*[_type == "featuredCars"]`;
    const featuredCars = await client.fetch(queryFeaturedCars, {
      cache: "no-store",
    });
    return featuredCars;
  } catch (error) {
    console.error("Error fetching featured cars:", error);
    return [];
  }
}

export default async function FeaturedCars() {
  // const [featuredCars, setFeaturedCars] = useState([]);

  const featuredCars = await fetchFeaturedCars();
  // setFeaturedCars(cars);

  console.log(featuredCars);

  return (
    <div className="bg-base-100 text-base-content">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold py-5">Featured Cars</h1>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3">
            {featuredCars.map((car) => (
              <Card key={car._id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
