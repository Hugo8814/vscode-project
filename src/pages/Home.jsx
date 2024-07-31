/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

function Home() {
  const [text, setText] = useState("Hugo Pereira \n Frontend Developer");
  const [isGoing, setIsGoing] = useState(false);
  const wordRef = useRef(null);
  const items = Array.from(
    { length: 5000 },
    (
      _,
      index // Adjust the number of items
    ) => <div key={index} className={styles.item}></div>
  );

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomLetter = () => {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    return alphabet[rand(0, alphabet.length - 1)];
  };

  const getRandomWord = (word) => {
    let text = word;
    let finalWord = "";
    for (let i = 0; i < text.length; i++) {
      finalWord += text[i] === " " ? " " : getRandomLetter();
    }
    return finalWord;
  };

  const init = () => {
    if (isGoing) return;

    setIsGoing(true);
    let count = 0;
    let globalCount = 0;
    let canChange = false;
    const INITIAL_WORD = text;

    let randomWord = getRandomWord(INITIAL_WORD);
    setText(randomWord);

    const interv = setInterval(() => {
      let finalWord = "";
      for (let x = 0; x < INITIAL_WORD.length; x++) {
        if (x <= count && canChange) {
          finalWord += INITIAL_WORD[x];
        } else {
          finalWord += getRandomLetter();
        }
      }
      setText(finalWord);
      if (canChange) {
        count++;
      }
      if (globalCount >= 20) {
        canChange = true;
      }
      if (count >= INITIAL_WORD.length) {
        clearInterval(interv);
        setText(INITIAL_WORD);
        setIsGoing(false);
      }
      globalCount++;
    }, 50);
  };

  useEffect(() => {
    const wordElement = wordRef.current;
    wordElement.addEventListener("mouseenter", init);
    return () => {
      wordElement.removeEventListener("mouseenter", init);
    };
  }, []);

  return (
    <div className={styles.container}>
      {items}
      <p className={styles.title} ref={wordRef}>
        {text}
      </p>
    </div>
  );
}

export default Home;
