import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import h from './HW8.module.css';

// export type UserType =

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<any>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: any) => (
        <div key={p._id} className={h.map}>
            <div>{p.name}</div>
            <div className={h.age}>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))

    return (
        <div className={h.wrapper}>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}
            <div className={h.buttons}>
                <div className={h.up}>
                    <SuperButton onClick={sortUp}>sort up</SuperButton>
                </div>
                <div className={h.down}>
                    <SuperButton onClick={()=>{alert('sort down')}}>sort down</SuperButton>
                </div>
                <div className={h.check}>
                    <SuperButton onClick={()=>{alert('check 18')}}>check 18</SuperButton>
                </div>
            </div>
            {/*<div>sort down</div>*/}
            {/*check 18*/}
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
