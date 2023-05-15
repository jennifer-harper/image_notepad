export interface Welcome {
  statement: string
}

// unsplash
export interface UnsplashCharacter {
  urls:Urls;
  id:string;
  alt_description:string;
  links:Links;
  total_pages:string;

}
export interface Urls {
  regular:string;
  small:  string;
}

export interface Links {
  html:  string;
}


//db table
export interface ImgSearchData {
  src:string;
  url:string;
  category:string
}

export interface ImgSearch extends ImgSearchData{
  id:number;
}


//upload images to db
export interface UploadImgData {
  image:string;
  category:string
}

export interface UploadImg extends UploadImgData{
  id:number;
}