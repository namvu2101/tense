// English Grammar Data Structure

// Define the grammar components data
const grammarData = {
  // 1. ĐỘNG TỪ (VERBS)
  verbs: {
    name: "ĐỘNG TỪ (VERBS)",
    concept:
      "Động từ là từ diễn tả hành động, trạng thái, sự việc hoặc sự tồn tại.",
    position: "Thường đứng sau chủ ngữ trong câu.",
    structure: [
      "Động từ nguyên thể: to + V (to go, to eat)",
      "Động từ thường: V (go, eat)",
      "Động từ thêm -ing: V-ing (going, eating)",
      "Động từ thêm -ed/V2: V-ed/V2 (went, ate)",
      "Động từ thêm -ed/V3: V-ed/V3 (gone, eaten)",
    ],
    usage: [
      "Diễn tả hành động: She writes a letter.",
      "Diễn tả trạng thái: He feels happy.",
      "Diễn tả sự tồn tại: The book is on the table.",
    ],
    signs: [
      "Thường đứng sau chủ ngữ",
      "Có thể thay đổi hình thức theo thì",
      "Có thể kết hợp với trợ động từ",
    ],
    special_cases: [
      "Động từ bất quy tắc: go → went → gone",
      "Động từ khiếm khuyết: can, must, should (không thêm -s ở ngôi thứ 3 số ít)",
      "Động từ đặc biệt: be, do, have (có hình thức riêng)",
    ],
    types: [
      "Động từ thường (Regular verbs): Thêm -ed ở quá khứ (work → worked)",
      "Động từ bất quy tắc (Irregular verbs): Thay đổi hình thức ở quá khứ (go → went)",
      "Ngoại động từ (Transitive verbs): Cần tân ngữ (I bought a book)",
      "Nội động từ (Intransitive verbs): Không cần tân ngữ (He sleeps)",
    ],
  },

  // 2. DANH TỪ (NOUNS)
  nouns: {
    name: "DANH TỪ (NOUNS)",
    concept: "Danh từ là từ chỉ người, vật, địa điểm, khái niệm, ý tưởng.",
    position: [
      "Làm chủ ngữ: Students are studying.",
      "Làm tân ngữ: I like books.",
      "Sau giới từ: I'm sitting on a chair.",
    ],
    structure: [
      "Danh từ số ít: book, child",
      "Danh từ số nhiều: books, children",
      "Danh từ sở hữu: John's book, the children's toys",
    ],
    usage: [
      "Chỉ người: teacher, doctor, student",
      "Chỉ vật: book, car, computer",
      "Chỉ địa điểm: school, park, city",
      "Chỉ khái niệm trừu tượng: love, happiness, freedom",
    ],
    signs: [
      "Thường đi sau mạo từ (a, an, the)",
      "Thường đi sau tính từ",
      "Có thể đi sau từ hạn định (this, that, my, some)",
    ],
    special_cases: [
      "Danh từ số nhiều bất quy tắc: child → children, foot → feet",
      "Danh từ chỉ có hình thức số nhiều: scissors, trousers, glasses",
      "Danh từ không đếm được: water, music, information",
    ],
    types: [
      "Danh từ chung (Common nouns): book, city, dog",
      "Danh từ riêng (Proper nouns): John, London, Monday",
      "Danh từ đếm được (Countable nouns): book, apple, student",
      "Danh từ không đếm được (Uncountable nouns): water, music, information",
      "Danh từ tập hợp (Collective nouns): team, family, class",
    ],
  },

  // 3. TÍNH TỪ (ADJECTIVES)
  adjectives: {
    name: "TÍNH TỪ (ADJECTIVES)",
    concept: "Tính từ là từ bổ nghĩa cho danh từ, mô tả đặc điểm, tính chất.",
    position: [
      "Trước danh từ: a beautiful flower",
      "Sau linking verb: The flower is beautiful.",
      "Sau một số động từ cảm giác: It looks nice.",
    ],
    structure: [
      "Tính từ nguyên thể: beautiful, tall, smart",
      "Tính từ so sánh hơn: taller, more beautiful",
      "Tính từ so sánh nhất: tallest, most beautiful",
    ],
    usage: [
      "Mô tả đặc điểm: a beautiful girl, a tall building",
      "Diễn tả cảm xúc: happy, sad, angry",
      "Diễn tả kích thước, hình dáng: big, small, round",
      "Diễn tả màu sắc: red, blue, green",
    ],
    signs: [
      "Thường đứng trước danh từ",
      "Có thể đứng sau linking verb",
      "Có thể được bổ nghĩa bởi trạng từ (very, quite, extremely)",
    ],
    special_cases: [
      "Tính từ bất quy tắc khi so sánh: good → better → best, bad → worse → worst",
      "Tính từ kết thúc bằng -ed và -ing: interested/interesting, bored/boring",
      "Tính từ không thay đổi hình thức khi đứng trước danh từ số nhiều",
    ],
    types: [
      "Tính từ mô tả (Descriptive): beautiful, tall, intelligent",
      "Tính từ chỉ định (Demonstrative): this, that, these, those",
      "Tính từ số lượng (Quantitative): some, many, few",
      "Tính từ phân từ (Participle): interesting, bored",
    ],
  },

  // 4. CỤM ĐỘNG TỪ (PHRASAL VERBS)
  phrasal_verbs: {
    name: "CỤM ĐỘNG TỪ (PHRASAL VERBS)",
    concept:
      "Cụm động từ là sự kết hợp giữa động từ và giới từ/trạng từ tạo thành một ý nghĩa mới.",
    position: "Thường đứng sau chủ ngữ, có thể tách hoặc không tách.",
    structure: [
      "Động từ + trạng từ: give up, break down",
      "Động từ + giới từ: look after, wait for",
      "Động từ + trạng từ + giới từ: look forward to, put up with",
    ],
    usage: [
      "Diễn tả hành động: turn on the light, pick up the phone",
      "Diễn tả trạng thái: break down, give up",
      "Diễn tả mối quan hệ: get along with, look after",
    ],
    signs: [
      "Có thể tách được hoặc không tách được",
      "Thường có nghĩa khác với động từ gốc",
      "Thường được dùng trong văn nói",
    ],
    special_cases: [
      "Cụm động từ tách được: turn on (turn the light on)",
      "Cụm động từ không tách được: look after (không thể nói look the children after)",
      "Cụm động từ có nhiều nghĩa: pick up (nhặt lên, đón ai đó, học được)",
    ],
    types: [
      "Cụm động từ tách được (Separable): turn on, pick up",
      "Cụm động từ không tách được (Inseparable): look after, run into",
      "Cụm động từ có thể tách hoặc không (Optional): look up, try on",
    ],
  },

  // 5. ĐỘNG TỪ KHUYẾT THIẾU (MODAL VERBS)
  modal_verbs: {
    name: "MODAL VERBS (ĐỘNG TỪ KHUYẾT THIẾU)",
    concept:
      "Động từ khuyết thiếu là động từ đặc biệt diễn tả khả năng, sự cho phép, nghĩa vụ, dự đoán.",
    position: "Đứng trước động từ nguyên thể (không có 'to').",
    structure: ["Modal + V: can go, must eat, should study"],
    usage: [
      "Diễn tả khả năng: can, could, may, might",
      "Diễn tả sự cho phép: can, may, could",
      "Diễn tả nghĩa vụ, bắt buộc: must, have to, should",
      "Diễn tả dự đoán, lời khuyên: will, would, should",
    ],
    signs: [
      "Không thêm -s ở ngôi thứ 3 số ít",
      "Theo sau là động từ nguyên thể không 'to'",
      "Không có dạng nguyên thể, -ing, -ed",
    ],
    special_cases: [
      "Không có dạng quá khứ thông thường (trừ could, would, should, might)",
      "Không kết hợp với nhau (không thể nói 'can must')",
      "Có thể dùng dạng hoàn thành: must have done, should have gone",
    ],
    types: [
      "Can/Could: khả năng, sự cho phép",
      "May/Might: khả năng, sự cho phép",
      "Must/Have to: sự bắt buộc, nghĩa vụ",
      "Should/Ought to: lời khuyên, nghĩa vụ đạo đức",
      "Will/Would: dự đoán, ý định, lời hứa",
    ],
  },

  // 6. MẠO TỪ (ARTICLES)
  articles: {
    name: " MẠO TỪ (ARTICLES)",
    concept: "Mạo từ là từ đứng trước danh từ để xác định danh từ đó.",
    position: "Đứng trước danh từ hoặc tính từ + danh từ.",
    structure: ["Mạo từ xác định: the", "Mạo từ không xác định: a, an"],
    usage: [
      "A: dùng trước danh từ đếm được số ít bắt đầu bằng phụ âm",
      "An: dùng trước danh từ đếm được số ít bắt đầu bằng nguyên âm",
      "The: dùng khi đề cập đến thứ cụ thể, duy nhất",
    ],
    signs: [
      "Đứng đầu cụm danh từ",
      "Không dùng với danh từ số nhiều không xác định",
      "Không dùng với danh từ không đếm được không xác định",
    ],
    special_cases: [
      "Không dùng mạo từ với danh từ riêng (trừ một số trường hợp đặc biệt)",
      "Không dùng mạo từ với các bữa ăn, phương tiện giao thông khi dùng theo nghĩa chung",
      "Dùng 'the' với các danh từ duy nhất: the sun, the moon, the world",
    ],
    types: [
      "A: dùng trước danh từ đếm được số ít bắt đầu bằng phụ âm",
      "An: dùng trước danh từ đếm được số ít bắt đầu bằng nguyên âm",
      "The: dùng khi đề cập đến thứ cụ thể, duy nhất",
    ],
  },

  // 7. TỪ HẠN ĐỊNH (DETERMINERS)
  determiners: {
    name: "TỪ HẠN ĐỊNH (DETERMINERS)",
    concept:
      "Từ hạn định là từ đứng trước danh từ để xác định số lượng, sở hữu hoặc vị trí.",
    position: "Đứng trước danh từ hoặc tính từ + danh từ.",
    structure: ["Determiner + (Adjective) + Noun: my book, these red apples"],
    usage: [
      "Xác định vị trí: this, that, these, those",
      "Xác định sở hữu: my, your, his, her, our, their",
      "Xác định số lượng: some, any, many, much, few, little",
    ],
    signs: [
      "Đứng đầu cụm danh từ",
      "Không thể kết hợp nhiều từ hạn định cùng loại",
      "Có thể kết hợp với tính từ",
    ],
    special_cases: [
      "Một số từ hạn định chỉ dùng với danh từ đếm được: many, few, several",
      "Một số từ hạn định chỉ dùng với danh từ không đếm được: much, little",
      "Một số từ hạn định dùng được với cả hai: some, any, no, all",
    ],
    types: [
      "Mạo từ (Articles): a, an, the",
      "Từ chỉ định (Demonstratives): this, that, these, those",
      "Từ sở hữu (Possessives): my, your, his, her, our, their",
      "Từ số lượng (Quantifiers): some, any, many, much, few, little",
      "Số (Numbers): one, two, first, second",
    ],
  },

  // 8. ĐỘNG TỪ NỐI (LINKING VERBS)
  linking_verbs: {
    name: "ĐỘNG TỪ NỐI (LINKING VERBS)",
    concept:
      "Động từ nối là động từ kết nối chủ ngữ với bổ ngữ, không diễn tả hành động.",
    position: "Đứng giữa chủ ngữ và bổ ngữ.",
    structure: ["Subject + Linking Verb + Complement: She is happy."],
    usage: [
      "Kết nối chủ ngữ với tính từ: She is beautiful.",
      "Kết nối chủ ngữ với danh từ: He became a doctor.",
      "Diễn tả trạng thái, cảm giác: The food tastes good.",
    ],
    signs: [
      "Không diễn tả hành động",
      "Có thể thay thế bằng động từ 'be' trong nhiều trường hợp",
      "Theo sau là tính từ hoặc danh từ, không phải trạng từ",
    ],
    special_cases: [
      "Một số động từ có thể là động từ nối hoặc động từ thường tùy ngữ cảnh",
      "Sau động từ nối dùng tính từ, không dùng trạng từ",
      "Động từ 'be' là động từ nối phổ biến nhất",
    ],
    types: [
      "Be: am, is, are, was, were",
      "Động từ cảm giác (Sensory verbs): look, sound, smell, taste, feel",
      "Động từ trạng thái (State verbs): seem, appear, become, remain, stay",
    ],
  },

  // 9. LIÊN TỪ (CONJUNCTIONS)
  conjunctions: {
    name: "LIÊN TỪ (CONJUNCTIONS)",
    concept: "Liên từ là từ nối các từ, cụm từ hoặc mệnh đề.",
    position: "Đứng giữa các thành phần được nối.",
    structure: ["X + Conjunction + Y: cats and dogs, tired but happy"],
    usage: [
      "Nối các từ: cats and dogs",
      "Nối các cụm từ: in the morning or in the evening",
      "Nối các mệnh đề: I was tired, but I continued working.",
    ],
    signs: [
      "Đứng giữa các thành phần được nối",
      "Không thay đổi hình thức",
      "Có thể đứng đầu câu (đối với liên từ phụ thuộc)",
    ],
    special_cases: [
      "Liên từ tương quan luôn đi theo cặp: both...and, either...or",
      "Dấu phẩy thường được dùng trước liên từ kết hợp khi nối hai mệnh đề độc lập",
      "Một số liên từ phụ thuộc có thể bị lược bỏ trong văn nói",
    ],
    types: [
      "Liên từ kết hợp (Coordinating): and, but, or, so, yet, for, nor",
      "Liên từ tương quan (Correlative): both...and, either...or, neither...nor",
      "Liên từ phụ thuộc (Subordinating): because, if, when, although, while",
    ],
  },

  // 10. ĐẠI TỪ (PRONOUNS)
  pronouns: {
    name: "ĐẠI TỪ (PRONOUNS)",
    concept: "Đại từ là từ thay thế cho danh từ để tránh lặp lại.",
    position: "Có thể đứng ở vị trí chủ ngữ, tân ngữ hoặc sau giới từ.",
    structure: [
      "Chủ ngữ: I, you, he, she, it, we, they",
      "Tân ngữ: me, you, him, her, it, us, them",
      "Sở hữu: my, your, his, her, its, our, their",
      "Sở hữu độc lập: mine, yours, his, hers, its, ours, theirs",
    ],
    usage: [
      "Thay thế cho danh từ: John is here. He is reading.",
      "Chỉ người nói, người nghe: I am a student. You are my friend.",
      "Chỉ sở hữu: This is my book. That pen is yours.",
    ],
    signs: [
      "Thay thế cho danh từ đã được đề cập trước đó",
      "Thay đổi hình thức tùy theo vị trí trong câu",
      "Phải phù hợp với danh từ được thay thế về số và giới",
    ],
    special_cases: [
      "Đại từ phản thân kết thúc bằng -self hoặc -selves",
      "Đại từ bất định có thể là số ít hoặc số nhiều tùy ngữ cảnh",
      "Đại từ quan hệ có thể bị lược bỏ khi là tân ngữ trong mệnh đề quan hệ",
    ],
    types: [
      "Đại từ nhân xưng (Personal): I, you, he, she, it, we, they",
      "Đại từ sở hữu (Possessive): my, your, his, her, its, our, their",
      "Đại từ phản thân (Reflexive): myself, yourself, himself, herself",
      "Đại từ chỉ định (Demonstrative): this, that, these, those",
      "Đại từ nghi vấn (Interrogative): who, what, which, whose",
      "Đại từ quan hệ (Relative): who, whom, which, that, whose",
    ],
  },

  // 11. GIỚI TỪ (PREPOSITIONS)
  prepositions: {
    name: "GIỚI TỪ (PREPOSITIONS)",
    concept:
      "Giới từ là từ chỉ mối quan hệ giữa danh từ/đại từ với các từ khác trong câu.",
    position: "Đứng trước danh từ/đại từ tạo thành cụm giới từ.",
    structure: ["Preposition + Noun/Pronoun: in the room, with her"],
    usage: [
      "Chỉ thời gian: at 8 o'clock, in May, on Monday",
      "Chỉ nơi chốn: at home, in the garden, on the table",
      "Chỉ phương hướng: to school, from work, through the door",
      "Chỉ phương tiện: by bus, with a knife",
    ],
    signs: [
      "Đứng trước danh từ hoặc đại từ",
      "Không thay đổi hình thức",
      "Có thể kết hợp với động từ tạo thành cụm động từ",
    ],
    special_cases: [
      "Một số giới từ có thể kết hợp với nhau: from behind, out of",
      "Một số giới từ có thể là trạng từ trong ngữ cảnh khác",
      "Giới từ khác nhau có thể được dùng trong các ngữ cảnh tương tự nhưng có ý nghĩa khác nhau",
    ],
    types: [
      "Giới từ chỉ thời gian: at, on, in, during, before, after",
      "Giới từ chỉ nơi chốn: at, on, in, under, above, between",
      "Giới từ chỉ phương hướng: to, toward, from, into, out of",
      "Giới từ chỉ phương tiện: by, with, without",
      "Giới từ chỉ nguyên nhân: because of, due to, owing to",
    ],
  },
};

