import React, { Fragment } from "react";
import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";
import classes from "./Login.module.css";
import Head from "next/head";

const Login = () => {
    const { data: session } = useSession();

    if (session) {
      return (
        <Fragment>
          <Head>
            <title>Logout</title>
          </Head>
          <div className={classes.login}>
            <p>Welcome {session?.user.name}</p>
            <button
              className={classes.logout}
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Head>
            <title>Login</title>
          </Head>
          <div className={classes.login}>
            <GoogleButton
              onClick={() => {
                signIn();
              }}
            />
          </div>
        </Fragment>
      );
    }
  };


export default Login