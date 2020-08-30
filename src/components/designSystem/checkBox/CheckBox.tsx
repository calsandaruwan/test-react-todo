import {Checkbox} from "antd";
import React from "react";
import {Props} from "./index";

export const CheckBoxDS: React.FC<Props> = (props) => {
    return (
        <Checkbox {...props}/>
    )
}