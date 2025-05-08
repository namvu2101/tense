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
  // 1. ĐỘNG TỪ (VERBS)
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
          underline: "play",
          meaning: "chơi",
        },
        {
          id: "v2",
          value: "stay",
          underline: "stay",
          meaning: "ở lại",
        },
        {
          id: "v3",
          value: "go",
          underline: "go",
          meaning: "đi",
        },
        {
          id: "v4",
          value: "say",
          underline: "say",
          meaning: "nói",
        },
      ],
      correct_answer: "v3",
      explain:
        "Động từ 'go' có dạng quá khứ bất quy tắc là 'went', trong khi các động từ còn lại đều là động từ quy tắc, thêm -ed hoặc -d ở thì quá khứ đơn: played, stayed, said.",
    },
    {
      id: "verb_ex2",
      symbol: "V",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ thích hợp vào chỗ trống: 'She _____ English for five years.'",
      options: [
        {
          id: "v1",
          value: "studies",
          transcription: "/ˈstʌdiz/",
          meaning: "học",
        },
        {
          id: "v2",
          value: "studied",
          transcription: "/ˈstʌdid/",
          meaning: "đã học",
        },
        {
          id: "v3",
          value: "has studied",
          transcription: "/həz ˈstʌdid/",
          meaning: "đã học (cho đến hiện tại)",
        },
        {
          id: "v4",
          value: "is studying",
          transcription: "/ɪz ˈstʌdiɪŋ/",
          meaning: "đang học",
        },
      ],
      correct_answer: "v3",
      explain:
        "Câu này sử dụng thì hiện tại hoàn thành (Present Perfect) để diễn tả hành động bắt đầu trong quá khứ và kéo dài đến hiện tại. Cấu trúc: have/has + V3 (past participle).",
    },
  ],

  // 2. DANH TỪ (NOUNS)
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
          underline: "book",
          meaning: "sách",
        },
        {
          id: "n2",
          value: "pen",
          underline: "pen",
          meaning: "bút",
        },
        {
          id: "n3",
          value: "child",
          underline: "child",
          meaning: "đứa trẻ",
        },
        {
          id: "n4",
          value: "desk",
          underline: "desk",
          meaning: "bàn học",
        },
      ],
      correct_answer: "n3",
      explain:
        "Danh từ 'child' có dạng số nhiều bất quy tắc là 'children', trong khi các danh từ còn lại đều thêm -s để tạo thành số nhiều: books, pens, desks.",
    },
    {
      id: "noun_ex2",
      symbol: "N",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền danh từ thích hợp vào chỗ trống: 'I need some _____ for my project.'",
      options: [
        {
          id: "n1",
          value: "informations",
          transcription: "/ˌɪnfərˈmeɪʃənz/",
          meaning: "thông tin (sai)",
        },
        {
          id: "n2",
          value: "information",
          transcription: "/ˌɪnfərˈmeɪʃən/",
          meaning: "thông tin",
        },
        {
          id: "n3",
          value: "knowledges",
          transcription: "/ˈnɒlɪdʒɪz/",
          meaning: "kiến thức (sai)",
        },
        {
          id: "n4",
          value: "datas",
          transcription: "/ˈdeɪtəz/",
          meaning: "dữ liệu (sai)",
        },
      ],
      correct_answer: "n2",
      explain:
        "Danh từ 'information' là danh từ không đếm được, không có hình thức số nhiều. Các danh từ không đếm được khác như 'knowledge' và 'data' (trong tiếng Anh hiện đại) cũng không thêm -s.",
    },
  ],

  // 3. TÍNH TỪ (ADJECTIVES)
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
          underline: "tall",
          meaning: "cao",
        },
        {
          id: "a2",
          value: "short",
          underline: "short",
          meaning: "ngắn",
        },
        {
          id: "a3",
          value: "beautiful",
          underline: "beautiful",
          meaning: "đẹp",
        },
        {
          id: "a4",
          value: "fast",
          underline: "fast",
          meaning: "nhanh",
        },
      ],
      correct_answer: "a3",
      explain:
        "Tính từ 'beautiful' có nhiều hơn 2 âm tiết nên tạo dạng so sánh hơn bằng cách thêm 'more' phía trước: 'more beautiful'. Các tính từ còn lại đều có 1 âm tiết nên thêm '-er': taller, shorter, faster.",
    },
    {
      id: "adj_ex2",
      symbol: "ADJ",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền tính từ thích hợp vào chỗ trống: 'The movie was _____ than I expected.'",
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
          transcription: "/ˈbetər/",
          meaning: "tốt hơn",
        },
        {
          id: "a3",
          value: "best",
          transcription: "/best/",
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
        "Câu này cần dùng dạng so sánh hơn của tính từ 'good', đó là 'better'. 'Good' là tính từ bất quy tắc với các dạng so sánh: good - better - best.",
    },
  ],

  // 4. CỤM ĐỘNG TỪ (PHRASAL VERBS)
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
          underline: "look after",
          meaning: "chăm sóc",
        },
        {
          id: "pv2",
          value: "turn on",
          underline: "turn on",
          meaning: "bật",
        },
        {
          id: "pv3",
          value: "give up",
          underline: "give up",
          meaning: "từ bỏ",
        },
        {
          id: "pv4",
          value: "run into",
          underline: "run into",
          meaning: "tình cờ gặp",
        },
      ],
      correct_answer: "pv1",
      explain:
        "Cụm động từ 'look after' là cụm động từ không tách được (inseparable). Các cụm động từ còn lại đều có thể tách được: turn on (turn it on), give up (give it up), run into (run it into).",
    },
    {
      id: "pv_ex2",
      symbol: "PV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền cụm động từ thích hợp vào chỗ trống: 'Please _____ the TV when you leave the room.'",
      options: [
        {
          id: "pv1",
          value: "turn on",
          transcription: "/tɜːrn ɒn/",
          meaning: "bật",
        },
        {
          id: "pv2",
          value: "turn off",
          transcription: "/tɜːrn ɒf/",
          meaning: "tắt",
        },
        {
          id: "pv3",
          value: "turn up",
          transcription: "/tɜːrn ʌp/",
          meaning: "tăng âm lượng",
        },
        {
          id: "pv4",
          value: "turn down",
          transcription: "/tɜːrn daʊn/",
          meaning: "giảm âm lượng",
        },
      ],
      correct_answer: "pv2",
      explain:
        "Cụm động từ 'turn off' (tắt) phù hợp với ngữ cảnh này, vì thông thường khi rời khỏi phòng, chúng ta nên tắt TV để tiết kiệm điện.",
    },
  ],

  // 5. ĐỘNG TỪ KHUYẾT THIẾU (MODAL VERBS)
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
          underline: "can",
          meaning: "có thể",
        },
        {
          id: "mv2",
          value: "must",
          underline: "must",
          meaning: "phải",
        },
        {
          id: "mv3",
          value: "should",
          underline: "should",
          meaning: "nên",
        },
        {
          id: "mv4",
          value: "have to",
          underline: "have to",
          meaning: "phải",
        },
      ],
      correct_answer: "mv4",
      explain:
        "Động từ 'have to' khác với các động từ khuyết thiếu còn lại ở chỗ nó có thể chia theo thì (has to, had to, will have to), trong khi các động từ khuyết thiếu thực sự như can, must, should không thay đổi hình thức theo thì.",
    },
    {
      id: "mv_ex2",
      symbol: "MV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ khuyết thiếu thích hợp vào chỗ trống: 'You _____ study harder if you want to pass the exam.'",
      options: [
        {
          id: "mv1",
          value: "can",
          transcription: "/kæn/",
          meaning: "có thể",
        },
        {
          id: "mv2",
          value: "must",
          transcription: "/mʌst/",
          meaning: "phải",
        },
        {
          id: "mv3",
          value: "should",
          transcription: "/ʃʊd/",
          meaning: "nên",
        },
        {
          id: "mv4",
          value: "might",
          transcription: "/maɪt/",
          meaning: "có thể",
        },
      ],
      correct_answer: "mv3",
      explain:
        "Động từ khuyết thiếu 'should' phù hợp nhất trong ngữ cảnh này, vì nó diễn tả lời khuyên hoặc điều nên làm để đạt được kết quả tốt.",
    },
  ],

  // 6. MẠO TỪ (ARTICLES)
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
          underline: "a",
          meaning: "Tôi thấy một con chó trong công viên.",
        },
        {
          id: "art2",
          value: "She is an engineer.",
          underline: "an",
          meaning: "Cô ấy là một kỹ sư.",
        },
        {
          id: "art3",
          value: "The sun rises in the east.",
          underline: "The",
          meaning: "Mặt trời mọc ở phía đông.",
        },
        {
          id: "art4",
          value: "I have an apple and a banana.",
          underline: "an",
          meaning: "Tôi có một quả táo và một quả chuối.",
        },
      ],
      correct_answer: "art3",
      explain:
        "Câu 'The sun rises in the east' sử dụng mạo từ 'the' để chỉ vật duy nhất (mặt trời), trong khi các câu còn lại sử dụng mạo từ không xác định 'a/an' để chỉ một vật không xác định.",
    },
    {
      id: "art_ex2",
      symbol: "ART",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền mạo từ thích hợp vào chỗ trống: 'She is _____ honest person.'",
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
      correct_answer: "art2",
      explain:
        "Mặc dù 'honest' bắt đầu bằng chữ cái 'h', nhưng 'h' trong từ này không được phát âm, nên từ này bắt đầu bằng âm nguyên âm /ɒ/. Do đó, chúng ta sử dụng mạo từ 'an' trước từ 'honest'.",
    },
  ],

  // 7. TỪ HẠN ĐỊNH (DETERMINERS)
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
          underline: "many",
          meaning: "nhiều",
        },
        {
          id: "det2",
          value: "few",
          underline: "few",
          meaning: "ít",
        },
        {
          id: "det3",
          value: "several",
          underline: "several",
          meaning: "vài",
        },
        {
          id: "det4",
          value: "much",
          underline: "much",
          meaning: "nhiều",
        },
      ],
      correct_answer: "det4",
      explain:
        "Từ hạn định 'much' được sử dụng với danh từ không đếm được, trong khi các từ hạn định còn lại (many, few, several) được sử dụng với danh từ đếm được số nhiều.",
    },
    {
      id: "det_ex2",
      symbol: "DET",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền từ hạn định thích hợp vào chỗ trống: '_____ student in the class must complete the assignment.'",
      options: [
        {
          id: "det1",
          value: "Each",
          transcription: "/iːtʃ/",
          meaning: "mỗi",
        },
        {
          id: "det2",
          value: "Every",
          transcription: "/ˈevri/",
          meaning: "mỗi",
        },
        {
          id: "det3",
          value: "Some",
          transcription: "/sʌm/",
          meaning: "một số",
        },
        {
          id: "det4",
          value: "All",
          transcription: "/ɔːl/",
          meaning: "tất cả",
        },
      ],
      correct_answer: "det2",
      explain:
        "Từ hạn định 'Every' phù hợp nhất trong ngữ cảnh này, vì nó nhấn mạnh rằng tất cả học sinh, không trừ ai, đều phải hoàn thành bài tập. 'Each' cũng có thể dùng nhưng thường nhấn mạnh đến từng cá nhân riêng lẻ.",
    },
  ],

  // 8. ĐỘNG TỪ NỐI (LINKING VERBS)
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
          underline: "is",
          meaning: "Cô ấy là bác sĩ.",
        },
        {
          id: "lv2",
          value: "The food tastes delicious.",
          underline: "tastes",
          meaning: "Thức ăn có vị ngon.",
        },
        {
          id: "lv3",
          value: "He became famous after the movie.",
          underline: "became",
          meaning: "Anh ấy trở nên nổi tiếng sau bộ phim.",
        },
        {
          id: "lv4",
          value: "They watched a movie last night.",
          underline: "watched",
          meaning: "Họ xem một bộ phim tối qua.",
        },
      ],
      correct_answer: "lv4",
      explain:
        "Động từ 'watched' trong câu 'They watched a movie last night' là một động từ hành động (action verb), không phải động từ nối. Các động từ còn lại (is, tastes, became) đều là động từ nối, kết nối chủ ngữ với bổ ngữ.",
    },
    {
      id: "lv_ex2",
      symbol: "LV",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền động từ nối thích hợp vào chỗ trống: 'The soup _____ delicious.'",
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
          value: "makes",
          transcription: "/meɪks/",
          meaning: "làm",
        },
      ],
      correct_answer: "lv1",
      explain:
        "Động từ nối 'tastes' phù hợp nhất trong ngữ cảnh này, vì nó kết nối chủ ngữ 'soup' với tính từ 'delicious' để mô tả vị của món súp. Các động từ còn lại là động từ hành động, không phải động từ nối.",
    },
  ],

  // 9. LIÊN TỪ (CONJUNCTIONS)
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
          underline: "and",
          meaning: "và",
        },
        {
          id: "conj2",
          value: "but",
          underline: "but",
          meaning: "nhưng",
        },
        {
          id: "conj3",
          value: "or",
          underline: "or",
          meaning: "hoặc",
        },
        {
          id: "conj4",
          value: "because",
          underline: "because",
          meaning: "bởi vì",
        },
      ],
      correct_answer: "conj4",
      explain:
        "Liên từ 'because' là liên từ phụ thuộc (subordinating conjunction), trong khi các liên từ còn lại (and, but, or) đều là liên từ kết hợp (coordinating conjunctions).",
    },
    {
      id: "conj_ex2",
      symbol: "CONJ",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền liên từ thích hợp vào chỗ trống: 'She can speak _____ English _____ French.'",
      options: [
        {
          id: "conj1",
          value: "both...and",
          transcription: "/boʊθ...ænd/",
          meaning: "cả...và",
        },
        {
          id: "conj2",
          value: "either...or",
          transcription: "/ˈaɪðər...ɔːr/",
          meaning: "hoặc...hoặc",
        },
        {
          id: "conj3",
          value: "neither...nor",
          transcription: "/ˈnaɪðər...nɔːr/",
          meaning: "không...cũng không",
        },
        {
          id: "conj4",
          value: "not only...but also",
          transcription: "/nɒt ˈoʊnli...bʌt ˈɔːlsoʊ/",
          meaning: "không chỉ...mà còn",
        },
      ],
      correct_answer: "conj1",
      explain:
        "Liên từ tương quan 'both...and' phù hợp nhất trong ngữ cảnh này, vì nó diễn tả khả năng nói cả hai ngôn ngữ (tiếng Anh và tiếng Pháp).",
    },
  ],

  // 10. ĐẠI TỪ (PRONOUNS)
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
          underline: "I",
          meaning: "tôi",
        },
        {
          id: "pron2",
          value: "you",
          underline: "you",
          meaning: "bạn",
        },
        {
          id: "pron3",
          value: "myself",
          underline: "myself",
          meaning: "chính tôi",
        },
        {
          id: "pron4",
          value: "he",
          underline: "he",
          meaning: "anh ấy",
        },
      ],
      correct_answer: "pron3",
      explain:
        "Đại từ 'myself' là đại từ phản thân (reflexive pronoun), trong khi các đại từ còn lại (I, you, he) đều là đại từ nhân xưng (personal pronouns).",
    },
    {
      id: "pron_ex2",
      symbol: "PRON",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền đại từ thích hợp vào chỗ trống: 'The man _____ lives next door is a doctor.'",
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
          value: "whose",
          transcription: "/huːz/",
          meaning: "của người mà",
        },
        {
          id: "pron4",
          value: "whom",
          transcription: "/huːm/",
          meaning: "người mà (tân ngữ)",
        },
      ],
      correct_answer: "pron1",
      explain:
        "Đại từ quan hệ 'who' phù hợp nhất trong ngữ cảnh này, vì nó được sử dụng để chỉ người (the man) và đóng vai trò chủ ngữ trong mệnh đề quan hệ.",
    },
  ],

  // 11. GIỚI TỪ (PREPOSITIONS)
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
          underline: "in",
          meaning: "trong",
        },
        {
          id: "prep2",
          value: "on",
          underline: "on",
          meaning: "trên",
        },
        {
          id: "prep3",
          value: "at",
          underline: "at",
          meaning: "tại",
        },
        {
          id: "prep4",
          value: "to",
          underline: "to",
          meaning: "đến",
        },
      ],
      correct_answer: "prep4",
      explain:
        "Giới từ 'to' chỉ phương hướng hoặc mục đích, trong khi các giới từ còn lại (in, on, at) đều chỉ vị trí.",
    },
    {
      id: "prep_ex2",
      symbol: "PREP",
      type: "fill_to_the_blank",
      typeQuestions: "find_pronounce",
      question:
        "Điền giới từ thích hợp vào chỗ trống: 'The meeting is scheduled _____ 3 o'clock _____ Monday.'",
      options: [
        {
          id: "prep1",
          value: "at...on",
          transcription: "/æt...ɒn/",
          meaning: "vào lúc...vào",
        },
        {
          id: "prep2",
          value: "in...on",
          transcription: "/ɪn...ɒn/",
          meaning: "trong...vào",
        },
        {
          id: "prep3",
          value: "on...at",
          transcription: "/ɒn...æt/",
          meaning: "vào...vào lúc",
        },
        {
          id: "prep4",
          value: "at...in",
          transcription: "/æt...ɪn/",
          meaning: "vào lúc...trong",
        },
      ],
      correct_answer: "prep1",
      explain:
        "Giới từ 'at' được sử dụng với giờ cụ thể (3 o'clock) và giới từ 'on' được sử dụng với ngày trong tuần (Monday).",
    },
  ],
};


// Export statement for module usage
export { grammarData, exercises };
