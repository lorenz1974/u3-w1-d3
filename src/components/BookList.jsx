import { Card, Button, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'

function BookList(props) {
  console.log('BookList props è:', props)
  return (
    <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xxl-5 mt-1'>
      {props.booksArray
        .filter((book) => {
          // Devo fare una verifica se searchTerms contiene qualcosa perché se è uguale a ''
          // vengono estratti tutti i libri perché '' è sempre contenuto in ogni stringa
          if (props.searchTerms && props.search) {
            return (
              book.title
                .toLowerCase()
                .includes(props.searchTerms.toLowerCase()) ||
              book.asin.toLowerCase().includes(props.searchTerms.toLowerCase())
            )
          }
          return book.category === props.category
        })
        .map((book) => (
          <SingleBook
            key={book.asin}
            book={book}
            setModalShow={props.setModalShow}
            selectedBooks={props.selectedBooks}
            setSelectedBooks={props.setSelectedBooks}
          />
        ))}
    </Row>
  )
}

export default BookList
