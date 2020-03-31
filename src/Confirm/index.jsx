import ReactDOM from "react-dom";
import React from "react";
import './index.css'

class Confirm extends React.Component{
	constructor (props) {
		super(props);
		this.state = {
			visible: true,
			value: null
		}
	}
	onOk = () =>  {
		this.setState({
			visible: false,
			value: true
		})
		node.resolve(true)
	}
	onCancel = () =>  {
		this.setState({
			visible: false,
			value: false
		})
		node.resolve(false)
	}
	render() {
		const { text } = this.props
		return (
		<div>
			{
				this.state.visible && (
				<div className='confirm'>
					<div className='confirm__mask'></div>
					<div className='confirm__content'>
						<div className='confirm__text'>{ text }</div>
						<button onClick={this.onOk}>
							Yes
						</button>
						<button onClick={this.onCancel}>
							No
						</button>
					</div>
				</div>
				)
			}
		</div>
		);
	}
}
let node = null	
const confirm = (str) =>{
	node = document.createElement('div')
	document.body.appendChild(node)
	ReactDOM.render(<Confirm text={str}/>, node)
// node = null
	return new Promise((resolve, reject) => {
		if (node) {
			node.resolve = resolve
			node.reject = reject
		} else {
			reject('没有成功挂载')
		}
	})
}

export default confirm
