import * as documentsRepository from '../repositories/documentsRepository';
import { IDocumentData } from '../types/documentsTypes';

export async function newDocument(document: IDocumentData, payloadUserId: number) {

    if (document.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    await documentsRepository.insert(document);

}

export async function getAllDocuments(userId: number) {

    const documents = await documentsRepository.findByUserId(userId);

    return documents;

}

export async function getDocumentById(id: number, payloadUserId: number) {

    const document = await documentsRepository.findById(id);

    if (!document) {
        throw { type: "notFound", message: "Document not found" }
    }

    if (document.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    return document;
}

export async function deleteDocumentById(id: number, payloadUserId: number) {

    const document = await documentsRepository.findById(id);

    if (!document) {
        throw { type: "notFound", message: "Document not found" }
    }

    if (document.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    await documentsRepository.deleteById(id);
}