import { Request, Response } from 'express';
import { ICardData } from '../types/cardTypes';
import * as cardsService from '../services/cardsService';

export async function newCard(req: Request, res: Response) {

    const card: ICardData = req.body;
    const payloadUserId: number = res.locals.user.id;

    await cardsService.newCard(card, payloadUserId);

    res.sendStatus(201);

}

export async function getAllCards(req: Request, res: Response) {

    const userId: number = res.locals.user.id;

    const cards = await cardsService.getAllCards(userId);

    res.send(cards);

}

export async function getCardById(req: Request, res: Response) {

    const id: number = parseInt(req.params.id);
    const payloadUserId: number = res.locals.user.id;

    const card = await cardsService.getCardById(id, payloadUserId);

    res.send(card);

}

export async function deleteCardById(req: Request, res: Response) {

    const id: number = parseInt(req.params.id);
    const payloadUserId: number = res.locals.user.id;

    await cardsService.deleteCardById(id, payloadUserId);

    res.sendStatus(200);

}