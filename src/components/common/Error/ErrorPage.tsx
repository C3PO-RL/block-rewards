import React from "react";
import { Button } from "@mui/material";
import styles from "./Error.module.scss";

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.ethIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 256 417"
          preserveAspectRatio="xMidYMid meet"
        >
          <g fill="#3C3C3D">
            <polygon
              points="127.9,0 125.8,7.3 125.8,276.2 127.9,278.2 255.8,208.6"
              fill="#343434"
            />
            <polygon
              points="127.9,0 0,208.6 127.9,278.2 127.9,147.9"
              fill="#8C8C8C"
            />
            <polygon
              points="127.9,301.2 126.8,302.5 126.8,413.7 127.9,416.7 255.9,232.4"
              fill="#3C3C3D"
            />
            <polygon points="127.9,416.7 127.9,301.2 0,232.4" fill="#8C8C8C" />
            <polygon
              points="127.9,278.2 255.8,208.6 127.9,147.9"
              fill="#141414"
            />
            <polygon points="0,208.6 127.9,278.2 127.9,147.9" fill="#393939" />
          </g>
        </svg>
      </div>
      <h1 className={styles.errorText}>Oops! Something went wrong.</h1>
      <p className={styles.errorMessage}>
        We encountered an error while trying to process your request. Please try
        again or go back to the home page.
      </p>
      <div className={styles.errorActions}>
        <Button variant="outlined" color="secondary" href="/">
          Home Page
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
