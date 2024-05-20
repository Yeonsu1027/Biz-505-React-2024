"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function findClearData(c_id, c_level) {
  try {
    const result = await prisma.tbl_clear.findUnique({
      where: {
        c_id_c_level: {
          c_id,
          c_level,
        },
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
