import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import config from "./config";
import Dashboard from "./pages/Dashboard/Dashboard";
import Compras from "./pages/Dashboard/Restaurante/Compras/Compras";
import Ingredientes from "./pages/Dashboard/Restaurante/Ingredientes/Ingredientes";
import Menus from "./pages/Dashboard/Restaurante/Menus/Menus";
import Productos from "./pages/Dashboard/Restaurante/Productos/Productos";
import Carrito from "./pages/Dashboard/Users/Carrito/Carrito";
import Orden from "./pages/Dashboard/Users/Orders/Orden";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Module from "./pages/Module";
import RestaurantSignup from "./pages/Signup/RestaurantSignup";
import Signup from "./pages/Signup/Signup";
import { myTheme } from "./theme/theme";

function App() {
  const userInfo = useSelector((store) => store.User.user);
  const { NAVIGATION } = config;
  const { site, user, admin, restaurante } = NAVIGATION;
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
            <Route path={restaurante.ingredientes} element={<Ingredientes />} />
            <Route path={restaurante.productos} element={<Productos />} />
            <Route path={restaurante.menus} element={<Menus />} />
            <Route path={restaurante.compras} element={<Compras />} />
            <Route path={user.crearOrden} element={<Orden />} />
            <Route path={user.procederPago} element={<Carrito />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
