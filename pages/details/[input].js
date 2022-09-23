import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import DetailsPage from "../../Components/UI/DetailsPage";

const Details = () => {
  const router = useRouter();
  const [results, setResults] = useState([]);
  const query = router.query.input;

  const get = useCallback(async () => {
    const response = await fetch(`/api/Details/${query}`);
    const responseData = await response.json();
    setResults(responseData);
  }, [query]);

  if (results.error?.code === 503 || results.error?.code === 429) {
    get();
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{(results?.volumeInfo?.title)}</title>
      </Head>
      <DetailsPage data={results} />
    </Fragment>
  );
};

export default Details;
