// @ts-nocheck
import Card from "components/card";
import { React, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Input,
  Grid,
  GridItem,
  Select,
  InputGroup,
  InputRightElement,
  Divider,
  Avatar,
  Container,
} from "@chakra-ui/react";
import { formatDate } from "helper/stringHelpers";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateProfile } from "features/auth/authActions";
import LevelBadge from "components/badge";

const General = ({ user }) => {
  const [isModal, setIsModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    try {
      if (data) {
        dispatch(updateProfile(data));
        setIsModal(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card extra={"w-full h-full p-3"}>
      <Modal
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        size={"xl"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Update Profile</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody py={5}>
              <Container textAlign={"center"} mb={10} className=" relative">
                <Avatar size="xl" name={`${user.firstName} ${user.lastName}`} />
              </Container>

              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem>
                  <Text fontSize="lg">First Name</Text>
                  <Input
                    placeholder={user.firstName}
                    {...register("firstName")}
                  />
                </GridItem>
                <GridItem>
                  <Text fontSize="lg">Last Name</Text>
                  <Input
                    placeholder={user.lastName}
                    {...register("lastName")}
                  />
                </GridItem>
                <GridItem>
                  <Text fontSize="lg">Email</Text>
                  <Input
                    placeholder={user.email}
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <span className="ml-1.5 mt-1.5 border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400">
                    {errors.email && errors.email?.message}
                  </span>
                </GridItem>
                <GridItem>
                  <Text fontSize="lg">Phone Number</Text>
                  <Input
                    placeholder={user.phone ? user.phone : "0300-5252525"}
                    {...register("phone")}
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Text fontSize="lg">Birthday</Text>
                  <Input
                    placeholder="Select birthday"
                    size="md"
                    type="datetime-local"
                    {...register("birthday")}
                  />
                </GridItem>
                {!user.isAdmin ? (
                  <>
                    <GridItem colSpan={2}>
                      <Text fontSize="lg">Interest</Text>
                      <Select
                        placeholder={"Select Interest"}
                        {...register("interest")}
                      >
                        <option value="Programming">Programming</option>
                      </Select>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Text fontSize="lg">Goal</Text>
                      <Select placeholder={"Select goal"} {...register("goal")}>
                        <option value="Frontend Developer">
                          Web Developer
                        </option>
                      </Select>
                    </GridItem>{" "}
                  </>
                ) : (
                  ""
                )}

                <GridItem colSpan={2}>
                  <Text fontSize="lg">Password</Text>
                  <InputGroup size="md">
                    <Input
                      isInvalid={errors.password}
                      errorBorderColor="red.300"
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <span className="ml-1.5 mt-1.5 border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400">
                    {errors.password && errors.password?.message}
                  </span>
                </GridItem>
              </Grid>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="red"
                mr={3}
                size="lg"
                onClick={() => setIsModal(false)}
              >
                Close
              </Button>
              <Button size="lg" colorScheme="blue" type="submit">
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      {/* Header */}
      <div className="mt-2 mb-8 flex w-full justify-between align-middle">
        <div>
          <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
            General Information
          </h4>
          <p className="mt-2 px-2 text-base text-gray-600">
            You can add and modify your profile and other information.
          </p>
        </div>
        <Button
          className="  w-[10%]"
          colorScheme="blue"
          mr={3}
          size="lg"
          onClick={() => setIsModal(true)}
        >
          Update Profile
        </Button>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Name</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {`${user.firstName} ${user.lastName}`}
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Email</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {user.email}
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Phone Number</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {user.phone}
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Birthday</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {formatDate(user.birthday)}
          </p>
        </div>
        {!user.isAdmin ? (
          <>
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Goal</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {user.goal ? user.goal : "-"}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Interest</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {user.interest ? user.interest : "-"}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Level</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                <LevelBadge level={user.level} />
              </p>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Account Created On</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {formatDate(user.created)}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
