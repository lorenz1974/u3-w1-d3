import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

class SingleBook extends React.Component {
  render() {
    const { book, setModalShow, selectedBooks, setSelectedBooks } = this.props
    const isSelected = selectedBooks.includes(book.asin)

    return (
      <Col key={book.asin} className='mt-5'>
        <Card
          className='shadow h-100'
          style={{ opacity: isSelected ? 0.5 : 1 }}
        >
          <Card.Img
            className='mx-auto mt-3 p-0 rounded shadow w-50'
            variant='top'
            src={book.img}
            alt={`Copertina di ${book.title}`}
            onClick={() => setSelectedBooks(book.asin)}
          />
          <Card.Body className='d-flex flex-column justify-content-between'>
            <Card.Title className='d-flex align-items-center py-0 m-0 mt-2 flex-grow-1'>
              {book.title}
            </Card.Title>
            <Card.Text className='d-flex py-0 m-0 mt-2 '>
              ASIN: {book.asin}
            </Card.Text>
            <Card.Text className='d-flex py-0 m-0 mt-2 justify-content-end fs-4 '>
              <span className='fw-bold'>€ {book.price}</span>
            </Card.Text>
            <Card.Footer className='d-flex py-0 justify-content-center'>
              <Button variant={'success'} className='m-2 shadow'>
                Compra
              </Button>
              <Button
                variant={'warning'}
                className='m-2 shadow'
                onClick={() => {
                  setModalShow(true, {
                    asin: book.asin,
                    title: book.title,
                    img: book.img,
                    price: book.price,
                    category: book.category,
                  })
                }}
              >
                Dettagli
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
