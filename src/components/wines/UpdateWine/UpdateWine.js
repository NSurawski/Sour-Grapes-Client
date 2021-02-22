import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { wineUpdate } from '../../../api/wines'

class UpdateWine extends Component {
  constructor (props) {
    super(props)

    this.state = {
      wine: {
        producer: '',
        type: '',
        grape: '',
        region: '',
        review: '',
        resolved: false
      },
      createId: null,
      showUpdateModal: true
    }
  }

  handleClose = (event) => {
    const { history } = this.props
    this.setState({ showUpdateModal: false })
    // console.log('this is this.props.match.params.id:', this.props.match.params.id)
    history.push(`/wines/${this.props.match.params.id}`)
  }

  handleChange = event => {
    event.persist()

    this.setState((state) => {
      return {
        wine: { ...state.wine, [event.target.name]: event.target.value }
      }
    })
  }

  // componentDidMount () {

  // }

  handleSubmit = event => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    const { wine } = this.state

    const id = match.params.id
    // console.log('this is id:', id)
    wineUpdate(id, wine, user)
      .then(res => this.setState({ wine: res.data.wines }))
      .then(() => {
        msgAlert({
          heading: 'Update Success',
          message: 'Review updated successfully!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Update Failed',
          message: `Couldn't update review with error: ${error.message}`,
          variant: 'danger'
        })
      })
  }

  render () {
    const { updated } = this.state
    if (updated) {
      // console.log('this is this.props.match.params.id:', this.props.match.params.id)
      return <Redirect to={`/wines/${this.props.match.params.id}`} />
    }

    return (
      <div>
        <Modal show={this.state.showUpdateModal} backdrop="static" keyboard={false} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Your Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicProducer">
                <Form.Label>Producer</Form.Label>
                <Form.Control
                  type="text"
                  name="producer"
                  placeholder="Producer"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicType">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  placeholder="Type"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicGrape">
                <Form.Label>Grape</Form.Label>
                <Form.Control
                  type="text"
                  name="grape"
                  placeholder="Grape"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicRegion">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  name="region"
                  placeholder="Region"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicReview">
                <Form.Label>Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="review"
                  placeholder="Review"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                variant="secondary"
                onClick={this.handleClose}
              >
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
      </div>
    )
  }
}

export default withRouter(UpdateWine)
