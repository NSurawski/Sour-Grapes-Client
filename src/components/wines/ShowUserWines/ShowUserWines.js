import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { wineIndexUser } from './../../../api/wines'

class WineIndexUser extends Component {
  constructor (props) {
    super(props)

    this.state = {
      wines: [],
      updateReviewClicked: false,
      deleteReviewClicked: false
    }
  }

  handleUpdate = (event) => {
    this.setState({ updateReviewClicked: true })
  }

  handleDelete = (event) => {
    this.setState({ deleteReviewClicked: true })
  }

  componentDidMount () {
    const { msgAlert, user } = this.props
    // console.log('this is user', user)
    wineIndexUser(user)
      .then(res => {
        // console.log('this is res', res)
        this.setState({ wines: res.data.wines })
      })
      .then(() => msgAlert({
        heading: 'Indexed User Reviews Successfully',
        message: 'Here are your reviews!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Index User Reviews Failed',
          message: `could not show wines with error: ${error.message}`,
          variant: 'danger'
        })
      })
  }
  render () {
    const { wines, updateReviewClicked, deleteReviewClicked } = this.state
    if (!wines) {
      return 'Loading...'
    }

    if (updateReviewClicked) {
      // console.log('this is wine id', wines.id)
      return (
        <Redirect to={`/update-wine/${wines.id}`}/>
      )
    }

    if (deleteReviewClicked) {
      return (
        <Redirect to={`/delete-wine/${wines.id}`}/>
      )
    }

    const winesJsx = wines.map(wine => (
      <Card key={wine._id} style={{ width: '100%', marginTop: '10px' }}>
        <Card.Body>
          <Card.Title>{wine.producer}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{wine.type}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{wine.grape}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{wine.region}</Card.Subtitle>
          <Card.Text>{wine.review}</Card.Text>
          <Button variant="secondary" onClick={this.handleUpdate}>
              Update
          </Button>
          <Button variant="danger" onClick={this.handleDelete}>
              Delete
          </Button>
        </Card.Body>
      </Card>
    ))

    return (
      <div>
        <ul>
          {winesJsx}
        </ul>
      </div>
    )
  }
}

export default WineIndexUser
