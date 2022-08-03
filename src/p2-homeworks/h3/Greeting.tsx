import React from 'react'
import s from './Greeting.module.css'
import {v1} from "uuid/index";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: any // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name,setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
