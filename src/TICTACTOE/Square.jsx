import React from "react";
import styles from "../TICTACTOE/Board.module.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
