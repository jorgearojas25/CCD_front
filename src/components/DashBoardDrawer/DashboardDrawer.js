import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";
import EggIcon from "@mui/icons-material/Egg";
import CakeIcon from "@mui/icons-material/Cake";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import KitchenIcon from "@mui/icons-material/Kitchen";
import List from "@mui/material/List";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import DrawerHeader from "./DrawerHeader";
import { Link } from "react-router-dom";
import config from "../../config";

const { NAVIGATION } = config;
const { admin, user, restaurante } = NAVIGATION;

export const adminList = [
  {
    name: "Restaurantes",
    link: admin.restaurantes,
    icon: <RestaurantIcon />,
  },
  {
    name: "Usuarios",
    link: admin.usuarios,
    icon: <PeopleAltIcon />,
  },
  { name: "Pedidos", link: admin.pedidos, icon: <ReceiptIcon /> },
];
export const userList = [
  {
    name: "Ordena en linea",
    link: user.crearOrden,
    icon: <FastfoodIcon />,
  },
  {
    name: "Carrito",
    link: user.procederPago,
    icon: <ShoppingCartIcon />,
  },
  { name: "Historial", link: user.historial, icon: <HistoryIcon /> },
];
export const restaurantList = [
  {
    name: "Ingredientes",
    link: restaurante.ingredientes,
    icon: <EggIcon />,
  },
  {
    name: "Productos",
    link: restaurante.productos,
    icon: <CakeIcon />,
  },
  { name: "Menus", link: restaurante.menus, icon: <MenuBookIcon /> },
  {
    name: "Compras",
    link: restaurante.compras,
    icon: <KitchenIcon />,
  },
];

const drawerWidth = 240;

const DashboardDrawer = ({ open, handleDrawerClose, rol }) => {
  const defineList = () => {
    if (rol === 1) {
      return userList;
    }
    if (rol === 2) {
      return adminList;
    }
    return restaurantList;
  };

  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {defineList().map((item) => (
          <ListItem
            component={Link}
            sx={{ color: "secondary.main" }}
            to={item.link}
            key={item.name}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Perfil", "Log out"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DashboardDrawer;
