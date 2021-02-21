import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import { wineDelete } from '../../../api/wines'

class DeleteWine extends Component {
  constructor (props) {
    super(props)

    this.state = {
      wine: null,
      exists: true
    }
  }

  handleChange = event => {
    event.persist()

    this.setState((state) => {
      return ''
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    const { wine } = this.state

    const id = match.params.id
    wineDelete(id, wine, user)
      .then(res => this.setState({ wine: res.data.wines }))
      .then(() => {
        msgAlert({
          heading: 'Delete Success',
          message: 'Review deleted successfully!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Delete Failed',
          message: `Couldn't delete review with error: ${error.message}`,
          variant: 'danger'
        })
      })
  }

  // componentDidMount () {
  // }

  render () {
    const { deleted } = this.state
    if (deleted) {
      console.log('this is this.props.match.params.id:', this.props.match.params.id)
      return <Redirect to={`/wines/${this.props.match.params.id}`} />
    }
    return null
  }
}

export default withRouter(DeleteWine)
