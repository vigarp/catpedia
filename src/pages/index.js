// IMPORT CORE LIBRARIES
import React, { Fragment, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

// IMPORT UTILITIES
import { makeStyles } from "@mui/styles";
import { Grid, InputAdornment, TextField, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Accordion from "../components/Accordion";

import { getAllCats, getCatByName } from "../redux/actions/catActions";

const HomePage = () => {
  // INITIAL CONFIGS
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const matchesXL = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  // STATES
  const [searchQuery, setSearchQuery] = useState("");
  const [hasMoreCats, setHasMoreCats] = useState(true);

  const allDataCats = useSelector((state) => state.CatReducers);
  const dataCatByName = useSelector((state) => state.CatReducersByName);

  // SIDE-EFFECTS

  useEffect(() => {
    dispatch(getAllCats(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(getCatByName(searchQuery));
  }, [dispatch, searchQuery]);

  const fetchMoreCats = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (allDataCats?.isListEnd) {
      setHasMoreCats(false);
    }
  }, [allDataCats?.isListEnd]);

  console.log(matchesXL);
  console.log(searchQuery);

  // HANDLE FUNCTIONS AND MISCELLANEOUS
  return (
    <Fragment>
      <Grid container direction="column" classes={{ root: classes.root }}>
        <Grid item classes={{ root: classes.searchBarWrapper }}>
          <TextField
            id="filled-start-adornment"
            placeholder="Search..."
            value={searchQuery}
            fullWidth
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {searchQuery !== "" ? (
          <InfiniteScroll dataLength={dataCatByName.data.length}>
            {dataCatByName?.data.map((item, i) => (
              <Accordion
                key={i}
                image={item?.reference_image_id}
                title={item?.name}
                origin={item?.origin}
                lifeSpan={item?.life_span}
                temperament={item?.temperament}
                description={item?.description}
                weightImperial={item?.weight?.imperial}
                weightMetric={item?.weight?.metric}
                wikipediaURL={item?.wikipedia_url}
              />
            ))}
          </InfiniteScroll>
        ) : (
          <InfiniteScroll
            dataLength={allDataCats.data.length}
            next={fetchMoreCats}
            hasMore={hasMoreCats}
            loader={
              <Grid item textAlign="center">
                <CircularProgress />
              </Grid>
            }
            scrollThreshold={1}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>There is no more cat data</b>
              </p>
            }
          >
            {allDataCats?.data.map((item, i) => (
              <Accordion
                key={i}
                image={item?.reference_image_id}
                title={item?.name}
                origin={item?.origin}
                lifeSpan={item?.life_span}
                temperament={item?.temperament}
                description={item?.description}
                weightImperial={item?.weight?.imperial}
                weightMetric={item?.weight?.metric}
                wikipediaURL={item?.wikipedia_url}
              />
            ))}
          </InfiniteScroll>
        )}
      </Grid>
    </Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 10rem",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {
      padding: "2rem 3rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: "2rem 2rem",
    },
  },
}));

export default HomePage;
