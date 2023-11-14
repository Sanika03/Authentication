import { useNavigate } from "react-router-dom";
import Button from "../Tweet/Button";

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
                    <Button variant="outline" size="md" text="Sign in" onClick={() => onLogin()}/>
                </div>
            </section>
        </main>
    )
}

export default LoginMain;