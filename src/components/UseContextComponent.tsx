import { useState, useContext } from 'react'
import { UserState } from '../domain/models/UserState'
import UserContext from "../store"


const ConsumerComponent = () => {
    const ctx = useContext<UserState>(UserContext)
    return (
        <div>
            { ctx.name } - { ctx.surname }
        </div>
    )
}

const UseContextComponent = () => {
    const [user, setUser] = useState<UserState>({
        name: 'John',
        surname: 'Cobra'
    })

    const changeNameHandler = () => {
        setUser({
            name: 'Alvaro',
            surname: 'DDG'
        })
    }

    return (
        <UserContext.Provider value={user}>
            <div>
                <button onClick={changeNameHandler}>Change user</button>
            </div>
            <ConsumerComponent />
        </UserContext.Provider>
    )
}

export default UseContextComponent