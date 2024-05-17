-- CreateTable
CREATE TABLE `clear` (
    `c_id` VARCHAR(191) NOT NULL,
    `c_level` INTEGER NOT NULL,
    `c_clear` INTEGER NOT NULL,

    PRIMARY KEY (`c_id`, `c_level`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `member` (
    `m_id` VARCHAR(191) NOT NULL,
    `m_pw` VARCHAR(191) NOT NULL,
    `m_nick` VARCHAR(191) NULL,

    PRIMARY KEY (`m_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nemo` (
    `n_num` INTEGER NOT NULL,
    `n_row_num` INTEGER NOT NULL,
    `n_block1` INTEGER NOT NULL,
    `n_block2` INTEGER NOT NULL,
    `n_block3` INTEGER NOT NULL,
    `n_block4` INTEGER NOT NULL,
    `n_block5` INTEGER NOT NULL,
    `n_block6` INTEGER NOT NULL,
    `n_block7` INTEGER NOT NULL,
    `n_block8` INTEGER NOT NULL,
    `n_block9` INTEGER NOT NULL,
    `n_block10` INTEGER NOT NULL,
    `n_block11` INTEGER NOT NULL,
    `n_block12` INTEGER NOT NULL,
    `n_block13` INTEGER NOT NULL,
    `n_block14` INTEGER NOT NULL,
    `n_block15` INTEGER NOT NULL,

    PRIMARY KEY (`n_num`, `n_row_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nemoplay` (
    `p_id` VARCHAR(191) NOT NULL,
    `p_num` INTEGER NOT NULL,
    `p_row_num` INTEGER NOT NULL,
    `p_block1` INTEGER NOT NULL,
    `p_block2` INTEGER NOT NULL,
    `p_block3` INTEGER NOT NULL,
    `p_block4` INTEGER NOT NULL,
    `p_block5` INTEGER NOT NULL,
    `p_block6` INTEGER NOT NULL,
    `p_block7` INTEGER NOT NULL,
    `p_block8` INTEGER NOT NULL,
    `p_block9` INTEGER NOT NULL,
    `p_block10` INTEGER NOT NULL,
    `p_block11` INTEGER NOT NULL,
    `p_block12` INTEGER NOT NULL,
    `p_block13` INTEGER NOT NULL,
    `p_block14` INTEGER NOT NULL,
    `p_block15` INTEGER NOT NULL,

    PRIMARY KEY (`p_id`, `p_num`, `p_row_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `speech` (
    `s_num` INTEGER NOT NULL AUTO_INCREMENT,
    `s_speaker` VARCHAR(191) NOT NULL,
    `s_message` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`s_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_clear` (
    `c_id` VARCHAR(20) NOT NULL,
    `c_level` INTEGER NOT NULL,
    `c_clear` INTEGER NULL,

    PRIMARY KEY (`c_id`, `c_level`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_members` (
    `m_id` VARCHAR(20) NOT NULL,
    `m_pw` VARCHAR(125) NOT NULL,
    `m_nick` VARCHAR(20) NULL,

    PRIMARY KEY (`m_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_nemo` (
    `n_num` INTEGER NOT NULL,
    `n_row_num` INTEGER NOT NULL,
    `n_block1` INTEGER NULL,
    `n_block2` INTEGER NULL,
    `n_block3` INTEGER NULL,
    `n_block4` INTEGER NULL,
    `n_block5` INTEGER NULL,
    `n_block6` INTEGER NULL,
    `n_block7` INTEGER NULL,
    `n_block8` INTEGER NULL,
    `n_block9` INTEGER NULL,
    `n_block10` INTEGER NULL,
    `n_block11` INTEGER NULL,
    `n_block12` INTEGER NULL,
    `n_block13` INTEGER NULL,
    `n_block14` INTEGER NULL,
    `n_block15` INTEGER NULL,

    PRIMARY KEY (`n_num`, `n_row_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_nemo_play` (
    `p_id` VARCHAR(20) NOT NULL,
    `p_num` INTEGER NOT NULL,
    `p_row_num` INTEGER NOT NULL,
    `p_block1` INTEGER NULL,
    `p_block2` INTEGER NULL,
    `p_block3` INTEGER NULL,
    `p_block4` INTEGER NULL,
    `p_block5` INTEGER NULL,
    `p_block6` INTEGER NULL,
    `p_block7` INTEGER NULL,
    `p_block8` INTEGER NULL,
    `p_block9` INTEGER NULL,
    `p_block10` INTEGER NULL,
    `p_block11` INTEGER NULL,
    `p_block12` INTEGER NULL,
    `p_block13` INTEGER NULL,
    `p_block14` INTEGER NULL,
    `p_block15` INTEGER NULL,

    PRIMARY KEY (`p_id`, `p_num`, `p_row_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_speech` (
    `s_num` INTEGER NULL,
    `s_speaker` VARCHAR(1) NULL,
    `s_message` VARCHAR(100) NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
