// import dbCon from './connections'
// import { UserData} from '../../models/character'

// export function getAllUserDB(){
//     return dbCon('user-login')
// }

// export function getUserDB(data:UserData){
//     return dbCon('user-login')
//     .select("*")
//     .where ({ 
//         email: data.email
//       })
//     .first()
// }

// export async function createUserDB(data:UserData){
//     return dbCon('user-login')
//     .insert(data) 
//     .returning('*')
// }

// export async function delUserDB(id:number){
//     return dbCon('user-login')
//     .delete().where('id', id)
// }

