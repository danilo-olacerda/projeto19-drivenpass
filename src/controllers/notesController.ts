import { Request, Response } from 'express';
import * as notesService from '../services/notesService';
import { INoteData } from '../types/noteTypes';

export async function newNote(req: Request, res: Response) {

    const note: INoteData = req.body;
    const payloadUserId: number = res.locals.user.id;

    await notesService.newNote(note, payloadUserId);

    res.status(201).send("Note created");

}

export async function getAllNotes(req: Request, res: Response) {

    const userId: number = res.locals.user.id;

    const notes = await notesService.getAllNotes(userId);

    res.status(200).send(notes);

}

export async function getNoteById(req: Request, res: Response) {

    const id: number = parseInt(req.params.id);
    const payloadUserId: number = res.locals.user.id;

    const note = await notesService.getNoteById(id, payloadUserId);

    res.status(200).send(note);
    
}

export async function deleteNoteById(req: Request, res: Response) {

    const id: number = parseInt(req.params.id);
    const payloadUserId: number = res.locals.user.id;

    await notesService.deleteNoteById(id, payloadUserId);

    res.sendStatus(200);

}