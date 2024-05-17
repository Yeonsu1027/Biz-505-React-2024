// 정답테이블정보
"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const selectAll = async () => {
  try {
    const result = await prisma.tbl_nemo.findMany();
    console.log("RESULT", result);
    prisma.$disconnect;
    return result;
  } catch (error) {
    console.error(error);
    prisma.$disconnect;
  }
};