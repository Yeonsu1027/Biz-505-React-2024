// 게임 클리어정보
"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findClearData = async (c_id, c_level) => {
  try {
    const result = await prisma.tbl_clear.findUnique({
      where: { c_id: c_id, c_level: c_level },
    });
    prisma.$disconnect;
    return result;
  } catch (error) {
    console.error(error);
    prisma.$disconnect;
  }
};
