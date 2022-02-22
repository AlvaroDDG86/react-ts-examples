import { useReducer } from "react"
import { CounterState } from "../domain/models/CounterState"
const initialState: CounterState = {
    counter: 10
}

type ACTIONS = { type: 'increment', payload: number} | { type: 'decrement', payload: number}

const counterReducer = (state: CounterState, action: ACTIONS) => {
    switch(action.type) {
        case 'increment': 
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            throw new Error("Bad action");
            
    }

}

const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const incrementHandler = () => {
        dispatch({
            type: 'increment',
            payload: 10
        })
    }    
    const decrementHandler = () => {
        dispatch({
            type: 'decrement',
            payload: 10
        })
    }
    return (
        <div>
            <p>
                counter: { state.counter }
            </p>
            <button onClick={incrementHandler}>Add 10</button>
            <button onClick={decrementHandler}>Remove 10</button>
        </div>
    )
}

export default UseReducerComponent