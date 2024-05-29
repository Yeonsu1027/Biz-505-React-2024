// 정답테이블정보
"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// export const selectAll = async () => {
//   try {
//     const result = await prisma.tbl_nemo.findMany();
//     console.log("RESULT", result);
//     prisma.$disconnect;
//     return result;
//   } catch (error) {
//     console.error(error);
//     prisma.$disconnect;
//   }
// };

// 정답확인용
export const NemoCheck = async (data) => {
  const result = await prisma.tbl_nemo.findMany({
    where: {
      n_num: data.p_num,
    },
  });
  prisma.$disconnect;
  return result;
};

// 정답확인용 플레이 데이터
export const PlayNemoCheck = async (data) => {
  const result = await prisma.tbl_nemo_play.findMany({
    where: {
      p_id: data.p_id,
      p_num: data.p_num,
    },
  });
  prisma.$disconnect;
  return result;
};

// 정답확인용
export const compareNemoData = async (data) => {
  const nemoData = await NemoCheck(data);
  const playNemoData = await PlayNemoCheck(data);

  // Assuming nemoData and playNemoData are arrays of rows
  const comparisonResults = playNemoData.map((playRow) => {
    const matchingNemoRow = nemoData.find(
      (nemoRow) => nemoRow.n_row_num === playRow.p_row_num
    );

    if (!matchingNemoRow) {
      return { match: false, playRow, nemoRow: null };
    }

    const isMatch =
      playRow.p_block1 === matchingNemoRow.n_block1 &&
      playRow.p_block2 === matchingNemoRow.n_block2 &&
      playRow.p_block3 === matchingNemoRow.n_block3 &&
      playRow.p_block4 === matchingNemoRow.n_block4 &&
      playRow.p_block5 === matchingNemoRow.n_block5 &&
      (playRow.p_block6 === undefined ||
        playRow.p_block6 === matchingNemoRow.n_block6) &&
      (playRow.p_block7 === undefined ||
        playRow.p_block7 === matchingNemoRow.n_block7) &&
      (playRow.p_block8 === undefined ||
        playRow.p_block8 === matchingNemoRow.n_block8) &&
      (playRow.p_block9 === undefined ||
        playRow.p_block9 === matchingNemoRow.n_block9) &&
      (playRow.p_block10 === undefined ||
        playRow.p_block10 === matchingNemoRow.n_block10) &&
      (playRow.p_block11 === undefined ||
        playRow.p_block11 === matchingNemoRow.n_block11) &&
      (playRow.p_block12 === undefined ||
        playRow.p_block12 === matchingNemoRow.n_block12) &&
      (playRow.p_block13 === undefined ||
        playRow.p_block13 === matchingNemoRow.n_block13) &&
      (playRow.p_block14 === undefined ||
        playRow.p_block14 === matchingNemoRow.n_block14) &&
      (playRow.p_block15 === undefined ||
        playRow.p_block15 === matchingNemoRow.n_block15);

    return { match: isMatch, playRow, nemoRow: matchingNemoRow };
  });

  return comparisonResults;
};
