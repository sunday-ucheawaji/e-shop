import React, { Suspense } from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
// import CircularProgress from "@mui/joy/CircularProgress";

const page = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <FormWrap>
        <Suspense fallback={<div>Loading...</div>}>
          <RegisterForm currentUser={currentUser} />
        </Suspense>
      </FormWrap>
    </Container>
  );
};

export default page;
