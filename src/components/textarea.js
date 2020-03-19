import React from 'react'
class TextareaForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({ value: event.target.value})
  }
  handleSubmit(event){
    alert('提交的文章' + this.state.value)
    event.preventDefault()
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          文章：
        <textarea value={this.state.value} name="" id="" cols="30" rows="10" onChange={this.handleChange}></textarea>
          <input type="submit" value="提交" />
        </label>
      </form>
    )
  }
}
export default TextareaForm