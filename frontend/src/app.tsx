import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";
import { Route, Routes } from "react-router-dom";
import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { ProfilePage } from "./pages/profile-page";
import { Employee } from "./pages/Employee";
import { AdminPage } from "./pages/admin-page";

export const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />

      <Route
        path="/employees"
        element={<AuthenticationGuard component={Employee} />}
      />

      <Route
        path="/admin"
        element={<AuthenticationGuard component={AdminPage} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};
