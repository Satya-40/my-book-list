async function handler(req, res){
   const  { input } = req.query

   const array = []
   const finalArray = []
   const result =await fetch(`https://my-book-list-a4332-default-rtdb.firebaseio.com/BookList/${input}.json`)
   const resultData = await result.json()

   for (const key in resultData){
      array.push({id:key, stage:resultData[key] })
   }

   for (const key in array){
      const data = await fetch(`https://www.googleapis.com/books/v1/volumes/${array[key].id}`)
      const dataFinal = await data.json()
      const title= dataFinal.volumeInfo.title
      const authors=dataFinal.volumeInfo.authors
      const image = dataFinal.volumeInfo.imageLinks.thumbnail
      finalArray.push({id:array[key].id, title:title, authors, image, stage:array[key].stage})
   }


   res.status(201).json(finalArray)

}

export default handler 