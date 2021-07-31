import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { toast } from "react-toastify";

import { useDoors } from "../hooks/useDoors";

import { Door } from "../components/Door";

import styles from "../styles/Game.module.scss";

export default function Game() {
  const router = useRouter();
  const { quantityOfDoors, awardedDoor, createDoors, updateDoors } = useDoors();
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const validQuantity = quantityOfDoors >= 3 && quantityOfDoors <= 100;
    const validAwardNumber = awardedDoor >= 1 && awardedDoor <= quantityOfDoors;
    const isValid = validQuantity && validAwardNumber;

    if (!isValid) {
      toast.error("Número inválido de portas ou de porta premiada 😕");
      router.push("/");
    }

    setDoors(createDoors(quantityOfDoors, awardedDoor));
  }, [router, quantityOfDoors, awardedDoor, createDoors]);

  function renderDoors() {
    return doors.map(door => {
      return (
        <Door
          key={door.number}
          door={door}
          onChange={updatedDoor => setDoors(updateDoors(doors, updatedDoor))}
        />
      );
    });
  }

  return (
    <>
      <Head>
        <title>Monty Hall | Game</title>
      </Head>
      <div id={styles.game}>
        <div className={styles.doors}>{renderDoors()}</div>
        <div className={styles.buttons}>
          <Link href="/" passHref>
            <button>Reiniciar Jogo</button>
          </Link>
        </div>
      </div>
    </>
  );
}
