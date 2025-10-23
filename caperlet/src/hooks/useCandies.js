import { useState } from "react";
import { apiRequest } from "../utils/api";

export function useCandies() {
    const [candies, setCandies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  async function fetchCandies() {
    setLoading(true);
    setErro(null);
    try {
      const data = await apiRequest("/products/candies", "GET");
      if (!data.success) throw new Error(data.message);
      setCandies(data.candies);
      return data.candies;
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { fetchCandies, candies, setCandies, loading, erro };
}