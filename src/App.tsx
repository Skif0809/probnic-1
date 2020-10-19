import React, {useEffect, useState} from 'react';
import './App.css';
import {TestInput} from "./test-input";
import 'antd/dist/antd.css';
import {Button} from "antd";

function App() {
    const [value, setValue] = useState('textdtt');
    const [enabled, setEnable] = useState(false);
    useEffect(() => {
        setEnable(value.length > 0)
    },[value]);

    return (
        <React.Fragment>
            <TestInput text={'ВЫВОД-2'} onChange={(text: string) => setValue(text)} value={value}></TestInput>
            <div>{value}</div>
            <Button disabled={!enabled} onClick={() => console.log(value)}>Save</Button>
        </React.Fragment>
    );
}

export default App;
