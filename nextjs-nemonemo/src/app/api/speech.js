"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function selectAll() {
  try {
    const result = await prisma.tbl_speech.findMany();
    console.log("RESULT", result);
    return result;
  } catch (error) {
    console.error(
      "대화 데이터를 불러오는 중 에러가 발생했습니다:",
      error
    );
    throw error; // 에러를 호출자에게 전파하기 위해 다시 던집니다.
  } finally {
    await prisma.$disconnect(); // Prisma 클라이언트 연결 해제를 보장합니다.
  }
}
