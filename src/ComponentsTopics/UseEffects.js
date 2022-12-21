import React from 'react'
import { useEffect , useState} from 'react';
import Button from 'react-bootstrap/Button';


function UseEffects() {
    const [valOne , setvalOne] = useState(0);
    const [valTwo , setvalTwo] = useState(100);
    
    useEffect(()=>{
        console.log('Hello')
    }, [valTwo])
  return (
    <div>
        <h1>useEffect</h1>
          <p>{valOne}</p>
          <p>{valTwo}</p>
      <Button onClick={() => setvalOne(valOne + 1)}>ClickTOUpdate</Button>
        {/* <button >ClickTOUpdate</button> */}
          <button onClick={() => setvalTwo(valTwo+100)}>ClickTOUpdate</button>
    </div>
  )
}

export default UseEffects