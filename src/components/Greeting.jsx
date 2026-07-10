import React from 'react'

export const Greeting = () => {
    const showGreeting=(name)=>{
    alert(`Hello${name}`)};
  return (
    <div>
        <button onClick={()=>showGreeting("Zainab")}>Hello Zainab</button>
        <button onClick={()=>showGreeting("Ali")}>Hello Ali</button>
        <button onClick={()=>showGreeting("Ahmed")}>Hello Ahmed</button>
        </div> )}
export default Greeting;
