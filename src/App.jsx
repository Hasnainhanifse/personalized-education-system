// @ts-nocheck
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthLayout from "layouts/auth";
import PrivateLayout from "layouts/private";
import PageNotFound from "views/page-not-found";
import { LAYOUTS } from "types/global";
import Layout from "components/Layout";
import RequireAuth from "features/requireAuth";
import Loader from "./components/loader/loader";
import { useSelector } from "react-redux";
import { selectAuthLoading } from "store";

const App = () => {
  const authLoading = useSelector(selectAuthLoading);

  return (
    <ChakraProvider>
      <Loader loading={authLoading}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route index element={<AuthLayout />} />
            <Route index path="auth/*" element={<AuthLayout />} />

            {/* protected routes */}

            <Route element={<RequireAuth />}>
              <Route
                path="/*"
                element={<PrivateLayout layout={LAYOUTS.PRIVATE} />}
              />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Loader>
    </ChakraProvider>
  );
};

export default App;
