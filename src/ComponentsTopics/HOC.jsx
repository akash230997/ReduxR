import React from "react";
import { useState } from "react";

function HOC() {
  return (
    <div>
      {/* <h1>HOC</h1> */}
      <HigherOrderComponent cmp={Component} />
    </div>
  );
}

function HigherOrderComponent(component) {
  return (
    <div>
      {/* <h1>HOC</h1> */}
      <h1
        style={{
          backgroundColor: "red",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          fontSize: "1rem",
          color: "#FFF",
          padding: "50px",
          display: "inline-block",
          //   lineHeight: "150px",
        }}
      >
        <component.cmp />
      </h1>
      <h1
        style={{
          backgroundColor: "green",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          fontSize: "1rem",
          color: "#FFF",
          padding: "50px",

          display: "inline-block",
          //   lineHeight: "150px",
        }}
      >
        <component.cmp />
      </h1>
      <h1
        style={{
          backgroundColor: "blue",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          fontSize: "1rem",
          color: "#FFF",
          padding: "50px",
          display: "inline-block",
          //   lineHeight: "150px",
        }}
      >
        <component.cmp />
      </h1>
    </div>
  );
}

function Component() {
  const [state, setstate] = useState(1);
  function handle () {
    if(state>0){
        setstate(state-1)
    }
  }
  return (
    <div>
      <h1>HOC</h1>
      <p>{state}</p>
      <button onClick={()=>setstate(state+1)}>Update</button>
      <button onClick={handle}>Decrement</button>
    </div>
  );
}

export default HOC;
