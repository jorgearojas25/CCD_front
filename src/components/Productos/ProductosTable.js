import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProdcutos } from "../../store/reducers/RestReducer";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const ProductosTable = ({ checkboxSelection = false }) => {
  const dispatch = useDispatch();
  const refresh = useSelector((state) => state.Rest.refreshData);
  const productos = useSelector((state) => state.Rest.productos);

  const columns = [
    { field: "nombre", headerName: "Nombre", width: 150 },
    { field: "descripcion", headerName: "Descripcion", width: 300 },
    { field: "imagen", headerName: "Imagen", width: 200 },
    { field: "valor", headerName: "Valor", width: 200 },
  ];
  useEffect(() => {
    if (refresh) {
      dispatch(GetProdcutos());
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
        checkboxSelection={checkboxSelection}
        components={{ Toolbar: GridToolbar }}
        columns={columns}
        rows={productos}
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

export default ProductosTable;
