import { Link, useNavigate } from "react-router-dom";
import SignInForm from "../../components/forms/SignInForm";
import React, { useState } from "react";
// @ts-ignore
import { useLoginMutation } from "store/slices/authApiSlice";
import { useDispatch } from "react-redux";
// @ts-ignore
import { setCredentials } from "store/slices/authSlice";
import "react-responsive-modal/styles.css";
import { useToast } from "@chakra-ui/react";

export default function SignIn() {
  // @ts-ignore
  const navigate = useNavigate();
  // @ts-ignore
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      if (data) {
        let email = data.email;
        let password = data.password;
        const userData = await login({ email, password }).unwrap();
        console.log("userData:", userData);
        dispatch(setCredentials({ ...userData }));
        // @ts-ignore
        navigate("/client");
      }
    } catch (error) {
      console.log("error:", error);
      if (error?.status === 401) {
        toast({
          title: "Authentication Error",
          description: error.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }

      if (error.originalStatus) {
        if (error.originalStatus === 400)
          toast({
            title: "Authentication Error",
            description: error.data,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
      }
    }
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          {isLoading ? "Loading...." : "Sign In"}
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <SignInForm onSubmit={(data) => onSubmit(data)} />

        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <Link
            to="/auth/sign-up"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
