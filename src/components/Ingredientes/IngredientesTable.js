import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetIngredientes } from "../../store/reducers/RestReducer";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const IngredientesTabla = () => {
  const dispatch = useDispatch();
  const refresh = useSelector((state) => state.Rest.refreshData);
  const ingredientes = useSelector((state) => state.Rest.ingredientes);

  const columns = [
    { field: "nombre", headerName: "Nombre", width: 200 },
    { field: "descripcion", headerName: "Descripcion", width: 300 },
    { field: "imagen", headerName: "Imagen", width: 200 },
    { field: "valor", headerName: "Valor", width: 200 },
  ];
  useEffect(() => {
    if (refresh) {
      dispatch(GetIngredientes());
    }
  }, [refresh, dispatch]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        marginTop: "25px",
        backgroundColor: "background.paper",
      }}
    >
      <DataGrid
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        components={{ Toolbar: GridToolbar }}
        columns={columns}
        rows={ingredientes}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
  );
};

export default IngredientesTabla;
