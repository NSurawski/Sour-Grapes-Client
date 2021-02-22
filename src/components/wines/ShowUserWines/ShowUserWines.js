import React, { Component } from 'react'

import { Redirect, Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { wineIndexUser, wineDelete } from './../../../api/wines'
// import { wineUpdate } from './../../../api/wines'

class WineIndexUser extends Component {
  constructor (props) {
    super(props)

    this.state = {
      wine: null,
      exists: true,
      deleted: false,
      wines: [],
      updateReviewClicked: false,
      deleteReviewClicked: false
    }
  }

  handleUpdate = (event) => {
    this.setState({ updateReviewClicked: true })
  }

  handleDelete = id => {
    const { user, msgAlert } = this.props

    wineDelete(id, user)
      .then(() => this.fetchWines())
      .then(() => msgAlert({
        heading: 'Deleted Review Successfully!',
        message: 'Review has been deleted!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Deleting Review Failed',
          message: 'Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  fetchWines = () => {
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
          message: `could not show reviews with error: ${error.message}`,
          variant: 'danger'
        })
      })
  }

  componentDidMount () {
    this.fetchWines()
  }
  render () {
    const { wines, updateReviewClicked } = this.state
    if (!wines) {
      return 'Loading...'
    }

    if (updateReviewClicked) {
    //  console.log('this is wine _id', wines._id)
      return (
        <Redirect to={`/update-wine/${wines.id}`}/>
      )
    }

    // if (deleteReviewClicked) {
    //   return (
    //     <Redirect to={'/wines/'}/>
    //   )
    // }

    const winesJsx = wines.map(wine => (
      <Card key={wine._id} style={{ width: '100%', marginTop: '10px' }}>
        <Card.Body>
          <Card.Title>{wine.producer}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{wine.type}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{wine.grape}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{wine.region}</Card.Subtitle>
          <Card.Text>{wine.review}</Card.Text>
          <Link to={`/update-wine/${wine._id}`}>
            <Button variant="secondary">
              Update
            </Button>
          </Link>
          <Button variant="danger" onClick={() => this.handleDelete(wine._id)}>
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
