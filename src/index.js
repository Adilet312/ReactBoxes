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
/*Black box style*/
let blackBoxStyle = {
  width:"200px",
  height:"80px",
  backgroundColor: "black",
  fontSize: "15px",
  textAlign: "center",
  color: "yellow",
  float: "left",
  position: "relative"
}
/*Red box style*/
let redBoxStyle = {
  width:"200px",
  height:"80px",
  backgroundColor: "red",
  fontSize: "15px",
  textAlign: "center",
  color: "blue",
  float: "left",
  marginLeft: "5px",
  position: "relative"
}
/*Green Box style*/
let greenBoxStyle = {
  width:"200px",
  height:"80px",
  backgroundColor: "green",
  fontSize: "15px",
  textAlign: "center",
  color: "white",
  float: "left",
  marginLeft: "5px",
  position: "relative"
}


let BlackBox = () => <div style = {blackBoxStyle}><span style = {textStyle}>Yellow In Black</span></div>;
let RedBox = ()   => <div style = {redBoxStyle}><span style = {textStyle}>Blue In Red</span></div>;
let GreenBox = () => <div style = {greenBoxStyle}><span style = {textStyle}>White In Green</span></div>;
let App = () => (
                <div style={mainBoxStyle}>
                  <BlackBox/>
                  <RedBox/>
                  <GreenBox/>
                </div>
              );


ReactDOM.render(
  <App/>,
  document.getElementById('root')

);
