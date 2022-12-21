import React from 'react';
// import {useState} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';//Bootstrap CSS
// import 'bootstrap / dist / css / bootstrap.min.css';//Bootstrap CSS
import './App.css';
// import FormFields from './ComponentsTopics/FormFields';
// import FuncPassThroughProps from './ComponentsTopics/FuncPassThroughProps';
// import UseEffects from './ComponentsTopics/UseEffects';
import HOC from './ComponentsTopics/HOC';
// import PropsPass from './ComponentsTopics/PropsPass';
import Container from './Containers/Container';

function App() {
  // const [stateOne, setstateOne] = useState("");
  // const [state, setstate] = useState(false);
  // const handleBar = (event) => {
  //   setstateOne(event.target.value);
  // }
  // function abc() {
  //   alert('HelloWorld')
  // }
  return (
    <div className="App">
      <Container/>
      {/* <HOC/> */}
      {/* <UseEffects/> */}
      {/* <FuncPassThroughProps abc={abc}/> */}
      {/* <FormFields/> */}
      {/* <input type="text" placeholder='Type..!!!' onChange={(event) => setstateOne(event.target.value)} value={stateOne}/>
      <button type='button' onClick={() => setstate(!state)}>Click</button>
      {state ? <h1>{stateOne}</h1>:null} */}
      {/* <button onClick={handleBar}>Click</button> */}
      {/* <PropsPass pass="World!!"/>
      <PropsPass pass="World!!"/>
      <PropsPass pass="World!!"/>
      <PropsPass pass="World!!"/>
      <button onClick={handleBar}>Update</button> */}
    </div>
  );
}

export default App;
