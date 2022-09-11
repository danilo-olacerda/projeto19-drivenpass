import prisma from '../db/db';
import { IUserData } from '../types/usersTypes';

export async function register(user: IUserData) {

  await prisma.users.create({ data: user });

}