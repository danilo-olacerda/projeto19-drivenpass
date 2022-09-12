import { notes } from "@prisma/client";

export type INoteData = Omit<notes, 'id'>;