/*
  Warnings:

  - Added the required column `edition` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('STEAM', 'PC', 'PS5', 'XBOX');

-- CreateEnum
CREATE TYPE "Region" AS ENUM ('GLOBAL', 'EUROPE', 'USA');

-- CreateEnum
CREATE TYPE "Edition" AS ENUM ('STANDARD', 'DELUXE', 'COLLECTION');

-- CreateEnum
CREATE TYPE "GameType" AS ENUM ('KEY', 'ACCOUNT');

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "edition" "Edition" NOT NULL,
ADD COLUMN     "platform" "Platform" NOT NULL,
ADD COLUMN     "region" "Region" NOT NULL,
ADD COLUMN     "type" "GameType" NOT NULL;
