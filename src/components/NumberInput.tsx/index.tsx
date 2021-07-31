import styles from "./NumberInput.module.scss";

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (value: number) => void;
}

export function NumberInput({ text, value, onChange }: NumberInputProps) {
  const decrement = () => onChange(value - 1);
  const increment = () => onChange(value + 1);

  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <span className={styles.buttons}>
        <button className={styles.btn} onClick={decrement}>
          -
        </button>
        <button className={styles.btn} onClick={increment}>
          +
        </button>
      </span>
    </div>
  );
}
