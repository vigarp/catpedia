import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const Accordion = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid container>
      <Grid
        item
        classes={{ root: classes.accordionWrapper }}
        onClick={() => handleToggleExpand()}
      >
        <Typography classes={{ root: classes.accordionTitle }}>
          {props.title}
        </Typography>
      </Grid>
      <Grid classes={{ root: classes.parentHr }} />
      {expanded && (
        <Grid>
          <img
            src={`https://cdn2.thecatapi.com/images/${props.image}.jpg`}
            width="150px"
            height="150px"
            alt="cat-pict"
          />
          <Typography>Name: {props.title}</Typography>
          <Typography>Origin: {props.origin}</Typography>
          <Typography>Life Span: {props.lifeSpan}</Typography>
          <Typography>Temperament: {props.temperament}</Typography>
          <Typography>Description: {props.description}</Typography>
          <Typography>
            Weitght: {props.weightImperial} (imperial), {props.weightMetric}{" "}
            (Metric)
          </Typography>
          <Typography>Wikipedia: {props.wikipediaURL}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  accordionWrapper: {
    width: "100%",
    padding: "1rem 1rem",
    backgroundColor: "#ececec",
    cursor: "pointer",
  },
  accordionTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    colors: "C7C7C7",
  },
  parentHr: {
    height: "100%",
    color: "#ffffff",
    width: "100%",
  },
}));

export default Accordion;
