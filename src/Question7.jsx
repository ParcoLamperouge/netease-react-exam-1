import React from 'react'
import confirm from './Confirm'

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true
    }
  }
  render () {
    return (
      <div className="exam">
        
        <div>考试 第七题</div>
        <br></br>
        {
          this.state.value && (
            <div>我还没被删除</div>
          )
        }
      </div>
    )
  }
  async componentDidMount () {
    let res = await confirm("确定删除吗？")
    console.log(res)
    if(res) {
      this.setState({
        value: false
      })
      console.log("是")
    } else{
      console.log("否")
    }
  }
}

export default Demo
