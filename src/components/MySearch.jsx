import { Form, Row, Col, Button } from 'react-bootstrap'

function formOnSubmit(e, setSearchTerms) {
  e.preventDefault()
  console.log('Form submitted')
  const searchValue = e.target.form[0].value // Valore dell'input
  console.log('Search value:', searchValue)
  setSearchTerms(searchValue)
}

function MySearch(props) {
  console.log('MySearch props è:', props)

  return (
    <Form onSubmit={(e) => formOnSubmit(e, props.setSearchTerms)}>
      <Row className='mt-3'>
        <Col className='d-flex col-11'>
          <Form.Group className='m-0 w-100' controlId='searchInput'>
            <Form.Control
              type='text'
              placeholder='Search...'
              value={props.searchTerms}
              onChange={(e) => props.setSearchTerms(e.target.value)}
            />
          </Form.Group>
          <Button
            className='ms-2'
            variant='success'
            type='submit'
            onClick={(e) => formOnSubmit(e, props.setSearchTerms)}
          >
            Search
          </Button>
          <Col className='col-1'>
            <Button
              className='ms-2'
              variant='warning'
              onClick={() => {
                console.log('Reset search terms')
                props.setSearchTerms('')
              }}
            >
              Reset
            </Button>
          </Col>
        </Col>
      </Row>
    </Form>
  )
}

export default MySearch
