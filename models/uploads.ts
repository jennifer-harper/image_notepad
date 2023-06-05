//upload images to db
export interface UploadImgData {
    image:string | undefined
    category:string
    notes:string
  }
  
  export interface UploadImg extends UploadImgData{
    id:number
  }
  
  export interface UploadUser extends UploadImgData{
    user_id:string
  }