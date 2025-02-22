// konsep distractering dengan memberi default value pada props
const ButtonDistractering = (props) => {
    const { backgroundColor = "bg-green-500 hover:bg-green-300", children, onClick = () => {}, tipe = "button" } = props;

    return (
        <button
            className={`${backgroundColor} text-white px-5 py-2 rounded shadow`}
            onClick={onClick}
            type={tipe}
        >
            {children}
        </button>
    );
}

export default ButtonDistractering;