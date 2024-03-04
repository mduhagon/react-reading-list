import { useEffect, useState } from 'react'
import { books as booksData } from './data/booksData.js'
import BookCard from './components/BookCard.jsx'
import ApiBookCard from './components/ApiBookCard.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Love from './pages/Love.jsx'
import Horror from './pages/Horror.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [books, setBooks ] = useState(booksData)
  const [ loveBooks, setLoveBooks ] = useState([])
  const [ horrorBooks, setHorrorBooks ] = useState([])
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
      // fetch love
      let response = await fetch('http://openlibrary.org/subjects/love.json')
      let data = await response.json()
      // data contains the array works which is the books data
      // Alternative 1: 
      console.log('Love books:');
      console.log(data.works);
      setLoveBooks(data.works)

      // fetch horror
      let responseHorror = await fetch('http://openlibrary.org/subjects/horror.json')
      let dataHorror = await responseHorror.json()
      console.log('Horror books:');
      console.log(dataHorror.works);
      setHorrorBooks(dataHorror.works)
    }
    getBooksData()

    // display the data on the page
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='love' element={<Love loveBooks={loveBooks}/>} />
          <Route path='horror' element={<Horror horrorBooks={horrorBooks} />} />
        </Route>
        <Route path='*' element={
          <div>
            <h1>This is * route</h1>
          </div> 
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
