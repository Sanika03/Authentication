function App() {
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

      console.log(await response.json())
      //navigate to feed
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  handleLogin();  
  
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App