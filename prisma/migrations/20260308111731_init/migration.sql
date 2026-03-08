-- CreateTable
CREATE TABLE "Cycle" (
    "id" TEXT NOT NULL,
    "cycleEndDate" TIMESTAMP(3) NOT NULL,
    "capacity" INTEGER NOT NULL,
    "paidCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cycle_pkey" PRIMARY KEY ("id")
);
