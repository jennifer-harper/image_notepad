export interface Welcome {
  statement: string
}

// unsplash
export interface UnsplashCharacter {
  urls:Urls;
  id:string;
  alt_description:string;
  links:LinkStyle;
}
export interface Urls {
  regular:  string;
}
export interface Links {
  download:  string;
}