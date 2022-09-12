import prisma from '../db/db';
import { IDocumentData } from '../types/documentsTypes';

export async function insert(document: IDocumentData) {

  await prisma.documents.create({ data: document });

}

export async function findByTitleAndUserId(name: string, userId: number) {

  const document = await prisma.documents.findFirst({
    where: {
        name: name,
        userId: userId
    }
  });

  return document;

}

export async function findById(id: number) {

  const document = await prisma.documents.findFirst({
    where: {
      id: id
    }
  });

  return document;

}

export async function findByUserId(userId: number) {

  const documents = await prisma.documents.findMany({
    where: {
      userId: userId
    }
  });

  return documents;

}

export async function deleteById(id: number) {
  
  await prisma.documents.delete({
    where: {
      id: id
    }
  });
  
}