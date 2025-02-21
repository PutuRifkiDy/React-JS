import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
    const { children, title } = props;
    return (
        <div className="font-['Poppins'] flex flex-col justify-center items-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, Please enter your details
                </p>

                {children}
            </div>
            {title === "Register" && (
                <p className="text-sm mt-5 text-center">
                    Have an account?{" "}
                    <Link to="/login" className="font-bold text-blue-600">
                        Login
                    </Link>
                </p>
            )}
            {title === "Login" && (
                <p className="text-sm mt-5 text-center">
                    Don't have an account?{" "}
                    <Link to="/register" className="font-bold text-blue-600">
                        Sign up
                    </Link>
                </p>
            )}
        </div>
    );
}

export default AuthLayouts;