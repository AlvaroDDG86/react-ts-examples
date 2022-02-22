import { useRef, useState } from "react"

const UseRefComponent = () => {
    const [name, setName] = useState<string | undefined>('')
    const inputRef = useRef<HTMLInputElement | null>(null)
    const changeInput = () => {
        setName(inputRef.current?.value)
    }

    return (
        <div>
            <input ref={inputRef} onChange={changeInput} />
            <p>{ name }</p>
        </div>
    )
}

export default UseRefComponent