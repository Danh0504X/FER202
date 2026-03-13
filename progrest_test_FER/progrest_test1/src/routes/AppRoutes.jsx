import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AccountListPage from "../pages/AccountListPage";
import AccountDetailPage from "../pages/AccountDetailPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route path="/accounts" element={<AccountListPage />} />

        <Route path="/accounts/:id" element={<AccountDetailPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;