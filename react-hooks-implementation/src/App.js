import React, { useState } from 'react';

const App = () => {

  const [ count, setCount ] = useState(0);
  const [ isOn, setIsOn ] = useState(false);

  // equivalent of 
  // state={
  //   count: 0
  // }


  // const incrementCount = () => {
  //   this.setState(previousState => ({
  //     count: previousState.count +1
  //   }))
  // };

  const incrementCount = () => {
    //updater function need not to return object.
    setCount(previousCount => previousCount + 1);
  }

const toggleLight = () =>{(
  setIsOn(previousIsOn  => !previousIsOn)
)
  
}

  // toggleLight = () => {
  //   this.setState(
  //     previousState => (
  //       { isOn : !previousState.isOn }
  //     )
  //   )
  // };





  return (
    <>
    <div>
      <button type="button" onClick={incrementCount}>I am clicked {count} times.</button>
      {/* <button type="button" onClick={this.incrementCount}>I was clicked {this.state.count} times</button> */}
      <h3>Toggle Light</h3>
      {/* <div
        style={{
          height:"50px",
          width:"50px",
          background: this.state.isOn ? "yellow" : "grey"
        }}
        onClick={this.toggleLight}
      ></div> */}
      <div
        style={{
          height:"100px",
          width:"100px",
          background: isOn ? "yellow" : "grey"
        }}
        onClick={toggleLight}
      >Click me to change color</div> 
      <div>

      </div>
    </div>
    </> 
  )
}

export default App;




// import './App.css';
// import React from 'react';

// class App extends React.Component {

// state={
//   count: 0
// }

// incrementCount = (e) => {

//   this.setState({count: this.state.count + 1})
// }
// render(){
//   let { count } = this.state;
//   return (
//     <div className="App">
//       <button type="button" onClick={this.incrementCount}>I was clicked {this.state.count} times</button>
//     </div>
//   ); 

// }
  
// }

// export default App;
