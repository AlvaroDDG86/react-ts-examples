import { createContext } from "react";
import { UserState } from "../domain/models/UserState";

const initialState: UserState = {
    name: '',
    surname: ''
}

const context = createContext<UserState>(initialState)

export default context