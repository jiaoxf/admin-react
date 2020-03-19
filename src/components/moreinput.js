import React from 'react'
export default class MoreInput extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isGoing: false,
      numberNum: 2
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange(event){
    const target = event.target
    console.log(target)
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  handleSubmit(event){
    alert('选择'+ this.state.isGoing + '一共' + this.state.numberNum +'人') 
    event.preventDefault()
  }
  render(){
    return(
      <form onSubmit={ this.handleSubmit }>
        <label>
          选择：
          <input
          type="checkbox"
          name="isGoing"
          value={ this.state.isGoing }
          onChange={ this.handleInputChange }
          />
        </label>
        <label>
          人数：
          <input
          type="number"
          name="numberNum"
          value={ this.state.numberNum }
          onChange={ this.handleInputChange }
          />
        </label>
        <input type="submit" value="提交"/>
      </form>
    )
  }
} 