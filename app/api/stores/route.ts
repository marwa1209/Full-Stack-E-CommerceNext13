// /** @format */

import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import prisma from "../../../lib/prismadb";

// export async function POST(req: NextRequest) {
//   try {
//      //const { userId } = getAuth(req);
//     const body = await req.json();
//     const { name } = body;

//     // if (!userId) {
//     //   return new NextResponse("Unauthorized", { status: 401 });
//     // }

//     if (!name) {
//       return new NextResponse("Name is required", { status: 400 });
//     }

//     // const store = await prisma.store.create({
//     //   data: {
//     //     name,
//     //     userId,
//     //   },
//     // });

//     return NextResponse.json({name});
//   } catch (error) {
//     console.error("[STORES_POST]", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// }
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const store = await prisma.store.create({
      data: { name, userId: "4564dsa654d6as5d4asd" },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("STORES_POST", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}