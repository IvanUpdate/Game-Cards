import { useState } from "react";
import styles from "./card.module.css";
import IMAGES from "../pics/images"

const Card = ({id}) => {
  const [flip, setFlip] = useState(false);

  const src = IMAGES[`image${id}`]

  const clickButton = () => {
    setFlip(true)

  }

  return <div className={styles.card} onClick={clickButton}>{
    flip ? <img className={styles.picture} src={src} /> : <p>0</p>
    }</div>;
};

export default Card;
