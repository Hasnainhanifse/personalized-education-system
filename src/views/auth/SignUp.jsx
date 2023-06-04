import InputField from "components/fields/InputField";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./SignUp.css";
import { TiTick } from "react-icons/ti";
import { Select } from "chakra-react-select";

const SignUp = () => {
  const steps = ["Personal Info", "Interests", "Goals"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  function getContent() {
    switch (currentStep) {
      case 1:
        return getPersonalInfoForm();
      case 2:
        return getInterestForm();

      case 3:
        if (!complete) {
          return getGoalsForm();
        } else return null;
      default:
        break;
    }
  }

  function getGoalsForm() {
    const goals = [
      { value: "javascriptProgrammer", label: "Javascript Developer" },
    ];
    return (
      <>
        <div className="my-5 flex flex-col space-y-4">
          <div>
            <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
              Goals*
            </label>
            <Select
              variant="flushed"
              placeholder="Select Goals"
              options={goals}
              size="sm"
              onChange={(val) => console.log(val)}
            ></Select>
          </div>
        </div>
      </>
    );
  }

  function getInterestForm() {
    const interests = [{ value: "programming", label: "Programming" }];

    return (
      <>
        <div className="my-5 flex flex-col space-y-4">
          <div>
            <label className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white">
              Interests*
            </label>
            <Select
              variant="flushed"
              placeholder="Select Interests"
              options={interests}
              size="sm"
              onChange={(val) => console.log(val)}
            ></Select>
          </div>
        </div>
      </>
    );
  }

  function getPersonalInfoForm() {
    return (
      <div>
        {/* Full Name */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Full Name*"
          placeholder="Hasnain Hanif"
          id="fullName"
          type="text"
        />
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />
        {/* Confirm Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Confirm Password*"
          placeholder="Min. 8 characters"
          id="confirmPassword"
          type="password"
        />
      </div>
    );
  }

  function getButton() {
    if (!complete) {
      return (
        <>
          <div className="flex justify-between gap-5">
            {!complete && currentStep !== 1 && (
              <button
                className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                onClick={() => {
                  if (currentStep !== 1) {
                    setCurrentStep((prev) => prev - 1);
                  }
                }}
              >
                Previous
              </button>
            )}

            <button
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
            >
              {currentStep === steps.length ? "Finish" : "Next"}
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
  }
  return (
    <>
      <div className="mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:mt-16 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        <div className="w-full max-w-full flex-col items-center md:pl-4 lg:mt-[5vh] lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign Up
          </h4>
          <p className="ml-1 text-base text-gray-600">
            Enter your details to create an account
          </p>
          <div className="my-4 flex justify-between">
            {steps?.map((step, i) => (
              <div
                key={i}
                className={`step-item ${currentStep === i + 1 && "active"} ${
                  (i + 1 < currentStep || complete) && "complete"
                } `}
              >
                <div className="step">
                  {i + 1 < currentStep || complete ? (
                    <TiTick size={24} />
                  ) : (
                    i + 1
                  )}
                </div>
                <p className="text-gray-500">{step}</p>
              </div>
            ))}
          </div>

          {getContent()}
          {getButton()}
        </div>
      </div>
    </>
  );
};

export default SignUp;
