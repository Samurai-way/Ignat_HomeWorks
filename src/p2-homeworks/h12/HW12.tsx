import React, {useCallback, useState} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeDarkThemeAC, changeRedThemeAC, changeSomeThemeAC} from "./bll/themeReducer";
import {AppStoreType} from "../../redux/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const [value, onChangeOption] = useState(themes[1])

    const dark = useSelector<AppStoreType, string>(state => state.theme.dark)
    const red = useSelector<AppStoreType, string>(state => state.theme.red)
    const some = useSelector<AppStoreType, string>(state => state.theme.some)

    let theme = dark || some || red

    const dispatch = useDispatch()

    const onChangeDarkCallback = useCallback((e: string) => {
        onChangeOption(e)
        if (value === 'dark') {
            dispatch(changeDarkThemeAC(e))
        }
        if (value === 'red') {
            dispatch(changeRedThemeAC(e))
        } else {
            dispatch(changeSomeThemeAC(e))
        }
    }, [dispatch])


    return (
        <div>
            <h2 className={s.h2}>homework 12</h2>
            <div className={s[theme]}>
                <span className={s[theme + '-text']}>
            </span>
                <div className={s.radio}>
                    <SuperRadio
                        name={'radio'}
                        options={themes}
                        value={value}
                        onChangeOption={onChangeDarkCallback}
                    />
                </div>
            </div>
            <input type={'checkbox'}/>
        </div>

    );
}

export default HW12;
