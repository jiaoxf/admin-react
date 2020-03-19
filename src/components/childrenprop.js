import React from 'react'
function FancyBorder(props){
  return(
    <div className={ 'myColor' + props.color }>
      {props.children}
    </div>
  )
}
function WelcomeDialog(){
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}
export default WelcomeDialog;