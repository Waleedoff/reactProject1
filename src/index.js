import React from "react"
import ReactDom from "react-dom"
import App from "./components/App"
const element = <App/>

ReactDom.render(element,document.getElementById('root'))

export default App;