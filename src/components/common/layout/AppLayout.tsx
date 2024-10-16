import { Outlet } from "react-router-dom";
import AppContainer from "../AppContainer/AppContainer";

const AppLayout = () => {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};

export default AppLayout;
