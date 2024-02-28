import { PrismaClient } from "@prisma/client";
const DB = new PrismaClient();

const selectAll = async () => {
  try {
    const notice = await DB.tbl_notice.findMany(); // 모든데이터 가져오기
    await DB.$disconnect(); // 쓰고나면 연결 끊어주고
    return notice;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createNotice = async (data) => {
  console.log(data);
  await DB.tbl_notice.create({ data: data });
};

export { createNotice, selectAll }; // 함수만든거 export
