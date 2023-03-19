import React, {useState, useRef, useEffect} from "react";
import { useTransition,animated } from "react-spring";
import { v4 as uuidv4 } from "uuid"
import './StateAnim.css'

function StateAnim () {

    const [inputData, setInputData] = useState([
        {
            id: uuidv4(),
            txt: "John Doe"
        },
        {
            id: uuidv4(),
            txt: "Jane Doe"
        },
        {
            id: uuidv4(),
            txt: "Mikel Doe"
        },
    ])

    const inputRef = useRef()

    const handleData = (e) => {
        e.preventDefault()

        const newObj = {
            id: uuidv4(),
            txt: inputRef.current.value
        }
        setInputData([...inputData, newObj])
        inputRef.current.value = ""
    }

    const listTransitions = useTransition(inputData, {
        from: {opacity: 0, transform: "translateY(10px)"},
        enter: {opacity: 0, transform: "translateY(0px)"},
        keys: inputData.map((item) => item.id)
    })
    console.log(listTransitions)
    return (
        <form onSubmit={handleData} >
            <label htmlFor="piano">Renseignez vos pianistes favoris.</label>
            <input type="text" ref={inputRef} id='piano'/>

            <ul>
                {listTransitions((styles, item) => {
                    return (
                        <animated.li style={styles}>
                            {item.txt}
                        </animated.li>
                    )
                })}
            </ul>

            {/*<ul>*/}
            {/*    {inputData.map((item) => (*/}
            {/*        <li key={item.id}>{item.txt}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </form>
    )
}

export default StateAnim;