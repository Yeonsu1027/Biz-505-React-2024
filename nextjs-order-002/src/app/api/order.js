"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ORDER = prisma.tbl_orders;
export const selectAll = async () => {
  const result = await ORDER.findMany();
  return result;
};

export const findByCcode = async (c_code) => {
  const result = await ORDER.findMany({
    where: { o_ccode: c_code },
  });
  console.log("검색결과", result);
  return result;
};

// 고객코드를 받아서 오더리스트 리턴
export const getOrderListByPcode = async (c_code) => {
  // 3 개의 테이블연결
  const result = await ORDER.findMany({
    where: {
      o_ccode: c_code,
    },
    // 주문번호순으로 보여라
    orderBy: { o_num: "asc" },
    include: {
      // prisma 에서 만든거(릴레이션 products) 필요해
      products: {
        include: { product: true },
        orderBy: { op_code: "asc" },
      },
    },
  });
  console.log("결과", result);
  return result;
};
