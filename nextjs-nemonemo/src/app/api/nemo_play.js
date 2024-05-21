// 플레이어 게임정보
"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// export const selectAll = async () => {
//   try {
//     const result = await prisma.tbl_nemo_play.findMany();
//     console.log("RESULT", result);
//     prisma.$disconnect;
//     return result;
//   } catch (error) {
//     console.error(error);
//     prisma.$disconnect;
//   }
// };

// 게임시작할때 네모 전부다 0인 테이블정보생성
// 업데이트까지 같이 넣어서 하나로 하면?
export const playDataCheck = async (data) => {
  const check_result = await prisma.tbl_nemo_play.findMany({
    where: {
      p_id: data.p_id,
      p_num: data.p_num,
    },
  });
  if (check_result.length == 0) {
    for (let i = 1; i <= 5; i++) {
      const startData = {
        p_id: data.p_id,
        p_num: data.p_num,
        p_row_num: i,
        p_block1: 0,
        p_block2: 0,
        p_block3: 0,
        p_block4: 0,
        p_block5: 0,
        ...(data.p_block6 !== undefined && { p_block6: 0 }),
        ...(data.p_block7 !== undefined && { p_block7: 0 }),
        ...(data.p_block8 !== undefined && { p_block8: 0 }),
        ...(data.p_block9 !== undefined && { p_block9: 0 }),
        ...(data.p_block10 !== undefined && { p_block10: 0 }),
        ...(data.p_block11 !== undefined && { p_block11: 0 }),
        ...(data.p_block12 !== undefined && { p_block12: 0 }),
        ...(data.p_block13 !== undefined && { p_block13: 0 }),
        ...(data.p_block14 !== undefined && { p_block14: 0 }),
        ...(data.p_block15 !== undefined && { p_block15: 0 }),
      };
      await prisma.tbl_nemo_play.create({ data: startData });
    }
  }
  await prisma.tbl_nemo_play.update({
    where: {
      p_id_p_num_p_row_num: {
        p_id: data.p_id,
        p_num: data.p_num,
        p_row_num: data.p_row_num,
      },
    },
    data: {
      p_block1: data.p_block1,
      p_block2: data.p_block2,
      p_block3: data.p_block3,
      p_block4: data.p_block4,
      p_block5: data.p_block5,
      p_block6: data.p_block6 !== undefined ? data.p_block6 : null,
      p_block7: data.p_block7 !== undefined ? data.p_block7 : null,
      p_block8: data.p_block8 !== undefined ? data.p_block8 : null,
      p_block9: data.p_block9 !== undefined ? data.p_block9 : null,
      p_block10: data.p_block10 !== undefined ? data.p_block10 : null,
      p_block11: data.p_block11 !== undefined ? data.p_block11 : null,
      p_block12: data.p_block12 !== undefined ? data.p_block12 : null,
      p_block13: data.p_block13 !== undefined ? data.p_block13 : null,
      p_block14: data.p_block14 !== undefined ? data.p_block14 : null,
      p_block15: data.p_block15 !== undefined ? data.p_block15 : null,
    },
  });
};

// 게임정보 생성용
// export const createPlayData = async (data) => {
//   console.log(data);
//   await prisma.tbl_nemo_play.create({ data: data });
// };
// 업데이트
// export const createPlayData = async (data) => {
//   console.log(data);
//   await prisma.tbl_nemo_play.update({
//     where: {
//       p_id_p_num_p_row_num: {
//         p_id: data.p_id,
//         p_num: data.p_num,
//         p_row_num: data.p_row_num,
//       },
//     },
//     data: {
//       p_block1: data.p_block1,
//       p_block2: data.p_block2,
//       p_block3: data.p_block3,
//       p_block4: data.p_block4,
//       p_block5: data.p_block5,
//       p_block6: data.p_block6,
//       p_block7: data.p_block7,
//       p_block8: data.p_block8,
//       p_block9: data.p_block9,
//       p_block10: data.p_block10,
//       p_block11: data.p_block11,
//       p_block12: data.p_block12,
//       p_block13: data.p_block13,
//       p_block14: data.p_block14,
//       p_block15: data.p_block15,
//     },
//   });
// };
