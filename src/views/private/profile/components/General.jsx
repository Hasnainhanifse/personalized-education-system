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
} from "@chakra-ui/react";
import { formatDate } from "helper/stringHelpers";

function EditProfile() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <GridItem>
        <Text fontSize="lg">First Name</Text>
        <Input placeholder="Hasnain" />
      </GridItem>
      <GridItem>
        <Text fontSize="lg">Last Name</Text>
        <Input placeholder="Hanif" />
      </GridItem>
      <GridItem>
        <Text fontSize="lg">Email</Text>
        <Input placeholder="email@gmail.com" />
      </GridItem>
      <GridItem>
        <Text fontSize="lg">Phone Number</Text>
        <Input placeholder="0300-5252525" />
      </GridItem>
      <GridItem colSpan={2}>
        <Text fontSize="lg">Birthday</Text>
        <Input placeholder="Select birthday" size="md" type="datetime-local" />
      </GridItem>
      <GridItem colSpan={2}>
        <Text fontSize="lg">Interest</Text>
        <Select placeholder="Select option">
          <option value="option1">Programming</option>
        </Select>
      </GridItem>
      <GridItem colSpan={2}>
        <Text fontSize="lg">Goal</Text>
        <Select placeholder="Select option">
          <option value="option1">Web Developer</option>
        </Select>
      </GridItem>
      <GridItem colSpan={2}>
        <Text fontSize="lg">Password</Text>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </GridItem>
    </Grid>
  );
}

const General = ({ user }) => {
  const [isModal, setIsModal] = useState(false);

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
          <ModalHeader>Update Profile</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody py={5}>
            <EditProfile />
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
            <Button size="lg" colorScheme="blue">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          General Information
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
          You can add and modify your profile and other information.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Name</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {user.name}
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
            {user.level ? user.level : "-"}
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Account Created On</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {formatDate(user.created)}
          </p>
        </div>
        <Button
          className=" mt-5 w-1/5"
          colorScheme="blue"
          mr={3}
          size="lg"
          onClick={() => setIsModal(true)}
        >
          Update Profile
        </Button>
      </div>
    </Card>
  );
};

export default General;
