import { INetworkData } from '../types/networkTypes';
import * as networksRepository from '../repositories/networksRepository';
import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();

export async function newNetwork(network: INetworkData, payloadUserId: number) {

    if (network.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    const salt = process.env.CRYPTO_KEY as string;

    const cryptr = new Cryptr(salt);

    network.password = cryptr.encrypt(network.password);

    await networksRepository.insert(network);
}

export async function getAllNetworks(userId: number) {

    const networks = await networksRepository.findByUserId(userId);

    return networks;

}

export async function getNetworkById(id: number, payloadUserId: number) {

    const network = await networksRepository.findById(id);

    if (!network){
        throw { type: "notFound", message: "Network not found" }
    }

    if (network.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    const salt = process.env.CRYPTO_KEY as string;

    const cryptr = new Cryptr(salt);

    network.password = cryptr.decrypt(network.password);

    return network;

}

export async function deleteNetworkById(id: number, payloadUserId: number) {

    const network = await networksRepository.findById(id);

    if (!network){
        throw { type: "notFound", message: "Network not found" }
    }

    if (network.userId !== payloadUserId) {
        throw { type: "unauthorized", message: "User id not valid" }
    }

    await networksRepository.deleteById(id);

}