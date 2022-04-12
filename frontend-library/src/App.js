import './App.css';
import {useState, useEffect} from 'react'
import {getBooks} from './services/getAPIrequests'

function App() {
const [books, setBooks] = useState([])

useEffect(()=>{
  getBooks()
  .then(res => setBooks(res.data))
},[])
console.log(books)
 
  return (
    <div className="App">
      <ul style={{listStyleType: 'none'}}>
        {books.map((book) => {
          return (
            <li>
              <h1>{book.title}</h1>
              <h2>{book.author}</h2>
              <p>
                {book.genres.map((genre, index, array) => {
                  //if book genre is NOT the last item in array, add comma after
                  if(index < array.length-1)
                  {return <>{genre}, </>;}
                  else {return <>{genre}</>}
                })}
              </p>
              <img src={book.imageLink} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
