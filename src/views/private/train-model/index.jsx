// @ts-nocheck
import React, { useEffect } from "react";
import AIModelBanner from "assets/img/model/ai-model-banner-3.jpg";
import AIModelBanner2 from "assets/img/model/ai-model-banner-2.jpg";
import AIModelBanner4 from "assets/img/model/ai-model-banner-4.jpeg";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
} from "@chakra-ui/react";
import { selectAssesments, selectCurrentUser } from "store";
import { trainModel } from "features/assessment/assessmentActions";
import { useState } from "react";

export default function TrainModel() {
  const { trainMessage, success, errors } = useSelector(selectAssesments);
  const { user } = useSelector(selectCurrentUser);
  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const trainHandler = async () => {
    let form = {
      user: user.id,
    };
    setIsModal(false);
    await dispatch(trainModel(form)).then((res) => {
      setMessage(res.payload.message);
      setIsModal(true);
    });
  };

  const closeTrainHandler = () => {
    setMessage(null);
    setIsModal(false);
  };

  const onClickTrainHandler = () => {
    setIsModal(true);
  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-2 2xl:col-span-3">
        {/* Banner */}
        <img
          className=" h-80 w-full rounded-lg bg-contain"
          src={AIModelBanner}
        />

        <div className="z-20 my-5 grid grid-cols-1 rounded-md bg-white p-5 ">
          <div className=" text-xl font-semibold ">Recommendation System:</div>
          <p className=" text-lg">
            An AI recommendation system is a machine learning algorithm that
            uses data analysis and machine learning techniques to suggest
            relevant information (movies, videos, items) to users that they may
            find interesting. These systems analyze large amounts of data about
            users’ past behavior, preferences, and interests using machine
            learning algorithms like clustering, collaborative filtering, and
            deep neural networks to generate personalized recommendations. These
            systems analyze large amounts of data about users’ past behavior,
            preferences, and interests using machine learning algorithms like
            clustering, collaborative filtering, and deep neural networks to
            generate personalized recommendations. Netflix, Amazon, and Spotify
            are well-known examples of robust recommendation systems. Netflix
            gives personalized movie suggestions, Amazon suggests products based
            on past purchases and browsing history, and Spotify provides
            personalized playlists and song suggestions based on listening
            history and preferences.
          </p>
        </div>

        <div className="z-20 my-5 grid grid-cols-1 rounded-md bg-white p-5">
          <div className="">
            <div className=" text-xl font-semibold">
              {" "}
              Collaborative Filtering:
            </div>
            <p className="text-lg">
              Collaborative filtering is a technique that can filter out items
              that a user might like based on the reactions of similar users. It
              works by searching a large group of people and finding a smaller
              set of users with tastes similar to a particular user. It looks at
              the items they like and combines them to create a ranked list of
              suggestions. To address some of the limitations of content-based
              filtering, collaborative filtering uses similarities between users
              and items simultaneously to provide recommendations. This allows
              for serendipitous recommendations; that is, collaborative
              filtering models can recommend an item to user A based on the
              interests of a similar user B. Furthermore, the embeddings can be
              learned automatically, without relying on hand-engineering of
              features.
            </p>
          </div>
          <div className=" my-5 flex justify-between gap-4 align-middle">
            <img
              className=" h-80  w-full rounded-lg bg-contain"
              src={AIModelBanner2}
            />
            <img
              className=" h-80  w-full rounded-lg bg-contain"
              src={AIModelBanner4}
            />
          </div>

          <div>
            <div className=" text-xl font-semibold">
              Model Train Explanation:
            </div>
            <p className="text-lg">
              When a user clicks on the "model train" button, a dataset is
              created using all the submitted assignments and quizzes from
              various students. This dataset is then used to train a machine
              learning model, and the trained model is saved in a file called
              model.json. Afterward, when a user interacts with the system, the
              model uses the information from the submitted quizzes and
              assignments to recommend new quizzes and assignments that are
              tailored to the user's preferences and performance. The trained
              model essentially helps personalize the learning experience for
              each user based on their past interactions with quizzes and
              assignments.
            </p>
          </div>
          <div className=" flex justify-center">
            <Button
              size="lg"
              colorScheme="green"
              type="submit"
              onClick={onClickTrainHandler}
            >
              Train Model
            </Button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModal}
        onClose={closeTrainHandler}
        size={"xl"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {message && message ? "Information" : "Alert"}
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody py={5}>
            {message && message ? message : "Are you sure to train model ?"}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              size="lg"
              onClick={closeTrainHandler}
            >
              Close
            </Button>
            {message && message ? (
              <Button size="lg" colorScheme="blue" onClick={closeTrainHandler}>
                OK
              </Button>
            ) : (
              <Button size="lg" colorScheme="blue" onClick={trainHandler}>
                Train
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
