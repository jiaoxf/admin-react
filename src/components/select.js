import React from 'react'
class SelectForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value: 'purple'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }
  handleSubmit(event){
    alert('您选择的:' +this.state.value)
    event.preventDefault()
  }
  render(){
    return(
      <form onSubmit={ this.handleSubmit }>
        <label> 
          下拉框：
          <select name="" id="" value={ this.state.value} onChange={ this.handleChange }>
            <option value="banana">香蕉</option>
            <option value="apple">苹果</option>
            <option value="orage">橙子</option>
            <option value="purple">葡萄</option>
          </select>
        </label>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}
export default SelectForm