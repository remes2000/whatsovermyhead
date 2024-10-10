import { createContext } from "react";
import { Coords } from "../_interfaces";

export const CoordsContext = createContext<Coords>({ latitude: 0, longitude: 0 });
