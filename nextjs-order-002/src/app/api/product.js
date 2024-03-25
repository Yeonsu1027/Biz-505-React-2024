"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const PRODUCT = prisma.tbl_product;

// 상품이름으로 상품정보 검색
export const findByPName = async (pname) => {
  const result = await PRODUCT.findMany({
    where: {
      p_name: { contains: pname },
    },
  });
  return result;
};
