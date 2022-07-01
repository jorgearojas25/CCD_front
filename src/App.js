import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Home from "./pages/Home";
import Module from "./pages/Module";
import { myTheme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route index element={<Home />} path={"/"} />
          <Route path="/module" element={<Module />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
