import React, { useContext } from "react";
import { VStack, HStack, Divider, Heading, Spacer } from "@chakra-ui/react";
import { Creator, Body, Date } from "./sub";
import {
  AddCommentFromModal,
  EditCommentFromModal,
  DeleteComment,
} from "./Modal";
import UserContext from "../../context/UserContext";
import List from "./List";

export const Comment = props => {
  return (
    <VStack align="stretch" spacing={2}>
      <CommentHeader {...props} />
      <Body {...props} />
      <CommentButtons {...props} />
    </VStack>
  );
};

export const CommentHeader = props => {
  return (
    <HStack w="100%">
      <Creator {...props} />
      <Spacer />
      <Date {...props} />
    </HStack>
  );
};

export const CommentButtons = props => {
  const { user } = useContext(UserContext);
  if (user._id !== props.creator._id) return null;
  return (
    <HStack>
      <EditCommentFromModal {...props} />
      <DeleteComment {...props} />
    </HStack>
  );
};

export const CommentSectionHeader = props => {
  return (
    <HStack justify="stretch">
      <Heading>Comments</Heading>
      <Spacer />
      <AddCommentFromModal {...props} />
    </HStack>
  );
};

export const CommentListWithHeader = props => {
  return (
    <VStack minW={300} align="stretch">
      <CommentSectionHeader {...props} />
      <Divider />
      <List {...props} />
    </VStack>
  );
};

export default Comment;