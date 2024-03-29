"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); // 프리즈마를 이용한 데이터베이스 연결 도구 만들기
// 시퀄라이즈처럼 모델연결 필요x
export const selectAll = async () => {
  try {
    const result = await prisma.tbl_student.findMany(); // 전체데이터
    prisma.$disconnect;
    return result;
  } catch (error) {
    console.error(error);
  }
};

// ------ 디테일만들어보자~~
export const stdetail = async (st_num) => {
  try {
    const result = await prisma.tbl_student.findMany({
      where: {
        st_num,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
