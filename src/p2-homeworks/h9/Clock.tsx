import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import c from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date)
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())// setDate
        }, 1000)
        setTimerId(id)
    }

    console.log(timerId)

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toLocaleDateString()   // fix with date

    return (
        <div className={c.wrapper_clock}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                {stringTime}
            </div>
            {show && (
                <div className={c.date}>{stringDate}</div>)}
            <div className={c.buttons_wrapper}>
                <SuperButton className={c.button_start}
                             onClick={start}>start</SuperButton>
                <SuperButton className={c.button_stop}
                             onClick={stop}>stop</SuperButton>
            </div>
        </div>)
}

export default Clock
