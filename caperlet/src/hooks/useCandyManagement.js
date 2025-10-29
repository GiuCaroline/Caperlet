import { useState } from "react";
import { apiRequest } from "../utils/api";

export function useCandyManagement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function createCandy(candyData) {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("/products/candies", "POST", candyData);
      if (!data.success) throw new Error(data.message);
      return data.candy;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  async function deleteCandy(id) {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest(`/products/candies/${id}`, "DELETE");
      if (!data.success) throw new Error(data.message);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { createCandy, deleteCandy, loading, error };
}