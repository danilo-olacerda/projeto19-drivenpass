import prisma from '../db/db';
import { ICardData } from '../types/cardTypes';

export async function insert(card: ICardData) {

  await prisma.cards.create({ data: card });

}

export async function findByNameAndUserId(cardName: string, userId: number) {

  const card = await prisma.cards.findFirst({
    where: {
      cardName: cardName,
      userId: userId
    }
  });

  return card;

}

export async function findById(id: number) {

  const card = await prisma.cards.findFirst({
    where: {
      id: id
    }
  });

  return card;

}

export async function findByUserId(userId: number) {

  const cards = await prisma.cards.findMany({
    where: {
      userId: userId
    }
  });

  return cards;

}

export async function deleteById(id: number) {
  
  await prisma.cards.delete({
    where: {
      id: id
    }
  });
  
}