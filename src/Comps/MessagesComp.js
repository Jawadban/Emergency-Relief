import React from 'react'
import axios from 'axios'

export default class Message extends React.Component {
	constructor(props) {
		super (props)
		this.state = {
			message: ''
		}
		this.messageHandler = this.messageHandler.bind(this)
	}

	componentDidMount() {
		axios.get('/obj')
	  .then(function(response) {
	    console.log(response.data);
	    // response.on('data', chunk => {
	    // 	console.log(chunk.toString())
	    // })
	  })
	  .catch(function(error) {
	    console.log(error);
	  })


		axios.get('/messages')
		.then((res) =>{
			console.log(res);
			this.setState({
				message: res.data
			})
		})
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
			</div>
		)
	}
}