import { useState } from "react";

function    Count() {
    // value - 0
    // setValue would help us to either - increment or decrement
    const [value, setValue] = useState(0)

    return(
        <div className="count">
            <button onClick={function () {
                console.log('decrement');
                setValue(function(value) {
                    // check to see the value is already = 0, prevents it from decrement

                    if (value === 0) return value

                    return value -1
                })
            }}>-</button>
            <h1>{value}</h1>
            <button onClick={function () {
                console.log('increment');
                setValue ((value) => value + 1)
            }}>+</button>
        </div>
    )
}

export default Count