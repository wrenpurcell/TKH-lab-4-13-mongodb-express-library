import axios from 'axios'

export const getBooks = () => {
  let response = axios.get('http://localhost:3001/books')
  // console.log(response)
  return response
} 

 