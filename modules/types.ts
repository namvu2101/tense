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

export type Examples = {
  type: "grammar" | "pronounce";
  tense: string | null;
  symbol: string | null;
  examples: [
    {
      title: string;
      questions: [
        {
          question: string;
          selects: { value: string; label: string }[];
          answer: string;
        }
      ];
    }
  ];
};

export type TOptionsSymbol = {
  value: string;
  underline?: string; //nếu type = find_different thì sẽ có trường này ở đây là các chữ cái cần phân biệt để gạch chân thường là các chữ cái cần phần biệt
  transcription: string;
  meaning: string;
};

export type TQuestionSymbol = {
  id: string;
  symbol: string;
  type: "multiple_choice" | "fill_to_the_blank"; // fill_to_the_blank là dạng Điền từ có chứa âm /æ/ vào chỗ trống: 'She carried a heavy __.'"
  typeQuestions: "find_different" | "find_pronounce"; 
  question: string;
  options: TOptionsSymbol[];
  correct_answer: string;
};
