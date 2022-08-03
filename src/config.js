const config = {
  APIURI: "http://localhost:3000/api/",
  PATHS: {
    firstCharge: "pokemon?limit=100&offset=0",
    searchPokemon: (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    login: "usuario/login",
    register: "usuario",
    registerRestaurant: "restaurante",
  },
};

export default config;
