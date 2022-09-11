import { Request, Response } from 'express';
import * as authService from '../services/authService';

export async function register(req: Request, res: Response) {

    const { email, password }: {email: string, password: string} = req.body;

    await authService.register(email, password);

    res.sendStatus(201);

}

export async function login(req: Request, res: Response) {
    
    const { email, password }: {email: string, password: string} = req.body;

    const token = await authService.login(email, password);

    res.send(token);

}