import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Module from "./pages/Module";
import RestaurantSignup from "./pages/Signup/RestaurantSignup";
import Signup from "./pages/Signup/Signup";
import { myTheme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route index element={<Home />} path={"/"} />
          <Route path="/module" element={<Module />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="restaurant/signup" element={<RestaurantSignup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
