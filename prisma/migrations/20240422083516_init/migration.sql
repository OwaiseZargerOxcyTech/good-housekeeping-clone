-- CreateTable
CREATE TABLE "Userh" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userRole" TEXT NOT NULL,
    "blocked" TEXT,

    CONSTRAINT "Userh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoryh" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categoryh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blogh" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "published" TEXT NOT NULL,
    "delete_request" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "bloglive_id" INTEGER,

    CONSTRAINT "Blogh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blogliveh" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "published" TEXT NOT NULL,
    "delete_request" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Blogliveh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userRole" TEXT NOT NULL,
    "blocked" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "published" TEXT NOT NULL,
    "delete_request" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_id" INTEGER NOT NULL,
    "bloglive_id" INTEGER,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bloglive" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "published" TEXT NOT NULL,
    "delete_request" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_id" INTEGER NOT NULL,

    CONSTRAINT "Bloglive_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Userh_email_key" ON "Userh"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Userh_username_key" ON "Userh"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Categoryh_name_key" ON "Categoryh"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Blogh" ADD CONSTRAINT "Blogh_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Userh"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blogh" ADD CONSTRAINT "Blogh_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categoryh"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blogliveh" ADD CONSTRAINT "Blogliveh_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Userh"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blogliveh" ADD CONSTRAINT "Blogliveh_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categoryh"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bloglive" ADD CONSTRAINT "Bloglive_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
