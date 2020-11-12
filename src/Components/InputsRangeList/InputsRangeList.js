import React from 'react'
import classes from './InputsRangeList.module.css'
import InputRangeItem from './InputRangeItem/InputRangeItem'

const InputsRangeList = () => (
    <div className={classes.InputsRangeList}>
        <InputRangeItem />
        <InputRangeItem />
        <InputRangeItem />
    </div>
)

export default InputsRangeList