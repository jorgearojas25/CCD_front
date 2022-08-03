import React from "react";
import Layout from "../components/Layout";
import { Button, Input, Box } from "@mui/material";
import MediaCard from "../components/Card";
import config from "../config";

const Module = (props) => {
  const [search, setSearchValue] = React.useState("");
  const [showCard, setShowCard] = React.useState(false);

  const handleSerachValue = (e) => {
    setSearchValue(e.target.value);
  };

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <Layout>
      <Input value={search} onChange={handleSerachValue} />
      <Button onClick={toggleCard}>Show/Hide</Button>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {showCard ? (
          <MediaCard name={search} url={config.PATHS.searchPokemon(search)} />
        ) : (
          "No Hay Resultados, esto puede ser un componente de carga"
        )}
      </Box>
    </Layout>
  );
};

Module.propTypes = {};

export default Module;
