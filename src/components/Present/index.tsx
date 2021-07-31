import Image from "next/image";
import presentSvg from "../../assets/images/present2.svg";

import styles from "./Present.module.scss";

export function Present() {
  return (
    <div className={styles.present}>
      <h2>Achou!</h2>
      <Image src={presentSvg} alt="present" width={100} height={100} />
    </div>
  );
}
