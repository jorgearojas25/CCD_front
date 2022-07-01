import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

const APISlice = createSlice({
  name: "API",

  // state

  initialState: {
    loading: "idle",
    listOfPokemons: [],
  },
  reducers: {
    // actions that modify the state

    listLoading(state) {
      if (state.loading === "idle") state.loading = "pending";
    },
    firstCharge(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.listOfPokemons = action.payload;
      }
    },
  },
});

const { actions, reducer } = APISlice;

export const { listLoading, firstCharge } = actions;

export const fetchFirst100Pokemons = () => async (dispatch) => {
  // start charging
  dispatch(listLoading());

  // get API data
  const response = await axios.get(config.APIURI + config.PATHS.firstCharge);

  // send API data
  dispatch(firstCharge(response.data.results));
};

export default reducer;
