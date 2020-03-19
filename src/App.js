import React from 'react';
import './App.css';
/* import Toggle from './components/button'
import Login from './components/login'
import ListItem from './components/listItem'
import NameForm from './components/form'
import Textarea from './components/textarea'
import Select from './components/select'
import MoreInput from './components/moreinput'
import Calculator from './components/statepromote'
import Dialog from './components/childrenprop'
import Compose from './components/compose'
import Example from './components/hookState'
import HookEffect from './components/hookEffect' */
import Menu from './components/layout/menu'

// moment.locale('zh-cn');
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arrItem = arr.map(number => 
  <li key={number.toString()}>{ number }</li>
)
function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Text name="我是父组件的新props"/>
        <Login isLogin="true"/>
        <ul>{ arrItem }</ul>
        <ListItem list={arr2} />
        <NameForm />
        <Textarea />
        <Select />
        <MoreInput />
        <Calculator />
        <Dialog />
        <Compose />
        <Example />
        <HookEffect /> */}
      </header>
      <Menu />
    </div>
  );
}
class Text extends React.Component{
  constructor(props) {
    console.log('constructor执行了')
    super(props)
    this.handleChange = this.handleChange.bind(this)
    let s = Symbol()
    console.log(typeof s)
  }

  state = {
    user: 'hello',
    name: '爸爸'
  }
  handleChange(e) {
    this.setState({
      msg: e.target.value
    })
  }
  componentWillMount(){
    console.log('componentWillMount执行了')
    this.setState({
      user: '焦学峰',
      name: '你好呀'
    })
  }
  render(){
    console.log('render函数执行了')
    return(
      <div>
        <h1>我是一个组件,{this.state.user}名字：{this.state.name} props的内容：</h1>
        <input type="text" defaultValue={this.props.name} onChange={this.handleChange}/>
        {/* <Toggle /> */}
      </div>
    )
  }
  componentDidMount(){
    console.log('componentDidMount函数执行了')
    this.setState({
      name: '改变了'
    })
  }
  componentWillReceiveProps(nextprops){
    console.log('componentWillReceiveProps函数执行了,新的props是'+nextprops)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    console.log('sholdComponentUpdate执行了')
    return true
  }
  componentWillUpdate(){
    console.log('componentWillUpdate函数执行了')
  }
  // componentDidMount(){
  //   console.log('componentDidMount执行')
  // }
}
export default App;
