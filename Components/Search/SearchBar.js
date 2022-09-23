import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useRef } from 'react'
import classes from './SearchBar.module.css'

const SearchBar = () => {
  const router = useRouter()
  const input = useRef()
 
  const onSubmitHandler = (event) => {
    event.preventDefault()
    router.push(`/search/${input.current.value}`)
  }

  return (
    <Fragment>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <input
          ref={input}
          defaultValue={router.query.input}
          className={classes.input}
        />
      </form>
    </Fragment>
  );
}

export default SearchBar