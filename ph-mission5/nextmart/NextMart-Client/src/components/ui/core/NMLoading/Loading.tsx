import React from "react";
import styles from "./Spinner.module.css";

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className={`${styles.spinner}`}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loading;
