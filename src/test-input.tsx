import React from 'react';
import {Input} from "antd";

export type TestInputProps = {
    text: string
    onChange?: (text: string) => void
    value?: string
}

export const TestInput = ({text, ...props}: TestInputProps) => {
    const changeHandler = (stringvalue: string) => {
        if (props.onChange) props.onChange(stringvalue)
    }
    return <React.Fragment>                     {/* Обёртка для структуры (напр. - пара div-ов друг за другом */}
        <Input placeholder={text} onChange={(event) => changeHandler(event.target.value)} value={props.value}/>
    </React.Fragment>

}




