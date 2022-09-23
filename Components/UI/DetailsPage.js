import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import classes from "./DetailsPage.module.css";
import { useSession } from "next-auth/react";

const DetailsPage = (props) => {
  const input = props.data?.volumeInfo;
  const router = useRouter()
  const id = router.query.input
  const { data: session } = useSession();
  const user = session?.user.email
  const username = user?.replace(".",",")

  const onAddToListHandler=async(status) => {
    console.log( user, id , status)

    const response = await fetch(`/api/SendStatus`,{
      method: 'POST',
      body: JSON.stringify({username, id, status}),
      headers:{'Content-Type':'application/json'}
    })
    const result =await response.json()
    console.log({result})
  }
  
  // console.log(props.title, state);

  return (
    <Fragment>
      <div className={classes.box}>
        <img
          src={
            input?.imageLinks?.thumbnail
          }
          alt={input?.title}
          className={classes.image}
        />
        <h1 className={classes.title}>{input?.title}</h1>
        <div className={classes.authors}>
          <h2>Authors</h2>
          <div>
            {" "}
            {input?.authors?.map((author) => {
              return (
                <p className={classes.author} key={author}>
                  {author}{" "}
                </p>
              );
            })}
          </div>
        </div>
        {state?state:""}
        <select className={classes.dropdown} defaultValue={""} onChange={()=>onAddToListHandler(event.target.value)} >
          <option value="">Add to List</option>
          <option value="Reading">Reading</option>
          <option value="Plan to read">Plan to read</option>
          <option value="Finished">Finished</option>
        </select>
        <div className={classes.publisher} >
            <h2>Publisher</h2>
            <div>{input?.publisher }</div>
            <h2>Date Published</h2>
            <div>{input?.publishedDate }</div>
        </div>
        <div className={classes.genre} >
            <h2>Genre</h2>
            <div>
            {" "}
            {input?.categories?.map((author) => {
              return (
                <p className={classes.author} key={author}>
                  {author}{" "}
                </p>
              );
            })}
          </div>
        </div>
        <div className={classes.pageCount} >
            <h2>Page Count</h2>
            <div>{input?.pageCount}</div>
        </div>
        <div className={classes.ratings}>
            <h2>Average Rating</h2>
            <div>{input?.averageRating}</div>
            <h2>No. of Ratings</h2>
            <div>{input?.ratingsCount}</div>
        </div>
        <div className={classes.description}>
          <h2>Description</h2>
          <div>{input?.description}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailsPage;
