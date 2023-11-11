import { useAuth } from "../context/AuthContext";
import LoginHeader from "../components/Login/LoginHeader";
import LoginMain from "../components/Login/LoginMain";

export const Login = () => {
    const { onLogin } = useAuth();
    const API_URL = "https://one00x-react-backend.onrender.com";

    const handleLogin = async () => {
        try {
        const response = await fetch(API_URL + "/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email: "batman@example.com",
            password: "gothamrocks",
            }),
        });

        if (!response.ok) {
            return alert(`Error: ${response.status - response.statusText}`)
        }

        console.log(await response.json());
        onLogin();
        } catch (error) {
        console.error("Error:", error.message);
        }
    };  

    return (
        <div className="bg-neutral-1000 font-inter">
            <LoginHeader/>
            <LoginMain handleLogin={handleLogin}/>
        </div>
    )
}