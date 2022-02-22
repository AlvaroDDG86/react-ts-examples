import { useState, useEffect } from "react";

export type FetchOptions = {
  method: 'GET' | 'POST',
  body: string
}

function useFetchData <Payload>(url: string, options?: FetchOptions): {
  data: Payload | null,
  error: string | null,
  done: boolean
} {
  const [data, setData] = useState<Payload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    fetch(url, options)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp.status.toString());
        }
        return resp.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError("Something went wrong -> " + error);
        setData(null);
      })
      .finally(() => {
        setDone(true);
      });
  }, [url]);

  return {
    data,
    error,
    done,
  };
};

export default useFetchData;
