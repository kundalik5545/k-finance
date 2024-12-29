import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [apiRes, setApiRes] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const apiFun = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setApiRes(response);
      setError(null);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { apiRes, loading, error, apiFun, setApiRes };
};

export default useFetch;
