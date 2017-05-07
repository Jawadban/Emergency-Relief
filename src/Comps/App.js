import React from 'react'
import Message from './WriteMessageComp'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>My App </h1>
				<Message/>
			</div>
		)
	}
}