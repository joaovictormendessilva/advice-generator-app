import axios from "axios";
import { useEffect, useState } from "react";
import { ResultType } from "./Type";

export function useGetMessages() {
  const [data, setData] = useState<ResultType>({} as ResultType);
  const [loading, setLoading] = useState(true);
  const [reSearch, setReSearch] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [reSearch]);

  return { data, loading, setReSearch };
}
