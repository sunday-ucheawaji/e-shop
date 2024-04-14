import React, { Suspense } from "react";
import Container from "../components/Container";
import CartClient from "./CartClient";
import { getCurrentUser } from "@/actions/getCurrentUser";
import CircularProgress from "@mui/joy/CircularProgress";

const Cart = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="pt-8">
      <Container>
        <Suspense fallback={<CircularProgress variant="solid" />}>
          <CartClient currentUser={currentUser} />
        </Suspense>
      </Container>
    </div>
  );
};

export default Cart;
