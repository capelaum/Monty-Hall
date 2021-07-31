import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface ColorProps {
  bgColor?: string;
  lastCard?: boolean;
  children?: ReactNode;
}

export function Card({ bgColor, lastCard, children }: ColorProps) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: bgColor ?? "#FFF",
        padding: lastCard ? "0px" : "20px",
      }}
    >
      {children}
    </div>
  );
}
