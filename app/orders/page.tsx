import Container from "@/app/components/Container";
import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import OrdersClient from "./OrdersClient";
import getOrderByUserId from "@/actions/getOrderByUserId";

const Orders = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <NullData title="Oops! Access denied" />;
  }

  const orders = await getOrderByUserId(currentUser.id);
  if (!orders) {
    return <NullData title="No orders yet..." />;
  }
  return (
    <div className="pt-8">
      <Container>
        <OrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
