import react from "react";
import reactDom from "react-dom";
import './index.css'
var date = new Date(22,11,2020,4);
console.log(date)
var hour = date.getHours();
var color = ""
var val = "";
if(hour>=0 && hour <=10) {val = "Morning"; color='Orange';}
else if(hour>10 && hour<16) {val = "AfterNoon"; color='Yellow';}
else if(hour>=17 && hour<21 ) {val = "Evening"; color = 'Green';}
else {val = "Night"; color= "Black"};

function Val() {
    // console.log(val,color)
    return {val,color}
}

export default Val