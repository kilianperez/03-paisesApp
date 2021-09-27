// https://app.quicktype.io/
// export interface Country {
//   name: string;
//   status: number;
//   topLevelDomain: string[];
//   alpha2Code: string;
//   alpha3Code: string;
//   callingCodes: string[];
//   altSpellings: string[];
//   region: string;
//   continent: string;
//   population: number;
//   demonym: string;
//   timezones: string[];
//   nativeName: string;
//   numericCode: string;
//   currencies: Currency[];
//   languages: Language[];
//   translations: Translations;
//   flags: string[];
//   independent: boolean;
//   capital?: string;
//   latlng?: number[];
//   area?: number;
//   gini?: number;
//   borders?: string[];
//   regionalBlocs?: RegionalBloc[];
//   cioc?: string;
// }

// export interface Currency {
//   code: string;
//   name: string;
//   symbol: string;
  
// }

// export interface Language {
//   iso639_1: string;
//   iso639_2: string;
//   name: string;
//   nativeName: string;
// }

// export interface RegionalBloc {
//   acronym: string;
//   name: string;
//   otherNames: string[];
// }

// export interface Translations {
//   br: string;
//   pt: string;
//   nl: string;
//   hr: string;
//   fa: string;
//   de: string;
//   es: string;
//   fr: string;
//   ja: string;
//   it: string;
//   hu: string;
// }
// export interface Error {
//   status: number;
//   message: string;
// }
export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  flag: string;
  flags: string[];
  demonyms: Demonyms;
}

export interface Currencies {
  EUR: Eur;
}

export interface Eur {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  spa: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  spa: Translation;
}

export interface Translation {
  official: string;
  common: string;
}
