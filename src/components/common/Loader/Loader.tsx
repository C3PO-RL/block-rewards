import React from "react";
import styles from "./Loader.module.scss"; // For styling

const Loader: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
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
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default Loader;
