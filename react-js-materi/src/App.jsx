import Button from "./components/Elements/Button/ButtonComponent";
import ButtonPropsKonsep from "./components/Elements/Button/ButtonConsepDistractering";
import ButtonDistractering from "./components/Elements/Button/ButtonConsepProps";
export default function App() {
  return (
    <>
      <div className="bg-blue-800 w-screen h-screen flex justify-center items-center gap-2">
        <Button />
        <ButtonPropsKonsep backgroundColor="bg-slate-600 hover:bg-slate-400" />
        <ButtonDistractering backgroundColor="bg-yellow-500">Submit</ButtonDistractering>
      </div>
    </>
  )
}


