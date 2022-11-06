import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "dp.png"
      : "https://cdn.dribbble.com/users/1857592/screenshots/3848396/character-typing.gif";
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://images.squarespace-cdn.com/content/v1/5a20dd866957daa798aba051/1584902291924-DWEX3PFTR6DVP07NGYPR/Untitled%2Bdesign%2B%25283%2529.jpg?format=500w"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Hello! My name is <b>Jagadeesh</b> and I enjoy creating things that live
          on the internet.
          <br />
          <br /> Fast Forwarding to today, I built a number of web applications
          and worked on a few mobile applications. Learned a great deal about
          teamwork, leadership, and communication.
        </p>
      </div>
    </div>
  );
};

export default About;
