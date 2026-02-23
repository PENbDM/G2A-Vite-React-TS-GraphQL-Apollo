/*
  Warnings:

  - The values [STANDARD,DELUXE,COLLECTION] on the enum `Edition` will be removed. If these variants are still used in the database, this will fail.
  - The values [KEY,ACCOUNT] on the enum `GameType` will be removed. If these variants are still used in the database, this will fail.
  - The values [STEAM,PC,PS5,XBOX] on the enum `Platform` will be removed. If these variants are still used in the database, this will fail.
  - The values [GLOBAL,EUROPE,USA] on the enum `Region` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Edition_new" AS ENUM ('Standard', 'Deluxe', 'Collection');
ALTER TABLE "Game" ALTER COLUMN "edition" TYPE "Edition_new" USING ("edition"::text::"Edition_new");
ALTER TYPE "Edition" RENAME TO "Edition_old";
ALTER TYPE "Edition_new" RENAME TO "Edition";
DROP TYPE "public"."Edition_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "GameType_new" AS ENUM ('Key', 'Account');
ALTER TABLE "Game" ALTER COLUMN "type" TYPE "GameType_new" USING ("type"::text::"GameType_new");
ALTER TYPE "GameType" RENAME TO "GameType_old";
ALTER TYPE "GameType_new" RENAME TO "GameType";
DROP TYPE "public"."GameType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Platform_new" AS ENUM ('Steam', 'Pc', 'Ps5', 'Xbox');
ALTER TABLE "Game" ALTER COLUMN "platform" TYPE "Platform_new" USING ("platform"::text::"Platform_new");
ALTER TYPE "Platform" RENAME TO "Platform_old";
ALTER TYPE "Platform_new" RENAME TO "Platform";
DROP TYPE "public"."Platform_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Region_new" AS ENUM ('Global', 'Europe', 'Usa');
ALTER TABLE "Game" ALTER COLUMN "region" TYPE "Region_new" USING ("region"::text::"Region_new");
ALTER TYPE "Region" RENAME TO "Region_old";
ALTER TYPE "Region_new" RENAME TO "Region";
DROP TYPE "public"."Region_old";
COMMIT;
