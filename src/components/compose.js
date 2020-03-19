import React from 'react'
/* function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}
function Contacts() {
  return (
    <h1>我是Contacts</h1>
  )
}
function Chat() {
  return (
    <h2>我是Chat</h2>
  )
}
function Compose() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      }
    >

    </SplitPane>
  )
}
export default Compose; */
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
function Dialog(props){
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

class SignUpDialog extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      login: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  render(){
    return(
      <Dialog
        title="您好"
        message="hello"
      >
        <input type="text" value={ this.state.login } onChange={ this.handleChange }/>
        <button onClick={ this.handleSignUp }>
          sign Click Me!
        </button>
      </Dialog>
    )
  }
  handleChange(e){
    this.setState({
      login: e.target.value
    })
  }
  handleSignUp(){
    alert(`WelCome ${this.state.login}`)
  }
}
export default SignUpDialog