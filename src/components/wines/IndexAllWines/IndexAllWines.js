import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import { wineIndexAll } from './../../../api/wines'

class WineIndexAll extends Component {
  constructor (props) {
    super(props)

    this.state = {
      wines: null
    }
  }
  componentDidMount () {
    const { msgAlert, user } = this.props

    wineIndexAll(user)
      .then(res => {
        // console.log('this is wine:', res)
        return res
      })
      .then(res => {
        this.setState({ wines: res.data.wines })
      })
      .then(() => msgAlert({
        heading: 'Index All Wines Successfully',
        message: 'check out your reviews!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Index All Wines Failed',
          message: `could not load wines: ${error.message}`,
          variant: 'danger'
        })
      })
  }

  render () {
    const { wines } = this.state
    if (!wines) {
      return 'Loading...'
    }

    const winesJsx = wines.map(wine => (
      <Card key={wine._id} style={{ width: '100%', marginTop: '10px' }}>
        <Card.Body>
          <Card.Title>{wine.producer}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{wine.type}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{wine.grape}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{wine.region}</Card.Subtitle>
          <Card.Text>{wine.review}</Card.Text>
        </Card.Body>
      </Card>
    ))

    return (
      <div>
        <h3>Welcome</h3>
        <ul>
          {winesJsx.reverse()}
        </ul>
      </div>
    )
  }
}

export default WineIndexAll
