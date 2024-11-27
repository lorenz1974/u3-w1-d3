import { Modal, Button, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MyModal(props) {
  console.log('MyModal pops è:', props)
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <FontAwesomeIcon icon='fa-solid fa-book-open' /> Dettagli
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='mx-5 px-5 mt-2 mb-5'> {props.modalContent.title}</h4>
        <Row className='justify-content-center row-cols-3'>
          <Col className='d-flex justify-content-start'>
            <img
              className='img-fluid shadow-lg bg-body-tertiary rounded'
              src={props.modalContent.img}
              alt={`Copertina di ${props.modalContent.title}`}
            />
          </Col>
          <Col className='d-flex flex-column'>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon className='me-2' icon='fa-solid fa-list' />
              <span className='fw-bold me-2'>Categoria: </span>{' '}
              {props.modalContent.category}
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon className='me-2' icon='fa-solid fa-hashtag' />
              <span className='fw-bold me-2'>ASIN:</span>{' '}
              {props.modalContent.asin}
            </div>
            <div className='d-flex mt-auto align-self-center align-items-center fw-bold fs-4'>
              <FontAwesomeIcon className='me-2' icon='fa-solid fa-euro-sign' />
              {props.modalContent.price}
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Chiudi</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal
