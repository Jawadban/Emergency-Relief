import React from 'react'

export default class Message extends React.Component {
	render() {
		return (
			<div>
				<textArea rows='3' cols='20' id='message'></textArea>
			</div>
		)
	}
}