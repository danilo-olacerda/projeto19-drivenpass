import prisma from '../db/db';
import { INetworkData } from '../types/networkTypes';

export async function insert(network: INetworkData) {

  await prisma.networks.create({ data: network });

}

export async function findByTitleAndUserId(networkName: string, userId: number) {

  const network = await prisma.networks.findFirst({
    where: {
      networkName: networkName,
      userId: userId
    }
  });

  return network;

}

export async function findById(id: number) {

  const network = await prisma.networks.findFirst({
    where: {
      id: id
    }
  });

  return network;

}

export async function findByUserId(userId: number) {

  const networks = await prisma.networks.findMany({
    where: {
      userId: userId
    }
  });

  return networks;

}

export async function deleteById(id: number) {
  
  await prisma.networks.delete({
    where: {
      id: id
    }
  });
  
}