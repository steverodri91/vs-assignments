import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Grid, VStack } from "@chakra-ui/react";
import { Issue, PageHeader, CommentListWithHeader } from "../components";
import { IssueContext } from "../context";

const Detail = ({ match }) => {
  const { issues } = useContext(IssueContext);
  const issue = issues.find(i => i._id === match.params.id);
  if (!issue) return <Redirect to="/" />;
  return (
    <Grid px={[5, 5, 50, 100]}>
      <PageHeader />
      <VStack w="full" m="auto" maxW={1200} spacing={100}>
        <Issue {...issue} />
        <CommentListWithHeader {...issue} issueId={issue._id} />
      </VStack>
    </Grid>
  );
};

export default Detail;
