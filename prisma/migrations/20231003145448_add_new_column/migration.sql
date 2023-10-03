/*
  Warnings:

  - You are about to drop the column `fulltext` on the `film` table. All the data in the column will be lost.
  - You are about to drop the column `language_id` on the `film` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "film" DROP CONSTRAINT "film_language_id_fkey";

-- DropIndex
DROP INDEX "film_fulltext_idx";

-- DropIndex
DROP INDEX "idx_fk_language_id";

-- AlterTable
ALTER TABLE "actor" ADD COLUMN     "age" INTEGER;

-- AlterTable
ALTER TABLE "film" DROP COLUMN "fulltext",
DROP COLUMN "language_id",
ADD COLUMN     "Language_id" INTEGER,
ALTER COLUMN "rental_duration" DROP NOT NULL,
ALTER COLUMN "rental_rate" DROP NOT NULL,
ALTER COLUMN "replacement_cost" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "film" ADD CONSTRAINT "film_Language_id_fkey" FOREIGN KEY ("Language_id") REFERENCES "language"("language_id") ON DELETE SET NULL ON UPDATE CASCADE;
