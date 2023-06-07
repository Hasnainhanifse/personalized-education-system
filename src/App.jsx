import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import ClientLayout from "layouts/client";
import PageNotFound from "views/page-not-found";
import { LAYOUTS } from "types/global";
const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="auth/*" element={<AuthLayout />} />
        <Route
          path="admin/*"
          element={<AdminLayout layout={LAYOUTS.ADMIN} />}
        />
        <Route
          path="client/*"
          element={<ClientLayout layout={LAYOUTS.CLIENT} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
