import React from "react"
import {render} from "react-dom"
import Web from './src/web/app';

render(
    <Web/>, 
    document.getElementById("app")
)

console.log("hello");