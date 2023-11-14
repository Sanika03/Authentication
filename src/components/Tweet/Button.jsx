const Button = ({ variant="default", size="md", text="Add your text" }) => {
    const baseStyles = "py-2 px-6 rounded-border-65 shadow-box-shadow backdrop-blur-23 text-center font-bold leading-normal w-full";

    const sizeStyles = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
    };

    const variantStyles = {
        default: "bg-neutral-50 text-neutral-1000 hover:bg-neutral-200",
        outline: "border border-solid border-button-stroke text-twitter-blue"
    };

    const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`;

    return (
            <button className={classes}>
                {text}
            </button>
        )
}

export default Button;