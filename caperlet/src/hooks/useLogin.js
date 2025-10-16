import { useState } from "react";
import { apiRequest } from "../utils/api";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  async function login(email, password) {
    setLoading(true);
    setErro(null);
    try {
      const data = await apiRequest("/auth/login", "POST", { email, password });
      if (!data.sucess) throw new Error(data.message);
      return data.user;
    } catch (err) {
      setErro(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { login, loading, erro };
}