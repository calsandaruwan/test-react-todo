import {Button} from "antd";
import React from "react";
import {Props} from "./index";

export const ButtonDS: React.FC<Props> = (props) => {
    const {label, onClick, ...rest} = props;

    return (
        <Button onClick={onClick}
                {...rest}>
            {label}
        </Button>
    )
}