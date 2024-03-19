"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findByStNum = (st_num) => {
  try {
    const result = prisma.tbl_score.findMany({
      where: {
        s_stnum: st_num,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
