'use client';

import { useEffect, useState } from "react";
import { Coords } from "../_interfaces";
import YourCoordinates from "./your-coordinates";
import { CoordsContext } from "../_context/coords-context";
import AircraftList from "./aircraft-list";

export default function Root() {
  const [coords, setCoords] = useState<Coords | null>(null);

  useEffect(() => {
    let isDestroyed = false;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (isDestroyed) {
          return;
        }
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
       },
      (error) => {
        if (isDestroyed) {
          return;
        }
        /* TODO: handle error */
        console.log('Error', error);
      }
    )

    return () => {
      isDestroyed = true;
    }
  }, []);

  return (
    <>
      <CoordsContext.Provider value={coords!}>
        { coords && (<div>
          <YourCoordinates />
          <AircraftList />
        </div>)
        }
      </CoordsContext.Provider>
    </>
  );
}
