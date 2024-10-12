import { Coords } from "../_interfaces";

export function fetchCurrentPosition(): Promise<Coords> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
       },
      (error) => reject(error),
    )
  });
}
