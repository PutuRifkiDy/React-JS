import InputForm from "../Elements/Input";
import ButtonDistractering from "../Elements/Button/ButtonConsepDistractering";
import { useState, useEffect, useRef } from "react";
import { login } from "../../services/auth.services";
const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");
    const HandleLogin = (event) => {
        event.preventDefault();
        // console.log("login");
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        // localStorage.setItem("email", event.target.email.value);
        // localStorage.setItem("password", event.target.password.value);

        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        login(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res);
                window.location.href="/products";
            } else {
                setLoginFailed(res.response.data);
                console.log(res.response.data);
            }
        });
        
    }

    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, [])
    return (
        <form onSubmit={HandleLogin}>
            <InputForm
                htmlFor="username"
                placeholder="johndoe223"
                type="text"
                name="username"
                label="Username"
                ref={usernameRef}
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
            {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        </form>
    );
}

export default FormLogin;