import React from "react";
// @ts-ignore
import { Route, Navigate, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// @ts-ignore
import AuthLayout from "layouts/auth";
// @ts-ignore
import ClientLayout from "layouts/client";
// @ts-ignore
import PageNotFound from "views/page-not-found";
// @ts-ignore
import { LAYOUTS } from "types/global";
// @ts-ignore
import Layout from "components/Layout";
// @ts-ignore
import RequireAuth from "store/requireAuth";

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<AuthLayout />} />
          <Route index path="auth/*" element={<AuthLayout />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route
              path="client/*"
              element={<ClientLayout layout={LAYOUTS.CLIENT} />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};

export default App;
