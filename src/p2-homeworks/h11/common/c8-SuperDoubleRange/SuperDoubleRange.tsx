import React from 'react'
import {Box, Slider} from "@mui/material";
import style from '../../HomeWork.module.css'

type SuperDoubleRangePropsType = {
    setValue1: (value1:number) =>void
    setValue2: (value2:number) =>void
    setValue3: (value3:number[])=> void
    value1:number
    value2:number
    value3:number[]
}

const minDistance = 15;

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        setValue1,
        setValue2,
        setValue3,
        value1,
        value2,
        value3,
    }
) => {
    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue3([Math.min(newValue[0], value2 - minDistance), value2]);
            setValue1(Math.min(newValue[0], value2 - minDistance))
        } else {
            setValue3([value3[0], Math.max(newValue[1], value1 + minDistance)]);
            setValue2(value3[1])
        }
    };

    return (
        <Box sx={{width: 300}}>
            <Slider
                className={style.slider}
                value={value3}
                getAriaLabel={() => 'Temperature range'}
                valueLabelDisplay="auto"
                onChange={handleChange1}
            />
        </Box>
    )
}
export default SuperDoubleRange
