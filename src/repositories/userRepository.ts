import prisma from '../db/db';

export async function find(email: string) {

  return await prisma.users.findUnique({
    where: {
        email: email
    }
  });

}