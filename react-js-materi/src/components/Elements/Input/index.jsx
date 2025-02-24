import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
    const { htmlFor, label, type, placeholder, name} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name} ref={ref} />
        </div>
    );
});
export default InputForm;