import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

const UserSlice = createSlice({
  name: "user",

  // state

  initialState: {
    loading: "idle",
    user: {},
    userCreated: false,
  },
  reducers: {
    // actions that modify the state

    loading(state) {
      if (state.loading === "idle") state.loading = "pending";
    },
    setUser(state, action) {
      console.log(action.payload);
      if (state.loading === "pending") {
        state.loading = "idle";
        state.user = action.payload;
      }
    },
    registerUser(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.userCreated = action.payload;
      }
    },
    reloadUser(state) {
      if (state.userCreated) {
        state.userCreated = false;
      }
    },
    logout(state) {
      if (state.user) {
        state.user = {};
      }
    },
  },
});

const { actions, reducer } = UserSlice;

export const { loading, setUser, registerUser, reloadUser, logout } = actions;

export const login =
  ({ document, password }) =>
  async (dispatch) => {
    // start charging
    dispatch(loading());

    // get API data
    const response = await axios.post(config.APIURI + config.PATHS.login, {
      document,
      password,
    });

    // send API data
    dispatch(setUser(response.data.result ? response.data.entities[0] : {}));
  };

export const signup =
  ({ document, password, name, payor, role }) =>
  async (dispatch) => {
    // start charging
    dispatch(loading());

    // get API data
    const response = await axios.post(config.APIURI + config.PATHS.register, {
      documento: document,
      nombre: name,
      contrasenia: password,
      cuenta_pago: payor,
      id_rol: role || 1,
    });

    // send API data
    dispatch(registerUser(response.data.result ? response.data.result : false));
  };

export const restSignup =
  ({ document, password, name, payor, image }) =>
  async (dispatch) => {
    // start charging
    dispatch(loading());

    // get API data
    const response = await axios.post(
      config.APIURI + config.PATHS.registerRestaurant,
      {
        documento: document,
        nombre: name,
        contrasenia: password,
        cuenta_pago: payor,
        imagen: image || "",
      }
    );

    // send API data
    dispatch(registerUser(response.data.result ? response.data.result : false));
  };

export default reducer;
