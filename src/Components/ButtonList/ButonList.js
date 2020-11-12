import React from 'react'
import classes from './ButtonList.module.css'
import ButtonItem from './ButtonItem/ButtonItem'

const ButtonList = props => (
    <div className={classes.ButtonList}>
        <ButtonItem />
        <ButtonItem />
    </div>
)

export default ButtonList