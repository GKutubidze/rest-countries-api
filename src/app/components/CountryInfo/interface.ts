type Language = {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
};

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

interface Props {
  flagUrl: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string | undefined;
  topLevelDomain: string[];
  currencies: Currency[]|undefined;
  languages: Language[];
  borders?: string[] | undefined;
}
