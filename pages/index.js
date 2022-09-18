import Head from 'next/head';
import { Fragment } from 'react'
import SearchBar from '../Components/Search/SearchBar';
import SearchResults from '../Components/Search/SearchResults';


function HomePage({ Component, pageProps }) {

  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <SearchBar />
    </Fragment>
  );
}

export default HomePage