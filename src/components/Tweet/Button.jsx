const Button = ({ variant, size, text, onClick }) => {
    const baseStyles = "py-2 px-6 rounded-border-65 shadow-box-shadow backdrop-blur-23 text-center font-bold leading-normal w-full";

    const sizeStyles = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
    };

    const variantStyles = {
        outline: "border border-solid border-button-stroke text-twitter-blue"
    };

    const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`;

    return (
            <button className={classes} onClick={onClick}>
                {text}
            </button>
        )
}

export default Button;