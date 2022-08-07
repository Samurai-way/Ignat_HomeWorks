import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    zUser: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, zUser, error, totalUsers} // деструктуризация пропсов
) => {

    const Class = name ? s.inputClass : s.ddd // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={Class}/>
            <span><div className={s.error}>{error}</div></span>
            <button className={s.button} onClick={addUser}>add</button>
            <button className={s.button} onClick={zUser}>click</button>
            <span className={s.span}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
