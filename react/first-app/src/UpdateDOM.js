import React from 'react'
import ReactDOM from 'react-dom'

let counter = 0;
function update(){
    counter = counter + 1
    const element = (
        <div>
            <h2>Counter: {counter}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('update'))
}

setInterval(update,1000)
