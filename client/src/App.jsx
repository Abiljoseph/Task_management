import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
import Login from "./pages/Login";
import HeaderNav from "./components/HeaderNav";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
// import CreateListing from "./pages/CreateListing";
// import UpdateListing from "./pages/UpdateListing";
// import Listing from "./pages/Listing";
// import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
