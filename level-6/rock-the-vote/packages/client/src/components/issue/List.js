import React, { useContext } from "react";
import { VStack } from "@chakra-ui/react";
import { IssueContext } from "../../context";
import Issue from "./self";

export const List = ({ match }) => {
  let { issues } = useContext(IssueContext);
  if (match.params.id) {
    issues = issues.filter(issue => issue.creator._id === match.params.id);
  }
  return (
    <VStack w="full" m="auto" maxW={1200} spacing={50} align="stretch">
      {issues.map(issue => (
        <Issue key={issue._id} {...issue} linkTitle showCommentsButton />
      ))}
    </VStack>
  );
};

export default List;
