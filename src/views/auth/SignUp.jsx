// @ts-nocheck
// @ts-ignore
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./Auth.css";
import { Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "store";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { registerUser } from "features/auth/authActions";
import { clearErrors } from "features/auth/authSlice";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { success, error } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (error && !success) {
      toast({
        title: "Registeration error",
        description: error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      dispatch(clearErrors());
    }
    if (success && !error) {
      toast({
        title: "Registeration Success",
        description: "Successfully registered",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, success]);

  const onSubmit = (data) => {
    try {
      if (data) {
        dispatch(registerUser(data));
      }
    } catch (e) {
      console.error(e);
    }
  };

  function getPersonalInfoForm() {
    return (
      <div className="mb-3">
        <div>
          <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
            First Name*
          </label>
          <input
            {...register("firstName", {
              required: "First name is required",
            })}
            aria-invalid={errors.firstName ? "true" : "false"}
            placeholder="Hasnain"
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
              errors.firstName
                ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                : !errors.firstName === "success"
                ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                : "border-gray-200 dark:!border-white/10 dark:text-white"
            }`}
          />
          <span className="ml-1.5 mt-1.5 border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400">
            {errors.firstName && errors.firstName?.message}
          </span>
        </div>

        <div>
          <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
            Last Name*
          </label>
          <input
            {...register("lastName", {
              required: "Last name is required",
            })}
            aria-invalid={errors.lastName ? "true" : "false"}
            placeholder="Hanif"
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
              errors.lastName
                ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                : !errors.lastName === "success"
                ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                : "border-gray-200 dark:!border-white/10 dark:text-white"
            }`}
          />
          <span className="ml-1.5 mt-1.5 border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400">
            {errors.lastName && errors.lastName?.message}
          </span>
        </div>
        <div>
          <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
            Email*
          </label>
          <input
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="mail@simmmple.com"
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
              errors.email
                ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                : !errors.email === "success"
                ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                : "border-gray-200 dark:!border-white/10 dark:text-white"
            }`}
          />
          <span className="ml-1.5 mt-1.5 border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400">
            {errors.email && errors.email?.message}
          </span>
        </div>

        <div>
          <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
            Password*
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
            placeholder="Password"
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
              errors.password
                ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                : !errors.password === "success"
                ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                : "border-gray-200 dark:!border-white/10 dark:text-white"
            }`}
          />
          <span className="ml-1.5 mt-1.5 border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400">
            {errors.password && errors.password?.message}
          </span>
        </div>
        <div>
          <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
            Interests*
          </label>
          <Select
            {...register("interest", {
              required: "Interest is required",
            })}
            placeholder="Select Interest"
          >
            <option value="programming">Programming</option>
          </Select>
          {errors.interest && (
            <p style={{ color: "red" }}> {errors.interest.message}</p>
          )}
        </div>
      </div>
    );
  }

  function getButton() {
    return (
      <>
        <div className="flex justify-between gap-5">
          <button
            type="submit"
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Next
          </button>
        </div>

        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Already registered?
          </span>
          <Link
            to="/auth/sign-in"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Login
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:mt-16 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        <div className="w-full max-w-full flex-col items-center md:pl-4 lg:mt-[2vh] lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign Up
          </h4>
          <p className="ml-1 text-base text-gray-600">
            Enter your details to create an account
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {getPersonalInfoForm()}
            {getButton()}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
