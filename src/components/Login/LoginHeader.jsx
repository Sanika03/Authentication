import Logo100 from "../../assets/100.svg";
import LogoX from "../../assets/x.svg";

const LoginHeader = () => {
  return (
    <header className="flex w-full py-3 px-4 justify-center items-center gap-32">
        <div className="flex justify-center items-end gap-0.5">
            <img src={Logo100} alt="100 icon" />
            <img src={LogoX} alt="X icon" />
        </div>
    </header>
  );
}

export default LoginHeader;