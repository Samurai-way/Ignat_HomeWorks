import {Box, Slider} from '@mui/material'
import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}





const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (

{
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <Box sx={{width: 500}}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                valueLabelDisplay="on"
            />
        </Box>
    )
}
export default SuperDoubleRange
