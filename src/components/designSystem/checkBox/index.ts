import { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";

export {CheckBoxDS} from './CheckBox';

export interface Props {
    onChange: (e: CheckboxChangeEvent) => void,
    checked: boolean,
    value?: any,
    className?: string
}