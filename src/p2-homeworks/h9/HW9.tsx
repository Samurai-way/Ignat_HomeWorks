import React from 'react'
import Clock from './Clock'
import c from './Clock.module.css';

function HW9() {
    return (
        <div className={c.wrapper}>
            {/*should work (должно работать)*/}
            <Clock/>
        </div>
    )
}

export default HW9
