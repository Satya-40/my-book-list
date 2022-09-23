async function handler (req, res){
    if (req.method === 'POST'){
        const data = req.body
        const { username , id } = data
    
        const send = await fetch(
          `https://my-book-list-a4332-default-rtdb.firebaseio.com/BookList/${username}/${id}.json`);
    
        const sent = await send.json()
    
        res.status(201).json(sent)
      }

}

export default handler