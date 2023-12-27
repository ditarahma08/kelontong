import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  async function getProductList() {
    try {
      const response = await fetch("http://localhost:3001/api/product");
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="p-6 min-vh-100 d-flex flex-column align-items-center">
      <h1 className="mb-4">
        <b>Product List</b>
      </h1>

      <div className="w-100">
        <button
          className="button is-info mb-4"
          onClick={() => router.push("/add")}
        >
          + Add Product
        </button>
      </div>

      <table className="table w-100">
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

      <div className="d-flex">
        <button className="button mr-4">Previous</button>
        <button className="button">Next</button>
      </div>
    </div>
  );
}
