// @ts-nocheck
import { Link, useNavigate } from "react-router-dom";
import SignInForm from "components/forms/SignInForm";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { selectCurrentUser } from "store";
import { userLogin } from "features/auth/authActions";
import { clearErrors } from "features/auth/authSlice";

export default function SignIn() {
  const navigate = useNavigate();
  const { user, error } = useSelector(selectCurrentUser);
  const errors = useMemo(() => error, [error]);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (user) {
      navigate("/client");
      toast({
        title: "Login Success",
        description: "Login successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [navigate, user]);

  const onSubmit = async (data) => {
    try {
      if (data) {
        await dispatch(userLogin(data));
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (errors) {
      toast({
        title: "Authentication Error",
        description: errors,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      dispatch(clearErrors());
    }
  }, [errors]);

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
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
