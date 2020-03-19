import React from 'react'
/* const ListItems = number.map((number) =>
  <li>{number}</li>
) */
/* class ListItem extends React.Component{
  constructor(props){
    super(props)
    console.log(props.list)
  }
  state={
    ListItems : this.props.list.map((number) =>
      <li key={number.toString()}>{number}</li>
    )
  }
  render(){
    console.log(this.state.ListItems)
    return (
      <ul>{this.state.ListItems}</ul>
    )
  }
} */
class ListItem extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>
        {
          this.props.list.map((number) => 
            <li key={number.toString()}>{number}</li>
          )
        }
      </ul>
    )
  }
}
export default ListItem