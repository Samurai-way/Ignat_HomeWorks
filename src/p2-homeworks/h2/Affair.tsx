import React from 'react'
import h from './Affairs.module.css'

type AffairPropsType = {
    affair: any
    deleteAffairCallback: () => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback()
    }

    return (
        <div>
            {props.affair.name}
            ___
            {props.affair.priority}
            <button onClick={deleteCallback} className={h.button_x}>X</button>
        </div>
    )
}

export default Affair
