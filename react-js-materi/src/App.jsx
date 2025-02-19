// function component
function Button() {
  return (
    <button className="bg-red-500 text-white px-5 py-2 rounded-xl shadow hover:bg-red-400">
      Submit
    </button>
  );
}

// arrow function consep props
const ButtonPropsKonsep = (props) => {
  return (
    <button className={`${props.backgroundColor} text-white px-5 py-2 rounded-xl shadow`}>
      Submit
    </button>
  );
}

// konsep distractering dengan memberi default value pada props
const ButtonDistractering = (props) => {
  const { backgroundColor = "bg-green-500 hover:bg-green-300", children } = props;

  return (
    <button className={`${backgroundColor} text-white px-5 py-2 rounded-xl shadow`}>
      {children}
    </button>
  );
}


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


