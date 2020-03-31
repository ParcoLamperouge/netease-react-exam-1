import React from 'react'
import InputNumber from './InputNumber'

import './index.css'
function App() {
  let obj = {
    aaa: {
      value: 100,
      setValue: (v) => {
        console.log(v)
      }
    }
  }
  let useState = (val) => {
    return [
      obj[val].value, 
      obj[val].setValue
    ]
  }
  const [value, setValue] = useState('aaa')
  
  return (
    <div className="exam">
      <div>考试 第六题</div>
      <br></br>
      受控 可输入数字，遇到非数字则值为0
      <InputNumber value={value} onChange={setValue}/>
      <br></br>
      非受控
      <InputNumber defaultValue={value} onChange={setValue}/>
    </div>
  )
}
export default App
