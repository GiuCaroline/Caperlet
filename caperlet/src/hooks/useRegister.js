import { useState } from "react";
import { apiRequest } from "../utils/api";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  async function register(name, email, phone, password) {
    setLoading(true);
    setErro(null);
    try {
      const data = await apiRequest("/auth/register", "POST", { name, email, phone, password });
      if (!data.sucess) throw new Error(data.message);
      return data.user;
    } catch (err) {
      setErro(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { register, loading, erro };
}