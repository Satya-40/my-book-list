import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import BookItem from "../UI/BookItem";
import classes from "./SearchResults.module.css"

const SearchResults = () => {
  const router  = useRouter()
  const [results, setResults] = useState([])
  const { data: session } = useSession();
  const user = session?.user.email
  const username = user?.replace(".",",")
  const query = router.query.input
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    const get = async () => {
      setLoading(true)
      setResults([])
      const response = await fetch(`/api/Search`,{
      method: 'POST',
      body: JSON.stringify({username, query }),
      headers:{'Content-Type':'application/json'}
    });
      const responseData = await response.json();
      if (responseData===[]){
        return <h1>LOADING</h1>
      }
      setResults(responseData);
      setLoading(false)
    };

    get();
  }, [router.query.input]); 

  console.log(results)


  return (
    <Fragment>
      <Head>
        <title>{query}</title>
      </Head>
      {loading && <h1 className={classes.loading}>Loading...</h1>}
      <ul className={classes.listItems}>
        {results?.map((item) => {
          return (
            <li className={classes.listItem} key={item.id}>
              <BookItem
                id={item.id}
                title={item.volumeInfo.title}
                image={item.volumeInfo.imageLinks?.thumbnail}
                authors={item.volumeInfo.authors}
                stage={item.stage}
              />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default SearchResults;
