import React from "react";
import { useForm } from "react-hook-form";

export default function SignInForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => props.onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
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
      </div>
      <div className="mb-4 flex items-center justify-between px-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register("keepLoggedIn")}
            className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:bg-brand-500 checked:text-white hover:cursor-pointer dark:border-white/10 dark:checked:bg-brand-400"
          />
          <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
            Keep me logged In
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
      >
        Sign In
      </button>
    </form>
  );
}
