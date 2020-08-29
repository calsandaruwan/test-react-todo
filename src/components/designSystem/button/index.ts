import React from "react";

export {ButtonDS} from './Button';

export interface Props {
    type: any
    label: string,
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
}