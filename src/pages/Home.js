import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchFirst100Pokemons } from "../store/reducers/PokeAPIReducer";
import { Button } from "@mui/material";
import CardList from "../components/CardList";

const Home = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.PokeAPI.listOfPokemons);

  const handleSearch = () => {
    dispatch(fetchFirst100Pokemons());
  };

  return (
    <>
      <Layout>
        <Button onClick={handleSearch}>Get 100 pokes </Button>
        <CardList title={"First 100 Pokemons"} dataList={data} />
      </Layout>
    </>
  );
};

Home.propTypes = {};

export default Home;
