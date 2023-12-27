import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  function submitProduct() {}

  return (
    <div className="min-h-screen p-6 flex flex-col items-center gap-y-4">
      <h1 className="text-white font-bold text-2xl text-center mb-4">
        Add New Product
      </h1>

      <div className="flex justify-between w-96">
        <label className="text-white">Name</label>
        <input
          className="input !w-64 w"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex justify-between w-96">
        <label className="text-white">Weight (gr)</label>
        <input
          className="input !w-64"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="flex justify-between w-96">
        <label className="text-white">Width (cm)</label>
        <input
          className="input !w-64"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>

      <div className="flex justify-between w-96">
        <label className="text-white">Length (cm)</label>
        <input
          className="input !w-64"
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div className="flex justify-between w-96">
        <label className="text-white">Height (cm)</label>
        <input
          className="input !w-64"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="flex justify-between w-96">
        <label className="text-white">Image Link</label>
        <input
          className="input !w-64"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="flex justify-between w-96">
        <label className="text-white">Price</label>
        <input
          className="input !w-64"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="mt-5">
        <button className="button is-info" onClick={submitProduct}>
          Submit
        </button>
      </div>
    </div>
  );
}
