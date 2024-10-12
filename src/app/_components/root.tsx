'use client';

import { useEffect, useState } from "react";
import { Coords } from "../_interfaces";
import YourCoordinates from "./your-coordinates";
import { CoordsContext } from "../_context/coords-context";
import AircraftList from "./aircraft-list";
import RefetchPositionButton from "./refetch-position-button";
import { fetchCurrentPosition } from "../_utils/geolocation";

export default function Root() {
  const [coords, setCoords] = useState<Coords | null>(null);

  function handleNewCoords(coords: Coords) {
    setCoords(coords);
  }

  useEffect(() => {
    let isDestroyed = false;

    async function fetchPosition() {
      try {
        const coords = await fetchCurrentPosition();
        !isDestroyed && setCoords(coords);
      } catch (error) {
        /* TODO: catch error */
      }
    }
    fetchPosition();

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
          <RefetchPositionButton onNewCoords={(newCoords) =>  handleNewCoords(newCoords)} />
        </div>)
        }
      </CoordsContext.Provider>
    </>
  );
}
