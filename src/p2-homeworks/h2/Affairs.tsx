import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import h from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }

    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={h.button_a}>All</button>
            <button onClick={setHigh} className={h.button_h}>High</button>
            <button onClick={setMiddle} className={h.button_m}>Middle</button>
            <button onClick={setLow} className={h.button_l}>Low</button>
        </div>
    )
}

export default Affairs