// Define exercises for each grammar component
const exercises = {
  // 1. ĐỘNG TỪ (VERBS) - Thêm 10 phần tử
  verbs: [
    {
      id: "verb_ex1",
      symbol: "V",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ có cách chia khác với các động từ còn lại ở thì quá khứ đơn:",
      options: [
        {
          id: "v1",
          value: "play",
          meaning: "chơi",
        },
        {
          id: "v2",
          value: "stay",
          meaning: "ở lại",
        },
        {
          id: "v3",
          value: "go",
          meaning: "đi",
        },
        {
          id: "v4",
          value: "say",
          meaning: "nói",
        },
      ],
      correct_answer: "v3",
      explain:
        "Động từ 'go' có dạng quá khứ bất quy tắc là 'went', trong khi các động từ còn lại đều là động từ quy tắc, thêm -ed hoặc -d ở thì quá khứ đơn: played, stayed, said.",
    },
    {
      id: "verb_ex3",
      symbol: "V",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ có cách chia khác với các động từ còn lại ở thì hiện tại đơn với ngôi thứ ba số ít:",
      options: [
        {
          id: "v1",
          value: "run",
          meaning: "chạy",
        },
        {
          id: "v2",
          value: "walk",
          meaning: "đi bộ",
        },
        {
          id: "v3",
          value: "have",
          meaning: "có",
        },
        {
          id: "v4",
          value: "jump",
          meaning: "nhảy",
        },
      ],
      correct_answer: "v3",
      explain:
        "Động từ 'have' có dạng ngôi thứ ba số ít là 'has', trong khi các động từ còn lại đều thêm -s: runs, walks, jumps.",
    },
    {
      id: "verb_ex4",
      symbol: "V",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ có cách chia khác với các động từ còn lại ở thì quá khứ hoàn thành:",
      options: [
        {
          id: "v1",
          value: "eat",
          meaning: "ăn",
        },
        {
          id: "v2",
          value: "drink",
          meaning: "uống",
        },
        {
          id: "v3",
          value: "work",
          meaning: "làm việc",
        },
        {
          id: "v4",
          value: "sleep",
          meaning: "ngủ",
        },
      ],
      correct_answer: "v3",
      explain:
        "Động từ 'work' là động từ quy tắc với dạng quá khứ phân từ là 'worked', trong khi các động từ còn lại đều là bất quy tắc: eaten, drunk, slept.",
    },
    {
      id: "verb_ex5",
      symbol: "V",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ thích hợp vào chỗ trống: 'She _____ to the store yesterday.'",
      options: [
        {
          id: "v1",
          value: "go",
          transcription: "/ɡoʊ/",
          meaning: "đi",
        },
        {
          id: "v2",
          value: "goes",
          transcription: "/ɡoʊz/",
          meaning: "đi (ngôi thứ 3 số ít)",
        },
        {
          id: "v3",
          value: "went",
          transcription: "/wɛnt/",
          meaning: "đã đi",
        },
        {
          id: "v4",
          value: "gone",
          transcription: "/ɡɔːn/",
          meaning: "đã đi (quá khứ phân từ)",
        },
      ],
      correct_answer: "v3",
      explain:
        "Câu này ở thì quá khứ đơn (có 'yesterday'), nên cần dùng dạng quá khứ của động từ 'go', đó là 'went'.",
    },
    {
      id: "verb_ex6",
      symbol: "V",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ có cách chia khác với các động từ còn lại ở thì hiện tại hoàn thành:",
      options: [
        {
          id: "v1",
          value: "see",
          meaning: "nhìn thấy",
        },
        {
          id: "v2",
          value: "hear",
          meaning: "nghe",
        },
        {
          id: "v3",
          value: "talk",
          meaning: "nói chuyện",
        },
        {
          id: "v4",
          value: "know",
          meaning: "biết",
        },
      ],
      correct_answer: "v3",
      explain:
        "Động từ 'talk' là động từ quy tắc với dạng quá khứ phân từ là 'talked', trong khi các động từ còn lại đều là bất quy tắc: seen, heard, known.",
    },
    {
      id: "verb_ex7",
      symbol: "V",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ thích hợp vào chỗ trống: 'They _____ dinner when I arrived.'",
      options: [
        {
          id: "v1",
          value: "eat",
          transcription: "/iːt/",
          meaning: "ăn",
        },
        {
          id: "v2",
          value: "ate",
          transcription: "/eɪt/",
          meaning: "đã ăn",
        },
        {
          id: "v3",
          value: "were eating",
          transcription: "/wɜːr ˈiːtɪŋ/",
          meaning: "đang ăn",
        },
        {
          id: "v4",
          value: "had eaten",
          transcription: "/hæd ˈiːtn/",
          meaning: "đã ăn xong",
        },
      ],
      correct_answer: "v3",
      explain:
        "Câu này mô tả hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ (khi tôi đến), nên cần dùng thì quá khứ tiếp diễn 'were eating'.",
    },
    {
      id: "verb_ex8",
      symbol: "V",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ có cách chia khác với các động từ còn lại ở dạng bị động:",
      options: [
        {
          id: "v1",
          value: "build",
          meaning: "xây dựng",
        },
        {
          id: "v2",
          value: "create",
          meaning: "tạo ra",
        },
        {
          id: "v3",
          value: "make",
          meaning: "làm",
        },
        {
          id: "v4",
          value: "design",
          meaning: "thiết kế",
        },
      ],
      correct_answer: "v3",
      explain:
        "Động từ 'make' có dạng bị động đặc biệt là 'be made', trong khi các động từ còn lại đều có dạng bị động quy tắc: be built, be created, be designed.",
    },
    {
      id: "verb_ex9",
      symbol: "V",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ thích hợp vào chỗ trống: 'If I _____ rich, I would travel the world.'",
      options: [
        {
          id: "v1",
          value: "am",
          transcription: "/æm/",
          meaning: "là",
        },
        {
          id: "v2",
          value: "was",
          transcription: "/wʌz/",
          meaning: "đã là",
        },
        {
          id: "v3",
          value: "were",
          transcription: "/wɜːr/",
          meaning: "là (giả định)",
        },
        {
          id: "v4",
          value: "be",
          transcription: "/biː/",
          meaning: "là (nguyên mẫu)",
        },
      ],
      correct_answer: "v3",
      explain:
        "Câu này là câu điều kiện loại 2 (không có thật ở hiện tại), nên cần dùng 'were' cho tất cả các ngôi trong mệnh đề if.",
    },
    {
      id: "verb_ex10",
      symbol: "V",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ có cách chia khác với các động từ còn lại ở dạng V-ing:",
      options: [
        {
          id: "v1",
          value: "run",
          meaning: "chạy",
        },
        {
          id: "v2",
          value: "swim",
          meaning: "bơi",
        },
        {
          id: "v3",
          value: "lie",
          meaning: "nằm",
        },
        {
          id: "v4",
          value: "sit",
          meaning: "ngồi",
        },
      ],
      correct_answer: "v3",
      explain:
        "Động từ 'lie' có dạng V-ing là 'lying' (bỏ 'e' và thêm 'y' trước -ing), trong khi các động từ còn lại đều thêm -ing trực tiếp: running, swimming, sitting.",
    },
    {
      id: "verb_ex11",
      symbol: "V",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ thích hợp vào chỗ trống: 'By next year, I _____ in this company for 10 years.'",
      options: [
        {
          id: "v1",
          value: "will work",
          transcription: "/wɪl wɜːrk/",
          meaning: "sẽ làm việc",
        },
        {
          id: "v2",
          value: "will be working",
          transcription: "/wɪl bi ˈwɜːrkɪŋ/",
          meaning: "sẽ đang làm việc",
        },
        {
          id: "v3",
          value: "will have worked",
          transcription: "/wɪl həv wɜːrkt/",
          meaning: "sẽ đã làm việc",
        },
        {
          id: "v4",
          value: "work",
          transcription: "/wɜːrk/",
          meaning: "làm việc",
        },
      ],
      correct_answer: "v3",
      explain:
        "Câu này mô tả một hành động sẽ hoàn thành tại một thời điểm trong tương lai (vào năm tới), nên cần dùng thì tương lai hoàn thành 'will have worked'.",
    },
    {
      id: "verb_ex12",
      symbol: "V",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ có cách chia khác với các động từ còn lại ở thì quá khứ đơn:",
      options: [
        {
          id: "v1",
          value: "bring",
          meaning: "mang đến",
        },
        {
          id: "v2",
          value: "think",
          meaning: "nghĩ",
        },
        {
          id: "v3",
          value: "fight",
          meaning: "chiến đấu",
        },
        {
          id: "v4",
          value: "seek",
          meaning: "tìm kiếm",
        },
      ],
      correct_answer: "v4",
      explain:
        "Động từ 'seek' có dạng quá khứ là 'sought', trong khi các động từ còn lại đều có dạng quá khứ kết thúc bằng -ought: brought, thought, fought.",
    },
  ],

  // 2. DANH TỪ (NOUNS) - Thêm 10 phần tử
  nouns: [
    {
      id: "noun_ex1",
      symbol: "N",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn danh từ có cách chuyển sang số nhiều khác với các danh từ còn lại:",
      options: [
        {
          id: "n1",
          value: "book",
          meaning: "sách",
        },
        {
          id: "n2",
          value: "pen",
          meaning: "bút",
        },
        {
          id: "n3",
          value: "child",
          meaning: "đứa trẻ",
        },
        {
          id: "n4",
          value: "desk",
          meaning: "bàn học",
        },
      ],
      correct_answer: "n3",
      explain:
        "Danh từ 'child' có dạng số nhiều bất quy tắc là 'children', trong khi các danh từ còn lại đều thêm -s để tạo thành số nhiều: books, pens, desks.",
    },
    {
      id: "noun_ex3",
      symbol: "N",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn danh từ có cách chuyển sang số nhiều khác với các danh từ còn lại:",
      options: [
        {
          id: "n1",
          value: "man",
          meaning: "người đàn ông",
        },
        {
          id: "n2",
          value: "woman",
          meaning: "người phụ nữ",
        },
        {
          id: "n3",
          value: "teacher",
          meaning: "giáo viên",
        },
        {
          id: "n4",
          value: "person",
          meaning: "người",
        },
      ],
      correct_answer: "n3",
      explain:
        "Danh từ 'teacher' có dạng số nhiều quy tắc là 'teachers', trong khi các danh từ còn lại đều có dạng số nhiều bất quy tắc: men, women, people.",
    },
    {
      id: "noun_ex4",
      symbol: "N",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn danh từ có cách chuyển sang số nhiều khác với các danh từ còn lại:",
      options: [
        {
          id: "n1",
          value: "tooth",
          meaning: "răng",
        },
        {
          id: "n2",
          value: "foot",
          meaning: "bàn chân",
        },
        {
          id: "n3",
          value: "hand",
          meaning: "bàn tay",
        },
        {
          id: "n4",
          value: "goose",
          meaning: "con ngỗng",
        },
      ],
      correct_answer: "n3",
      explain:
        "Danh từ 'hand' có dạng số nhiều quy tắc là 'hands', trong khi các danh từ còn lại đều có dạng số nhiều bất quy tắc: teeth, feet, geese.",
    },
    {
      id: "noun_ex5",
      symbol: "N",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền danh từ thích hợp vào chỗ trống: 'There are many _____ in the library.'",
      options: [
        {
          id: "n1",
          value: "shelf",
          transcription: "/ʃɛlf/",
          meaning: "kệ",
        },
        {
          id: "n2",
          value: "shelfs",
          transcription: "/ʃɛlfs/",
          meaning: "kệ (sai)",
        },
        {
          id: "n3",
          value: "shelves",
          transcription: "/ʃɛlvz/",
          meaning: "kệ (số nhiều)",
        },
        {
          id: "n4",
          value: "shelvies",
          transcription: "/ˈʃɛlviz/",
          meaning: "kệ (sai)",
        },
      ],
      correct_answer: "n3",
      explain:
        "Danh từ 'shelf' có dạng số nhiều là 'shelves', thay 'f' bằng 'v' và thêm 's'. Đây là quy tắc chung cho nhiều danh từ kết thúc bằng -f hoặc -fe.",
    },
    {
      id: "noun_ex6",
      symbol: "N",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn danh từ có cách chuyển sang số nhiều khác với các danh từ còn lại:",
      options: [
        {
          id: "n1",
          value: "mouse",
          meaning: "chuột",
        },
        {
          id: "n2",
          value: "house",
          meaning: "nhà",
        },
        {
          id: "n3",
          value: "louse",
          meaning: "chấy",
        },
        {
          id: "n4",
          value: "spouse",
          meaning: "vợ/chồng",
        },
      ],
      correct_answer: "n2",
      explain:
        "Danh từ 'house' có dạng số nhiều quy tắc là 'houses', trong khi các danh từ còn lại đều có dạng số nhiều bất quy tắc thay -ouse bằng -ice: mice, lice, spice.",
    },
    {
      id: "noun_ex7",
      symbol: "N",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền danh từ thích hợp vào chỗ trống: 'The _____ of the company announced a new policy.'",
      options: [
        {
          id: "n1",
          value: "chief",
          transcription: "/tʃiːf/",
          meaning: "người đứng đầu",
        },
        {
          id: "n2",
          value: "staff",
          transcription: "/stæf/",
          meaning: "nhân viên",
        },
        {
          id: "n3",
          value: "CEO",
          transcription: "/ˌsiː iː ˈoʊ/",
          meaning: "giám đốc điều hành",
        },
        {
          id: "n4",
          value: "team",
          transcription: "/tiːm/",
          meaning: "đội",
        },
      ],
      correct_answer: "n3",
      explain:
        "Danh từ 'CEO' (Chief Executive Officer) phù hợp nhất trong ngữ cảnh này, vì nó chỉ người có quyền cao nhất trong công ty, người thường đưa ra các chính sách mới.",
    },
    {
      id: "noun_ex8",
      symbol: "N",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn danh từ có cách chuyển sang số nhiều khác với các danh từ còn lại:",
      options: [
        {
          id: "n1",
          value: "cactus",
          meaning: "xương rồng",
        },
        {
          id: "n2",
          value: "focus",
          meaning: "trọng tâm",
        },
        {
          id: "n3",
          value: "radius",
          meaning: "bán kính",
        },
        {
          id: "n4",
          value: "virus",
          meaning: "vi-rút",
        },
      ],
      correct_answer: "n4",
      explain:
        "Danh từ 'virus' có dạng số nhiều là 'viruses', trong khi các danh từ còn lại đều có thể dùng dạng số nhiều Latin là -i: cacti, foci, radii.",
    },
    {
      id: "noun_ex9",
      symbol: "N",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền danh từ thích hợp vào chỗ trống: 'The _____ of the mountain is covered with snow.'",
      options: [
        {
          id: "n1",
          value: "peak",
          transcription: "/piːk/",
          meaning: "đỉnh",
        },
        {
          id: "n2",
          value: "top",
          transcription: "/tɒp/",
          meaning: "đỉnh",
        },
        {
          id: "n3",
          value: "summit",
          transcription: "/ˈsʌmɪt/",
          meaning: "đỉnh",
        },
        {
          id: "n4",
          value: "height",
          transcription: "/haɪt/",
          meaning: "chiều cao",
        },
      ],
      correct_answer: "n3",
      explain:
        "Danh từ 'summit' phù hợp nhất trong ngữ cảnh này, vì nó chỉ điểm cao nhất của núi. 'Peak' và 'top' cũng có thể dùng, nhưng 'summit' là từ chuyên biệt hơn khi nói về đỉnh núi.",
    },
    {
      id: "noun_ex10",
      symbol: "N",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn danh từ có cách chuyển sang số nhiều khác với các danh từ còn lại:",
      options: [
        {
          id: "n1",
          value: "sheep",
          meaning: "con cừu",
        },
        {
          id: "n2",
          value: "deer",
          meaning: "con hươu",
        },
        {
          id: "n3",
          value: "fish",
          meaning: "con cá",
        },
        {
          id: "n4",
          value: "bird",
          meaning: "con chim",
        },
      ],
      correct_answer: "n4",
      explain:
        "Danh từ 'bird' có dạng số nhiều quy tắc là 'birds', trong khi các danh từ còn lại đều có dạng số nhiều giống với số ít: sheep, deer, fish.",
    },
    {
      id: "noun_ex11",
      symbol: "N",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền danh từ thích hợp vào chỗ trống: 'The _____ of the ocean is still largely unexplored.'",
      options: [
        {
          id: "n1",
          value: "depth",
          transcription: "/dɛpθ/",
          meaning: "độ sâu",
        },
        {
          id: "n2",
          value: "bottom",
          transcription: "/ˈbɒtəm/",
          meaning: "đáy",
        },
        {
          id: "n3",
          value: "floor",
          transcription: "/flɔːr/",
          meaning: "đáy",
        },
        {
          id: "n4",
          value: "ground",
          transcription: "/ɡraʊnd/",
          meaning: "mặt đất",
        },
      ],
      correct_answer: "n1",
      explain:
        "Danh từ 'depth' phù hợp nhất trong ngữ cảnh này, vì nó chỉ vùng sâu của đại dương, nơi con người chưa khám phá nhiều.",
    },
    {
      id: "noun_ex12",
      symbol: "N",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn danh từ có cách chuyển sang số nhiều khác với các danh từ còn lại:",
      options: [
        {
          id: "n1",
          value: "criterion",
          meaning: "tiêu chí",
        },
        {
          id: "n2",
          value: "phenomenon",
          meaning: "hiện tượng",
        },
        {
          id: "n3",
          value: "medium",
          meaning: "phương tiện",
        },
        {
          id: "n4",
          value: "curriculum",
          meaning: "chương trình học",
        },
      ],
      correct_answer: "n4",
      explain:
        "Danh từ 'curriculum' có dạng số nhiều là 'curriculums' hoặc 'curricula', trong khi các danh từ còn lại đều có dạng số nhiều Hy Lạp kết thúc bằng -a: criteria, phenomena, media.",
    },
  ],

  // 3. TÍNH TỪ (ADJECTIVES) - Thêm 10 phần tử
  adjectives: [
    {
      id: "adj_ex1",
      symbol: "ADJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn tính từ có cách tạo dạng so sánh hơn khác với các tính từ còn lại:",
      options: [
        {
          id: "a1",
          value: "tall",
          meaning: "cao",
        },
        {
          id: "a2",
          value: "short",
          meaning: "ngắn",
        },
        {
          id: "a3",
          value: "beautiful",
          meaning: "đẹp",
        },
        {
          id: "a4",
          value: "fast",
          meaning: "nhanh",
        },
      ],
      correct_answer: "a3",
      explain:
        "Tính từ 'beautiful' có nhiều hơn 2 âm tiết nên tạo dạng so sánh hơn bằng cách thêm 'more' phía trước: 'more beautiful'. Các tính từ còn lại đều có 1 âm tiết nên thêm '-er': taller, shorter, faster.",
    },
    {
      id: "adj_ex3",
      symbol: "ADJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn tính từ có cách tạo dạng so sánh nhất khác với các tính từ còn lại:",
      options: [
        {
          id: "a1",
          value: "good",
          meaning: "tốt",
        },
        {
          id: "a2",
          value: "bad",
          meaning: "tồi",
        },
        {
          id: "a3",
          value: "far",
          meaning: "xa",
        },
        {
          id: "a4",
          value: "small",
          meaning: "nhỏ",
        },
      ],
      correct_answer: "a4",
      explain:
        "Tính từ 'small' có dạng so sánh nhất quy tắc là 'smallest', trong khi các tính từ còn lại đều có dạng so sánh nhất bất quy tắc: best, worst, farthest/furthest.",
    },
    {
      id: "adj_ex4",
      symbol: "ADJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn tính từ có cách tạo dạng so sánh hơn khác với các tính từ còn lại:",
      options: [
        {
          id: "a1",
          value: "happy",
          meaning: "hạnh phúc",
        },
        {
          id: "a2",
          value: "busy",
          meaning: "bận rộn",
        },
        {
          id: "a3",
          value: "easy",
          meaning: "dễ dàng",
        },
        {
          id: "a4",
          value: "modern",
          meaning: "hiện đại",
        },
      ],
      correct_answer: "a4",
      explain:
        "Tính từ 'modern' có dạng so sánh hơn là 'more modern', trong khi các tính từ còn lại đều có dạng so sánh hơn bằng cách bỏ 'y' và thêm 'ier': happier, busier, easier.",
    },
    {
      id: "adj_ex5",
      symbol: "ADJ",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền tính từ thích hợp vào chỗ trống: 'This is the _____ book I have ever read.'",
      options: [
        {
          id: "a1",
          value: "more interesting",
          transcription: "/mɔːr ˈɪntrəstɪŋ/",
          meaning: "thú vị hơn",
        },
        {
          id: "a2",
          value: "most interesting",
          transcription: "/moʊst ˈɪntrəstɪŋ/",
          meaning: "thú vị nhất",
        },
        {
          id: "a3",
          value: "interestinger",
          transcription: "/ˈɪntrəstɪŋər/",
          meaning: "thú vị hơn (sai)",
        },
        {
          id: "a4",
          value: "interestingest",
          transcription: "/ˈɪntrəstɪŋəst/",
          meaning: "thú vị nhất (sai)",
        },
      ],
      correct_answer: "a2",
      explain:
        "Tính từ 'interesting' có nhiều hơn 2 âm tiết nên tạo dạng so sánh nhất bằng cách thêm 'most' phía trước: 'most interesting'.",
    },
    {
      id: "adj_ex6",
      symbol: "ADJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn tính từ có cách tạo dạng so sánh hơn khác với các tính từ còn lại:",
      options: [
        {
          id: "a1",
          value: "clever",
          meaning: "thông minh",
        },
        {
          id: "a2",
          value: "simple",
          meaning: "đơn giản",
        },
        {
          id: "a3",
          value: "narrow",
          meaning: "hẹp",
        },
        {
          id: "a4",
          value: "intelligent",
          meaning: "thông minh",
        },
      ],
      correct_answer: "a4",
      explain:
        "Tính từ 'intelligent' có nhiều hơn 2 âm tiết nên tạo dạng so sánh hơn bằng cách thêm 'more' phía trước: 'more intelligent'. Các tính từ còn lại đều có 2 âm tiết nên thêm '-er': cleverer, simpler, narrower.",
    },
    {
      id: "adj_ex7",
      symbol: "ADJ",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền tính từ thích hợp vào chỗ trống: 'The weather today is _____ than yesterday.'",
      options: [
        {
          id: "a1",
          value: "good",
          transcription: "/ɡʊd/",
          meaning: "tốt",
        },
        {
          id: "a2",
          value: "better",
          transcription: "/ˈbɛtər/",
          meaning: "tốt hơn",
        },
        {
          id: "a3",
          value: "best",
          transcription: "/bɛst/",
          meaning: "tốt nhất",
        },
        {
          id: "a4",
          value: "gooder",
          transcription: "/ˈɡʊdər/",
          meaning: "tốt hơn (sai)",
        },
      ],
      correct_answer: "a2",
      explain:
        "Tính từ 'good' có dạng so sánh hơn bất quy tắc là 'better', không phải 'gooder'.",
    },
    {
      id: "adj_ex8",
      symbol: "ADJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn tính từ có cách tạo dạng so sánh nhất khác với các tính từ còn lại:",
      options: [
        {
          id: "a1",
          value: "hot",
          meaning: "nóng",
        },
        {
          id: "a2",
          value: "big",
          meaning: "to lớn",
        },
        {
          id: "a3",
          value: "fat",
          meaning: "béo",
        },
        {
          id: "a4",
          value: "famous",
          meaning: "nổi tiếng",
        },
      ],
      correct_answer: "a4",
      explain:
        "Tính từ 'famous' có dạng so sánh nhất là 'most famous', trong khi các tính từ còn lại đều có dạng so sánh nhất bằng cách thêm '-est': hottest, biggest, fattest.",
    },
    {
      id: "adj_ex9",
      symbol: "ADJ",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền tính từ thích hợp vào chỗ trống: 'This painting is _____ than that one.'",
      options: [
        {
          id: "a1",
          value: "more beautiful",
          transcription: "/mɔːr ˈbjuːtəfəl/",
          meaning: "đẹp hơn",
        },
        {
          id: "a2",
          value: "beautifuler",
          transcription: "/ˈbjuːtəfələr/",
          meaning: "đẹp hơn (sai)",
        },
        {
          id: "a3",
          value: "most beautiful",
          transcription: "/moʊst ˈbjuːtəfəl/",
          meaning: "đẹp nhất",
        },
        {
          id: "a4",
          value: "beautifulest",
          transcription: "/ˈbjuːtəfələst/",
          meaning: "đẹp nhất (sai)",
        },
      ],
      correct_answer: "a1",
      explain:
        "Tính từ 'beautiful' có nhiều hơn 2 âm tiết nên tạo dạng so sánh hơn bằng cách thêm 'more' phía trước: 'more beautiful'.",
    },
    {
      id: "adj_ex10",
      symbol: "ADJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn tính từ có cách tạo dạng so sánh hơn khác với các tính từ còn lại:",
      options: [
        {
          id: "a1",
          value: "little",
          meaning: "nhỏ, ít",
        },
        {
          id: "a2",
          value: "much",
          meaning: "nhiều",
        },
        {
          id: "a3",
          value: "old",
          meaning: "già, cũ",
        },
        {
          id: "a4",
          value: "young",
          meaning: "trẻ",
        },
      ],
      correct_answer: "a3",
      explain:
        "Tính từ 'old' có hai dạng so sánh hơn: 'older' (quy tắc) và 'elder' (bất quy tắc, chỉ dùng cho người trong gia đình), trong khi các tính từ còn lại đều có dạng so sánh hơn bất quy tắc: less, more, younger.",
    },
    {
      id: "adj_ex11",
      symbol: "ADJ",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền tính từ thích hợp vào chỗ trống: 'This problem is _____ than I thought.'",
      options: [
        {
          id: "a1",
          value: "complex",
          transcription: "/kəmˈplɛks/",
          meaning: "phức tạp",
        },
        {
          id: "a2",
          value: "complexer",
          transcription: "/kəmˈplɛksər/",
          meaning: "phức tạp hơn (sai)",
        },
        {
          id: "a3",
          value: "more complex",
          transcription: "/mɔːr kəmˈplɛks/",
          meaning: "phức tạp hơn",
        },
        {
          id: "a4",
          value: "most complex",
          transcription: "/moʊst kəmˈplɛks/",
          meaning: "phức tạp nhất",
        },
      ],
      correct_answer: "a3",
      explain:
        "Tính từ 'complex' có 2 âm tiết và kết thúc bằng phụ âm phức tạp nên tạo dạng so sánh hơn bằng cách thêm 'more' phía trước: 'more complex'.",
    },
    {
      id: "adj_ex12",
      symbol: "ADJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn tính từ có cách tạo dạng so sánh nhất khác với các tính từ còn lại:",
      options: [
        {
          id: "a1",
          value: "important",
          meaning: "quan trọng",
        },
        {
          id: "a2",
          value: "difficult",
          meaning: "khó khăn",
        },
        {
          id: "a3",
          value: "expensive",
          meaning: "đắt đỏ",
        },
        {
          id: "a4",
          value: "pretty",
          meaning: "xinh đẹp",
        },
      ],
      correct_answer: "a4",
      explain:
        "Tính từ 'pretty' có dạng so sánh nhất là 'prettiest' (bỏ 'y' và thêm 'iest'), trong khi các tính từ còn lại đều có dạng so sánh nhất bằng cách thêm 'most' phía trước: most important, most difficult, most expensive.",
    },
  ],

  // 4. CỤM ĐỘNG TỪ (PHRASAL VERBS) - Thêm 10 phần tử
  phrasal_verbs: [
    {
      id: "pv_ex1",
      symbol: "PV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn cụm động từ có thể tách được khác với các cụm động từ còn lại:",
      options: [
        {
          id: "pv1",
          value: "look after",
          meaning: "chăm sóc",
        },
        {
          id: "pv2",
          value: "turn on",
          meaning: "bật",
        },
        {
          id: "pv3",
          value: "give up",
          meaning: "từ bỏ",
        },
        {
          id: "pv4",
          value: "run into",
          meaning: "tình cờ gặp",
        },
      ],
      correct_answer: "pv1",
      explain:
        "Cụm động từ 'look after' là cụm động từ không tách được (inseparable). Các cụm động từ còn lại đều có thể tách được: turn on (turn it on), give up (give it up), run into (run it into).",
    },
    {
      id: "pv_ex3",
      symbol: "PV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn cụm động từ có nghĩa khác với các cụm động từ còn lại:",
      options: [
        {
          id: "pv1",
          value: "put off",
          meaning: "trì hoãn",
        },
        {
          id: "pv2",
          value: "postpone",
          meaning: "hoãn lại",
        },
        {
          id: "pv3",
          value: "delay",
          meaning: "trì hoãn",
        },
        {
          id: "pv4",
          value: "put out",
          meaning: "dập tắt",
        },
      ],
      correct_answer: "pv4",
      explain:
        "Cụm động từ 'put out' có nghĩa là 'dập tắt' (ví dụ: dập tắt lửa), trong khi các cụm động từ còn lại đều có nghĩa liên quan đến 'trì hoãn, hoãn lại'.",
    },
    {
      id: "pv_ex4",
      symbol: "PV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn cụm động từ có thể tách được khác với các cụm động từ còn lại:",
      options: [
        {
          id: "pv1",
          value: "look up",
          meaning: "tra cứu",
        },
        {
          id: "pv2",
          value: "look for",
          meaning: "tìm kiếm",
        },
        {
          id: "pv3",
          value: "look into",
          meaning: "điều tra",
        },
        {
          id: "pv4",
          value: "look over",
          meaning: "xem xét",
        },
      ],
      correct_answer: "pv1",
      explain:
        "Cụm động từ 'look up' có thể tách được (look it up), trong khi các cụm động từ còn lại đều không tách được: look for, look into, look over.",
    },
    {
      id: "pv_ex5",
      symbol: "PV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền cụm động từ thích hợp vào chỗ trống: 'I need to _____ this information before the meeting.'",
      options: [
        {
          id: "pv1",
          value: "look up",
          transcription: "/lʊk ʌp/",
          meaning: "tra cứu",
        },
        {
          id: "pv2",
          value: "look after",
          transcription: "/lʊk ˈæftər/",
          meaning: "chăm sóc",
        },
        {
          id: "pv3",
          value: "look into",
          transcription: "/lʊk ˈɪntuː/",
          meaning: "điều tra",
        },
        {
          id: "pv4",
          value: "look over",
          transcription: "/lʊk ˈoʊvər/",
          meaning: "xem xét",
        },
      ],
      correct_answer: "pv1",
      explain:
        "Cụm động từ 'look up' phù hợp nhất trong ngữ cảnh này, vì nó có nghĩa là 'tra cứu thông tin' từ một nguồn nào đó như từ điển, internet, v.v.",
    },
    {
      id: "pv_ex6",
      symbol: "PV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn cụm động từ có nghĩa khác với các cụm động từ còn lại:",
      options: [
        {
          id: "pv1",
          value: "take off",
          meaning: "cất cánh",
        },
        {
          id: "pv2",
          value: "set off",
          meaning: "khởi hành",
        },
        {
          id: "pv3",
          value: "take out",
          meaning: "lấy ra",
        },
        {
          id: "pv4",
          value: "get going",
          meaning: "bắt đầu đi",
        },
      ],
      correct_answer: "pv3",
      explain:
        "Cụm động từ 'take out' có nghĩa là 'lấy ra, đưa ra ngoài', trong khi các cụm động từ còn lại đều có nghĩa liên quan đến 'bắt đầu một hành trình'.",
    },
    {
      id: "pv_ex7",
      symbol: "PV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền cụm động từ thích hợp vào chỗ trống: 'Can you _____ your shoes before entering the house?'",
      options: [
        {
          id: "pv1",
          value: "take off",
          transcription: "/teɪk ɔːf/",
          meaning: "cởi ra",
        },
        {
          id: "pv2",
          value: "put on",
          transcription: "/pʊt ɒn/",
          meaning: "mặc vào",
        },
        {
          id: "pv3",
          value: "take away",
          transcription: "/teɪk əˈweɪ/",
          meaning: "lấy đi",
        },
        {
          id: "pv4",
          value: "put away",
          transcription: "/pʊt əˈweɪ/",
          meaning: "cất đi",
        },
      ],
      correct_answer: "pv1",
      explain:
        "Cụm động từ 'take off' phù hợp nhất trong ngữ cảnh này, vì nó có nghĩa là 'cởi ra, tháo ra' (giày dép) trước khi vào nhà.",
    },
    {
      id: "pv_ex8",
      symbol: "PV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn cụm động từ có thể tách được khác với các cụm động từ còn lại:",
      options: [
        {
          id: "pv1",
          value: "run out of",
          meaning: "hết",
        },
        {
          id: "pv2",
          value: "look forward to",
          meaning: "mong đợi",
        },
        {
          id: "pv3",
          value: "get along with",
          meaning: "hòa thuận với",
        },
        {
          id: "pv4",
          value: "put up with",
          meaning: "chịu đựng",
        },
      ],
      correct_answer: "pv1",
      explain:
        "Cụm động từ 'run out of' có thể tách được trong một số trường hợp (run completely out of), trong khi các cụm động từ còn lại đều không tách được vì chúng kết thúc bằng giới từ: look forward to, get along with, put up with.",
    },
    {
      id: "pv_ex9",
      symbol: "PV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền cụm động từ thích hợp vào chỗ trống: 'I need to _____ my work before the deadline.'",
      options: [
        {
          id: "pv1",
          value: "hand in",
          transcription: "/hænd ɪn/",
          meaning: "nộp",
        },
        {
          id: "pv2",
          value: "hand out",
          transcription: "/hænd aʊt/",
          meaning: "phát ra",
        },
        {
          id: "pv3",
          value: "hand over",
          transcription: "/hænd ˈoʊvər/",
          meaning: "bàn giao",
        },
        {
          id: "pv4",
          value: "hand back",
          transcription: "/hænd bæk/",
          meaning: "trả lại",
        },
      ],
      correct_answer: "pv1",
      explain:
        "Cụm động từ 'hand in' phù hợp nhất trong ngữ cảnh này, vì nó có nghĩa là 'nộp, giao nộp' công việc hoặc bài tập trước thời hạn.",
    },
    {
      id: "pv_ex10",
      symbol: "PV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn cụm động từ có nghĩa khác với các cụm động từ còn lại:",
      options: [
        {
          id: "pv1",
          value: "break down",
          meaning: "hỏng",
        },
        {
          id: "pv2",
          value: "give out",
          meaning: "hỏng",
        },
        {
          id: "pv3",
          value: "wear out",
          meaning: "mòn, hỏng",
        },
        {
          id: "pv4",
          value: "break up",
          meaning: "chia tay",
        },
      ],
      correct_answer: "pv4",
      explain:
        "Cụm động từ 'break up' có nghĩa là 'chia tay, tan vỡ' (mối quan hệ), trong khi các cụm động từ còn lại đều có nghĩa liên quan đến 'hỏng, không hoạt động được'.",
    },
    {
      id: "pv_ex11",
      symbol: "PV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền cụm động từ thích hợp vào chỗ trống: 'The teacher asked the students to _____ the new words in the dictionary.'",
      options: [
        {
          id: "pv1",
          value: "look up",
          transcription: "/lʊk ʌp/",
          meaning: "tra cứu",
        },
        {
          id: "pv2",
          value: "look over",
          transcription: "/lʊk ˈoʊvər/",
          meaning: "xem qua",
        },
        {
          id: "pv3",
          value: "look into",
          transcription: "/lʊk ˈɪntuː/",
          meaning: "điều tra",
        },
        {
          id: "pv4",
          value: "look through",
          transcription: "/lʊk θruː/",
          meaning: "xem qua",
        },
      ],
      correct_answer: "pv1",
      explain:
        "Cụm động từ 'look up' phù hợp nhất trong ngữ cảnh này, vì nó có nghĩa là 'tra cứu' từ mới trong từ điển.",
    },
    {
      id: "pv_ex12",
      symbol: "PV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn cụm động từ có thể tách được khác với các cụm động từ còn lại:",
      options: [
        {
          id: "pv1",
          value: "come across",
          meaning: "tình cờ gặp",
        },
        {
          id: "pv2",
          value: "get through",
          meaning: "vượt qua",
        },
        {
          id: "pv3",
          value: "take after",
          meaning: "giống",
        },
        {
          id: "pv4",
          value: "pick up",
          meaning: "nhặt lên",
        },
      ],
      correct_answer: "pv4",
      explain:
        "Cụm động từ 'pick up' có thể tách được (pick it up), trong khi các cụm động từ còn lại đều không tách được: come across, get through, take after.",
    },
  ],

  // 5. ĐỘNG TỪ KHUYẾT THIẾU (MODAL VERBS) - Thêm 10 phần tử
  modal_verbs: [
    {
      id: "mv_ex1",
      symbol: "MV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ khuyết thiếu có cách sử dụng khác với các động từ còn lại:",
      options: [
        {
          id: "mv1",
          value: "can",
          meaning: "có thể",
        },
        {
          id: "mv2",
          value: "must",
          meaning: "phải",
        },
        {
          id: "mv3",
          value: "should",
          meaning: "nên",
        },
        {
          id: "mv4",
          value: "have to",
          meaning: "phải",
        },
      ],
      correct_answer: "mv4",
      explain:
        "Động từ 'have to' khác với các động từ khuyết thiếu còn lại ở chỗ nó có thể chia theo thì (has to, had to, will have to), trong khi các động từ khuyết thiếu thực sự như can, must, should không thay đổi hình thức theo thì.",
    },
    {
      id: "mv_ex3",
      symbol: "MV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ khuyết thiếu có cách sử dụng khác với các động từ còn lại:",
      options: [
        {
          id: "mv1",
          value: "may",
          meaning: "có thể",
        },
        {
          id: "mv2",
          value: "might",
          meaning: "có thể",
        },
        {
          id: "mv3",
          value: "could",
          meaning: "có thể",
        },
        {
          id: "mv4",
          value: "will",
          meaning: "sẽ",
        },
      ],
      correct_answer: "mv4",
      explain:
        "Động từ 'will' diễn tả sự chắc chắn hoặc dự đoán về tương lai, trong khi các động từ khuyết thiếu còn lại (may, might, could) đều diễn tả khả năng hoặc sự không chắc chắn.",
    },
    {
      id: "mv_ex4",
      symbol: "MV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ khuyết thiếu có cách sử dụng khác với các động từ còn lại:",
      options: [
        {
          id: "mv1",
          value: "must",
          meaning: "phải",
        },
        {
          id: "mv2",
          value: "should",
          meaning: "nên",
        },
        {
          id: "mv3",
          value: "need to",
          meaning: "cần",
        },
        {
          id: "mv4",
          value: "ought to",
          meaning: "nên",
        },
      ],
      correct_answer: "mv3",
      explain:
        "Động từ 'need to' khác với các động từ khuyết thiếu còn lại ở chỗ nó có thể chia theo thì và ngôi (needs to, needed to), trong khi các động từ khuyết thiếu thực sự như must, should, ought to không thay đổi hình thức.",
    },
    {
      id: "mv_ex5",
      symbol: "MV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ khuyết thiếu thích hợp vào chỗ trống: 'You _____ smoke in this building. It's against the law.'",
      options: [
        {
          id: "mv1",
          value: "mustn't",
          transcription: "/ˈmʌsnt/",
          meaning: "không được",
        },
        {
          id: "mv2",
          value: "don't have to",
          transcription: "/doʊnt hæv tuː/",
          meaning: "không cần phải",
        },
        {
          id: "mv3",
          value: "shouldn't",
          transcription: "/ˈʃʊdnt/",
          meaning: "không nên",
        },
        {
          id: "mv4",
          value: "might not",
          transcription: "/maɪt nɒt/",
          meaning: "có thể không",
        },
      ],
      correct_answer: "mv1",
      explain:
        "Động từ khuyết thiếu 'mustn't' phù hợp nhất trong ngữ cảnh này, vì nó diễn tả sự cấm đoán mạnh mẽ, phù hợp với việc cấm hút thuốc theo luật.",
    },
    {
      id: "mv_ex6",
      symbol: "MV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ khuyết thiếu có cách sử dụng khác với các động từ còn lại:",
      options: [
        {
          id: "mv1",
          value: "can",
          meaning: "có thể",
        },
        {
          id: "mv2",
          value: "could",
          meaning: "có thể",
        },
        {
          id: "mv3",
          value: "be able to",
          meaning: "có thể",
        },
        {
          id: "mv4",
          value: "may",
          meaning: "có thể",
        },
      ],
      correct_answer: "mv3",
      explain:
        "Động từ 'be able to' khác với các động từ khuyết thiếu còn lại ở chỗ nó có thể chia theo thì (am/is/are able to, was/were able to, will be able to), trong khi các động từ khuyết thiếu thực sự như can, could, may không thay đổi hình thức theo thì.",
    },
    {
      id: "mv_ex7",
      symbol: "MV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ khuyết thiếu thích hợp vào chỗ trống: 'I _____ speak French when I was a child, but I've forgotten most of it now.'",
      options: [
        {
          id: "mv1",
          value: "can",
          transcription: "/kæn/",
          meaning: "có thể",
        },
        {
          id: "mv2",
          value: "could",
          transcription: "/kʊd/",
          meaning: "đã có thể",
        },
        {
          id: "mv3",
          value: "may",
          transcription: "/meɪ/",
          meaning: "có thể",
        },
        {
          id: "mv4",
          value: "might",
          transcription: "/maɪt/",
          meaning: "có thể",
        },
      ],
      correct_answer: "mv2",
      explain:
        "Động từ khuyết thiếu 'could' phù hợp nhất trong ngữ cảnh này, vì nó diễn tả khả năng trong quá khứ ('when I was a child').",
    },
    {
      id: "mv_ex8",
      symbol: "MV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ khuyết thiếu có cách sử dụng khác với các động từ còn lại:",
      options: [
        {
          id: "mv1",
          value: "shall",
          meaning: "sẽ",
        },
        {
          id: "mv2",
          value: "will",
          meaning: "sẽ",
        },
        {
          id: "mv3",
          value: "would",
          meaning: "sẽ (quá khứ)",
        },
        {
          id: "mv4",
          value: "be going to",
          meaning: "sẽ",
        },
      ],
      correct_answer: "mv4",
      explain:
        "Động từ 'be going to' khác với các động từ khuyết thiếu còn lại ở chỗ nó có thể chia theo thì và ngôi (am/is/are going to, was/were going to), trong khi các động từ khuyết thiếu thực sự như shall, will, would không thay đổi hình thức.",
    },
    {
      id: "mv_ex9",
      symbol: "MV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ khuyết thiếu thích hợp vào chỗ trống: 'You _____ better see a doctor about that cough.'",
      options: [
        {
          id: "mv1",
          value: "had",
          transcription: "/hæd/",
          meaning: "nên",
        },
        {
          id: "mv2",
          value: "should",
          transcription: "/ʃʊd/",
          meaning: "nên",
        },
        {
          id: "mv3",
          value: "must",
          transcription: "/mʌst/",
          meaning: "phải",
        },
        {
          id: "mv4",
          value: "might",
          transcription: "/maɪt/",
          meaning: "có thể",
        },
      ],
      correct_answer: "mv1",
      explain:
        "Cấu trúc 'had better' phù hợp nhất trong ngữ cảnh này, vì nó diễn tả lời khuyên mạnh mẽ, thường dùng khi có hậu quả tiêu cực nếu không làm theo.",
    },
    {
      id: "mv_ex10",
      symbol: "MV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ khuyết thiếu có cách sử dụng khác với các động từ còn lại:",
      options: [
        {
          id: "mv1",
          value: "must",
          meaning: "phải",
        },
        {
          id: "mv2",
          value: "can't",
          meaning: "không thể",
        },
        {
          id: "mv3",
          value: "might",
          meaning: "có thể",
        },
        {
          id: "mv4",
          value: "could",
          meaning: "có thể",
        },
      ],
      correct_answer: "mv3",
      explain:
        "Trong ngữ cảnh suy đoán, 'must' và 'can't' diễn tả sự chắc chắn (must = chắc chắn đúng, can't = chắc chắn không đúng), trong khi 'might' và 'could' diễn tả khả năng. Tuy nhiên, 'might' diễn tả khả năng ít chắc chắn hơn 'could'.",
    },
    {
      id: "mv_ex11",
      symbol: "MV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ khuyết thiếu thích hợp vào chỗ trống: 'You _____ have told me earlier. Now it's too late.'",
      options: [
        {
          id: "mv1",
          value: "should",
          transcription: "/ʃʊd/",
          meaning: "nên",
        },
        {
          id: "mv2",
          value: "could",
          transcription: "/kʊd/",
          meaning: "đã có thể",
        },
        {
          id: "mv3",
          value: "might",
          transcription: "/maɪt/",
          meaning: "đã có thể",
        },
        {
          id: "mv4",
          value: "must",
          transcription: "/mʌst/",
          meaning: "phải",
        },
      ],
      correct_answer: "mv1",
      explain:
        "Cấu trúc 'should have + V3' phù hợp nhất trong ngữ cảnh này, vì nó diễn tả lời trách móc về việc đã không làm điều gì đó trong quá khứ mà lẽ ra nên làm.",
    },
    {
      id: "mv_ex12",
      symbol: "MV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question:
        "Chọn động từ khuyết thiếu có cách sử dụng khác với các động từ còn lại:",
      options: [
        {
          id: "mv1",
          value: "must",
          meaning: "phải",
        },
        {
          id: "mv2",
          value: "have to",
          meaning: "phải",
        },
        {
          id: "mv3",
          value: "need to",
          meaning: "cần",
        },
        {
          id: "mv4",
          value: "ought to",
          meaning: "nên",
        },
      ],
      correct_answer: "mv4",
      explain:
        "Động từ 'ought to' diễn tả nghĩa vụ đạo đức hoặc lời khuyên, trong khi các động từ còn lại (must, have to, need to) đều diễn tả sự bắt buộc hoặc nhu cầu.",
    },
  ],

  // 6. MẠO TỪ (ARTICLES) - Thêm 10 phần tử
  articles: [
    {
      id: "art_ex1",
      symbol: "ART",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu sử dụng mạo từ khác với các câu còn lại:",
      options: [
        {
          id: "art1",
          value: "I saw a dog in the park.",
          meaning: "Tôi thấy một con chó trong công viên.",
        },
        {
          id: "art2",
          value: "She is an engineer.",
          meaning: "Cô ấy là một kỹ sư.",
        },
        {
          id: "art3",
          value: "The sun rises in the east.",
          meaning: "Mặt trời mọc ở phía đông.",
        },
        {
          id: "art4",
          value: "I have an apple and a banana.",
          meaning: "Tôi có một quả táo và một quả chuối.",
        },
      ],
      correct_answer: "art3",
      explain:
        "Câu 'The sun rises in the east' sử dụng mạo từ 'the' để chỉ vật duy nhất (mặt trời), trong khi các câu còn lại sử dụng mạo từ không xác định 'a/an' để chỉ một vật không xác định.",
    },
    {
      id: "art_ex3",
      symbol: "ART",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu sử dụng mạo từ khác với các câu còn lại:",
      options: [
        {
          id: "art1",
          value: "I like to play tennis.",
          meaning: "Tôi thích chơi tennis.",
        },
        {
          id: "art2",
          value: "She studies history.",
          meaning: "Cô ấy học lịch sử.",
        },
        {
          id: "art3",
          value: "They enjoy music.",
          meaning: "Họ thích âm nhạc.",
        },
        {
          id: "art4",
          value: "He bought a car yesterday.",
          meaning: "Anh ấy đã mua một chiếc xe hơi hôm qua.",
        },
      ],
      correct_answer: "art4",
      explain:
        "Câu 'He bought a car yesterday' sử dụng mạo từ không xác định 'a', trong khi các câu còn lại không sử dụng mạo từ trước danh từ không đếm được hoặc danh từ chỉ môn học, môn thể thao.",
    },
    {
      id: "art_ex4",
      symbol: "ART",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu sử dụng mạo từ khác với các câu còn lại:",
      options: [
        {
          id: "art1",
          value: "The book on the table is mine.",
          meaning: "Quyển sách trên bàn là của tôi.",
        },
        {
          id: "art2",
          value: "The car that I bought is red.",
          meaning: "Chiếc xe mà tôi mua có màu đỏ.",
        },
        {
          id: "art3",
          value: "The students in my class are smart.",
          meaning: "Những học sinh trong lớp tôi rất thông minh.",
        },
        {
          id: "art4",
          value: "The gold is a precious metal.",
          meaning: "Vàng là một kim loại quý.",
        },
      ],
      correct_answer: "art4",
      explain:
        "Câu 'The gold is a precious metal' sử dụng mạo từ 'the' trước danh từ không đếm được 'gold' khi nói về vàng nói chung, trong khi đúng ra không cần mạo từ. Các câu còn lại sử dụng 'the' đúng để chỉ vật cụ thể đã được xác định.",
    },
    {
      id: "art_ex5",
      symbol: "ART",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền mạo từ thích hợp vào chỗ trống: 'I saw _____ elephant at _____ zoo yesterday.'",
      options: [
        {
          id: "art1",
          value: "an...the",
          transcription: "/æn...ðə/",
          meaning: "một...cái",
        },
        {
          id: "art2",
          value: "a...the",
          transcription: "/ə...ðə/",
          meaning: "một...cái",
        },
        {
          id: "art3",
          value: "the...a",
          transcription: "/ðə...ə/",
          meaning: "cái...một",
        },
        {
          id: "art4",
          value: "an...a",
          transcription: "/æn...ə/",
          meaning: "một...một",
        },
      ],
      correct_answer: "art1",
      explain:
        "Cần dùng 'an' trước 'elephant' vì từ này bắt đầu bằng nguyên âm, và cần dùng 'the' trước 'zoo' vì đang nói đến một sở thú cụ thể.",
    },
    {
      id: "art_ex6",
      symbol: "ART",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu sử dụng mạo từ khác với các câu còn lại:",
      options: [
        {
          id: "art1",
          value: "She plays the piano.",
          meaning: "Cô ấy chơi đàn piano.",
        },
        {
          id: "art2",
          value: "He plays the guitar.",
          meaning: "Anh ấy chơi đàn guitar.",
        },
        {
          id: "art3",
          value: "They play the violin.",
          meaning: "Họ chơi đàn violin.",
        },
        {
          id: "art4",
          value: "We play basketball.",
          meaning: "Chúng tôi chơi bóng rổ.",
        },
      ],
      correct_answer: "art4",
      explain:
        "Câu 'We play basketball' không sử dụng mạo từ trước 'basketball' vì đây là môn thể thao, trong khi các câu còn lại sử dụng 'the' trước tên nhạc cụ.",
    },
    {
      id: "art_ex7",
      symbol: "ART",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền mạo từ thích hợp vào chỗ trống: 'She is _____ university student.'",
      options: [
        {
          id: "art1",
          value: "a",
          transcription: "/ə/",
          meaning: "một",
        },
        {
          id: "art2",
          value: "an",
          transcription: "/æn/",
          meaning: "một",
        },
        {
          id: "art3",
          value: "the",
          transcription: "/ðə/",
          meaning: "cái/người",
        },
        {
          id: "art4",
          value: "-",
          transcription: "",
          meaning: "không cần mạo từ",
        },
      ],
      correct_answer: "art1",
      explain:
        "Cần dùng 'a' trước 'university student' vì mặc dù 'university' bắt đầu bằng nguyên âm, nhưng nó được phát âm với âm /j/ ở đầu, giống như phụ âm.",
    },
    {
      id: "art_ex8",
      symbol: "ART",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu sử dụng mạo từ khác với các câu còn lại:",
      options: [
        {
          id: "art1",
          value: "The Eiffel Tower is in Paris.",
          meaning: "Tháp Eiffel ở Paris.",
        },
        {
          id: "art2",
          value: "The Great Wall is in China.",
          meaning: "Vạn Lý Trường Thành ở Trung Quốc.",
        },
        {
          id: "art3",
          value: "Mount Everest is the highest mountain.",
          meaning: "Núi Everest là ngọn núi cao nhất.",
        },
        {
          id: "art4",
          value: "The Amazon River is very long.",
          meaning: "Sông Amazon rất dài.",
        },
      ],
      correct_answer: "art3",
      explain:
        "Câu 'Mount Everest is the highest mountain' không sử dụng mạo từ trước 'Mount Everest' vì tên núi thường không dùng mạo từ khi có 'Mount' đứng trước, trong khi các câu còn lại sử dụng 'the' trước tên các địa danh nổi tiếng.",
    },
    {
      id: "art_ex9",
      symbol: "ART",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền mạo từ thích hợp vào chỗ trống: 'I have _____ hour to finish _____ test.'",
      options: [
        {
          id: "art1",
          value: "an...the",
          transcription: "/æn...ðə/",
          meaning: "một...bài",
        },
        {
          id: "art2",
          value: "a...the",
          transcription: "/ə...ðə/",
          meaning: "một...bài",
        },
        {
          id: "art3",
          value: "an...a",
          transcription: "/æn...ə/",
          meaning: "một...một",
        },
        {
          id: "art4",
          value: "the...the",
          transcription: "/ðə...ðə/",
          meaning: "cái...bài",
        },
      ],
      correct_answer: "art1",
      explain:
        "Cần dùng 'an' trước 'hour' vì từ này bắt đầu bằng âm /aʊər/ (nguyên âm), và cần dùng 'the' trước 'test' vì đang nói đến một bài kiểm tra cụ thể.",
    },
    {
      id: "art_ex10",
      symbol: "ART",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu sử dụng mạo từ khác với các câu còn lại:",
      options: [
        {
          id: "art1",
          value: "I had lunch at noon.",
          meaning: "Tôi ăn trưa vào buổi trưa.",
        },
        {
          id: "art2",
          value: "She eats breakfast every morning.",
          meaning: "Cô ấy ăn sáng mỗi sáng.",
        },
        {
          id: "art3",
          value: "We had dinner at a restaurant.",
          meaning: "Chúng tôi ăn tối tại một nhà hàng.",
        },
        {
          id: "art4",
          value: "The dinner we had was delicious.",
          meaning: "Bữa tối chúng tôi ăn rất ngon.",
        },
      ],
      correct_answer: "art4",
      explain:
        "Câu 'The dinner we had was delicious' sử dụng mạo từ 'the' trước 'dinner' vì đang nói đến một bữa tối cụ thể, trong khi các câu còn lại không sử dụng mạo từ trước tên các bữa ăn khi nói chung.",
    },
    {
      id: "art_ex11",
      symbol: "ART",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền mạo từ thích hợp vào chỗ trống: 'She is _____ honor student at _____ prestigious university.'",
      options: [
        {
          id: "art1",
          value: "an...a",
          transcription: "/æn...ə/",
          meaning: "một...một",
        },
        {
          id: "art2",
          value: "a...a",
          transcription: "/ə...ə/",
          meaning: "một...một",
        },
        {
          id: "art3",
          value: "an...the",
          transcription: "/æn...ðə/",
          meaning: "một...cái",
        },
        {
          id: "art4",
          value: "the...a",
          transcription: "/ðə...ə/",
          meaning: "cái...một",
        },
      ],
      correct_answer: "art1",
      explain:
        "Cần dùng 'an' trước 'honor' vì từ này bắt đầu bằng âm /ˈɒnər/ (nguyên âm, 'h' câm), và cần dùng 'a' trước 'prestigious university' vì đang nói đến một trường đại học không xác định.",
    },
    {
      id: "art_ex12",
      symbol: "ART",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu sử dụng mạo từ khác với các câu còn lại:",
      options: [
        {
          id: "art1",
          value: "The French are known for their cuisine.",
          meaning: "Người Pháp nổi tiếng với ẩm thực của họ.",
        },
        {
          id: "art2",
          value: "The Chinese have a long history.",
          meaning: "Người Trung Quốc có lịch sử lâu đời.",
        },
        {
          id: "art3",
          value: "The British drink a lot of tea.",
          meaning: "Người Anh uống nhiều trà.",
        },
        {
          id: "art4",
          value: "Americans love fast food.",
          meaning: "Người Mỹ thích đồ ăn nhanh.",
        },
      ],
      correct_answer: "art4",
      explain:
        "Câu 'Americans love fast food' không sử dụng mạo từ trước 'Americans', trong khi các câu còn lại sử dụng 'the' trước tên dân tộc. Lưu ý rằng 'Americans' là ngoại lệ, không cần 'the', trong khi hầu hết tên dân tộc khác cần 'the' khi nói về cả dân tộc đó.",
    },
  ],

  // 7. TỪ HẠN ĐỊNH (DETERMINERS) - Thêm 10 phần tử
  determiners: [
    {
      id: "det_ex1",
      symbol: "DET",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn từ hạn định có cách sử dụng khác với các từ còn lại:",
      options: [
        {
          id: "det1",
          value: "many",
          meaning: "nhiều",
        },
        {
          id: "det2",
          value: "few",
          meaning: "ít",
        },
        {
          id: "det3",
          value: "several",
          meaning: "vài",
        },
        {
          id: "det4",
          value: "much",
          meaning: "nhiều",
        },
      ],
      correct_answer: "det4",
      explain:
        "Từ hạn định 'much' được sử dụng với danh từ không đếm được, trong khi các từ hạn định còn lại (many, few, several) được sử dụng với danh từ đếm được số nhiều.",
    },
    {
      id: "det_ex3",
      symbol: "DET",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn từ hạn định có cách sử dụng khác với các từ còn lại:",
      options: [
        {
          id: "det1",
          value: "this",
          meaning: "này",
        },
        {
          id: "det2",
          value: "that",
          meaning: "đó",
        },
        {
          id: "det3",
          value: "these",
          meaning: "những này",
        },
        {
          id: "det4",
          value: "those",
          meaning: "những kia",
        },
      ],
      correct_answer: "det1",
      explain:
        "Từ hạn định 'this' được sử dụng với danh từ số ít, trong khi các từ hạn định còn lại (that, these, those) được sử dụng với cả danh từ số ít và số nhiều.",
    },
    {
      id: "det_ex4",
      symbol: "DET",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn từ hạn định có cách sử dụng khác với các từ còn lại:",
      options: [
        {
          id: "det1",
          value: "all",
          meaning: "tất cả",
        },
        {
          id: "det2",
          value: "both",
          meaning: "cả hai",
        },
        {
          id: "det3",
          value: "each",
          meaning: "mỗi",
        },
        {
          id: "det4",
          value: "every",
          meaning: "mỗi",
        },
      ],
      correct_answer: "det2",
      explain:
        "Từ hạn định 'both' chỉ được sử dụng với hai vật/người, trong khi các từ hạn định còn lại (all, each, every) có thể được sử dụng với nhiều hơn hai vật/người.",
    },
    {
      id: "det_ex5",
      symbol: "DET",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền từ hạn định thích hợp vào chỗ trống: 'There isn't _____ milk left in the fridge.'",
      options: [
        {
          id: "det1",
          value: "many",
          transcription: "/ˈmɛni/",
          meaning: "nhiều",
        },
        {
          id: "det2",
          value: "much",
          transcription: "/mʌtʃ/",
          meaning: "nhiều",
        },
        {
          id: "det3",
          value: "a lot of",
          transcription: "/ə lɒt əv/",
          meaning: "nhiều",
        },
        {
          id: "det4",
          value: "few",
          transcription: "/fjuː/",
          meaning: "ít",
        },
      ],
      correct_answer: "det2",
      explain:
        "Từ hạn định 'much' phù hợp nhất trong ngữ cảnh này, vì nó được sử dụng với danh từ không đếm được 'milk' trong câu phủ định.",
    },
    {
      id: "det_ex6",
      symbol: "DET",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn từ hạn định có cách sử dụng khác với các từ còn lại:",
      options: [
        {
          id: "det1",
          value: "some",
          meaning: "một số",
        },
        {
          id: "det2",
          value: "any",
          meaning: "bất kỳ",
        },
        {
          id: "det3",
          value: "no",
        },
        {
          id: "det4",
          value: "none",
        },
      ],
      correct_answer: "det4",
      explain:
        "Từ 'none' không phải là từ hạn định mà là đại từ, trong khi các từ còn lại (some, any, no) đều là từ hạn định đứng trước danh từ.",
    },
    {
      id: "det_ex7",
      symbol: "DET",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền từ hạn định thích hợp vào chỗ trống: '_____ student must complete the assignment by Friday.'",
      options: [
        {
          id: "det1",
          value: "All",
          transcription: "/ɔːl/",
          meaning: "tất cả",
        },
        {
          id: "det2",
          value: "Each",
          transcription: "/iːtʃ/",
          meaning: "mỗi",
        },
        {
          id: "det3",
          value: "Both",
          transcription: "/boʊθ/",
          meaning: "cả hai",
        },
        {
          id: "det4",
          value: "Either",
          transcription: "/ˈaɪðər/",
          meaning: "một trong hai",
        },
      ],
      correct_answer: "det2",
      explain:
        "Từ hạn định 'Each' phù hợp nhất trong ngữ cảnh này, vì nó nhấn mạnh rằng mọi học sinh, không trừ ai, đều phải hoàn thành bài tập, và động từ 'must' ở dạng số ít phù hợp với 'each'.",
    },
    {
      id: "det_ex8",
      symbol: "DET",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn từ hạn định có cách sử dụng khác với các từ còn lại:",
      options: [
        {
          id: "det1",
          value: "a few",
          meaning: "một vài",
        },
        {
          id: "det2",
          value: "a little",
          meaning: "một chút",
        },
        {
          id: "det3",
          value: "a lot of",
          meaning: "nhiều",
        },
        {
          id: "det4",
          value: "a couple of",
          meaning: "một vài",
        },
      ],
      correct_answer: "det2",
      explain:
        "Từ hạn định 'a little' được sử dụng với danh từ không đếm được, trong khi các từ hạn định còn lại (a few, a lot of, a couple of) có thể được sử dụng với danh từ đếm được số nhiều.",
    },
    {
      id: "det_ex9",
      symbol: "DET",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền từ hạn định thích hợp vào chỗ trống: 'I don't have _____ money left.'",
      options: [
        {
          id: "det1",
          value: "many",
          transcription: "/ˈmɛni/",
          meaning: "nhiều",
        },
        {
          id: "det2",
          value: "much",
          transcription: "/mʌtʃ/",
          meaning: "nhiều",
        },
        {
          id: "det3",
          value: "few",
          transcription: "/fjuː/",
          meaning: "ít",
        },
        {
          id: "det4",
          value: "several",
          transcription: "/ˈsɛvrəl/",
          meaning: "vài",
        },
      ],
      correct_answer: "det2",
      explain:
        "Từ hạn định 'much' phù hợp nhất trong ngữ cảnh này, vì nó được sử dụng với danh từ không đếm được 'money' trong câu phủ định.",
    },
    {
      id: "det_ex10",
      symbol: "DET",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn từ hạn định có cách sử dụng khác với các từ còn lại:",
      options: [
        {
          id: "det1",
          value: "my",
        },
        {
          id: "det2",
          value: "your",
        },
        {
          id: "det3",
          value: "his",
        },
        {
          id: "det4",
          value: "mine",
        },
      ],
      correct_answer: "det4",
      explain:
        "Từ 'mine' không phải là từ hạn định mà là đại từ sở hữu, trong khi các từ còn lại (my, your, his) đều là tính từ sở hữu đứng trước danh từ.",
    },
    {
      id: "det_ex11",
      symbol: "DET",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền từ hạn định thích hợp vào chỗ trống: 'There are _____ students in the classroom.'",
      options: [
        {
          id: "det1",
          value: "much",
          transcription: "/mʌtʃ/",
          meaning: "nhiều",
        },
        {
          id: "det2",
          value: "many",
          transcription: "/ˈmɛni/",
          meaning: "nhiều",
        },
        {
          id: "det3",
          value: "little",
          transcription: "/ˈlɪtl/",
          meaning: "ít",
        },
        {
          id: "det4",
          value: "a little",
          transcription: "/ə ˈlɪtl/",
          meaning: "một chút",
        },
      ],
      correct_answer: "det2",
      explain:
        "Từ hạn định 'many' phù hợp nhất trong ngữ cảnh này, vì nó được sử dụng với danh từ đếm được số nhiều 'students'.",
    },
    {
      id: "det_ex12",
      symbol: "DET",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn từ hạn định có cách sử dụng khác với các từ còn lại:",
      options: [
        {
          id: "det1",
          value: "this",
        },
        {
          id: "det2",
          value: "that",
        },
        {
          id: "det3",
          value: "these",
        },
        {
          id: "det4",
          value: "those",
        },
      ],
      correct_answer: "det3",
      explain:
        "Từ hạn định 'these' được sử dụng với danh từ số nhiều, trong khi các từ hạn định còn lại (this, that, those) có thể được sử dụng với cả danh từ số ít và số nhiều.",
    },
  ],

  // 8. ĐỘNG TỪ NỐI (LINKING VERBS) - Thêm 10 phần tử
  linking_verbs: [
    {
      id: "lv_ex1",
      symbol: "LV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu có động từ KHÔNG phải là động từ nối:",
      options: [
        {
          id: "lv1",
          value: "She is a doctor.",
        },
        {
          id: "lv2",
          value: "The food tastes delicious.",
        },
        {
          id: "lv3",
          value: "He became famous after the movie.",
        },
        {
          id: "lv4",
          value: "They watched a movie last night.",
        },
      ],
      correct_answer: "lv4",
      explain:
        "Động từ 'watched' trong câu 'They watched a movie last night' là một động từ hành động (action verb), không phải động từ nối. Các động từ còn lại (is, tastes, became) đều là động từ nối, kết nối chủ ngữ với bổ ngữ.",
    },
    {
      id: "lv_ex3",
      symbol: "LV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu có động từ KHÔNG phải là động từ nối:",
      options: [
        {
          id: "lv1",
          value: "The milk smells sour.",
        },
        {
          id: "lv2",
          value: "She feels tired after work.",
        },
        {
          id: "lv3",
          value: "The weather remains cold.",
        },
        {
          id: "lv4",
          value: "He runs every morning.",
        },
      ],
      correct_answer: "lv4",
      explain:
        "Động từ 'runs' trong câu 'He runs every morning' là một động từ hành động (action verb), không phải động từ nối. Các động từ còn lại (smells, feels, remains) đều là động từ nối, kết nối chủ ngữ với bổ ngữ.",
    },
    {
      id: "lv_ex4",
      symbol: "LV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu có động từ KHÔNG phải là động từ nối:",
      options: [
        {
          id: "lv1",
          value: "The situation appears serious.",
        },
        {
          id: "lv2",
          value: "She seems happy with her new job.",
        },
        {
          id: "lv3",
          value: "The children look tired after the game.",
        },
        {
          id: "lv4",
          value: "They arrived at the airport on time.",
        },
      ],
      correct_answer: "lv4",
      explain:
        "Động từ 'arrived' trong câu 'They arrived at the airport on time' là một động từ hành động (action verb), không phải động từ nối. Các động từ còn lại (appears, seems, look) đều là động từ nối, kết nối chủ ngữ với bổ ngữ.",
    },
    {
      id: "lv_ex5",
      symbol: "LV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ nối thích hợp vào chỗ trống: 'The flowers _____ beautiful in the garden.'",
      options: [
        {
          id: "lv1",
          value: "look",
          transcription: "/lʊk/",
          meaning: "trông",
        },
        {
          id: "lv2",
          value: "see",
          transcription: "/siː/",
          meaning: "nhìn thấy",
        },
        {
          id: "lv3",
          value: "watch",
          transcription: "/wɒtʃ/",
          meaning: "xem",
        },
        {
          id: "lv4",
          value: "observe",
          transcription: "/əbˈzɜːrv/",
          meaning: "quan sát",
        },
      ],
      correct_answer: "lv1",
      explain:
        "Động từ nối 'look' phù hợp nhất trong ngữ cảnh này, vì nó kết nối chủ ngữ 'flowers' với tính từ 'beautiful' để mô tả vẻ ngoài của hoa. Các động từ còn lại (see, watch, observe) là động từ hành động, không phải động từ nối.",
    },
    {
      id: "lv_ex6",
      symbol: "LV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu có động từ KHÔNG phải là động từ nối:",
      options: [
        {
          id: "lv1",
          value: "The soup tastes salty.",
        },
        {
          id: "lv2",
          value: "She became a teacher last year.",
        },
        {
          id: "lv3",
          value: "The room feels warm.",
        },
        {
          id: "lv4",
          value: "They made a cake for the party.",
        },
      ],
      correct_answer: "lv4",
      explain:
        "Động từ 'made' trong câu 'They made a cake for the party' là một động từ hành động (action verb), không phải động từ nối. Các động từ còn lại (tastes, became, feels) đều là động từ nối, kết nối chủ ngữ với bổ ngữ.",
    },
    {
      id: "lv_ex7",
      symbol: "LV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ nối thích hợp vào chỗ trống: 'The music _____ relaxing after a long day.'",
      options: [
        {
          id: "lv1",
          value: "sounds",
          transcription: "/saʊndz/",
          meaning: "nghe",
        },
        {
          id: "lv2",
          value: "hears",
          transcription: "/hɪərz/",
          meaning: "nghe thấy",
        },
        {
          id: "lv3",
          value: "listens",
          transcription: "/ˈlɪsənz/",
          meaning: "lắng nghe",
        },
        {
          id: "lv4",
          value: "plays",
          transcription: "/pleɪz/",
          meaning: "chơi",
        },
      ],
      correct_answer: "lv1",
      explain:
        "Động từ nối 'sounds' phù hợp nhất trong ngữ cảnh này, vì nó kết nối chủ ngữ 'music' với tính từ 'relaxing' để mô tả âm thanh của âm nhạc. Các động từ còn lại (hears, listens, plays) là động từ hành động, không phải động từ nối.",
    },
    {
      id: "lv_ex8",
      symbol: "LV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu có động từ KHÔNG phải là động từ nối:",
      options: [
        {
          id: "lv1",
          value: "She appears confident in the interview.",
        },
        {
          id: "lv2",
          value: "The situation seems complicated.",
        },
        {
          id: "lv3",
          value: "He looks tired after the long flight.",
        },
        {
          id: "lv4",
          value: "They discussed the problem at the meeting.",
        },
      ],
      correct_answer: "lv4",
      explain:
        "Động từ 'discussed' trong câu 'They discussed the problem at the meeting' là một động từ hành động (action verb), không phải động từ nối. Các động từ còn lại (appears, seems, looks) đều là động từ nối, kết nối chủ ngữ với bổ ngữ.",
    },
    {
      id: "lv_ex9",
      symbol: "LV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ nối thích hợp vào chỗ trống: 'The cake _____ delicious.'",
      options: [
        {
          id: "lv1",
          value: "tastes",
          transcription: "/teɪsts/",
          meaning: "có vị",
        },
        {
          id: "lv2",
          value: "eats",
          transcription: "/iːts/",
          meaning: "ăn",
        },
        {
          id: "lv3",
          value: "cooks",
          transcription: "/kʊks/",
          meaning: "nấu",
        },
        {
          id: "lv4",
          value: "bakes",
          transcription: "/beɪks/",
          meaning: "nướng",
        },
      ],
      correct_answer: "lv1",
      explain:
        "Động từ nối 'tastes' phù hợp nhất trong ngữ cảnh này, vì nó kết nối chủ ngữ 'cake' với tính từ 'delicious' để mô tả vị của bánh. Các động từ còn lại (eats, cooks, bakes) là động từ hành động, không phải động từ nối.",
    },
    {
      id: "lv_ex10",
      symbol: "LV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu có động từ KHÔNG phải là động từ nối:",
      options: [
        {
          id: "lv1",
          value: "She is my sister.",
        },
        {
          id: "lv2",
          value: "The food smells good.",
        },
        {
          id: "lv3",
          value: "He became angry after the incident.",
        },
        {
          id: "lv4",
          value: "They bought a new house last month.",
        },
      ],
      correct_answer: "lv4",
      explain:
        "Động từ 'bought' trong câu 'They bought a new house last month' là một động từ hành động (action verb), không phải động từ nối. Các động từ còn lại (is, smells, became) đều là động từ nối, kết nối chủ ngữ với bổ ngữ.",
    },
    {
      id: "lv_ex11",
      symbol: "LV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ nối thích hợp vào chỗ trống: 'The children _____ happy with their new toys.'",
      options: [
        {
          id: "lv1",
          value: "are",
          transcription: "/ɑːr/",
          meaning: "là",
        },
        {
          id: "lv2",
          value: "play",
          transcription: "/pleɪ/",
          meaning: "chơi",
        },
        {
          id: "lv3",
          value: "enjoy",
          transcription: "/ɪnˈdʒɔɪ/",
          meaning: "thích",
        },
        {
          id: "lv4",
          value: "have",
          transcription: "/hæv/",
          meaning: "có",
        },
      ],
      correct_answer: "lv1",
      explain:
        "Động từ nối 'are' phù hợp nhất trong ngữ cảnh này, vì nó kết nối chủ ngữ 'children' với tính từ 'happy' để mô tả trạng thái của trẻ em. Các động từ còn lại (play, enjoy, have) là động từ hành động, không phải động từ nối.",
    },
    {
      id: "lv_ex12",
      symbol: "LV",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn câu có động từ KHÔNG phải là động từ nối:",
      options: [
        {
          id: "lv1",
          value: "The weather turned cold.",
        },
        {
          id: "lv2",
          value: "She grew impatient with the delay.",
        },
        {
          id: "lv3",
          value: "The milk stays fresh in the refrigerator.",
        },
        {
          id: "lv4",
          value: "They walked to school every day.",
        },
      ],
      correct_answer: "lv4",
      explain:
        "Động từ 'walked' trong câu 'They walked to school every day' là một động từ hành động (action verb), không phải động từ nối. Các động từ còn lại (turned, grew, stays) đều là động từ nối, kết nối chủ ngữ với bổ ngữ.",
    },
  ],

  // 9. LIÊN TỪ (CONJUNCTIONS) - Thêm 10 phần tử
  conjunctions: [
    {
      id: "conj_ex1",
      symbol: "CONJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn liên từ có loại khác với các liên từ còn lại:",
      options: [
        {
          id: "conj1",
          value: "and",
        },
        {
          id: "conj2",
          value: "but",
        },
        {
          id: "conj3",
          value: "or",
        },
        {
          id: "conj4",
          value: "because",
        },
      ],
      correct_answer: "conj4",
      explain:
        "Liên từ 'because' là liên từ phụ thuộc (subordinating conjunction), trong khi các liên từ còn lại (and, but, or) đều là liên từ kết hợp (coordinating conjunctions).",
    },
    {
      id: "conj_ex3",
      symbol: "CONJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn liên từ có loại khác với các liên từ còn lại:",
      options: [
        {
          id: "conj1",
          value: "although",
        },
        {
          id: "conj2",
          value: "since",
        },
        {
          id: "conj3",
          value: "unless",
        },
        {
          id: "conj4",
          value: "yet",
        },
      ],
      correct_answer: "conj4",
      explain:
        "Liên từ 'yet' là liên từ kết hợp (coordinating conjunction), trong khi các liên từ còn lại (although, since, unless) đều là liên từ phụ thuộc (subordinating conjunctions).",
    },
    {
      id: "conj_ex4",
      symbol: "CONJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn liên từ có loại khác với các liên từ còn lại:",
      options: [
        {
          id: "conj1",
          value: "not only...but also",
          meaning: "không chỉ...mà còn",
        },
        {
          id: "conj2",
          value: "both...and",
          meaning: "cả...và",
        },
        {
          id: "conj3",
          value: "either...or",
          meaning: "hoặc...hoặc",
        },
        {
          id: "conj4",
          value: "if...then",
          meaning: "nếu...thì",
        },
      ],
      correct_answer: "conj4",
      explain:
        "Liên từ 'if...then' là liên từ điều kiện, trong khi các liên từ còn lại (not only...but also, both...and, either...or) đều là liên từ tương quan (correlative conjunctions).",
    },
    {
      id: "conj_ex5",
      symbol: "CONJ",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền liên từ thích hợp vào chỗ trống: 'I will go to the party _____ I finish my homework.'",
      options: [
        {
          id: "conj1",
          value: "and",
          transcription: "/ænd/",
          meaning: "và",
        },
        {
          id: "conj2",
          value: "but",
          transcription: "/bʌt/",
          meaning: "nhưng",
        },
        {
          id: "conj3",
          value: "after",
          transcription: "/ˈæftər/",
          meaning: "sau khi",
        },
        {
          id: "conj4",
          value: "or",
          transcription: "/ɔːr/",
          meaning: "hoặc",
        },
      ],
      correct_answer: "conj3",
      explain:
        "Liên từ 'after' phù hợp nhất trong ngữ cảnh này, vì nó diễn tả mối quan hệ thời gian giữa hai hành động: đi dự tiệc sau khi hoàn thành bài tập về nhà.",
    },
    {
      id: "conj_ex6",
      symbol: "CONJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn liên từ có loại khác với các liên từ còn lại:",
      options: [
        {
          id: "conj1",
          value: "when",
        },
        {
          id: "conj2",
          value: "while",
        },
        {
          id: "conj3",
          value: "before",
        },
        {
          id: "conj4",
          value: "so",
        },
      ],
      correct_answer: "conj4",
      explain:
        "Liên từ 'so' là liên từ kết hợp (coordinating conjunction), trong khi các liên từ còn lại (when, while, before) đều là liên từ phụ thuộc chỉ thời gian (subordinating conjunctions of time).",
    },
    {
      id: "conj_ex7",
      symbol: "CONJ",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền liên từ thích hợp vào chỗ trống: 'She didn't go to the party _____ she was sick.'",
      options: [
        {
          id: "conj1",
          value: "and",
          transcription: "/ænd/",
          meaning: "và",
        },
        {
          id: "conj2",
          value: "but",
          transcription: "/bʌt/",
          meaning: "nhưng",
        },
        {
          id: "conj3",
          value: "because",
          transcription: "/bɪˈkɔːz/",
          meaning: "bởi vì",
        },
        {
          id: "conj4",
          value: "or",
          transcription: "/ɔːr/",
          meaning: "hoặc",
        },
      ],
      correct_answer: "conj3",
      explain:
        "Liên từ 'because' phù hợp nhất trong ngữ cảnh này, vì nó diễn tả mối quan hệ nhân quả: không đi dự tiệc vì lý do bị ốm.",
    },
    {
      id: "conj_ex8",
      symbol: "CONJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn liên từ có loại khác với các liên từ còn lại:",
      options: [
        {
          id: "conj1",
          value: "for",
        },
        {
          id: "conj2",
          value: "and",
        },
        {
          id: "conj3",
          value: "nor",
        },
        {
          id: "conj4",
          value: "although",
        },
      ],
      correct_answer: "conj4",
      explain:
        "Liên từ 'although' là liên từ phụ thuộc (subordinating conjunction), trong khi các liên từ còn lại (for, and, nor) đều là liên từ kết hợp (coordinating conjunctions).",
    },
    {
      id: "conj_ex9",
      symbol: "CONJ",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền liên từ thích hợp vào chỗ trống: 'You can have tea _____ coffee.'",
      options: [
        {
          id: "conj1",
          value: "and",
          transcription: "/ænd/",
          meaning: "và",
        },
        {
          id: "conj2",
          value: "but",
          transcription: "/bʌt/",
          meaning: "nhưng",
        },
        {
          id: "conj3",
          value: "or",
          transcription: "/ɔːr/",
          meaning: "hoặc",
        },
        {
          id: "conj4",
          value: "so",
          transcription: "/soʊ/",
          meaning: "vì vậy",
        },
      ],
      correct_answer: "conj3",
      explain:
        "Liên từ 'or' phù hợp nhất trong ngữ cảnh này, vì nó diễn tả sự lựa chọn giữa hai thứ: trà hoặc cà phê.",
    },
    {
      id: "conj_ex10",
      symbol: "CONJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn liên từ có loại khác với các liên từ còn lại:",
      options: [
        {
          id: "conj1",
          value: "as if",
          meaning: "như thể",
        },
        {
          id: "conj2",
          value: "as though",
          meaning: "như thể",
        },
        {
          id: "conj3",
          value: "even if",
          meaning: "ngay cả khi",
        },
        {
          id: "conj4",
          value: "as well as",
          meaning: "cũng như",
        },
      ],
      correct_answer: "conj4",
      explain:
        "Liên từ 'as well as' là liên từ kết hợp (coordinating conjunction), trong khi các liên từ còn lại (as if, as though, even if) đều là liên từ phụ thuộc (subordinating conjunctions).",
    },
    {
      id: "conj_ex11",
      symbol: "CONJ",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền liên từ thích hợp vào chỗ trống: 'I will help you _____ you ask me.'",
      options: [
        {
          id: "conj1",
          value: "if",
          transcription: "/ɪf/",
          meaning: "nếu",
        },
        {
          id: "conj2",
          value: "and",
          transcription: "/ænd/",
          meaning: "và",
        },
        {
          id: "conj3",
          value: "but",
          transcription: "/bʌt/",
          meaning: "nhưng",
        },
        {
          id: "conj4",
          value: "or",
          transcription: "/ɔːr/",
          meaning: "hoặc",
        },
      ],
      correct_answer: "conj1",
      explain:
        "Liên từ 'if' phù hợp nhất trong ngữ cảnh này, vì nó diễn tả điều kiện: sẽ giúp đỡ với điều kiện là được yêu cầu.",
    },
    {
      id: "conj_ex12",
      symbol: "CONJ",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn liên từ có loại khác với các liên từ còn lại:",
      options: [
        {
          id: "conj1",
          value: "in order that",
          meaning: "để mà",
        },
        {
          id: "conj2",
          value: "so that",
          meaning: "để mà",
        },
        {
          id: "conj3",
          value: "in case",
          meaning: "phòng khi",
        },
        {
          id: "conj4",
          value: "as soon as",
          meaning: "ngay khi",
        },
      ],
      correct_answer: "conj4",
      explain:
        "Liên từ 'as soon as' là liên từ phụ thuộc chỉ thời gian, trong khi các liên từ còn lại (in order that, so that, in case) đều là liên từ phụ thuộc chỉ mục đích hoặc điều kiện.",
    },
  ],

  // 10. ĐẠI TỪ (PRONOUNS) - Thêm 10 phần tử
  pronouns: [
    {
      id: "pron_ex1",
      symbol: "PRON",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn đại từ có loại khác với các đại từ còn lại:",
      options: [
        {
          id: "pron1",
          value: "I",
        },
        {
          id: "pron2",
          value: "you",
        },
        {
          id: "pron3",
          value: "myself",
        },
        {
          id: "pron4",
          value: "he",
        },
      ],
      correct_answer: "pron3",
      explain:
        "Đại từ 'myself' là đại từ phản thân (reflexive pronoun), trong khi các đại từ còn lại (I, you, he) đều là đại từ nhân xưng (personal pronouns).",
    },
    {
      id: "pron_ex3",
      symbol: "PRON",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn đại từ có loại khác với các đại từ còn lại:",
      options: [
        {
          id: "pron1",
          value: "mine",
        },
        {
          id: "pron2",
          value: "yours",
        },
        {
          id: "pron3",
          value: "his",
        },
        {
          id: "pron4",
          value: "my",
        },
      ],
      correct_answer: "pron4",
      explain:
        "Từ 'my' là tính từ sở hữu (possessive adjective), không phải đại từ sở hữu, trong khi các từ còn lại (mine, yours, his) đều là đại từ sở hữu (possessive pronouns).",
    },
    {
      id: "pron_ex4",
      symbol: "PRON",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn đại từ có loại khác với các đại từ còn lại:",
      options: [
        {
          id: "pron1",
          value: "who",
        },
        {
          id: "pron2",
          value: "which",
        },
        {
          id: "pron3",
          value: "what",
        },
        {
          id: "pron4",
          value: "somebody",
        },
      ],
      correct_answer: "pron4",
      explain:
        "Đại từ 'somebody' là đại từ bất định (indefinite pronoun), trong khi các đại từ còn lại (who, which, what) đều là đại từ nghi vấn (interrogative pronouns).",
    },
    {
      id: "pron_ex5",
      symbol: "PRON",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền đại từ thích hợp vào chỗ trống: 'The book is on the table. Could you give _____ to me?'",
      options: [
        {
          id: "pron1",
          value: "it",
          transcription: "/ɪt/",
          meaning: "nó",
        },
        {
          id: "pron2",
          value: "them",
          transcription: "/ðɛm/",
          meaning: "chúng",
        },
        {
          id: "pron3",
          value: "its",
          transcription: "/ɪts/",
          meaning: "của nó",
        },
        {
          id: "pron4",
          value: "they",
          transcription: "/ðeɪ/",
          meaning: "chúng",
        },
      ],
      correct_answer: "pron1",
      explain:
        "Đại từ 'it' phù hợp nhất trong ngữ cảnh này, vì nó thay thế cho danh từ số ít 'the book' và đóng vai trò tân ngữ trong câu.",
    },
    {
      id: "pron_ex6",
      symbol: "PRON",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn đại từ có loại khác với các đại từ còn lại:",
      options: [
        {
          id: "pron1",
          value: "this",
        },
        {
          id: "pron2",
          value: "that",
        },
        {
          id: "pron3",
          value: "these",
        },
        {
          id: "pron4",
          value: "those ones",
          meaning: "những cái kia",
        },
      ],
      correct_answer: "pron4",
      explain:
        "Cụm từ 'those ones' không phải là đại từ chỉ định đơn lẻ, mà là sự kết hợp của đại từ chỉ định 'those' và đại từ 'ones', trong khi các từ còn lại (this, that, these) đều là đại từ chỉ định (demonstrative pronouns) đơn lẻ.",
    },
    {
      id: "pron_ex7",
      symbol: "PRON",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền đại từ thích hợp vào chỗ trống: 'The students completed _____ assignments on time.'",
      options: [
        {
          id: "pron1",
          value: "his",
          transcription: "/hɪz/",
          meaning: "của anh ấy",
        },
        {
          id: "pron2",
          value: "her",
          transcription: "/hɜːr/",
          meaning: "của cô ấy",
        },
        {
          id: "pron3",
          value: "their",
          transcription: "/ðɛr/",
          meaning: "của họ",
        },
        {
          id: "pron4",
          value: "its",
          transcription: "/ɪts/",
          meaning: "của nó",
        },
      ],
      correct_answer: "pron3",
      explain:
        "Tính từ sở hữu 'their' phù hợp nhất trong ngữ cảnh này, vì nó chỉ sự sở hữu của danh từ số nhiều 'the students'.",
    },
    {
      id: "pron_ex8",
      symbol: "PRON",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn đại từ có loại khác với các đại từ còn lại:",
      options: [
        {
          id: "pron1",
          value: "everyone",
        },
        {
          id: "pron2",
          value: "somebody",
        },
        {
          id: "pron3",
          value: "nothing",
        },
        {
          id: "pron4",
          value: "each other",
          meaning: "lẫn nhau",
        },
      ],
      correct_answer: "pron4",
      explain:
        "Đại từ 'each other' là đại từ hỗ tương (reciprocal pronoun), trong khi các đại từ còn lại (everyone, somebody, nothing) đều là đại từ bất định (indefinite pronouns).",
    },
    {
      id: "pron_ex9",
      symbol: "PRON",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền đại từ thích hợp vào chỗ trống: 'The person _____ called you earlier is my brother.'",
      options: [
        {
          id: "pron1",
          value: "who",
          transcription: "/huː/",
          meaning: "người mà",
        },
        {
          id: "pron2",
          value: "which",
          transcription: "/wɪtʃ/",
          meaning: "cái mà",
        },
        {
          id: "pron3",
          value: "whom",
          transcription: "/huːm/",
          meaning: "người mà (tân ngữ)",
        },
        {
          id: "pron4",
          value: "whose",
          transcription: "/huːz/",
          meaning: "của người mà",
        },
      ],
      correct_answer: "pron1",
      explain:
        "Đại từ quan hệ 'who' phù hợp nhất trong ngữ cảnh này, vì nó được sử dụng để chỉ người (the person) và đóng vai trò chủ ngữ trong mệnh đề quan hệ.",
    },
    {
      id: "pron_ex10",
      symbol: "PRON",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn đại từ có loại khác với các đại từ còn lại:",
      options: [
        {
          id: "pron1",
          value: "myself",
        },
        {
          id: "pron2",
          value: "yourself",
        },
        {
          id: "pron3",
          value: "himself",
        },
        {
          id: "pron4",
          value: "one another",
          meaning: "lẫn nhau",
        },
      ],
      correct_answer: "pron4",
      explain:
        "Đại từ 'one another' là đại từ hỗ tương (reciprocal pronoun), trong khi các đại từ còn lại (myself, yourself, himself) đều là đại từ phản thân (reflexive pronouns).",
    },
    {
      id: "pron_ex11",
      symbol: "PRON",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền đại từ thích hợp vào chỗ trống: '_____ would like to volunteer for the project?'",
      options: [
        {
          id: "pron1",
          value: "Who",
          transcription: "/huː/",
          meaning: "ai",
        },
        {
          id: "pron2",
          value: "Which",
          transcription: "/wɪtʃ/",
          meaning: "cái nào",
        },
        {
          id: "pron3",
          value: "Whom",
          transcription: "/huːm/",
          meaning: "ai (tân ngữ)",
        },
        {
          id: "pron4",
          value: "Whose",
          transcription: "/huːz/",
          meaning: "của ai",
        },
      ],
      correct_answer: "pron1",
      explain:
        "Đại từ nghi vấn 'Who' phù hợp nhất trong ngữ cảnh này, vì nó được sử dụng để hỏi về người và đóng vai trò chủ ngữ trong câu hỏi.",
    },
    {
      id: "pron_ex12",
      symbol: "PRON",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn đại từ có loại khác với các đại từ còn lại:",
      options: [
        {
          id: "pron1",
          value: "anyone",
        },
        {
          id: "pron2",
          value: "everyone",
        },
        {
          id: "pron3",
          value: "someone",
        },
        {
          id: "pron4",
          value: "all",
        },
      ],
      correct_answer: "pron4",
      explain:
        "Đại từ 'all' có thể là đại từ bất định hoặc từ hạn định tùy ngữ cảnh, trong khi các đại từ còn lại (anyone, everyone, someone) đều chỉ là đại từ bất định (indefinite pronouns) chỉ người.",
    },
  ],

  // 11. GIỚI TỪ (PREPOSITIONS) - Thêm 10 phần tử
  prepositions: [
    {
      id: "prep_ex1",
      symbol: "PREP",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn giới từ có cách sử dụng khác với các giới từ còn lại:",
      options: [
        {
          id: "prep1",
          value: "in",
        },
        {
          id: "prep2",
          value: "on",
        },
        {
          id: "prep3",
          value: "at",
        },
        {
          id: "prep4",
          value: "to",
        },
      ],
      correct_answer: "prep4",
      explain:
        "Giới từ 'to' chỉ phương hướng hoặc mục đích, trong khi các giới từ còn lại (in, on, at) đều chỉ vị trí.",
    },
    {
      id: "prep_ex3",
      symbol: "PREP",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn giới từ có cách sử dụng khác với các giới từ còn lại:",
      options: [
        {
          id: "prep1",
          value: "since",
        },
        {
          id: "prep2",
          value: "for",
        },
        {
          id: "prep3",
          value: "during",
        },
        {
          id: "prep4",
          value: "by",
        },
      ],
      correct_answer: "prep4",
      explain:
        "Giới từ 'by' chỉ phương tiện hoặc tác nhân, trong khi các giới từ còn lại (since, for, during) đều chỉ thời gian.",
    },
    {
      id: "prep_ex4",
      symbol: "PREP",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn giới từ có cách sử dụng khác với các giới từ còn lại:",
      options: [
        {
          id: "prep1",
          value: "above",
        },
        {
          id: "prep2",
          value: "below",
        },
        {
          id: "prep3",
          value: "between",
        },
        {
          id: "prep4",
          value: "beside",
        },
      ],
      correct_answer: "prep3",
      explain:
        "Giới từ 'between' chỉ vị trí giữa hai vật/người, trong khi các giới từ còn lại (above, below, beside) đều chỉ vị trí tương đối so với một vật/người.",
    },
    {
      id: "prep_ex5",
      symbol: "PREP",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền giới từ thích hợp vào chỗ trống: 'The book is _____ the table.'",
      options: [
        {
          id: "prep1",
          value: "in",
          transcription: "/ɪn/",
          meaning: "trong",
        },
        {
          id: "prep2",
          value: "on",
          transcription: "/ɒn/",
          meaning: "trên",
        },
        {
          id: "prep3",
          value: "at",
          transcription: "/æt/",
          meaning: "tại",
        },
        {
          id: "prep4",
          value: "by",
          transcription: "/baɪ/",
          meaning: "bên cạnh",
        },
      ],
      correct_answer: "prep2",
      explain:
        "Giới từ 'on' phù hợp nhất trong ngữ cảnh này, vì nó chỉ vị trí của một vật (quyển sách) trên bề mặt của vật khác (cái bàn).",
    },
    {
      id: "prep_ex6",
      symbol: "PREP",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn giới từ có cách sử dụng khác với các giới từ còn lại:",
      options: [
        {
          id: "prep1",
          value: "about",
        },
        {
          id: "prep2",
          value: "of",
        },
        {
          id: "prep3",
          value: "with",
        },
        {
          id: "prep4",
          value: "from",
        },
      ],
      correct_answer: "prep4",
      explain:
        "Giới từ 'from' chỉ nguồn gốc hoặc điểm xuất phát, trong khi các giới từ còn lại (about, of, with) đều chỉ mối quan hệ hoặc sự liên kết.",
    },
    {
      id: "prep_ex7",
      symbol: "PREP",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền giới từ thích hợp vào chỗ trống: 'She has been working here _____ 2010.'",
      options: [
        {
          id: "prep1",
          value: "since",
          transcription: "/sɪns/",
          meaning: "từ khi",
        },
        {
          id: "prep2",
          value: "for",
          transcription: "/fɔːr/",
          meaning: "trong khoảng",
        },
        {
          id: "prep3",
          value: "in",
          transcription: "/ɪn/",
          meaning: "trong",
        },
        {
          id: "prep4",
          value: "at",
          transcription: "/æt/",
          meaning: "tại",
        },
      ],
      correct_answer: "prep1",
      explain:
        "Giới từ 'since' phù hợp nhất trong ngữ cảnh này, vì nó được sử dụng với một thời điểm cụ thể (năm 2010) để chỉ thời gian bắt đầu của một hành động kéo dài đến hiện tại.",
    },
    {
      id: "prep_ex8",
      symbol: "PREP",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn giới từ có cách sử dụng khác với các giới từ còn lại:",
      options: [
        {
          id: "prep1",
          value: "through",
        },
        {
          id: "prep2",
          value: "across",
        },
        {
          id: "prep3",
          value: "over",
        },
        {
          id: "prep4",
          value: "against",
        },
      ],
      correct_answer: "prep4",
      explain:
        "Giới từ 'against' chỉ sự đối lập hoặc chống đối, trong khi các giới từ còn lại (through, across, over) đều chỉ chuyển động qua một không gian.",
    },
    {
      id: "prep_ex9",
      symbol: "PREP",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền giới từ thích hợp vào chỗ trống: 'The cat is hiding _____ the sofa.'",
      options: [
        {
          id: "prep1",
          value: "under",
          transcription: "/ˈʌndər/",
          meaning: "dưới",
        },
        {
          id: "prep2",
          value: "below",
          transcription: "/bɪˈloʊ/",
          meaning: "bên dưới",
        },
        {
          id: "prep3",
          value: "underneath",
          transcription: "/ˌʌndərˈniːθ/",
          meaning: "ở dưới",
        },
        {
          id: "prep4",
          value: "beneath",
          transcription: "/bɪˈniːθ/",
          meaning: "bên dưới",
        },
      ],
      correct_answer: "prep1",
      explain:
        "Giới từ 'under' phù hợp nhất trong ngữ cảnh này, vì nó chỉ vị trí của một vật (con mèo) ở phía dưới và được che khuất bởi vật khác (cái ghế sofa).",
    },
    {
      id: "prep_ex10",
      symbol: "PREP",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn giới từ có cách sử dụng khác với các giới từ còn lại:",
      options: [
        {
          id: "prep1",
          value: "in front of",
          meaning: "phía trước",
        },
        {
          id: "prep2",
          value: "behind",
        },
        {
          id: "prep3",
          value: "next to",
          meaning: "kế bên",
        },
        {
          id: "prep4",
          value: "according to",
          meaning: "theo như",
        },
      ],
      correct_answer: "prep4",
      explain:
        "Giới từ 'according to' chỉ nguồn thông tin hoặc ý kiến, trong khi các giới từ còn lại (in front of, behind, next to) đều chỉ vị trí tương đối trong không gian.",
    },
    {
      id: "prep_ex11",
      symbol: "PREP",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền giới từ thích hợp vào chỗ trống: 'The plane flew _____ the clouds.'",
      options: [
        {
          id: "prep1",
          value: "above",
          transcription: "/əˈbʌv/",
          meaning: "ở trên",
        },
        {
          id: "prep2",
          value: "over",
          transcription: "/ˈoʊvər/",
          meaning: "qua",
        },
        {
          id: "prep3",
          value: "on",
          transcription: "/ɒn/",
          meaning: "trên",
        },
        {
          id: "prep4",
          value: "upon",
          transcription: "/əˈpɒn/",
          meaning: "trên",
        },
      ],
      correct_answer: "prep2",
      explain:
        "Giới từ 'over' phù hợp nhất trong ngữ cảnh này, vì nó chỉ chuyển động của một vật (máy bay) qua phía trên một vật khác (những đám mây).",
    },
    {
      id: "prep_ex12",
      symbol: "PREP",
      type: "multiple_choice",
      typeQuestions: "find_different",
      question: "Chọn giới từ có cách sử dụng khác với các giới từ còn lại:",
      options: [
        {
          id: "prep1",
          value: "because of",
          meaning: "vì",
        },
        {
          id: "prep2",
          value: "due to",
          meaning: "do",
        },
        {
          id: "prep3",
          value: "owing to",
          meaning: "do",
        },
        {
          id: "prep4",
          value: "instead of",
          meaning: "thay vì",
        },
      ],
      correct_answer: "prep4",
      explain:
        "Giới từ 'instead of' chỉ sự thay thế, trong khi các giới từ còn lại (because of, due to, owing to) đều chỉ nguyên nhân.",
    },
  ],
};

// Export statement for module usage
export { grammarData, exercises };
