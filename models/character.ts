export interface Welcome {
  statement: string
}

// unsplash
export interface UnsplashCharacter {
  urls:Urls;
  id:string;
  alt_description:string;
  links:Links;
}
export interface Urls {
  regular:string;
  small:  string;
}
export interface Links {
  html:  string;
}