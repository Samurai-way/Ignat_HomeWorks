import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {isloadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import load3 from '../../common/loader/Loading_3.gif'
import style from './HW10.module.css';

function HW10() {

    const dispatch = useDispatch()
    const loadingState = useSelector<AppStoreType, {[key: string]: boolean}>((state) => state.isloading)
    const loading = loadingState.isloading

    const setLoading = () => {
        dispatch(isloadingAC(true))

        setTimeout(()=>{
            dispatch(isloadingAC(false))
        }, 5000)
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div className={style.wrapper}>
            <span className={style.span}>Homeworks 10</span>
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <img className={style.img} src={load3}/>
                ) : (
                    <div>
                        <SuperButton className={style.button} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
