-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OPEN', 'READING', 'READ');

-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapters" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "book" TEXT NOT NULL DEFAULT 'AOAB',
    "part" INTEGER NOT NULL DEFAULT 5,
    "prepub" BOOLEAN NOT NULL DEFAULT true,
    "status" "Status" NOT NULL DEFAULT 'OPEN',
    "aiProcessed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChapterToCharacter" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "characters_name_id_idx" ON "characters"("name", "id");

-- CreateIndex
CREATE UNIQUE INDEX "characters_id_key" ON "characters"("id");

-- CreateIndex
CREATE INDEX "chapters_createdAt_idx" ON "chapters"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "chapters_id_key" ON "chapters"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_ChapterToCharacter_AB_unique" ON "_ChapterToCharacter"("A", "B");

-- CreateIndex
CREATE INDEX "_ChapterToCharacter_B_index" ON "_ChapterToCharacter"("B");

-- AddForeignKey
ALTER TABLE "_ChapterToCharacter" ADD CONSTRAINT "_ChapterToCharacter_A_fkey" FOREIGN KEY ("A") REFERENCES "chapters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChapterToCharacter" ADD CONSTRAINT "_ChapterToCharacter_B_fkey" FOREIGN KEY ("B") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
