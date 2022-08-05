import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import config from "./config";
import Dashboard from "./pages/Dashboard/Dashboard";
import Productos from "./pages/Dashboard/Productos/Productos";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Module from "./pages/Module";
import RestaurantSignup from "./pages/Signup/RestaurantSignup";
import Signup from "./pages/Signup/Signup";
import { myTheme } from "./theme/theme";

function App() {
  const userInfo = useSelector((store) => store.User.user);
  const { NAVIGATION } = config;
  const { site } = NAVIGATION;
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        {(!userInfo?.id_usuario || !userInfo?.id_restaurante) && (
          <ResponsiveAppBar />
        )}
        <Routes>
          <Route index element={<Home />} path={site.home} />
          <Route path="/module" element={<Module />} />
          <Route path={site.login} element={<Login />} />
          <Route path={site.signup} element={<Signup />} />
          <Route path={site.restSignup} element={<RestaurantSignup />} />
          <Route
            path="dashboard"
            element={<Dashboard rol={userInfo?.id_rol || 3} />}
          >
            <Route index path={"productos"} element={<Productos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
