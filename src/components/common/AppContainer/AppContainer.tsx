import React, { FC } from "react";
import styles from "./AppContainer.module.scss";

interface Props {
  children: React.ReactNode;
}
const AppContainer: FC<Props> = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default AppContainer;
