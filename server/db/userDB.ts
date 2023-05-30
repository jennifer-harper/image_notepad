import dbCon from './connections'
import { UserData, Login } from '../../models/character'

export function getAllUserDB(){
    return dbCon('user-login')
}

export function getUserDB(data:UserData){
    return dbCon('user-login')
    .select("*")
    .where ({ 
        email: data.email
      })
    .first()
}

export async function createUserDB(data:UserData){
    return dbCon('user-login')
    .insert(data) 
    .returning('*')
}


