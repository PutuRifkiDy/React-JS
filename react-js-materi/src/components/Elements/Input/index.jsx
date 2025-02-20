import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const {htmlFor, label, type, placeholder, name} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name}/>
        </div>
    );
}

export default InputForm;