import { useNavigate } from "react-router-dom";

const LoginMain = ({handleLogin}) => {
    const navigate = useNavigate();

    const onLogin = async () => {
        await handleLogin();
        navigate("/");
    }

    return (
        <main className="flex flex-col w-full h-screen justify-center items-center bg-black">
            <section className="flex flex-col px-7 items-start gap-10">
                <section className="flex flex-col items-start gap-3 self-stretch">
                    <p className="self-stretch text-neutral-50 text-[31px] font-extrabold leading-normal">Happening now</p>
                    <p className="text-neutral-50 text-base font-medium leading-normal">Join today.</p>
                </section>      
                <div className="flex flex-col items-start gap-5 self-stretch">
                    <p className="text-neutral-50 text-15 font-normal leading-normal">Already have an account?</p>
                    <button className="flex py-2 px-6 justify-center items-center gap-2.5 self-stretch rounded-border-65 shadow-box-shadow backdrop-blur-23 border border-solid border-button-stroke w-full">
                        <p className="text-twitter-blue text-center text-base font-bold leading-normal" onClick={() => onLogin()}>Sign in</p>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default LoginMain;