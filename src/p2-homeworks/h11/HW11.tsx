import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from './HomeWork.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const [value3, setValue3] = React.useState<number[]>([value1, value2]);



    return (
        <div className={style.wrapper}>
            <div className={style.container}>
            <h3 className={style.h3}>
                homeworks 11
            </h3>
            <div className={style.first_range}>
                <span className={style.span}>{value1 < value2 ? value1 : value2 -1}</span>
                <SuperRange
                    value1={value1}
                    value2={value2}
                    setValue3={setValue3}
                    onChangeRange={setValue1}
                />
            </div>
            <div className={style.second_range}>
                <span className={style.second_span}>{value1}</span>
                <SuperDoubleRange
                    value1={value1}
                    value2={value2}
                    value3={value3}
                    setValue1={setValue1}
                    setValue2={setValue2}
                    setValue3={setValue3}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={style.third_span}>{value2}</span>
            </div>
            </div>
        </div>
    )
}

export default HW11
