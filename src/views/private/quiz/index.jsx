// @ts-nocheck
import React, { useState } from "react";
import Banner from "components/banner/Banner";
import NftBanner1 from "assets/img/nfts/NftBanner1.png";
import NftCard from "components/card/NftCard";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Container,
  Divider,
} from "@chakra-ui/react";
import { List, ListItem, ListIcon, Heading } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectAllQuiz } from "store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllQuizzes } from "features/assessment/assessmentActions";
import { formatDate } from "helper/stringHelpers";
import { selectCurrentUser } from "store";

function Instructions() {
  return (
    <div className=" overflow-auto">
      <Heading noOfLines={1} size="lg" mb={5}>
        Instructions
      </Heading>
      <List spacing={3} my={5} mx={2}>
        <ListItem className="flex justify-center align-middle">
          <ListIcon as={MdCheckCircle} color="green.500" />
          <div className=" -mt-1">
            The quizzes consists of questions carefully designed to help you
            self-assess your comprehension of the information presented on the
            topics covered in the module.
          </div>
        </ListItem>
        <ListItem className="flex">
          <ListIcon as={MdCheckCircle} color="green.500" />
          <div className=" -mt-1">
            Read each question carefully, and click on the button next to your
            response that is based on the information covered on the topic in
            the module. Each correct or incorrect response will result in
            appropriate feedback immediately at the bottom of the screen.
          </div>
        </ListItem>
        <ListItem className="flex">
          <ListIcon as={MdCheckCircle} color="green.500" />
          <div className=" -mt-1">
            After responding to a question, click on the "Next Question" button
            at the bottom to go to the next questino. After responding to the
            8th question, click on "Close" on the top of the window to exit the
            quiz.
          </div>
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem className="flex">
          <ListIcon as={MdCheckCircle} color="green.500" />
          <div className=" -mt-1">
            The total score for the quiz is based on your responses to all
            questions. If you respond incorrectly to a question or retake a
            question again and get the correct response, your quiz score will
            reflect it appropriately. However, your quiz will not be graded, if
            you skip a question or exit before responding to all the questions.
          </div>
        </ListItem>
      </List>
      <Checkbox mx={2} mb={5}>
        Accept it after reading instructions.
      </Checkbox>
    </div>
  );
}

function Question() {
  const [value, setValue] = React.useState();
  return (
    <Stack spacing={3}>
      <Heading size="md">Question No 1</Heading>
      <Text fontSize="xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, vel
        deleniti. Deserunt alias sequi fugiat a adipisci minus praesentium
        debitis dolore, odio consectetur, modi est porro veniam doloremque,
        illum officia.
      </Text>
      <RadioGroup onChange={setValue} value={value} my={5}>
        <Stack direction="column">
          <Container className="rounded-md border border-gray-300 py-2 ">
            <Radio value="1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa
              nostrum sapiente. Quis,
            </Radio>
          </Container>
          <Container className="rounded-md border border-gray-300 py-2 ">
            <Radio value="2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              perferendis voluptatibus sed
            </Radio>
          </Container>
          <Container className="rounded-md border border-gray-300 py-2 ">
            <Radio value="3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              earum id obcaecati hic?
            </Radio>
          </Container>
          <Container className="rounded-md border border-gray-300 py-2 ">
            <Radio value="4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              earum id obcaecati hic
            </Radio>
          </Container>
        </Stack>
      </RadioGroup>
    </Stack>
  );
}

export default function StudentQuiz() {
  const [isModal, setIsModal] = useState(false);
  const { data } = useSelector(selectAllQuiz);
  const { user } = useSelector(selectCurrentUser);
  console.log("all Quiz Data:", data);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = () => {
      dispatch(getAllQuizzes());
    };
    unsubscribe();
    return unsubscribe;
  }, []);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* Banner */}
        <Banner
          header="Start your quiz based on performance"
          title="Recommended quizez are the best way to improve your learning"
          image={NftBanner1}
        />

        {/* available quiz Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Available Quiz
          </h4>
        </div>
        <Modal
          isOpen={isModal}
          onClose={() => setIsModal(false)}
          size={"xl"}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Quiz Title</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody py={5}>
              {/* <Instructions /> */}
              <Question />
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
              <Button size="lg" colorScheme="green">
                Start Quiz
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* quiz card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5 ">
          {data &&
            data.result &&
            data.result.map((quiz) => {
              return (
                <NftCard
                  key={quiz.id}
                  title={quiz.name}
                  subtitle={`Total Questions: ${quiz.questions.length}`}
                  date={`Created Date: ${formatDate(quiz.dateCreated)}`}
                  level={quiz.level}
                  buttonText={
                    quiz.submittedUsers.includes(user.id)
                      ? "Submitted"
                      : "Start Quiz"
                  }
                  disabled={quiz.submittedUsers.includes(user.id)}
                  extra={
                    quiz.submittedUsers.includes(user.id) ? " opacity-70" : ""
                  }
                  onClick={() => {
                    if (!quiz.submittedUsers.includes(user.id)) {
                      setIsModal(true);
                    }
                  }}
                />
              );
            })}
        </div>

        {/* recommended quiz setion */}

        {/* <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Recommended Quiz
          </h4>
        </div> */}
      </div>
    </div>
  );
}
