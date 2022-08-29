import React, {useState} from 'react'
import w from './HW6.module.css';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {saveState} from './localStorage/localStorage'
import cat from './cat-svgrepo-com.svg'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        let res = localStorage.getItem('editable-span-value')
        if(res) {
            let newRes = JSON.parse(res)
            setValue(newRes)
        }

    }

    return (
        <div className={w.wrapper}>
            <hr/>
            homeworks 6
            <hr className={w.hr}>

            </hr>
            {/*should work (должно работать)*/}
            <div  className={w.superEditableSpan}>
                <img className={w.ing} src={cat}/>
                <SuperEditableSpan
                    className={w.superSpan}
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton className={w.save} onClick={save}>save</SuperButton>
            <SuperButton className={w.restore} onClick={restore}>restore</SuperButton>


        </div>
    )
}

export default HW6
