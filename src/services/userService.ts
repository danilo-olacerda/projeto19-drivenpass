import * as userRepository from '../repositories/userRepository';

export async function find(email: string){

    return await userRepository.find(email);
    
}