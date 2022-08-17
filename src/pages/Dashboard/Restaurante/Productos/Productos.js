import React from "react";
import { useDispatch } from "react-redux";
import ProductosForm from "../../../../components/Productos/ProductosForm";
import ProductosTable from "../../../../components/Productos/ProductosTable";
import { GetProdcutos } from "../../../../store/reducers/RestReducer";

const Productos = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetProdcutos());
  }, [dispatch]);
  return (
    <>
      <ProductosForm />
      <ProductosTable />
    </>
  );
};

export default Productos;
