import InputForm from "../Elements/Input";
import ButtonDistractering from "../Elements/Button/ButtonConsepDistractering";
const FormLogin = () => {
    return (
        <form action="">
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
            <ButtonDistractering backgroundColor="bg-blue-500 hover:bg-blue-300 w-full transition-all duration-300 ease-in-out">Login</ButtonDistractering>
        </form>
    );
}

export default FormLogin;