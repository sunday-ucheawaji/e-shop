import React, { Suspense } from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginForm from "./LoginForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
// import CircularProgress from "@mui/joy/CircularProgress";

const Login = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <FormWrap>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm currentUser={currentUser} />
        </Suspense>
      </FormWrap>
    </Container>
  );
};

export default Login;
