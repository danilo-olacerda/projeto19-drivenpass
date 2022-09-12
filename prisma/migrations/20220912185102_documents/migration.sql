-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "emissionDate" TEXT NOT NULL,
    "expiryDate" TEXT NOT NULL,
    "registerNumber" TEXT NOT NULL,
    "emissor" TEXT NOT NULL,
    "type" VARCHAR(3) NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
