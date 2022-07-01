import React from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";
import { myTheme } from "../theme/theme";

const Layout = (props) => {
  const { children } = props;
  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        backgroundColor: myTheme.palette.background.paper,
      }}
    >
      <Box>{children}</Box>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
