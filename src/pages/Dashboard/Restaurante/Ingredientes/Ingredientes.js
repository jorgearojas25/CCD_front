import React from "react";
import { useDispatch } from "react-redux";
import IngredientesForm from "../../../../components/Ingredientes/IngredientesForm";
import IngredientesTabla from "../../../../components/Ingredientes/IngredientesTable";
import { GetIngredientes } from "../../../../store/reducers/RestReducer";

const Ingredientes = () => {
  const dispatch = useDispatch();

  dispatch(GetIngredientes());

  return (
    <>
      <IngredientesForm />
      <IngredientesTabla />
    </>
  );
};

export default Ingredientes;
