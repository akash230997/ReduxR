import React from 'react'

function FuncPassThroughProps(prop) {
    
    return (
        <div>
            <h1>FuncPassThroughProps</h1>
            <button onClick={prop.abc}>Click</button>
        </div>
    )
}

export default FuncPassThroughProps