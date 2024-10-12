'use client';

import { useContext, useEffect, useState } from "react";
import { CoordsContext } from "../_context/coords-context";

export default function AircraftList() {
  const coords = useContext(CoordsContext);
  const [isFetching, setIsFetching] = useState(false);
  const [aircrafts, setAircrafts] = useState<object>({});

  useEffect(() => {
    const { latitude, longitude } = coords;
    const abortController = new AbortController();

    async function fetchAircrafts() {
      try {
        setIsFetching(true);
        const response = await fetch(
          `https://api.airplanes.live/v2/point/${latitude}/${longitude}/15`,
          { signal: abortController.signal }
        );
        const data = await response.json();
        setAircrafts(data);
      } catch (error) {
        /* TODO: handle error */
      } finally {
        setIsFetching(false);
      }
    }
    fetchAircrafts();

    return () => abortController.abort();
  }, [coords]);

  return (
    <>
      <h2>List of nearest aircrafts</h2>
      { isFetching && <p>Fetching...</p>}
      { !isFetching && (
        <section>
          <pre>{ JSON.stringify(aircrafts, null, 2) }</pre>
        </section>
      )}
    </>
  );
}
