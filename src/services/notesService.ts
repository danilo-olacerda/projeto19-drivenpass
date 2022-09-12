import * as notesRepository from '../repositories/notesRepository';
import { INoteData } from '../types/noteTypes';

export async function newNote(note: INoteData, payloadUserId: number) {

    if (note.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    const noteExists = await notesRepository.findByTitleAndUserId(note.title, note.userId);

    if (noteExists) {
        throw { type: "conflict", message: "Title/name already in use" }
    }

    await notesRepository.insert(note);

}

export async function getAllNotes(userId: number) {

    const notes = await notesRepository.findByUserId(userId);

    return notes;

}

export async function getNoteById(id: number, payloadUserId: number) {

    const note = await notesRepository.findById(id);

    if (!note) {
        throw { type: "notFound", message: "Note not found" }
    }

    if (note.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    return note;

}

export async function deleteNoteById(id: number, payloadUserId: number) {

    const note = await notesRepository.findById(id);

    if (!note) {
        throw { type: "notFound", message: "Note not found" }
    }

    if (note.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    await notesRepository.deleteById(id);

}