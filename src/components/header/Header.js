import React from "react";
import styles from "./header.module.css";
import Button from "../button/Button";

function Header() {
  const columnStyle = [styles.column, styles.secondColumn].join(" ");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.column}>
          <div>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.dropdown}>
            <div>Tutorials</div>
          </div>
          <div className={styles.dropdown}>
            <div>References</div>
          </div>
          <div className={styles.dropdown}>
            <div>Exercises</div>
          </div>
        </div>
        <div className={columnStyle}>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
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
