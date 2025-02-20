import InputForm from "../Elements/Input";
import ButtonDistractering from "../Elements/Button/ButtonConsepDistractering";
const FormRegister = () => {
    return (
        <form action="">
            <InputForm 
                htmlFor="fullname"
                placeholder="insert your name here..."
                type="text"
                name="fullname"
                label="Full Name"
            />
            <InputForm
                htmlFor="email"
                placeholder="example@gmail.com"
                type="email"
                name="email"
                label="Email"
            />
            <InputForm
                htmlFor="password"
                placeholder="*****"
                type="password"
                name="password"
                label="Password"
            />
            <InputForm
                htmlFor="confirm_password"
                placeholder="*****"
                type="password"
                name="confirm_password"
                label="Confirm Password"
            />
            <ButtonDistractering backgroundColor="bg-blue-500 hover:bg-blue-300 w-full transition-all duration-300 ease-in-out">Register</ButtonDistractering>
        </form>
    );
}

export default FormRegister;