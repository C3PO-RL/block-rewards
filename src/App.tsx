import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import theme from "./theme/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
