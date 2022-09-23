async function handler(req, res) {
  const { username, query } = req.body;

  if (query !== undefined){

  const SearchResults = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`
  );

  const Results = await SearchResults.json();

  const array = []

  for (const key in Results.items) {
    const stage = await fetch(
      `https://my-book-list-a4332-default-rtdb.firebaseio.com/BookList/${username}/${Results.items[key].id}.json`
    );
    const finalStage = await stage.json();
    array.push({...Results.items[key], stage:finalStage})
  }

  res.status(200).json(array);
  // https://www.googleapis.com/books/v1/volumes?q=Satya
}
}

export default handler;
