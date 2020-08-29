import {Input} from "antd";
import React from "react";
import {Props} from "./index";

export const InputTextDS: React.FC<Props> = (props) => {
    const {value, onChange, ...rest} = props;

    return (
        <Input onChange={onChange}
               value={value}>
        </Input>
    )
}