"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// id로 회원정보 조회
export const findByUser = async (m_id) => {
  try {
    const result = await prisma.tbl_members.findMany({
      where: { m_id: m_id },
    });
    prisma.$disconnect;
    return result;
  } catch (error) {
    console.error(error);
    prisma.$disconnect;
  }
};
