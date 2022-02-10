export interface IResponse {
  status: string;
  copyright: string;
  response: Response;
}

export interface Response {
  docs: Doc[];
  meta: Meta;
}

export interface Doc {
  abstract: string;
  webUrl: string;
  snippet: string;
  leadParagraph: string;
  source: string;
  multimedia: IMuliMedia[];
  headline: Headline;
  keywords: Keyword[];
  pubDate: string;
  documentType: string;
  newsDesk: string;
  sectionName: string;
  byline: Byline;
  typeOfMaterial?: string;
  _id: string;
  wordCount: number;
  uri: string;
  subsection_name?: string;
  printSection?: string;
  printPage?: string;
  slideshowCredits?: string;
}

export interface Multimedum {
  rank: number;
  subtype: string;
  caption: any;
  credit: any;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: Legacy;
  subType: string;
  cropName: string;
}

export interface Legacy {
  widewidth?: number;
  wideheight?: number;
  wide?: string;
  thumbnail?: string;
  thumbnailwidth?: number;
  thumbnailheight?: number;
}

export interface Headline {
  main: string;
  kicker?: string;
  contentKicker: any;
  printHeadline?: string;
  name: any;
  seo: any;
  sub: any;
}

export interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface Byline {
  original?: string;
  person: Person[];
  organization?: string;
}

export interface Person {
  firstname: string;
  middlename: any;
  lastname: string;
  qualifier: any;
  title: any;
  role: string;
  organization: string;
  rank: number;
}

export interface Meta {
  hits: number;
  offset: number;
  time: number;
}

export interface IMuliMedia {
  caption: any;
  credit: any;
  cropName: string;
  height: number;
  legacy: ILegacy;
  rank: number;
  subType: string;
  subtype: string;
  type: string;
  url: string;
  width: number;
}

export interface ILegacy {
  wide?: string;
  wideheight?: number;
  widewidth?: number;
  thumbnail?: string;
  thumbnailheight?: number;
  thumbnailwidth?: number;
}
