const config = {
  APIURI: "http://localhost:3001/api/",
  PATHS: {
    firstCharge: "pokemon?limit=100&offset=0",
    searchPokemon: (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    login: "usuario/login",
    register: "usuario",
    registerRestaurant: "restaurante",
  },
  NAVIGATION: {
    site: {
      home: "/",
      signup: "signup",
      restSignup: "restaurante/signup",
      login: "login",
    },
    admin: {
      restaurantes: "admin/restaurantes",
      usuarios: "admin/usuarios",
      pedidos: "admin/pedidos",
    },
    user: {
      crearOrden: "user/orden",
      procederPago: "user/pago",
      historial: "user/historial",
    },
    restaurante: {
      ingredientes: "restaurante/ingredientes",
      productos: "restaurante/productos",
      menus: "restaurante/menus",
      compras: "restaurante/compras",
    },
  },
};

export default config;
