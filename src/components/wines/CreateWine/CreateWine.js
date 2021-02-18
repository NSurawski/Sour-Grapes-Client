import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import WineForm from '../../WineForm/WineForm'

import { createWine } from '../../../api/wines'

class CreateWine extends Component {
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
      createId: null
    }
  }

  handleChange = event => {
    event.persist()

    this.setState((state) => {
      return {
        wine: { ...state.wine, [event.target.name]: event.target.value }
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { wine } = this.state

    createWine(wine, user)

      .then(res => {
        this.setState({ createId: res.data.wine._id })
        return res
      })
      .then(res => msgAlert({
        heading: 'Created Review Successfully',
        message: `Successfully Created ${res.data.wine.producer}`,
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Failed to Create Review',
        message: `Failed to Create with error: ${error.message}`,
        variant: 'danger'
      }))
  }

  render () {
    const { wine, createId } = this.state

    if (createId) {
      return <Redirect to={`/wines/${createId}`} />
    }

    return (
      <div>
        <WineForm
          wine={wine}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default CreateWine
