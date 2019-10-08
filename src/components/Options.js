import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>please add options</p>}
            {props.options.map((option) => {
                 return <Option 
                 key={option} 
                 optionText={option} 
                 handlDeleteOption = {props.handlDeleteOption}
                 />
            })}
        </div>
    )
}

export default Options;