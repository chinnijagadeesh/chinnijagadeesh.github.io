import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import GitHubCalendar from "react-github-calendar";
import styles from "./Statistics.module.css";

const Statistics = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div>
       <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Statistics
        </h1>
        <div className={styles.borderBottom} />
     <div className={styles.stat}>
          <div className={styles.main}>
            <p>1200+ hrs</p>
            <p>Coding</p>
          </div>
          <div className={styles.main}>
            <p>20+</p>
            <p>Mini project</p>
          </div>
          <div className={styles.main}>
            <p>500+</p>
            <p>DSA Question</p>
          </div>
          <div className={styles.main}>
            <p>100+ hrs</p>
            <p>Soft Skills</p>
          </div>
        </div>
        {/* <p style={{ fontSize: "40px", fontWeight: "400", color: "black" }}>
          Github Statistics
        </p> */}
         <h2  className={styles.heading}>
         Github Statistics
        </h2>
        <div className={styles.git}>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=vishalmahale11"
            alt="Chinni Jagadeesh"
          />
        </div>

        {/* <p style={{ fontSize: "40px", fontWeight: "400", color: "black" }}>
          Github Calender
        </p> */}
        <h2  className={styles.heading}>
        Github Calender
        </h2>

        <div style={{ margin: "auto" }}>
          <GitHubCalendar
            style={{
              border: "1px solid lightgray",
              padding: "20px",
              borderRadius: "3px",
            }}
            username="chinnijagadeesh"
            year={new Date().getFullYear()}
          />
        </div>
  </div>
   
  );
};

export default Statistics;
