import React, { Fragment } from "react";
import Head from "next/head";
import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";
import classes from "./index.module.css";

const index = () => {
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

export default index;
