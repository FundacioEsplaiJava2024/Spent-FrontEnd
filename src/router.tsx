import { Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import EventPage from "./EventPage";
import UserProfile from "./UserProfile";
import EventCreate from "./EventCreate";

function Router() {
  const token = localStorage.getItem("accessToken");

  if (token)
    return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    );

  return (
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/events/id" element={<EventPage />} />
      <Route path="/users/id" element={<UserProfile />} />
      <Route path="/event/create" element={<EventCreate />} />
    </Routes>
  );
}

export default Router;
