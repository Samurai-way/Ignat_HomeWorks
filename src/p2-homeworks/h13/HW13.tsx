import React, {useState} from 'react';
import h from './HW13.module.css'
import {todolistAPI} from "../h5-rrd-v6/RequestsAPI";

export const Request = () => {

    const [get, setGet] = useState(undefined)
    const [check, setCheck] = useState(false)


    const onChangeHandler = () => {
        setCheck(!check)
        todolistAPI.postMessage(check)
            .then((res) => {
                setGet(res.data.errorText)
            })
            .catch((error) => {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }
    return (
        <div>
            <h1 className={h.title}>homework 13</h1>
            <div className={h.wrapper}>
                <div className={h.button_wrapper}>
                    <button
                        onClick={onChangeHandler}
                        className={h.button}>check
                    </button>
                </div>
                <div>
                    <input
                        checked={check}
                        className={h.input}
                        type={'checkbox'}/>
                </div>
            </div>
            <div className={h.check}>{check ? <h2>Как делишки у Игната?</h2> : <h3>{JSON.stringify(get)}</h3>}</div>
        </div>

    );
};
