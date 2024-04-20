import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}