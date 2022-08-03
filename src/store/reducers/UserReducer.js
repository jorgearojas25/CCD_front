import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

const UserSlice = createSlice({
  name: "user",

  // state

  initialState: {
    loading: "idle",
    user: {},
  },
  reducers: {
    // actions that modify the state

    loading(state) {
      if (state.loading === "idle") state.loading = "pending";
    },
    setUser(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.user = action.payload;
      }
    },
  },
});

const { actions, reducer } = UserSlice;

export const { loading, setUser } = actions;

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
    dispatch(setUser(response.result ? response.entities[0] : {}));
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
    dispatch(setUser(response.result ? response.entities[0] : {}));
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
    dispatch(setUser(response.result ? response.entities[0] : {}));
  };

export default reducer;
