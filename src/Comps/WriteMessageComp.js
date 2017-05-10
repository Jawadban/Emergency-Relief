import React from 'react'
import axios from 'axios'

export default class Message extends React.Component {
	constructor(props) {
		super (props)
		this.state = {
			message: ''
		}
		this.messageHandler = this.messageHandler.bind(this)
		this.messageSubmitHandler = this.messageSubmitHandler.bind(this)
	}

	messageHandler(event) {
		this.setState({
			message: event.target.value
		})
	}

	messageSubmitHandler() {

	// axios.get('/obj')
	//   .then(function (response) {
	//     console.log(response.data);
	//     // response.on('data', chunk => {
	//     // 	console.log(chunk.toString())
	//     // })
	//   })
	//   .catch(function (error) {
	//     console.log(error);
	//   })


		axios.post('/message', {
	    lastName: this.state.message,
	    user: 'Jawad'
	  })
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

	render() {
		return (
			<div>
				<textArea rows='3' cols='20' id='message' onChange={this.messageHandler}/>
				<button onClick={this.messageSubmitHandler}/>
				<h1>{this.state.message}</h1>
			</div>
		)
	}
}