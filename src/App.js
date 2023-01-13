import { useEffect, useState } from "react";
import { auth } from "./firebase";
import "./App.css";
import PageRouter from "./components/Routes";
import { DashboardProvider } from "./context/DashboardContext";

function App() {
  const [loading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setIsLoading(false);
      } else setUserName("");
      setIsLoading(false);
    });
  }, []);

  if (loading)
    return (
      <>
        <div className="loading-design">
          <h1>Loading...</h1>
        </div>
      </>
    );

  return (
    <div className="App">
      <DashboardProvider>
        <PageRouter />
      </DashboardProvider>
    </div>
  );
}

export default App;
