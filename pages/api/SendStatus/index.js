async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { username, id, status } = data;

    if (username !== undefined) {
      if (status === "") {
        const send = await fetch(
          `https://my-book-list-a4332-default-rtdb.firebaseio.com/BookList/${username}/${id}.json`,
          {
            method: "DELETE",
            body: JSON.stringify(status),
            headers: { "Content-Type": "application/json" },
          }
        );
      } else {
        const send = await fetch(
          `https://my-book-list-a4332-default-rtdb.firebaseio.com/BookList/${username}/${id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(status),
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      const sent = await send.json();

      res.status(200).json(sent);
    }else{
      res.status(303).json("Login to add to your List")
    }
  }
}

export default handler;
