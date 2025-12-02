import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AppProvider } from "context";
// import NotFound from "components/NotFound";
import Login from "../pages/auth/login";
import AuthLayout from "../pages/auth/layout";
import SignUp from "../pages/auth/signup";
const Home = lazy(() => import("../pages/home"));

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* <Route
          element={
            <AppProvider>
              <Main />
            </AppProvider>
          }
        >
          <Route path="/" element={<Home />} />

        </Route> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
