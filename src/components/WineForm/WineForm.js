import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const WineForm = ({ wine, handleSubmit, handleChange }) => {
  const [showCreateModal, setShowCreateModal] = useState(true)
  const [backToIndex, setBackToIndex] = useState(false)

  const handleCloseCreateModal = (event) => {
    setShowCreateModal(false)
    setBackToIndex(true)
  }

  if (backToIndex) {
    return (
      <Redirect to={'/index'} />
    )
  }

  return (
    <Modal
      show={showCreateModal}
      onHide={handleCloseCreateModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create A Wine Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicProducer">
            <Form.Label>Producer</Form.Label>
            <Form.Control
              type="text"
              name="producer"
              placeholder="Producer"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              name="type"
              placeholder="Type"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicGrape">
            <Form.Label>Grape</Form.Label>
            <Form.Control
              type="text"
              name="grape"
              placeholder="Grape"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicRegion">
            <Form.Label>Region</Form.Label>
            <Form.Control
              type="text"
              name="region"
              placeholder="Region"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicContent">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="review"
              placeholder="Review"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="secondary" onClick={handleCloseCreateModal}>
              Close
          </Button>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default WineForm
