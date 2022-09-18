import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import BookItem from "../UI/BookItem";
import classes from "./SearchResults.module.css"

const SearchResults = () => {
  const router  = useRouter()
  const [results, setResults] = useState([])

  useEffect(() => {
    const get = async () => {
      const response = await fetch(`/api/Search/${router.query.input}`);
      const responseData = await response.json();
      setResults(responseData.items);
    };

    get();
  }, [router.query.input]); 

  return (
    <Fragment>
      <ul  className={classes.listItems}>
      {results?.map((item) => {
        return (
          <li className={classes.listItem} key={item.id} >
            <BookItem
              id={item.id}
              title={item.volumeInfo.title}
              image={item.volumeInfo.imageLinks?.thumbnail}
              authors={item.volumeInfo.authors}
            />
          </li>
        );
      })}</ul>
    </Fragment>
  );
};

export default SearchResults;
