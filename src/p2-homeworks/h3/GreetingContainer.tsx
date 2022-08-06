import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: string // need to fix any
    addUserCallback: ()=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.value.trim()
        if(name) {
            setName(name)
            setError('')
        } else  {
            setName('')
            setError('add only strings')

        }
        // need to fix any
        // need to fix
    }
    const addUser = () => {
        alert(`Hello! `+ name)
        setName('')// need to fix
        setTotalUsers(totalUsers+1)
    }

    const zUser =()=>{
        setTotalUsers(0)
    }

    const [totalUsers, setTotalUsers] =useState(0)

     // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            zUser={zUser}
        />
    )
}

export default GreetingContainer
