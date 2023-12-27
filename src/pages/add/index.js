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
    <div className="min-vh-100 p-6 d-flex flex-column align-items-center">
      <h1 className="mb-4">
        <b>Add New Product</b>
      </h1>

      <div className="d-flex flex-column w-100 mb-2">
        <label className="text-white mb-4">Name</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="d-flex flex-column w-100 mb-2">
        <label className="text-white mb-4">Weight (gr)</label>
        <input
          className="input"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="d-flex flex-column w-100 mb-2">
        <label className="text-white mb-4">Width (cm)</label>
        <input
          className="input"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>

      <div className="d-flex flex-column w-100 mb-2">
        <label className="text-white mb-4">Length (cm)</label>
        <input
          className="input"
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div className="d-flex flex-column w-100 mb-2">
        <label className="text-white mb-4">Height (cm)</label>
        <input
          className="input"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="d-flex flex-column w-100 mb-2">
        <label className="text-white mb-4">Image Link</label>
        <input
          className="input"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="d-flex flex-column w-100 mb-4">
        <label className="text-white mb-4">Price</label>
        <input
          className="input"
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
