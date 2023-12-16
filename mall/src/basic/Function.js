import React, {useState, useEffect} from 'react'

function Function(){
    const [count, setCount]=useState(0);
    useEffect(()=>{
        console.log(count)
    },[])
    return(
    <div>
    <h1> you clicked {count} times</h1>
    <button onClick={()=>setCount(count+1)}>ChangeCount </button>
    </div>
    );
}
 export default Function