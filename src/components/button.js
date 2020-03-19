import React from 'react'
class Toggle extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      isToggleOn: true
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (id) => {
    console.log(id)
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      // <button className="btn" onClick={this.handleClick.bind(this, 1)}>
      <button onClick={ (e) => this.handleClick(1)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
export default Toggle