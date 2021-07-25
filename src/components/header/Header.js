import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import Button from "../button/Button";
import { VscColorMode } from "react-icons/vsc";
import { BiWorld } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

function Header(props) {
  const columnStyle = [styles.column, styles.secondColumn].join(" ");

  const [tutorialClick, setTutorialClick] = useState(false);
  const [referencesClick, setReferencesClick] = useState(false);
  const [exerciseClick, setExerciseClick] = useState(false);

  const [tutorialBackground, setTutorialBackground] = useState({});
  const [referencesBackground, setReferencesBackground] = useState({});
  const [exerciseBackground, setExerciseBackground] = useState({});

  useEffect(() => {
    tutorialClick
      ? setTutorialBackground({
          backgroundColor: "rgb(40, 42, 53)",
          color: "#fff",
        })
      : setTutorialBackground({});

    setReferencesClick(false);
    setExerciseClick(false);
  }, [tutorialClick]);

  useEffect(() => {
    referencesClick
      ? setReferencesBackground({
          backgroundColor: "rgb(40, 42, 53)",
          color: "#fff",
        })
      : setReferencesBackground({});

    setTutorialClick(false);
    setExerciseClick(false);
  }, [referencesClick]);

  useEffect(() => {
    exerciseClick
      ? setExerciseBackground({
          backgroundColor: "rgb(40, 42, 53)",
          color: "#fff",
        })
      : setExerciseBackground({});

    setReferencesClick(false);
    setTutorialClick(false);
  }, [exerciseClick]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.column}>
          <div>
            <div className={styles.icon}></div>
          </div>
          <div
            className={styles.dropdown}
            onClick={() => setTutorialClick(!tutorialClick)}
            style={tutorialBackground}
          >
            <div>Tutorials</div>
            {tutorialClick ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
          </div>
          <div
            className={styles.dropdown}
            onClick={() => setReferencesClick(!referencesClick)}
            style={referencesBackground}
          >
            <div>References</div>
            {referencesClick ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
          </div>
          <div
            className={styles.dropdown}
            onClick={() => setExerciseClick(!exerciseClick)}
            style={exerciseBackground}
          >
            <div>Exercises</div>
            {exerciseClick ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
          </div>
        </div>
        <div className={columnStyle}>
          <div className={styles.icon}>
            <VscColorMode />
          </div>
          <div className={styles.icon}>
            <BiWorld />
          </div>
          <div className={styles.icon} onClick={props.light}>
            <RiSearchLine />
          </div>
          <div>
            <div className={styles.button}>Paid Courses</div>
          </div>
          <div style={{ flexBasis: "130px" }}>
            <Button>Log In</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
