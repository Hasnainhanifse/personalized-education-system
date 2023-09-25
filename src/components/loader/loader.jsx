// @ts-nocheck
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
} from "@chakra-ui/react";

export default function Loader({ loading, children }) {
  return (
    <>
      {loading ? (
        <Modal isOpen={loading} onClose={!loading}>
          <ModalOverlay />
          <ModalContent className=" mx-auto !w-[5%]  !justify-center !self-center py-2 !align-middle">
            <ModalBody className="flex justify-center align-middle">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : (
        ""
      )}
      {children}
    </>
  );
}
