import * as credentialsRepository from '../repositories/credentialsRepository';
import { ICredentialData } from '../types/credentialTypes';
import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();

export async function newCredential(credential: ICredentialData, user: {id: number, email: string}) {

    if (credential.userId !== user.id) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    const credentialExists = await credentialsRepository.findByTitleAndUserId(credential.title, credential.userId);

    if (credentialExists) {
        throw { type: "conflitc", message: "Title/name already in use" }
    }

    const salt = process.env.CRYPTO_KEY as string;

    const cryptr = new Cryptr(salt);

    credential.password = cryptr.encrypt(credential.password);

    await credentialsRepository.insert(credential);

}

export async function getAllCredentials(userId: number) {

    const credentials = await credentialsRepository.findByUserId(userId);

    return credentials;

}

export async function getCredentialById(id: number, payloadUserId: number) {

    const credential = await credentialsRepository.findById(id);

    if (!credential) {
        throw { type: "notFound", message: "Credential not found" }
    }

    if (credential.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    const salt = process.env.CRYPTO_KEY as string;

    const cryptr = new Cryptr(salt);

    credential.password = cryptr.decrypt(credential.password);

    return credential;

}

export async function deleteCredentialById(id: number, payloadUserId: number) {

    const credential = await credentialsRepository.findById(id);

    if (!credential) {
        throw { type: "notFound", message: "Credential not found" }
    }

    if (credential.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    await credentialsRepository.deleteById(id);
}