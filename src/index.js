import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import * as actions from './actions'
import Parent from './components/Parent'

// 1. import redux, and reducer
import { createStore } from 'redux'
import changeNameApp from "./reducers/name_reducer"

// 2. instantiate a store using the reducer
const store = createStore(changeNameApp)

// 3. render Parent component to DOM, passing in store as a prop to Parent
const render = () => {
    ReactDOM.render(
        <Parent store={store} actions={actions} />, 
        document.getElementById('root')
    )
}

// 4. call function so that initial state is rendered
render()

// 5. subscribe #render to listen to the store,
// so it runs every time the store is updated
store.subscribe(render)

// 6. Now go to Parent component
