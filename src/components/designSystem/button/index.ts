import React from "react";
import {SizeType} from "antd/lib/config-provider/SizeContext";
import {ButtonType} from "antd/lib/button";

export {ButtonDS} from './Button';

export interface Props {
    type?: ButtonType
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
    label?: string,
    icon?: React.ReactNode,
    className?: string,
    size?: SizeType
}