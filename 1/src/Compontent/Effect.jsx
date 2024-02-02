//rafce
//rfce

import { useEffect, useState } from "react";

//react-hooks
// - useState
// - useEffect

//components LifeCycle
// - component mounts - when it touches the DOM (e.g when rendered inside of the App.jsx)
// - component updates - this can happen as a result of changes in a hook e.g useState
// - component unmount - when a component is removed from the DOM

function Effect() {
    const [count, setCount] = useState(0);

    //component mounts
    // useEFfect - normally takes in two argument
    // - one - function/callback
    // - two - dependency - it usually a literal array ([])
    useEffect(function () {
        //it meant to only call once
        console.log('components mounts');
    }, []);
    
    //component updates
    //useEffect will be called every time 'count' state changes
    useEffect(function () {
        console.log('component is updating....');
    },[count]); // NOTE: 'count' is a changing value
    
    return (
        <div>
            <button onClick={function () {
                setCount((prevCount) => prevCount - 1);
            }} id="dec">decrement</button>
            <p>{count}</p>
            <button id="inc" onClick={function () {
                setCount((prevCount) => prevCount + 1)
            }}>increment</button>
        </div>
    )
}

export default Effect;