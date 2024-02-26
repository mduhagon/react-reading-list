import { useEffect, useState } from 'react'
import { books as booksData } from './data/booksData.js'
import BookCard from './components/BookCard.jsx'
import ApiBookCard from './components/ApiBookCard.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [books, setBooks ] = useState(booksData)
  const [ apiBooks, setApiBook ] = useState([])
// add function to change state of book (haveRead: true or false)
  const toggleReadStatus  = (id) => {
    let updatedBooks = books.map(book => {
      return book.id === id ? {...book, haveRead: !book.haveRead} : book
    })
    setBooks(updatedBooks)
  } 

  useEffect(() => {
    console.log('Use Effect, will be triggered when the component loads');
    // get data from the api
    const getBooksData = async () => {
      let response = await fetch('http://openlibrary.org/subjects/love.json')
      let data = await response.json()
      // data contains the array works which is the books data
      // Alternative 1: 
      console.log(data.works);
      setApiBook(data.works)
      // Alternavtie 2: use the same BookCard component:
      // rename the properties of the books from the API (loop, extract properties you need, add to state of books)

    }
    getBooksData()

    // display the data on the page
  }, [])

  return (
    <div>
      <h1>My reading collection!</h1>
      <div className="collection-list">
        {books.map(book => (<BookCard book={book} toggleStatus={toggleReadStatus} key={book.id} /> ))}
      </div>
    <div className="collection-list" >
      { apiBooks.map(work => <ApiBookCard book={work} key={work.ia}/>)} 
    </div>
    </div>
  )
}

export default App
