import React from 'react';
import ReactDOM from 'react-dom';


/*container for all boxes*/
let mainBoxStyle = {
  width:"615px",
  height:"100px",
  border: "2px solid #bfbcbc54",
  backgroundColor:"#d3d3d32e",
  paddingLeft: "15px",
  paddingTop: "15px",
  margin: "100px auto"

}
/*text style*/
let textStyle = {
  position:"absolute",
  top:"40%",
  left:"20%"
}
/*General Box*/

let box = {
  width:"200px",
  height:"80px",
  fontSize: "15px",
  textAlign: "center",
  float: "left",
  position: "relative"
}

/*Black box style*/
let blackBoxStyle = {
  backgroundColor: "black",
  color: "yellow"
}
/*Red box style*/
let redBoxStyle = {
  backgroundColor: "red",
  color: "blue",
  marginLeft: "5px"
}
/*Green Box style*/
let greenBoxStyle = {
  backgroundColor: "green",
  color: "white",
  marginLeft: "5px"
}



let BlackBox = (props) => <div style = {{...blackBoxStyle,...box}}> <span style = {textStyle}>{props.title}</span></div>;
let RedBox   = (props) => <div style = {{...redBoxStyle,...box}}>   <span style = {textStyle}>{props.title}</span></div>;
let GreenBox = (props) => <div style = {{...greenBoxStyle,...box}}> <span style = {textStyle}>{props.title}</span></div>;
let App = () => (
                <div style={mainBoxStyle}>
                  <BlackBox title = "Yellow In Black"/>
                  <RedBox title = "Blue In Red"/>
                  <GreenBox title = "White In Green"/>
                </div>
              );


ReactDOM.render(
  <App/>,
  document.getElementById('root')

);



/*
import React, { Component } from "react";
import "./styles.css";
class Dynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { color: "black", text: "Yellow in Black" },
        { color: "red", text: "Blue in Red" },
        { color: "green", text: "White in Green" },
        { color: "yellow", text: "Yellow in White" }
      ]
    };
  }
  render() {
    const data = this.state.data;
    return (
      <div className="container">
        <Box data={data} />
      </div>
    );
  }
}
const Box = props => {
  return (
    <>
      {props.data.map(el => {
        return <div id={el.color}> {el.text}</div>;
      })}
    </>
  );
};
export default Dynamic;





6:03
body {
  font-family: sans-serif;
  text-align: center;
  padding: 90px 20px;
}
.container {
  box-shadow: 0 0 10px gray;
  border-radius: 8px;
  padding: 10px 2px;
  width: 600px;
}
.container > div {
  display: inline-block;
  width: 25%;
  padding: 1.6em 1em;
  font-weight: 800;
  font-size: 1.2rem;
}
#black {
  background: black;
  color: yellow;
}
#red {
  background: red;
  color: blue;
  margin: 0 5px 0 5px;
}
#green {
  background: green;
  color: white;
}

*/

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// let UserList = (props) => {
//   console.log(props);
//   return <div> {props.person1.name} and {props.person2.name}</div>
// }
//
// class App extends React.Component{
//   render(){
//     const person1 = {
//       name: "Adilet"
//     }
//     const person2 = {
//       name: "Asan"
//     }
//     return  <UserList person1={person1} person2={person2}/>
//   }
// }
//
// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
//
// );
