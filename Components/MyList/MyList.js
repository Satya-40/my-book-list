import Head from "next/head";
import React, { Fragment,  useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import BookItem from "../../Components/UI/BookItem";
import classes from "./MyList.module.css"

const MyList = () => {
    const { data: session } = useSession();
    const user = session?.user.email;
    const username = user?.replace(".", ",");
    const [input, setInput] = useState([]);
    const [loading, setLoading] = useState(true)
  
  
    const get = async () => {
      setLoading(true)
      const data = await fetch(`/api/GetMyList/${username}`);
      const dataRecieved = await data.json();
      setInput(dataRecieved);
      setLoading(false)
    };
    useEffect(() => {
      get();
    }, [username]);
  
    console.log({input})
  
    return (
      <Fragment>
        <Head>
          <title>My List</title>
        </Head>
        {loading && <h1 className={classes.loading}>Loading...</h1>}
        {session &&
        <ul className={classes.listItems}>
        {input.map((element) => {
          return (
            <li className={classes.listItem} key={element?.id}>
              <BookItem
                id={element?.id}
                title={element?.title}
                image={element?.image}
                author={element?.author}
                stage={element?.stage}
              />
            </li>
          );
        })}</ul>}
        {!session && <div className={classes.warning}>Login to create your own list</div>}
      </Fragment>
    );

}

export default MyList