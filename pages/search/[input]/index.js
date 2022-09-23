import React, { Fragment } from "react";
import SearchBar from "../../../Components/Search/SearchBar";
import SearchResults from "../../../Components/Search/SearchResults";

const index = () => {
  return (
    <Fragment>
      <SearchBar />
      <SearchResults />
    </Fragment>
  );
};

export default index;
