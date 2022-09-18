async function handler(req, res) {
    const { input } = req.query;
  
    const SearchResults = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${input}`
    );
  
    const Results = await SearchResults.json();
  
    res.status(200).json(Results);
    // https://www.googleapis.com/books/v1/volumes?q=Satya
  }
  
  export default handler;
  