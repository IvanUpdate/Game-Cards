import logo from "./logo.svg";
import styles from "./App.module.css";
import Card from "./components/card";
import { useState } from "react";

function App() {

  const [id1, setId1] = useState(null)
  const [id2, setId2] = useState(null)
  const [result, setResult] = useState(0)

  const checkID = (a,b) => {
    return (a && b && (a===b)) ? true : false
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  const list = []
  for (let i = 1; i < 9; i++) {
    list.push(<Card id={i}/>)
    list.push(<Card id={i}/>)
  }
  console.log(list)
  shuffle(list)

  return (
    <div className={styles.main}>
      {list}
    </div>
  );
}

export default App;
