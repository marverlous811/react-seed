import React from "react"
import {render} from "react-dom"
import BootApp from './src/web/boot';

render(
    <BootApp/>, 
    document.getElementById("app")
)

console.log("hello");