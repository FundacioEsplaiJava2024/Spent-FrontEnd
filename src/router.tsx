import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import EventCreate from "./EventCreate";
import EventPage from "./EventPage";
import SportsPage from "./SportsPage";
import UserProfile from "./UserProfile";

function Router() {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("accessToken"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [token]);

  if (token)
    return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:username" element={<UserProfile />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage setToken={setToken} />} />
      <Route path="/events/id" element={<EventPage />} />
      <Route path="/event/create" element={<EventCreate />} />
      <Route path="/sports" element={<SportsPage />} />
    </Routes>
  );
}

export default Router;
