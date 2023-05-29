import dbCon from './connections'
import { UserData, Login } from '../../models/character'

export function getAllUserDB(){
    return dbCon('user-login')
}

export function getUserDB(data:Login){
    return dbCon('user-login')
    .select("*")
    .where (data)
    .first()
}

export function createUserDB(data:UserData){
    return dbCon('user-login')
    .insert(data) 
    .returning('*')
}
