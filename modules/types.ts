export type TWord = {
  value: string;
  transcription: string;
  audio: string;
  meaning: string;
};

export type TExamples = { title: string; examples: TWord[] };

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
    | "approximant";
  keyword: string;
  audio: string;
  description: string;
  articulation: string;
  examples: TWord[] | TExamples;
  exceptions: TWord[];
  identify: Record<string, TWord[]>;
  video_url?: string;
};

export type TenseStructure = {
  formula: string;
  examples: string[];
  note?: string;
  details?: string;
  rules?: string[];
};

export type TenseForm = {
  tobe?: TenseStructure;
  normal?: TenseStructure;
};

export type TenseForms = {
  affirmative: TenseForm | TenseStructure;
  negative: TenseForm | TenseStructure;
  interrogative: TenseForm | TenseStructure;
};

export type TenseUsage = {
  definition: string;
  examples: string[];
  signalWords: string[];
};

export type TenseData = {
  tense: string; // e.g. "present simple"
  description: string; // e.g. "Thì hiện tại đơn"
  form: TenseForms;
  usage: TenseUsage;
  note?: string[]; // các ghi chú đặc biệt, optional
};
