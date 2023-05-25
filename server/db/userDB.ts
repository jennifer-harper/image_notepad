import dbCon from './connections'
import { UserData } from '../../models/character'

export function getAllUserDB(){
    return dbCon('user-login')
}

export function getUserDB(password:string, username:string){
    return dbCon('user-login')
    .select("*")
    .where ({password: password, username:username})
    .first()
}

export function createUserDB(data:UserData){
    return dbCon('user-login')
    .insert(data) 
    .returning('*')
}
