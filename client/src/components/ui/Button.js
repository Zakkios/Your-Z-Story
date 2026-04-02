const variantClasses = {
    dogi: "bg-white text-black border-4 border-black outline-4 outline outline-orange-500 font-extrabold py-1 px-3 m-4 rounded-2xl hover:scale-110 transition-all duration-150",
};

const Button = ({ onClick, text, variant = "dogi" }) => {
    const buttonClass = variantClasses[variant] || variantClasses.dogi;

    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;