import React, { useReducer } from 'react'
import { DateSingleInput } from '@datepicker-react/styled'

const initialState = {
    date: null,
    showDatepicker: false,
}

function reducer(state, action) {
    switch (action.type) {
        case 'focusChange':
            return { ...state, showDatepicker: action.payload }
        case 'dateChange':
            return action.payload
        default:
            throw new Error()
    }
}

const DatePicker = ({
    className,
    id,
    label,
    name,
    onChange,
    placeholder,
    required = true,
    value,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className={`${className ?? ''}`}>
            <label className="form__label" htmlFor={id}>
                {label}
            </label>
            <input
                className="form__control datepicker-input"
                id={id}
                name={name}
                type="date"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
            {/* <DateSingleInput
                className="form__control"
                onDateChange={data => dispatch({type: 'dateChange', payload: data})}
                onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
                date={new Date()} // Date or null
                showDatepicker={state.showDatepicker} // Boolean
            /> */}
        </div>
    )
}

export default DatePicker
