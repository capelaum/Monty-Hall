import DoorModel from "../../model/door";
import { Present } from "../Present";

import styles from "./Door.module.scss";

interface DoorProps {
  door: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export function Door({ door, onChange }: DoorProps) {
  const isSelected = door.selected && !door.isOpen ? styles.selected : "";

  const toggleSelection = () => onChange(door.toggleSelection());
  const open = e => {
    e.stopPropagation();
    onChange(door.open());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.handle} onClick={open}></div>
      </div>
    );
  }

  return (
    <div className={styles.container} onClick={toggleSelection}>
      <div className={`${styles.frame} ${isSelected}`}>
        {door.isClosed ? renderDoor() : door.hasPresent ? <Present /> : false}
      </div>

      <div className={styles.floor}></div>
    </div>
  );
}
