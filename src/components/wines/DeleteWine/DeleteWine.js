// import React, { Component } from 'react'
// import { Redirect, Link, withRouter } from 'react-router-dom'
//
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
//
// import { wineDelete } from '../../../api/wines'
//
// class DeleteWine extends Component {
//   constructor (props) {
//     super(props)
//
//     this.state = {
//       wine: null,
//       // wines: [],
//       exists: true
//     }
//   }
//
//   handleChange = event => {
//     event.persist()
//
//     this.setState((state) => {
//       return ''
//     })
//   }
//
//   handleSubmit = event => {
//     event.preventDefault()
//
//     const { user, match, msgAlert } = this.props
//     const { wine } = this.state
//
//     const id = match.params.id
//     wineDelete(id, wine, user)
//       .then(res => this.setState({ wine: res.data.wines }))
//       .then(() => {
//         msgAlert({
//           heading: 'Delete Success',
//           message: 'Review deleted successfully!',
//           variant: 'success'
//         })
//       })
//       .catch(error => {
//         msgAlert({
//           heading: 'Delete Failed',
//           message: `Couldn't delete review with error: ${error.message}`,
//           variant: 'danger'
//         })
//       })
//   }
//
//   // componentDidMount () {
//   // }
//
//   render () {
//     const { deleted } = this.state
//     if (deleted) {
//       // console.log('this is this.props.match.params.id:', this.props.match.params.id)
//       return (
//         <Redirect to={`/wines/${this.props.match.params.id}`} />
//       )
//     }
//
//     const wines = []
//     const winesJsx = wines.map(wine => (
//       <Card key={wine._id} style={{ width: '100%', marginTop: '10px' }}>
//         <Card.Body>
//           <Card.Title>{wine.producer}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">{wine.type}</Card.Subtitle>
//           <Card.Subtitle className="mb-2 text-muted">{wine.grape}</Card.Subtitle>
//           <Card.Subtitle className="mb-2 text-muted">{wine.region}</Card.Subtitle>
//           <Card.Text>{wine.review}</Card.Text>
//           <Link to={`/update-wine/${wine._id}`}>
//             <Button variant="secondary">
//               Update
//             </Button>
//           </Link>
//           <Link to={`/delete-wine/${wine._id}`}>
//             <Button variant="danger" onClick={this.handleDelete}>
//               Delete
//             </Button>
//           </Link>
//         </Card.Body>
//       </Card>
//     ))
//
//     return (
//       <div>
//         <ul>
//           {winesJsx}
//         </ul>
//       </div>
//     )
//   }
// }
//
// export default withRouter(DeleteWine)
