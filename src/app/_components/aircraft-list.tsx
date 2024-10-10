'use client';

import { useContext, useEffect } from "react";
import { CoordsContext } from "../_context/coords-context";

export default function AircraftList() {
  const coords = useContext(CoordsContext);

  useEffect(() => {
    const { latitude, longitude } = coords;
    fetch(`https://api.airplanes.live/v2/point/${latitude}/${longitude}/15`).then((data) => console.log(data));
    
  }, [coords]);

  return (
    <>
      <h2>List of nearest aircrafts</h2>
    </>
  );
}
