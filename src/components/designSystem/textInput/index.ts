import React from "react";

export {InputTextDS} from './TextInput';

export interface Props {
    value: any
    onChange: (e: React.MouseEvent<HTMLElement>) => void,
}