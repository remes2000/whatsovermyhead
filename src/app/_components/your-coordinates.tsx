'use client';

import { useContext } from "react";
import { CoordsContext } from "../_context/coords-context";

export default function YourCoordinates() {
  const coords = useContext(CoordsContext);

  return (
    <>
      <p>Your coordinates: { coords.latitude }, { coords.longitude }</p>
    </>
  )
}
