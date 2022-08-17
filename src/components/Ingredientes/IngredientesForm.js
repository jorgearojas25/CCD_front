import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import useField from "../../hooks/useField";
import { useDispatch, useSelector } from "react-redux";
import { AddIngrediente, cleanState } from "../../store/reducers/RestReducer";

const IngredientesForm = () => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.Rest.refreshData);

  const nombre = useField();
  const descripcion = useField();
  const imagen = useField();
  const valor = useField();

  const handleAdd = () => {
    dispatch(
      AddIngrediente({
        nombre: nombre.value,
        descripcion: descripcion.value,
        imagen: imagen.value,
        valor: valor.value,
      })
    );
  };

  useEffect(() => {
    if (success) {
      dispatch(cleanState());
      nombre.setValue("");
      descripcion.setValue("");
      imagen.setValue("");
      valor.setValue("");
    }
  }, [success]);

  return (
    <Box>
      <Card sx={{ widt: "100%" }}>
        <CardContent
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{ fontSize: 18, width: "100%" }}
            color="text.primary"
            gutterBottom
          >
            Nuevo ingrediente
          </Typography>
          <TextField
            margin="normal"
            id="nombre-field"
            label="Nombre"
            value={nombre.value}
            onChange={nombre.onChange}
          />
          <TextField
            margin="normal"
            id="descripcion-field"
            label="Descripcion"
            value={descripcion.value}
            onChange={descripcion.onChange}
          />
          <TextField
            margin="normal"
            id="imagen-field"
            label="Imagen URL"
            value={imagen.value}
            onChange={imagen.onChange}
          />
          <TextField
            margin="normal"
            id="valor-field"
            label="Valor"
            value={valor.value}
            onChange={valor.onChange}
            type="number"
          />
        </CardContent>
        <CardActions
          style={{
            alignContent: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={handleAdd}
            sx={{ right: "20px", bottom: "10px" }}
            variant="contained"
          >
            Agregar
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default IngredientesForm;
