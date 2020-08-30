import {SizeType} from "antd/lib/config-provider/SizeContext";

export {InputTextDS} from './TextInput';

export interface Props {
    value: any
    onChange: (e: any) => void,
    className?: string
    bordered?: boolean
    placeholder?: string
    size?: SizeType
    id?: string
}