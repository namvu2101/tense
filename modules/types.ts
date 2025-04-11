export type TWord = {
  value: string;
  transcription: string;
  audio: string;
  meaning: string;
};

export type TIPA = {
  symbol: string;
  type:
    | "short vowel"
    | "long vowel"
    | "diphthong"
    | "plosive"
    | "fricative"
    | "affricate"
    | "nasal"
    | "approximant"
  keyword: string;
  audio: string;
  description: string;
  articulation: string;
  examples: TWord[];
  exceptions: TWord[];
  identify: Record<string, TWord[]>;
};
