export default function SearchVehicle() {
  return (
    <div className="bg-base-100 text-base-content">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold py-5">Search Vehicle</h1>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-4  sm:grid-rows-4 gap-4">
            <div className="col-span-1">
              <select className="select select-bordered w-full">
                <option disabled selected hidden>
                  Filter
                </option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
            </div>

            <div className="col-span-1">
              <select className="select select-bordered w-full">
                <option disabled selected hidden>
                  Filter
                </option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
            </div>

            <div className="col-span-1">
              <select className="select select-bordered w-full">
                <option disabled selected hidden>
                  Filter
                </option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
            </div>

            <div className="col-span-1">
              <select className="select select-bordered w-full">
                <option disabled selected hidden>
                  Filter
                </option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
            </div>

            <div className="indicator">
              <button className="btn btn-primary join-item">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
