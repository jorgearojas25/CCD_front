import React from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/material";
import { myTheme } from "../theme/theme";

const Layout = (props) => {
  const { children } = props;
  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        backgroundColor: myTheme.palette.background.default,
      }}
    >
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
