import { products } from "../../utils/product";

export default function handler(req, res) {
  res.status(200).json({ products });
}
