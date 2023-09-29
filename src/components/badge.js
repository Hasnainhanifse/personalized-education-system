// @ts-nocheck
import { Badge } from "@chakra-ui/react";
import React from "react";
import { USERLEVEL } from "types/global";

const LevelBadge = ({ level }) => {
  switch (level) {
    case USERLEVEL.BEGINNER:
      return (
        <Badge variant="solid" colorScheme="blue">
          {level}
        </Badge>
      );
    case USERLEVEL.INTERMEDIATE:
      return (
        <Badge variant="solid" colorScheme="purple">
          {level}
        </Badge>
      );
    case USERLEVEL.EXPERT:
      return (
        <Badge variant="solid" colorScheme="green">
          {level}
        </Badge>
      );
    case USERLEVEL.ADMIN:
      return (
        <Badge variant="subtle" colorScheme="green">
          {level}
        </Badge>
      );
    case USERLEVEL.STUDENT:
      return (
        <Badge variant="subtle" colorScheme="purple">
          {level}
        </Badge>
      );
    default:
      return "";
  }
};

export default LevelBadge;
