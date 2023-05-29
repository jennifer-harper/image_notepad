
//user
export interface UserData{
  email:string;
  password: string;
  username:string;
}

export interface Login{
  email:string;
  password: string;
}


export interface User{
  id:number
}
// unsplash
export interface UnsplashCharacter {
  urls:Urls;
  id:string;
  alt_description:string;
  links:Links;
  total_pages:string;
  notes:string;
}

export interface Urls {
  regular:string;
  small:  string;
}

export interface Links {
  html:  string;
}


//save sourced from unsplash
export interface ImgSearchData {
  src:string;
  url:string;
  category:string;
  description:string;
  notes:string
}

export interface EditSearchData{
  category:string
  notes:string
}

export interface ImgSearch extends ImgSearchData{
  id:number;
}


//upload images to db
export interface UploadImgData {
  image:string | undefined;
  category:string;
  notes:string
}

export interface UploadImg extends UploadImgData{
  id:number;
}



//combined data table
export interface Combined{
  id:number;
  save_search_id:number;
  upload_img_id:number;
  image:string;
  category:string;
  url:string;
  description:string;
  src:string;
  notes:string
}

export interface Login {
  password:string;
  // username:string;
  email:string
}