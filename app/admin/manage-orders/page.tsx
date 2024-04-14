import React, { Suspense } from "react";
import Container from "@/app/components/Container";
import ManageOrdersClient from "./ManageOrdersClient";
import getOrders from "@/actions/getOrders";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import CircularProgress from "@mui/joy/CircularProgress";

const ManageOrders = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }
  return (
    <div className="pt-8">
      <Container>
        <Suspense fallback={<CircularProgress variant="solid" />}>
          <ManageOrdersClient orders={orders} />
        </Suspense>
      </Container>
    </div>
  );
};

export default ManageOrders;
