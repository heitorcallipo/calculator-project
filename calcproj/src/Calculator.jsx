import { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [result, setResult] = useState();

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearDisplay = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString())
  };

  return (
    <div className={styles.calculator}>
      <input type="text" placeholder="0" id={styles.answer} value={result} />
      <input
        type="button"
        value={"9"}
        className={styles.button}
      />
      <input
        type="button"
        value={"8"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"7"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"6"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"5"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"4"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"3"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"2"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"1"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"0"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"."}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"+"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"-"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"*"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"/"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"%"}
        className={styles.button}
        onClick={clickHandler}
      />
      <input
        type="button"
        value={"DEL"}
        className={`${styles.button} ${styles.button1}`}
        onClick={clearDisplay}
      />
      <input
        type="button"
        value={"="}
        className={`${styles.button} ${styles.button1}`}
        onClick={calculate}
      />
    </div>
  );
};

export default Calculator;
