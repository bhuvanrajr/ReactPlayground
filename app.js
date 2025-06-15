 import React from "react"
 import ReactDOM from "react-dom/client"
 
 var header = React.createElement("h1",{id:"header"},"I am from Parcel!");
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);