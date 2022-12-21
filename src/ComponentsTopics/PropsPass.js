import React from 'react'

function PropsPass(props) {
    return (
        <div>
            <h1>Props Pass :</h1>
            <p style={{display:"inline-block" , backgroundColor:"yellowgreen" , padding:"5px"}}>{props.pass}</p>
            {/* <p style={{ display: "inline-block", backgroundColor: "yellowgreen", padding: "5px" }}>{props.pass.Details}</p> */}
        </div>
    )
}

export default PropsPass
