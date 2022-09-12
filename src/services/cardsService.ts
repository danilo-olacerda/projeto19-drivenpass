import { ICardData } from '../types/cardTypes';
import * as cardsRepository from '../repositories/cardsRepository';
import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();

export async function newCard(card: ICardData, payloadUserId: number) {

    if (card.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    const cardExists = await cardsRepository.findByNameAndUserId(card.cardName, payloadUserId);

    if (cardExists) {
        throw { type: "conflict", message: "Card name already in use" }
    }

    const salt = process.env.CRYPTO_KEY as string;

    const cryptr = new Cryptr(salt);

    card.cvv = cryptr.encrypt(card.cvv);
    card.password = cryptr.encrypt(card.password);

    await cardsRepository.insert(card);
}

export async function getAllCards(userId: number) {
    
    const cards = await cardsRepository.findByUserId(userId);

    return cards;
}

export async function getCardById(id: number, payloadUserId: number) {

    const card = await cardsRepository.findById(id);

    if (!card){
        throw { type: "notFound", message: "Card not found" }
    }

    if (card.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    const salt = process.env.CRYPTO_KEY as string;

    const cryptr = new Cryptr(salt);

    card.cvv = cryptr.decrypt(card.cvv);
    card.password = cryptr.decrypt(card.password);

    return card;

}

export async function deleteCardById(id: number, payloadUserId: number) {

    const card = await cardsRepository.findById(id);

    if (!card){
        throw { type: "notFound", message: "Card not found" }
    }

    if (card.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    await cardsRepository.deleteById(id);

}