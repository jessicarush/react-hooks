import { useState, useEffect } from "react";

/**
 * useFetch.js
 *
 * - A custom hook that send a fetch request to a given API
 * - For example:
 *
 * function FetchHookDemo() {
 *   const url = 'https://log.zebro.id/api_demo_two';
 *   const data = { value: 'rgb' };
 *   const params = new URLSearchParams(data);
 *   const results = useFetch(`${url}?${params}`);
 *
 *   return (
 *     <p>{Object.values(results)[0]}</p>
 *  );
 * }
 *
 * @param {string} url the url of the API
 * @returns {json} containing repsonse or null if no response
 */
function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}

export default useFetch;