import React from 'react'
class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }
  render () {
    const {
      value,
      defaultValue,
      onChange
    } = this.props
    if (value) {
      //受控
      return (
        <div>
          <input 
            value={this.state.value} 
            defaultValue = {defaultValue}
            onChange={(e) => {
              let newValue = Number(e.target.value)
              if (newValue !== newValue) {
                newValue = 0
              }
              onChange(newValue)
              this.setState({value: newValue})
            }}
          />
        </div>
      )
    } else {
      // 非受控
      return (
        <div>
          <button onClick={() => {
            this.setState({value: this.state.value-1})
            onChange(this.state.value)
          }}> - </button>
          <input readOnly
            value={this.state.value}
          />
          <button onClick={() => {
            this.setState({value: this.state.value+1})
            onChange(this.state.value)
          }}> + </button>
        </div>
      )
    }
    
  }
  componentDidMount() {
    const dv = this.props.defaultValue
    dv && (typeof dv === 'number') && this.setState(
      {
        value: this.props.defaultValue
      }
    )
  }
}
export default InputNumber
