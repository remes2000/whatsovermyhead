import { useState } from "react";
import { fetchCurrentPosition } from "../_utils/geolocation";
import { Coords } from "../_interfaces";

export interface RefetchPositionButton {
  onNewCoords: (coords: Coords) => void;
}

export default function RefetchPositionButton({ onNewCoords }: RefetchPositionButton) {
  const [isDisabled, setIsDisabled] = useState(false);

  async function handleButtonClick() {
    setIsDisabled(true);
    try {
      const coords = await fetchCurrentPosition();
      onNewCoords(coords);
    } catch (error) {
      /* TODO: handle error */
    } finally {
      setIsDisabled(false);
    }
  }

  return (
    <button disabled={isDisabled} onClick={handleButtonClick}>
      Refetch current position
    </button>
  );
}
