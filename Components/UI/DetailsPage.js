import React, { Fragment } from "react";
import classes from "./DetailsPage.module.css";

const DetailsPage = (props) => {
  const input = props.data?.volumeInfo;

  return (
    <Fragment>
      <div className={classes.box}>
        <img
          src={
            input?.imageLinks.large
              ? input?.imageLinks.large
              : input?.imageLinks.thumbnail
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
        <select className={classes.dropdown}>
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
