import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Parent from './components/Parent'
import Child from './components/Child'

// import redux, and reducer
import { createStore } from 'redux'
import changeNameApp from "./reducers/name_reducer"

// instantiate a store using the reducer
const store = createStore(changeNameApp)

// render Parent component to DOM, passing in store as a prop to Parent
const render = () => {
    ReactDOM.render(
        <Parent store={store}/>, 
        document.getElementById('root')
    )
}

// call function so that initial state is rendered
render()

// subscribe #render to listen to the store,
// so it runs every time the store is updated
store.subscribe(render)