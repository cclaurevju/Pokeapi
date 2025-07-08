// src/hooks/useAxios.ts
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(url);
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, get };
};
