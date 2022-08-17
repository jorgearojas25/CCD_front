import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

const UserSlice = createSlice({
  name: "rest",

  // state

  initialState: {
    loading: "idle",
    refreshData: false,
    ingredientes: [],
    tipoProductos: [],
    productos: [],
  },
  reducers: {
    // actions that modify the state

    loading(state) {
      if (state.loading === "idle") state.loading = "pending";
    },
    successData(state, action) {
      state.refreshData = true;
    },
    cleanState(state) {
      state.refreshData = false;
    },
    setIngredientes(state, action) {
      state.ingredientes = action.payload;
    },
    setTipoProductos(state, action) {
      state.tipoProductos = action.payload;
    },
    setProductos(state, action) {
      state.productos = action.payload;
    },
  },
});

const { actions, reducer } = UserSlice;

export const {
  loading,
  successData,
  cleanState,
  setIngredientes,
  setTipoProductos,
  setProductos,
} = actions;

export const AddIngrediente =
  ({ nombre, descripcion, imagen, valor }) =>
  async (dispatch) => {
    const response = await axios.post(
      config.APIURI + config.PATHS.ingredientes,
      {
        nombre: nombre,
        descripcion: descripcion,
        imagen: imagen,
        valor: valor,
      }
    );
    if (response.data.result) {
      dispatch(successData());
    }
  };

export const AddProducto =
  ({ nombre, descripcion, imagen, valor, tipoProducto, restaurante }) =>
  async (dispatch) => {
    const response = await axios.post(config.APIURI + config.PATHS.productos, {
      nombre: nombre,
      descripcion: descripcion,
      imagen: imagen,
      valor: valor,
      id_tipo_producto: tipoProducto,
      id_restaurante: restaurante,
    });
    if (response.data.result) {
      dispatch(successData());
    }
  };

export const GetIngredientes = () => async (disptach) => {
  const response = (await axios.get(config.APIURI + config.PATHS.ingredientes))
    .data;

  if (response.result) {
    response.entities.map((ent) => (ent.id = ent.id_ingrediente));
    disptach(setIngredientes(response.entities));
  }
};

export const GetProdcutos = () => async (disptach) => {
  const response = (await axios.get(config.APIURI + config.PATHS.productos))
    .data;

  if (response.result) {
    response.entities.map((ent) => (ent.id = ent.id_producto));
    disptach(setProductos(response.entities));
  }
};

export const GetTipoProductos = () => async (disptach) => {
  const response = (await axios.get(config.APIURI + config.PATHS.tipoProductos))
    .data;

  if (response.result) {
    response.entities.map((ent) => (ent.id = ent.id_tipo_producto));
    disptach(setTipoProductos(response.entities));
  }
};
export default reducer;
