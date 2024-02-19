import { useState } from 'react'
import { books } from './data/booksData.js'
import BookCard from './components/BookCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My reading collection!</h1>
      <button id="eventButton">Click me!</button>
      <a href="./page.html">Link to another page</a>
      <div className="collection-list">
        {books.map(book => (<BookCard book={book}></BookCard> ))}
      </div>
    </div>
  )
}

export default App
