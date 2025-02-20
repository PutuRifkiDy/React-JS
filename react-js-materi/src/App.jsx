import React from "react";
import FormLogin from "./components/Fragments/FormLogin";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
export default function App() {
  return (
    <>
      <div className="font-['Poppins'] flex justify-center items-center min-h-screen">
        {/* <LoginPage /> */}
        <RegisterPage />
      </div>
    </>
  )
}


