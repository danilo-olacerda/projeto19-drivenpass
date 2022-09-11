import prisma from '../db/db';
import { ICredentialData } from '../types/credentialTypes';

export async function insert(credential: ICredentialData) {

  await prisma.credentials.create({ data: credential });

}

export async function findByTitleAndUserId(title: string, userId: number) {

  const credential = await prisma.credentials.findFirst({
    where: {
      title: title,
      userId: userId
    }
  });

  return credential;

}

export async function findById(id: number) {

  const credential = await prisma.credentials.findFirst({
    where: {
      id: id
    }
  });

  return credential;

}

export async function findByUserId(userId: number) {

  const credentials = await prisma.credentials.findMany({
    where: {
      userId: userId
    }
  });

  return credentials;

}

export async function deleteById(id: number) {
  
  await prisma.credentials.delete({
    where: {
      id: id
    }
  });
  
}