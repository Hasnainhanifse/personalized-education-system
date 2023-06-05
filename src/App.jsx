import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import AdminAuthLayout from "layouts/admin-auth/AdminAuth";
const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="admin/" element={<AdminAuthLayout />} />
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to="/auth" replace />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
