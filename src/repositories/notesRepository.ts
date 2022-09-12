import prisma from '../db/db';
import { INoteData } from '../types/noteTypes';

export async function insert(note: INoteData) {

  await prisma.notes.create({ data: note });

}

export async function findByTitleAndUserId(title: string, userId: number) {

  const note = await prisma.notes.findFirst({
    where: {
      title: title,
      userId: userId
    }
  });

  return note;

}

export async function findById(id: number) {

  const note = await prisma.notes.findFirst({
    where: {
      id: id
    }
  });

  return note;

}

export async function findByUserId(userId: number) {

  const notes = await prisma.notes.findMany({
    where: {
      userId: userId
    }
  });

  return notes;

}

export async function deleteById(id: number) {
  
  await prisma.notes.delete({
    where: {
      id: id
    }
  });
  
}