export default function Page() {
  return (
    <div className="p-6 flex items-center flex-col gap-y-4">
      <h1 className="text-white font-bold text-2xl text-center mb-4">
        Product List
      </h1>

      <div className="w-full">
        <button className="button is-info">+ Add Product</button>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Weight</th>
            <th>Dimension</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>hahaishdi</td>
            <td>dsjhfjkdshf</td>
            <td>kjsagfjsdgfjds</td>
            <td>kshfjksdf</td>
            <td>kjsahjksd</td>
            <td>kjsahfjksd</td>
          </tr>
        </tbody>
      </table>

      <div className="flex gap-x-4">
        <button className="button">Previous</button>
        <button className="button">Next</button>
      </div>
    </div>
  );
}
