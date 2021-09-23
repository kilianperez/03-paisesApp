// https://app.quicktype.io/
export interface Country {
  name: string;
  status: number;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  altSpellings: string[];
  region: string;
  continent: string;
  population: number;
  demonym: string;
  timezones: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flags: string[];
  independent: boolean;
  capital?: string;
  latlng?: number[];
  area?: number;
  gini?: number;
  borders?: string[];
  regionalBlocs?: RegionalBloc[];
  cioc?: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherNames: string[];
}

export interface Translations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}
// export interface Error {
//   status: number;
//   message: string;
// }
