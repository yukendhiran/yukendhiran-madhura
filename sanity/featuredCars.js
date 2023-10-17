export default {
  title: "Featured Cars",
  name: "featuredCars",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },

    {
      name: "mfg",
      title: "MFG",
      type: "date",
    },
    {
      name: "regYear",
      title: "Registered Year",
      type: "date",
    },
    {
      name: "km_runed",
      title: "Km Runed",
      type: "number",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "Insurance",
      title: "Insurance",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "fuel",
      title: "Fuel",
      type: "string",
    },
    {
      name: "transmission",
      title: "Transmission",
      type: "string",
    },
    {
      name: "noOfOwners",
      title: "No of Owners",
      type: "string",
    },
    {
      name: "engineCapacity",
      title: "Engine Capacity",
      type: "number",
    },
    {
      name: "mileage",
      title: "Mileage",
      type: "number",
    },
    {
      name: "seating",
      title: "Seating",
      type: "number",
    },
    {
      name: "emi",
      title: "EMI",
      type: "string",
    },
    {
      name: "model",
      title: "Model",
      type: "string",
    },
    {
      name: "modelNumber",
      title: "Model Numbers",
      type: "string",
    },
  ],
};
