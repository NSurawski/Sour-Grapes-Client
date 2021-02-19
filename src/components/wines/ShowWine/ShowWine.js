// import React, { Component } from 'react'
//
// import { Redirect, withRouter } from 'react-router-dom'
//
// import { showWine, wineDelete } from '../../../api/wines'
// import Button from 'react-bootstrap/Button'
//
// class WineShow extends Component {
//   constructor (props) {
//     super(props)
//
//     this.state = {
//       wine: null,
//       exists: true,
//       deleted: false,
//       updateWineButtonClicked: false
//     }
//   }
//
//   handleChange = event => {
//     event.persist()
//     this.setState((state) => {
//       return {
//         content: { ...state.content, [event.target.name]: event.target.value }
//       }
//     })
//   }
//
//   onWineDelete = () => {
//     const { user, match, history, msgAlert } = this.props
//     wineDelete(match.params.id, user)
//       .then(this.setState({ exists: false }))
//       .then(() => msgAlert({
//         heading: 'Deleted Review Successfully',
//         message: 'The review has been deleted.',
//         variant: 'success'
//       }))
//       .then(() => history.push('/index'))
//       .catch(error => {
//         msgAlert({
//           heading: 'Deleting Review Failed',
//           message: `Failed to delete review with error: ${error.message}`,
//           variant: 'danger'
//         })
//       })
//   }
//
//   componentDidMount () {
//     const { user, match, msgAlert } = this.props
//
//     showWine(match.params.id, user)
//       .then(res => {
//         this.setState({ wine: res.data.wines })
//         return res
//       })
//       .then(res => msgAlert({
//         heading: 'Showing Review Successfully',
//         message: `Now showing ${res.data.wines.producer}`,
//         variant: 'success'
//       }))
//       .catch(error => {
//         msgAlert({
//           heading: 'Showing Review Failed',
//           message: `Failed to show review with error: ${error.message}`,
//           variant: 'danger'
//         })
//       })
//   }
//
//   render () {
//     const { wine, updateWineButtonClicked } = this.state
//     const { msgAlert, user } = this.props
//
//     if (!wine) {
//       return 'Loading...'
//     }
//
//     if (updateWineButtonClicked) {
//       return (
//         <Redirect to={`/update-wine/${wine._id}`}/>
//       )
//     }
//
//     // const userId = user._id
//     // const ownerId = wine.owner._id
//
//     let showDisplay
//
//     showDisplay = (
//       <div>
//         <h3>{wine.producer}</h3>
//         <h5>Type: {wine.type}</h5>
//         <h5>Grape: {wine.grape}</h5>
//         <h5>Region: {wine.region}</h5>
//         <h5>{wine.review}</h5>
//       </div>
//     )
//
//     showDisplay = (
//       <div>
//         <Button onClick={this.onWineDelete} variant="info">Delete</Button>
//         <Button onClick={this.updateWineClicked} variant="info">Update</Button>
//         <h3>{wine.producer}</h3>
//         <h5>Type: {wine.type}</h5>
//         <h5>Grape: {wine.grape}</h5>
//         <h5>Region: {wine.region}</h5>
//         <h5>{wine.review}</h5>
//       </div>
//     )
//     return (
//       <div>
//         {showDisplay}
//       </div>
//     )
//   }
// }
//
// export default withRouter(WineShow)
