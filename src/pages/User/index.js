import React  from 'react';
import './index.less'
/* class Login extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        这是登录页面
      </div>
    )
  }
} */
class User extends React.Component{
  backHome = () => {
    this.props.history.push('./home')
    this.props.history.push({
      pathname: './home',
      state:{
        id: this.props.match.params.id
      }
    })
  }
  render(){
    return (
      <div>
        <div className="box">啊啊啊啊</div>
        <button onClick={this.backHome}>返回首页</button>  
      </div>
    )
  }
}
export default User