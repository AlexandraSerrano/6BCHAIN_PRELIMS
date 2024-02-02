import { useState } from 'react'
import './App.css'
import Demo1 from './Components/Demo1'

function App() {
    const [count, setCount] = useState (0)

    return (
        <div>
            <Demo1/>
            <div class="container">
            </div>
        </div>
    )
}

export default App

import React from 'react';

const ThingstoBring = ({ item, status })
const backgroundcolor = status === 'on-hand' ? 'pink':
                        status === 'true' ? 'green': ''?

return (
    <li style = {{ fontFamily: "timesNewRoman" , fontSize: '20px', backgroundColor, listStyleType: 'none', padding: '8%', margin: '3%' }}>
        {item}
    </li>
);

