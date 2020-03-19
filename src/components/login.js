import React from 'react'
class Login extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  state = {
    isLogin: true
  }
  render(){
    console.log(this.props.isLogin)
    if (this.props.isLogin){
      return <UserisLogin />
    }
    else{
      return <UsernoLogin />
    }
  }
}
class UserisLogin extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <h1>欢迎登录</h1>
    )
  }
}
class UsernoLogin extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <h1>请您登录</h1>
  }
}
export default Login