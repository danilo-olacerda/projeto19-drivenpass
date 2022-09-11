import { Request, Response } from 'express';
import * as credentialsService from '../services/credentialsService';
import { ICredentialData } from '../types/credentialTypes';

export async function newCredential(req: Request, res: Response) {

    const credential: ICredentialData = req.body;
    const user: {id: number, email: string} = res.locals.user;

    await credentialsService.newCredential(credential, user);

    res.sendStatus(201);  
}

export async function getAllCredentials(req: Request, res: Response) {

    const userId: number = res.locals.user.id;

    const credentials = await credentialsService.getAllCredentials(userId);

    res.send(credentials);
}

export async function getCredentialById(req: Request, res: Response) {
    
    const id: number = Number(req.params.id);
    const payloadUserId: number = res.locals.user.id;

    const credential = await credentialsService.getCredentialById(id, payloadUserId);

    res.send(credential);
}

export async function deleteCredentialById(req: Request, res: Response) {

    const id: number = Number(req.params.id);
    const payloadUserId: number = res.locals.user.id;

    await credentialsService.deleteCredentialById(id, payloadUserId);

    res.sendStatus(200);

}