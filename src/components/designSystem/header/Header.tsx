import React from "react";
import {Props} from "./index";

export const HeaderDS: React.FC<Props> = (props) => {
    const {title, ...rest} = props;

    return (
        <div className="uppercase text-2xl text-center text-white p-6 bg-primary"
             {...rest}>
            {title}
        </div>
    )
}