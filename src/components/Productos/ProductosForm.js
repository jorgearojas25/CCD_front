import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import useField from "../../hooks/useField";
import { useDispatch, useSelector } from "react-redux";
import { AddProducto, cleanState } from "../../store/reducers/RestReducer";

const ProductosForm = () => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.Rest.refreshData);
  const tipoProducto = useSelector((state) => state.Rest.tipoProductos);
  const user = useSelector((state) => state?.User?.user?.id_restaurante);

  const nombre = useField();
  const descripcion = useField();
  const imagen = useField();
  const valor = useField();
  const tipoProd = useField();

  const handleAdd = () => {
    dispatch(
      AddProducto({
        nombre: nombre.value,
        descripcion: descripcion.value,
        imagen: imagen.value,
        valor: valor.value,
        restaurante: user,
        tipoProducto: tipoProd.value,
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
      tipoProd.setValue("");
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
            Nuevo Producto
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

          <FormControl sx={{ width: "30%" }} margin="normal">
            <InputLabel id="tipo-de-producto-select-field">
              Tipo de producto
            </InputLabel>
            <Select
              labelId="tipo-de-producto-select-field"
              id="tipoProducto-field"
              label="Tipo"
              value={tipoProd.value}
              onChange={tipoProd.onChange}
            >
              {[...tipoProducto]?.map((tipo) => (
                <MenuItem value={tipo.id}>{tipo.nombre}</MenuItem>
              ))}
            </Select>
          </FormControl>
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

export default ProductosForm;
