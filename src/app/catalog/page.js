"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  async function getProductList() {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="p-6 flex items-center flex-col gap-y-4 min-h-screen">
      <h1 className="text-white font-bold text-2xl text-center mb-4">
        Product List
      </h1>

      <div className="w-full">
        <button className="button is-info" onClick={() => router.push("/add")}>
          + Add Product
        </button>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Dimension</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.weight}</td>
              <td>
                {product.width} x {product.length} x {product.height}
              </td>
              <td>
                <img src={product.image} alt={product.name} width="100" />
              </td>
              <td>Rp{product.harga}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-x-4">
        <button className="button">Previous</button>
        <button className="button">Next</button>
      </div>
    </div>
  );
}
