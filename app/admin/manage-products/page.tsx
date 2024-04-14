import React, { Suspense } from "react";
import Container from "@/app/components/Container";
import ManageProductClient from "./ManageProductClient";
import getProducts from "@/actions/getProducts";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
// import CircularProgress from "@mui/joy/CircularProgress";

const ManageProducts = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }
  return (
    <div className="pt-8">
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <ManageProductClient products={products} />
        </Suspense>
      </Container>
    </div>
  );
};

export default ManageProducts;
