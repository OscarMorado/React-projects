import React from 'react'
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorldApp'
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './Styles.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App></App> */}
        {/* <FirstApp title = "A title" subtitle= "A subtitle"></FirstApp> */}
        <CounterApp value = {10}/>
    </React.StrictMode>
)

