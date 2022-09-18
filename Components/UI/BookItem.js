import { useRouter } from "next/router";
import React, { Fragment } from "react";
import classes from "./BookItem.module.css";

const BookItem = (props) => {
  const router = useRouter()

  const onShowDetailsHandler = (id) => {
    router.push(`/details/${id}`)
  }

  return (
    <Fragment>
      <div className={classes.box}>
        <div className={classes.information} onClick={()=>{onShowDetailsHandler(props.id)}}>
          <img src={props.image} alt={props.title} className={classes.image} />
          <div className={classes.info}>
            <p className={classes.title}>{props.title}</p>
            <div classes={classes.authors}>
              {props.authors?.map((author) => {
                return <p className={classes.author} key={author} >{author} </p>;
              })}
            </div>
          </div>
        </div>
        <select className={classes.dropdown}>
          <option value="">Add to List</option>
          <option value="Reading">Reading</option>
          <option value="Plan to read">Plan to read</option>
          <option value="Finished">Finished</option>
        </select>
      </div>
    </Fragment>
  );
};

export default BookItem;
