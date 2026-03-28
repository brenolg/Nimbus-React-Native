import axios, { AxiosRequestConfig, isAxiosError } from "axios";
import { useCallback, useState } from "react";

type UseFetchProps = {
  url: string;
  config?: AxiosRequestConfig;
};

export function useFetch<T = any>({ url, config }: UseFetchProps) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (customConfig?: AxiosRequestConfig) => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios({
          url,
          ...config,
          ...customConfig,
        });

        setData(response.data);
      } catch (err: unknown) {
        let message = "Erro na requisição";

        if (isAxiosError(err)) {
          message =
            err.response?.data?.message ||
            err.response?.statusText ||
            err.message;
        }

        setError(message);
      } finally {
        setLoading(false);
      }
    },
    [url, config],
  );

  return {
    data,
    loading,
    error,
    fetchData,
  };
}
