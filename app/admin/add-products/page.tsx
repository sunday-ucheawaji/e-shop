import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import AddProductForm from "./AddProductForm";
import NullData from "@/app/components/NullData";
// import CircularProgress from "@mui/joy/CircularProgress";

const AddProducts = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <div>
      <Container>
        <FormWrap>
            <AddProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProducts;
