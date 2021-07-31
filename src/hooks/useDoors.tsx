import { createContext, ReactNode, useContext, useState } from "react";
import DoorModel from "../model/door";

interface DoorsProviderProps {
  children: ReactNode;
}

interface DoorsContextData {
  quantityOfDoors: number;
  awardedDoor: number;
  updateDoorsQuantity: (newQuantityOfDoors: number) => void;
  updateAwardedDoor: (newAwardedDoor: number) => void;
  createDoors: (quantity: number, awardedDoorNumber: number) => DoorModel[];
  updateDoors: (doors: DoorModel[], updatedDoor: DoorModel) => DoorModel[];
}

const DoorsContext = createContext({} as DoorsContextData);

export function DoorsProvider({ children }: DoorsProviderProps) {
  const [quantityOfDoors, setQuantityOfDoors] = useState(3);
  const [awardedDoor, setAwardedDoor] = useState(1);

  function updateDoorsQuantity(newQuantityOfDoors: number) {
    if (
      newQuantityOfDoors >= 3 &&
      newQuantityOfDoors <= 100 &&
      newQuantityOfDoors >= awardedDoor
    ) {
      setQuantityOfDoors(newQuantityOfDoors);
    }
  }

  function updateAwardedDoor(newAwardedDoor: number) {
    if (newAwardedDoor >= 1 && newAwardedDoor <= quantityOfDoors) {
      setAwardedDoor(newAwardedDoor);
    }
  }

  function createDoors(
    quantity: number,
    awardedDoorNumber: number
  ): DoorModel[] {
    return Array.from({ length: quantity }, (_, i) => {
      const number = i + 1;
      const hasPresent = number === awardedDoorNumber;
      return new DoorModel(number, hasPresent);
    });
  }

  function updateDoors(
    doors: DoorModel[],
    updatedDoor: DoorModel
  ): DoorModel[] {
    return doors.map(door => {
      const isUpdatedDoor = door.number === updatedDoor.number;

      if (isUpdatedDoor) {
        return updatedDoor;
      }

      return updatedDoor.isOpen ? door : door.removeSelection();
    });
  }

  return (
    <DoorsContext.Provider
      value={{
        quantityOfDoors,
        awardedDoor,
        updateDoorsQuantity,
        updateAwardedDoor,
        createDoors,
        updateDoors,
      }}
    >
      {children}
    </DoorsContext.Provider>
  );
}

export const useDoors = () => useContext(DoorsContext);
