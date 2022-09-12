import { Request, Response } from 'express';
import * as documentsService from '../services/documentsService';
import { IDocumentData } from '../types/documentsTypes';

export async function newDocument(req: Request, res: Response) {

    const document: IDocumentData = req.body;
    const payloadUserId: number = Number(res.locals.user.id);

    await documentsService.newDocument(document, payloadUserId);

    res.sendStatus(201);
}

export async function getAllDocuments(req: Request, res: Response) {

    const userId: number = res.locals.user.id;

    const documents = await documentsService.getAllDocuments(userId);

    res.send(documents);

}

export async function getDocumentById(req: Request, res: Response) {

    const id: number = Number(req.params.id);
    const payloadUserId: number = res.locals.user.id;

    const document = await documentsService.getDocumentById(id, payloadUserId);

    res.send(document);

}

export async function deleteDocumentById(req: Request, res: Response) {

    const id: number = Number(req.params.id);
    const payloadUserId: number = res.locals.user.id;

    await documentsService.deleteDocumentById(id, payloadUserId);

    res.sendStatus(200);

}