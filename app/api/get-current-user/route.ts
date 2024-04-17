import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getSession } from "@/actions/getCurrentUser";

export async function GET(request: Request) {
  const session = await getSession();

  if (!session?.user?.email) {
    return NextResponse.error();
  }

  const currentUser = await prisma?.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: true,
    },
  });

  if (!currentUser) {
    return NextResponse.error();
  }

  const updatedCurrentUser = {
    ...currentUser,
    createdAt: currentUser?.createdAt?.toISOString(),
    updatedAt: currentUser?.updatedAt?.toISOString(),
    emailVerified: currentUser?.emailVerified?.toISOString() || null,
  };
  return NextResponse.json({ currentUser: updatedCurrentUser });
}
