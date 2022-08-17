import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import IngredientesTabla from "../../../../components/Ingredientes/IngredientesTable";
import { useDispatch, useSelector } from "react-redux";
import {
  GetIngredientes,
  GetProdcutos,
} from "../../../../store/reducers/RestReducer";
import ProductosTable from "../../../../components/Productos/ProductosTable";

const Orden = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProdcutos());
    dispatch(GetIngredientes());
  }, [dispatch]);
  return (
    <Box height={"100%"}>
      <Typography
        sx={{ fontSize: 18, width: "100%" }}
        color="text.primary"
        gutterBottom
      >
        Ingredientes
      </Typography>

      <IngredientesTabla checkboxSelection={true} />
      <Typography
        sx={{ fontSize: 18, width: "100%", marginTop: "20px" }}
        color="text.primary"
        gutterBottom
      >
        Productos
      </Typography>
      <ProductosTable checkboxSelection />
    </Box>
  );
};

export default Orden;
