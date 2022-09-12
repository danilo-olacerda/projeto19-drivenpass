import { Request, Response } from 'express';
import { INetworkData } from '../types/networkTypes';
import * as networksService from '../services/networksService';

export async function newNetwork(req: Request, res: Response) {

    const networkData: INetworkData = req.body;
    const payloadUserId: number = res.locals.user.id;

    await networksService.newNetwork(networkData, payloadUserId);

    res.sendStatus(201);

}

export async function getAllNetworks(req: Request, res: Response) {

    const payloadUserId: number = res.locals.user.id;

    const networks = await networksService.getAllNetworks(payloadUserId);

    res.send(networks);

}

export async function getNetworkById(req: Request, res: Response) {

    const id: number = parseInt(req.params.id);
    const payloadUserId: number = res.locals.user.id;

    const network = await networksService.getNetworkById(id, payloadUserId);

    res.send(network);
}

export async function deleteNetworkById(req: Request, res: Response) {

    const id: number = parseInt(req.params.id);
    const payloadUserId: number = res.locals.user.id;

    await networksService.deleteNetworkById(id, payloadUserId);

    res.sendStatus(200);

}