import React from 'react'
import classes from './InputRangeItem.module.css'


const InputRange = props => {
    return (
        <InputRange
            // maxValue={255}
            // minValue={0}
            // value={this.state.value}
            // onChange={value => this.setState({ value })}
            className={classes.InputRangeItem} />
    )
}

export default InputRange