import InputForm from "../Elements/Input";
import ButtonDistractering from "../Elements/Button/ButtonConsepDistractering";
const FormLogin = () => {
    const HandleLogin = (event) => {
        event.preventDefault();
        console.log("login");
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        window.location.href="/products"
    }

    
    return (
        <form onSubmit={HandleLogin}>
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
            <ButtonDistractering
                backgroundColor="bg-blue-500 hover:bg-blue-300 w-full transition-all duration-300 ease-in-out"
                tipe="submit"
            >Login</ButtonDistractering>
        </form>
    );
}

export default FormLogin;