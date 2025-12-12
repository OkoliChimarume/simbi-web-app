// import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AppProvider } from "context";
// import NotFound from "components/NotFound";
import Login from "../pages/auth/login";
import AuthLayout from "../components/layout/AuthLayout";
import SignUp from "../pages/auth/signup";
import Preference from "../pages/auth/preference";
import MainLayout from "../components/layout";
import Dashboard from "../pages/dashboard";
// const Home = lazy(() => import("../pages/home"));

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/preference" element={<Preference />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
