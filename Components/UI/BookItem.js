import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import classes from "./BookItem.module.css";
import { useSession } from "next-auth/react";

const BookItem = (props) => {
  const router = useRouter()
  const { data: session } = useSession();
  const user = session?.user.email
  const username = user?.replace(".",",")
  const [result, setResult] = useState()

  const onShowDetailsHandler = (id) => {
    router.push(`/details/${id}`)
  }



  const onAddToListHandler=async(status, id) => {
   
    console.log(username, id,status)
   
    const response = await fetch(`/api/SendStatus`,{
      method: 'POST',
      body: JSON.stringify({username, id, status}),
      headers:{'Content-Type':'application/json'}
    })
    const result =await response.json()
    console.log({result})
    setResult(result)
  }

  return (
    <Fragment>
      {result && <dialog className={classes.dialog} open onClick={()=>setResult()}>{result}</dialog>}
      <div className={classes.box}>
        <div
          className={classes.information}
          onClick={() => {
            onShowDetailsHandler(props.id);
          }}
        >
          <img src={props.image} alt={props.title} className={classes.image} />
          <div className={classes.info}>
            <p className={classes.title}>{props.title}</p>
            <div classes={classes.authors}>
              {props.authors?.map((author) => {
                return (
                  <p className={classes.author} key={author}>
                    {author}{" "}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <select
          className={classes.dropdown}
          defaultValue={props.stage ? props.stage : ""}
          onChange={() => onAddToListHandler(event.target.value, props.id)}
        >
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
