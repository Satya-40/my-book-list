import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
  const router = useRouter()

  const onClickHandler = (data) => {
    router.push(`/${data}`)
  }

  return (
    <Fragment>
      <nav className={classes.Navbar}>
        <button onClick={() => {onClickHandler('')}}>Home</button>
        <button onClick={() => {onClickHandler('mylist')}}>My List</button>
        <button className={classes.loginButton} onClick={() => {onClickHandler('login')}}>
          Login
        </button>
      </nav>
    </Fragment>
  );
}

export default Navbar