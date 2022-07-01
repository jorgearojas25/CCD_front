import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import MediaCard from "./Card";

const CardList = (props) => {
  const { title, dataList } = props;
  return (
    <Box display={"flex"} sx={{ flexFlow: "row wrap" }}>
      <Typography width={"100%"}>{title}</Typography>
      {dataList?.map((data, i) => (
        <MediaCard key={i} {...data} />
      ))}
    </Box>
  );
};

CardList.propTypes = {
  title: PropTypes.string,
  dataList: PropTypes.array,
};

export default CardList;
