import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Parent from './components/Parent'
import Child from './components/Child'
// redux
import { createStore } from 'redux'
import changeNameApp from "./reducers/name_reducer"

ReactDOM.render(<Parent />, document.getElementById('root'))
registerServiceWorker()
