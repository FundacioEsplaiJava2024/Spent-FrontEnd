import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import EventCreate from "./pages/EventCreate";
import EventPage from "./pages/EventPage";
import SportsPage from "./pages/SportsPage";
import UserProfile from "./pages/UserProfile";

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
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/event/create" element={<EventCreate />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage setToken={setToken} />} />
    </Routes>
  );
}

export default Router;
