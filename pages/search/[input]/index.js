import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react'
import SearchBar from '../../../Components/Search/SearchBar';
import SearchResults from '../../../Components/Search/SearchResults';

const index = () => {
  const router = useRouter()
  
  return (
    <Fragment>
      <Head>
        <title>{router.query.input ? router.query.input.substr(2) : ""}</title>
      </Head>
      <SearchBar  />
      <SearchResults  />
    </Fragment>
  );
};


export default index