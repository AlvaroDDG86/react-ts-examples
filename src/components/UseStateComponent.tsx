import React, { useState } from "react"

const UseStateComponent = () => {
    const [list, setList] = useState<number[]>([])
    const [name, setName] = useState<string | null>('Alvaro')

    const clickAddHandler = () => {
        setList([...list, list.length + 1])
    }

    const clickNameHandler = () => {
        setName('Alvaro' + Math.random())
    }

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={clickNameHandler}>Change name</button>
            <button onClick={clickAddHandler}>Add one</button>
            {
                list.map((item) => {
                    return (
                        <div>{item}</div>
                    )
                })
            }
        </div>
    )
}

export default UseStateComponent