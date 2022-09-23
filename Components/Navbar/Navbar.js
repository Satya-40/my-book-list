import { useRouter } from 'next/router'
import React, { Fragment, } from 'react'
import classes from './Navbar.module.css'
import { useSession } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter()
  const onClickHandler = (data) => {
    router.push(`/${data}`)
  }

  var right = (
    <button
      className={classes.loginButton}
      onClick={() => {
        onClickHandler("login");
      }}
    >
      Login
    </button>
  );

  if (session){
    right = (
      <span className={classes.loginButton}>
        <img
          className={classes.image}
          src={session.user.image}
          onClick={() => {
            onClickHandler("login");
          }}
        />
      </span>
    );
  }

  return (
    <Fragment>
      <nav className={classes.Navbar}>
        <button onClick={() => {onClickHandler('')}}>Home</button>
        <button onClick={() => {onClickHandler('mylist')}}>My List</button>
        {right}
      </nav>
    </Fragment>
  );
}

export default Navbar