// 대화스크립트
"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const selectAll = async () => {
  try {
    const result = await prisma.tbl_speech.findMany();
    console.log("RESULT", result);
    prisma.$disconnect;
    return result;
  } catch (error) {
    console.error(error);
    prisma.$disconnect;
  }
};
