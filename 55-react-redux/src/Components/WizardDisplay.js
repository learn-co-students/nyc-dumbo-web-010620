import React from 'react'
import WizardCard from './WizardCard'
import { connect } from 'react-redux'
// connect is a function that expects some callbacks
  // 1. What information do we want to GET (mapStateToProps)
  // 2. What information do we want to SET (mapDispatchToProps)

  // it returns a function definition
    // that when invoked with a boring component, returns a magical component




class WizardDisplay extends React.Component{

  render(){
    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {
            this.props.wizardKeyProp.map((wizardObj) => {
              return <WizardCard wizard={wizardObj} key={wizardObj.name}/>
            })
          }
        </ul>
      </div>
    )
  }
}



// mapStateToProps is a function that returns an object
  // the key+values of that object will get merged into props
let mapStateToProps = (reduxState) => {
  // console.log(reduxState, "FROM INSIDE mapStateToProps");
  return {
    wizardKeyProp: reduxState.wizards
  }
}





let someFunction = connect(mapStateToProps)
let magicalComponent = someFunction(WizardDisplay)
export default magicalComponent



// export default connect(mapStateToProps)(WizardDisplay)
