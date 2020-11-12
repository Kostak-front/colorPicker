import React, {Component} from 'react'
import classes from './ColorPicker.module.css'
import InputsRangeList from '../../Components/InputsRangeList/InputsRangeList'
import ButonList from '../../Components/ButtonList/ButonList'
 
class ColorPicker extends Component {
    state = {
        value: [
            {
                values: [
                    {range: 0},
                    {range: 0},
                    {range: 0},
                ]
            }
        ]
    }
    render() {
        return(
            <div className={classes.ColorPicker}>
                <div className={classes.ColorFrame}>COLOR</div>
                <InputsRangeList />
                <ButonList />

            </div>
        )
    }
}

export default ColorPicker