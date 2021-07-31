import Head from "next/head";
import Link from "next/link";

import { useDoors } from "../hooks/useDoors";

import { Card } from "../components/Card";
import { NumberInput } from "../components/NumberInput.tsx";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const {
    quantityOfDoors,
    awardedDoor,
    updateDoorsQuantity,
    updateAwardedDoor,
  } = useDoors();

  return (
    <>
      <Head>
        <title>Monty Hall | Home</title>
      </Head>
      <div className={styles.container}>
        <div>
          <Card bgColor="#c0392c">
            <h1>
              Monty Hall <i className="fas fa-door-open fa-1x"></i>
            </h1>
          </Card>
          <Card>
            <NumberInput
              text="Quantidade de Portas?"
              value={quantityOfDoors}
              onChange={newQuantityOfDoors =>
                updateDoorsQuantity(newQuantityOfDoors)
              }
            />
          </Card>
        </div>
        <div>
          <Card>
            <NumberInput
              text="Porta Premiada?"
              value={awardedDoor}
              onChange={newAwardedDoor => updateAwardedDoor(newAwardedDoor)}
            />
          </Card>
          <Card bgColor="#28a085" lastCard>
            <Link href="/game" passHref>
              <h2 className={styles.link}>
                Iniciar
                <i className={`fas fa-play ${styles.playBtn}`}></i>
              </h2>
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
}
