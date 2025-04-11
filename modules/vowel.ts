import { TIPA } from "./types";

const vowels: TIPA[] = [
  {
    symbol: "/ɪ/",
    type: "short vowel",
    keyword: "sit",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai2/u2.mp3",
    description:
      "Âm /ɪ/ là một nguyên âm ngắn. Khi phát âm, miệng mở hơi hẹp, môi thư giãn, lưỡi được nâng lên gần vòm miệng trên nhưng thấp hơn âm /iː/. Âm này được phát âm ngắn và nhanh, không kéo dài.",
    articulation:
      "Lưỡi nâng vừa phải về phía trước, môi hơi mở tự nhiên, không căng. Âm phát ra ngắn, nhanh.",
    examples: [
      {
        value: "sit",
        transcription: "/sɪt/",
        audio: "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai2/sit.mp3",
        meaning: "ngồi",
      },
      {
        value: "fish",
        transcription: "/fɪʃ/",
        audio: "",
        meaning: "cá",
      },
      {
        value: "milk",
        transcription: "/mɪlk/",
        audio: "",
        meaning: "sữa",
      },
      {
        value: "big",
        transcription: "/bɪɡ/",
        audio: "",
        meaning: "to lớn",
      },
      {
        value: "win",
        transcription: "/wɪn/",
        audio: "",
        meaning: "chiến thắng",
      },
    ],
    exceptions: [
      {
        value: "women",
        transcription: "/ˈwɪmɪn/",
        audio: "",
        meaning: "phụ nữ",
      },
      {
        value: "busy",
        transcription: "/ˈbɪzi/",
        audio: "",
        meaning: "bận rộn",
      },
      {
        value: "business",
        transcription: "/ˈbɪznəs/",
        audio: "",
        meaning: "kinh doanh",
      },
    ],
    identify: {
      i: [
        {
          value: "sit",
          transcription: "/sɪt/",
          audio: "",
          meaning: "ngồi",
        },
        {
          value: "fish",
          transcription: "/fɪʃ/",
          audio: "",
          meaning: "cá",
        },
      ],
      y: [
        {
          value: "gym",
          transcription: "/dʒɪm/",
          audio: "",
          meaning: "phòng tập thể dục",
        },
        {
          value: "symbol",
          transcription: "/ˈsɪmbəl/",
          audio: "",
          meaning: "biểu tượng",
        },
      ],
      ui: [
        {
          value: "build",
          transcription: "/bɪld/",
          audio: "",
          meaning: "xây dựng",
        },
        {
          value: "guilt",
          transcription: "/ɡɪlt/",
          audio: "",
          meaning: "cảm giác tội lỗi",
        },
      ],
    },
  },
  {
    symbol: "/e/",
    type: "short vowel",
    keyword: "bed",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai3/u3.mp3",
    description:
      "Âm /e/ là một nguyên âm ngắn. Khi phát âm, miệng mở vừa phải, môi hơi căng, lưỡi được nâng lên ở vị trí trung bình phía trước miệng. Âm này được phát âm ngắn và nhanh.",
    articulation:
      "Lưỡi nâng ở vị trí trung bình phía trước miệng, miệng mở vừa phải, môi hơi căng. Âm phát ra ngắn, nhanh.",
    examples: [
      {
        value: "bed",
        transcription: "/bed/",
        audio: "",
        meaning: "giường",
      },
      {
        value: "head",
        transcription: "/hed/",
        audio: "",
        meaning: "đầu",
      },
      {
        value: "red",
        transcription: "/red/",
        audio: "",
        meaning: "màu đỏ",
      },
      {
        value: "egg",
        transcription: "/eɡ/",
        audio: "",
        meaning: "trứng",
      },
      {
        value: "friend",
        transcription: "/frend/",
        audio: "",
        meaning: "bạn bè",
      },
    ],
    exceptions: [
      {
        value: "said",
        transcription: "/sed/",
        audio: "",
        meaning: "đã nói",
      },
      {
        value: "many",
        transcription: "/ˈmeni/",
        audio: "",
        meaning: "nhiều",
      },
      {
        value: "bury",
        transcription: "/ˈberi/",
        audio: "",
        meaning: "chôn cất",
      },
    ],
    identify: {
      e: [
        {
          value: "bed",
          transcription: "/bed/",
          audio: "",
          meaning: "giường",
        },
        {
          value: "egg",
          transcription: "/eɡ/",
          audio: "",
          meaning: "trứng",
        },
      ],
      ea: [
        {
          value: "head",
          transcription: "/hed/",
          audio: "",
          meaning: "đầu",
        },
        {
          value: "bread",
          transcription: "/bred/",
          audio: "",
          meaning: "bánh mì",
        },
      ],
      ai: [
        {
          value: "said",
          transcription: "/sed/",
          audio: "",
          meaning: "đã nói",
        },
      ],
    },
  },
  {
    symbol: "/æ/",
    type: "short vowel",
    keyword: "cat",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai4/u4.mp3",
    description:
      "Âm /æ/ là một nguyên âm ngắn. Khi phát âm, miệng mở rộng, môi căng ra, lưỡi được đặt thấp ở phía trước miệng. Âm này được phát âm ngắn và nhanh.",
    articulation:
      "Lưỡi đặt thấp ở phía trước miệng, miệng mở rộng, môi căng ra. Âm phát ra ngắn, nhanh.",
    examples: [
      {
        value: "cat",
        transcription: "/kæt/",
        audio: "",
        meaning: "con mèo",
      },
      {
        value: "hat",
        transcription: "/hæt/",
        audio: "",
        meaning: "cái mũ",
      },
      {
        value: "map",
        transcription: "/mæp/",
        audio: "",
        meaning: "bản đồ",
      },
      {
        value: "bad",
        transcription: "/bæd/",
        audio: "",
        meaning: "tồi tệ",
      },
      {
        value: "hand",
        transcription: "/hænd/",
        audio: "",
        meaning: "bàn tay",
      },
    ],
    exceptions: [
      {
        value: "plaid",
        transcription: "/plæd/",
        audio: "",
        meaning: "kẻ ca rô",
      },
      {
        value: "laugh",
        transcription: "/læf/",
        audio: "",
        meaning: "cười",
      },
    ],
    identify: {
      a: [
        {
          value: "cat",
          transcription: "/kæt/",
          audio: "",
          meaning: "con mèo",
        },
        {
          value: "hat",
          transcription: "/hæt/",
          audio: "",
          meaning: "cái mũ",
        },
      ],
      ai: [
        {
          value: "plaid",
          transcription: "/plæd/",
          audio: "",
          meaning: "kẻ ca rô",
        },
      ],
      au: [
        {
          value: "laugh",
          transcription: "/læf/",
          audio: "",
          meaning: "cười",
        },
      ],
    },
  },
  {
    symbol: "/ʌ/",
    type: "short vowel",
    keyword: "cup",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai5/u5.mp3",
    description:
      "Âm /ʌ/ là một nguyên âm ngắn. Khi phát âm, miệng mở vừa phải, môi thư giãn, lưỡi được đặt ở vị trí trung tâm miệng. Âm này được phát âm ngắn và nhanh.",
    articulation:
      "Lưỡi đặt ở vị trí trung tâm miệng, miệng mở vừa phải, môi thư giãn. Âm phát ra ngắn, nhanh.",
    examples: [
      {
        value: "cup",
        transcription: "/kʌp/",
        audio: "",
        meaning: "cái cốc",
      },
      {
        value: "bus",
        transcription: "/bʌs/",
        audio: "",
        meaning: "xe buýt",
      },
      {
        value: "love",
        transcription: "/lʌv/",
        audio: "",
        meaning: "tình yêu",
      },
      {
        value: "sun",
        transcription: "/sʌn/",
        audio: "",
        meaning: "mặt trời",
      },
      {
        value: "money",
        transcription: "/ˈmʌni/",
        audio: "",
        meaning: "tiền",
      },
    ],
    exceptions: [
      {
        value: "blood",
        transcription: "/blʌd/",
        audio: "",
        meaning: "máu",
      },
      {
        value: "flood",
        transcription: "/flʌd/",
        audio: "",
        meaning: "lũ lụt",
      },
      {
        value: "country",
        transcription: "/ˈkʌntri/",
        audio: "",
        meaning: "quốc gia",
      },
    ],
    identify: {
      u: [
        {
          value: "cup",
          transcription: "/kʌp/",
          audio: "",
          meaning: "cái cốc",
        },
        {
          value: "bus",
          transcription: "/bʌs/",
          audio: "",
          meaning: "xe buýt",
        },
      ],
      o: [
        {
          value: "love",
          transcription: "/lʌv/",
          audio: "",
          meaning: "tình yêu",
        },
        {
          value: "money",
          transcription: "/ˈmʌni/",
          audio: "",
          meaning: "tiền",
        },
      ],
      oo: [
        {
          value: "blood",
          transcription: "/blʌd/",
          audio: "",
          meaning: "máu",
        },
        {
          value: "flood",
          transcription: "/flʌd/",
          audio: "",
          meaning: "lũ lụt",
        },
      ],
    },
  },
  {
    symbol: "/ʊ/",
    type: "short vowel",
    keyword: "put",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai9/u9.mp3",
    description:
      "Âm /ʊ/ là một nguyên âm ngắn. Khi phát âm, miệng mở hẹp và tròn, môi hơi nhô ra, lưỡi được nâng lên ở phía sau miệng nhưng thấp hơn âm /uː/. Âm này được phát âm ngắn và nhanh.",
    articulation:
      "Lưỡi nâng lên ở phía sau miệng, miệng mở hẹp và tròn, môi hơi nhô ra. Âm phát ra ngắn, nhanh.",
    examples: [
      {
        value: "put",
        transcription: "/pʊt/",
        audio: "",
        meaning: "đặt",
      },
      {
        value: "book",
        transcription: "/bʊk/",
        audio: "",
        meaning: "sách",
      },
      {
        value: "good",
        transcription: "/ɡʊd/",
        audio: "",
        meaning: "tốt",
      },
      {
        value: "foot",
        transcription: "/fʊt/",
        audio: "",
        meaning: "bàn chân",
      },
      {
        value: "push",
        transcription: "/pʊʃ/",
        audio: "",
        meaning: "đẩy",
      },
    ],
    exceptions: [
      {
        value: "woman",
        transcription: "/ˈwʊmən/",
        audio: "",
        meaning: "phụ nữ",
      },
      {
        value: "wolf",
        transcription: "/wʊlf/",
        audio: "",
        meaning: "sói",
      },
    ],
    identify: {
      u: [
        {
          value: "put",
          transcription: "/pʊt/",
          audio: "",
          meaning: "đặt",
        },
        {
          value: "push",
          transcription: "/pʊʃ/",
          audio: "",
          meaning: "đẩy",
        },
      ],
      oo: [
        {
          value: "book",
          transcription: "/bʊk/",
          audio: "",
          meaning: "sách",
        },
        {
          value: "foot",
          transcription: "/fʊt/",
          audio: "",
          meaning: "bàn chân",
        },
      ],
      o: [
        {
          value: "woman",
          transcription: "/ˈwʊmən/",
          audio: "",
          meaning: "phụ nữ",
        },
        {
          value: "wolf",
          transcription: "/wʊlf/",
          audio: "",
          meaning: "sói",
        },
      ],
    },
  },
  {
    symbol: "/ɒ/",
    type: "short vowel",
    keyword: "hot",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai7/u7.mp3",
    description:
      "Âm /ɒ/ là một nguyên âm ngắn. Khi phát âm, miệng mở rộng và tròn, môi hơi nhô ra, lưỡi được đặt thấp ở phía sau miệng. Âm này được phát âm ngắn và nhanh.",
    articulation:
      "Lưỡi đặt thấp ở phía sau miệng, miệng mở rộng và tròn, môi hơi nhô ra. Âm phát ra ngắn, nhanh.",
    examples: [
      {
        value: "hot",
        transcription: "/hɒt/",
        audio: "",
        meaning: "nóng",
      },
      {
        value: "dog",
        transcription: "/dɒɡ/",
        audio: "",
        meaning: "chó",
      },
      {
        value: "stop",
        transcription: "/stɒp/",
        audio: "",
        meaning: "dừng lại",
      },
      {
        value: "box",
        transcription: "/bɒks/",
        audio: "",
        meaning: "hộp",
      },
      {
        value: "watch",
        transcription: "/wɒtʃ/",
        audio: "",
        meaning: "đồng hồ đeo tay",
      },
    ],
    exceptions: [
      {
        value: "want",
        transcription: "/wɒnt/",
        audio: "",
        meaning: "muốn",
      },
      {
        value: "wash",
        transcription: "/wɒʃ/",
        audio: "",
        meaning: "rửa",
      },
    ],
    identify: {
      o: [
        {
          value: "hot",
          transcription: "/hɒt/",
          audio: "",
          meaning: "nóng",
        },
        {
          value: "dog",
          transcription: "/dɒɡ/",
          audio: "",
          meaning: "chó",
        },
      ],
      a: [
        {
          value: "want",
          transcription: "/wɒnt/",
          audio: "",
          meaning: "muốn",
        },
        {
          value: "wash",
          transcription: "/wɒʃ/",
          audio: "",
          meaning: "rửa",
        },
      ],
    },
  },
  {
    symbol: "/ə/",
    type: "short vowel",
    keyword: "about",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai12/u12.mp3",
    description:
      "Âm /ə/ là một nguyên âm ngắn, còn được gọi là âm trung hòa (schwa). Khi phát âm, miệng mở vừa phải, môi thư giãn, lưỡi được đặt ở vị trí trung tâm miệng. Âm này được phát âm ngắn, nhẹ và thường xuất hiện trong các âm tiết không nhấn.",
    articulation:
      "Lưỡi đặt ở vị trí trung tâm miệng, miệng mở vừa phải, môi thư giãn. Âm phát ra ngắn, nhẹ.",
    examples: [
      {
        value: "about",
        transcription: "/əˈbaʊt/",
        audio: "",
        meaning: "về",
      },
      {
        value: "banana",
        transcription: "/bəˈnɑːnə/",
        audio: "",
        meaning: "chuối",
      },
      {
        value: "computer",
        transcription: "/kəmˈpjuːtə(r)/",
        audio: "",
        meaning: "máy tính",
      },
      {
        value: "teacher",
        transcription: "/ˈtiːtʃə(r)/",
        audio: "",
        meaning: "giáo viên",
      },
      {
        value: "camera",
        transcription: "/ˈkæmərə/",
        audio: "",
        meaning: "máy ảnh",
      },
    ],
    exceptions: [
      {
        value: "the",
        transcription: "/ðə/",
        audio: "",
        meaning: "cái, con, người (mạo từ)",
      },
      {
        value: "a",
        transcription: "/ə/",
        audio: "",
        meaning: "một (mạo từ)",
      },
    ],
    identify: {
      a: [
        {
          value: "about",
          transcription: "/əˈbaʊt/",
          audio: "",
          meaning: "về",
        },
        {
          value: "banana",
          transcription: "/bəˈnɑːnə/",
          audio: "",
          meaning: "chuối",
        },
      ],
      e: [
        {
          value: "teacher",
          transcription: "/ˈtiːtʃə(r)/",
          audio: "",
          meaning: "giáo viên",
        },
        {
          value: "camera",
          transcription: "/ˈkæmərə/",
          audio: "",
          meaning: "máy ảnh",
        },
      ],
      o: [
        {
          value: "computer",
          transcription: "/kəmˈpjuːtə(r)/",
          audio: "",
          meaning: "máy tính",
        },
        {
          value: "memory",
          transcription: "/ˈmeməri/",
          audio: "",
          meaning: "bộ nhớ",
        },
      ],
    },
  },
  {
    symbol: "/iː/",
    type: "long vowel",
    keyword: "see",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai1/u1.mp3",
    description:
      "Âm /iː/ là một nguyên âm dài. Khi phát âm, miệng mở hẹp, môi hơi căng và kéo về hai bên, lưỡi được nâng cao về phía trước gần vòm miệng. Âm này được phát âm dài và kéo dài hơn so với âm /ɪ/.",
    articulation:
      "Lưỡi nâng cao về phía trước, môi hơi căng và kéo về hai bên. Âm phát ra dài và kéo dài.",
    examples: [
      {
        value: "see",
        transcription: "/siː/",
        audio: "",
        meaning: "nhìn thấy",
      },
      {
        value: "eat",
        transcription: "/iːt/",
        audio: "",
        meaning: "ăn",
      },
      {
        value: "sheep",
        transcription: "/ʃiːp/",
        audio: "",
        meaning: "con cừu",
      },
      {
        value: "feel",
        transcription: "/fiːl/",
        audio: "",
        meaning: "cảm thấy",
      },
      {
        value: "meet",
        transcription: "/miːt/",
        audio: "",
        meaning: "gặp gỡ",
      },
    ],
    exceptions: [
      {
        value: "people",
        transcription: "/ˈpiːpl/",
        audio: "",
        meaning: "người",
      },
      {
        value: "key",
        transcription: "/kiː/",
        audio: "",
        meaning: "chìa khóa",
      },
      {
        value: "receive",
        transcription: "/rɪˈsiːv/",
        audio: "",
        meaning: "nhận",
      },
    ],
    identify: {
      ee: [
        {
          value: "see",
          transcription: "/siː/",
          audio: "",
          meaning: "nhìn thấy",
        },
        {
          value: "sheep",
          transcription: "/ʃiːp/",
          audio: "",
          meaning: "con cừu",
        },
      ],
      ea: [
        {
          value: "eat",
          transcription: "/iːt/",
          audio: "",
          meaning: "ăn",
        },
        {
          value: "teach",
          transcription: "/tiːtʃ/",
          audio: "",
          meaning: "dạy",
        },
      ],
      e: [
        {
          value: "me",
          transcription: "/miː/",
          audio: "",
          meaning: "tôi",
        },
        {
          value: "be",
          transcription: "/biː/",
          audio: "",
          meaning: "là",
        },
      ],
      ie: [
        {
          value: "field",
          transcription: "/fiːld/",
          audio: "",
          meaning: "cánh đồng",
        },
        {
          value: "believe",
          transcription: "/bɪˈliːv/",
          audio: "",
          meaning: "tin tưởng",
        },
      ],
    },
  },
  {
    symbol: "/ɑː/",
    type: "long vowel",
    keyword: "car",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai6/u6.mp3",
    description:
      "Âm /ɑː/ là một nguyên âm dài. Khi phát âm, miệng mở rộng, môi thư giãn, lưỡi được đặt thấp ở phía sau miệng. Âm này được phát âm dài và kéo dài.",
    articulation:
      "Lưỡi đặt thấp ở phía sau miệng, miệng mở rộng, môi thư giãn. Âm phát ra dài và kéo dài.",
    examples: [
      {
        value: "car",
        transcription: "/kɑː(r)/",
        audio: "",
        meaning: "xe hơi",
      },
      {
        value: "heart",
        transcription: "/hɑːt/",
        audio: "",
        meaning: "trái tim",
      },
      {
        value: "father",
        transcription: "/ˈfɑːðə(r)/",
        audio: "",
        meaning: "cha",
      },
      {
        value: "calm",
        transcription: "/kɑːm/",
        audio: "",
        meaning: "bình tĩnh",
      },
      {
        value: "start",
        transcription: "/stɑːt/",
        audio: "",
        meaning: "bắt đầu",
      },
    ],
    exceptions: [
      {
        value: "aunt",
        transcription: "/ɑːnt/",
        audio: "",
        meaning: "dì, cô",
      },
      {
        value: "laugh",
        transcription: "/lɑːf/",
        audio: "",
        meaning: "cười (phát âm Mỹ)",
      },
    ],
    identify: {
      ar: [
        {
          value: "car",
          transcription: "/kɑː(r)/",
          audio: "",
          meaning: "xe hơi",
        },
        {
          value: "start",
          transcription: "/stɑːt/",
          audio: "",
          meaning: "bắt đầu",
        },
      ],
      a: [
        {
          value: "father",
          transcription: "/ˈfɑːðə(r)/",
          audio: "",
          meaning: "cha",
        },
        {
          value: "calm",
          transcription: "/kɑːm/",
          audio: "",
          meaning: "bình tĩnh",
        },
      ],
      ear: [
        {
          value: "heart",
          transcription: "/hɑːt/",
          audio: "",
          meaning: "trái tim",
        },
      ],
    },
  },
  {
    symbol: "/ɔː/",
    type: "long vowel",
    keyword: "call",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai8/u8.mp3",
    description:
      "Âm /ɔː/ là một nguyên âm dài. Khi phát âm, miệng mở rộng và tròn, môi nhô ra, lưỡi được đặt thấp ở phía sau miệng. Âm này được phát âm dài và kéo dài.",
    articulation:
      "Lưỡi đặt thấp ở phía sau miệng, miệng mở rộng và tròn, môi nhô ra. Âm phát ra dài và kéo dài.",
    examples: [
      {
        value: "call",
        transcription: "/kɔːl/",
        audio: "",
        meaning: "gọi",
      },
      {
        value: "walk",
        transcription: "/wɔːk/",
        audio: "",
        meaning: "đi bộ",
      },
      {
        value: "door",
        transcription: "/dɔː(r)/",
        audio: "",
        meaning: "cửa",
      },
      {
        value: "more",
        transcription: "/mɔː(r)/",
        audio: "",
        meaning: "nhiều hơn",
      },
      {
        value: "thought",
        transcription: "/θɔːt/",
        audio: "",
        meaning: "suy nghĩ",
      },
    ],
    exceptions: [
      {
        value: "broad",
        transcription: "/brɔːd/",
        audio: "",
        meaning: "rộng",
      },
      {
        value: "water",
        transcription: "/ˈwɔːtə(r)/",
        audio: "",
        meaning: "nước (phát âm Anh)",
      },
    ],
    identify: {
      or: [
        {
          value: "door",
          transcription: "/dɔː(r)/",
          audio: "",
          meaning: "cửa",
        },
        {
          value: "more",
          transcription: "/mɔː(r)/",
          audio: "",
          meaning: "nhiều hơn",
        },
      ],
      al: [
        {
          value: "call",
          transcription: "/kɔːl/",
          audio: "",
          meaning: "gọi",
        },
        {
          value: "walk",
          transcription: "/wɔːk/",
          audio: "",
          meaning: "đi bộ",
        },
      ],
      au: [
        {
          value: "caught",
          transcription: "/kɔːt/",
          audio: "",
          meaning: "bắt được",
        },
        {
          value: "taught",
          transcription: "/tɔːt/",
          audio: "",
          meaning: "đã dạy",
        },
      ],
      ough: [
        {
          value: "thought",
          transcription: "/θɔːt/",
          audio: "",
          meaning: "suy nghĩ",
        },
        {
          value: "bought",
          transcription: "/bɔːt/",
          audio: "",
          meaning: "đã mua",
        },
      ],
    },
  },
  {
    symbol: "/uː/",
    type: "long vowel",
    keyword: "too",
    audio: "https://example.com/audio/uː.mp3",
    description:
      "Âm /uː/ là một nguyên âm dài. Khi phát âm, miệng mở hẹp và tròn, môi nhô ra và tròn, lưỡi được nâng cao ở phía sau miệng. Âm này được phát âm dài và kéo dài.",
    articulation:
      "Lưỡi nâng cao ở phía sau miệng, miệng mở hẹp và tròn, môi nhô ra và tròn. Âm phát ra dài và kéo dài.",
    examples: [
      {
        value: "too",
        transcription: "/tuː/",
        audio: "",
        meaning: "quá, cũng",
      },
      {
        value: "food",
        transcription: "/fuːd/",
        audio: "",
        meaning: "thức ăn",
      },
      {
        value: "blue",
        transcription: "/bluː/",
        audio: "",
        meaning: "màu xanh dương",
      },
      {
        value: "moon",
        transcription: "/muːn/",
        audio: "",
        meaning: "mặt trăng",
      },
      {
        value: "school",
        transcription: "/skuːl/",
        audio: "",
        meaning: "trường học",
      },
    ],
    exceptions: [
      {
        value: "through",
        transcription: "/θruː/",
        audio: "",
        meaning: "qua",
      },
      {
        value: "fruit",
        transcription: "/fruːt/",
        audio: "",
        meaning: "trái cây",
      },
    ],
    identify: {
      oo: [
        {
          value: "food",
          transcription: "/fuːd/",
          audio: "",
          meaning: "thức ăn",
        },
        {
          value: "moon",
          transcription: "/muːn/",
          audio: "",
          meaning: "mặt trăng",
        },
      ],
      u: [
        {
          value: "blue",
          transcription: "/bluː/",
          audio: "",
          meaning: "màu xanh dương",
        },
        {
          value: "true",
          transcription: "/truː/",
          audio: "",
          meaning: "đúng",
        },
      ],
      ue: [
        {
          value: "blue",
          transcription: "/bluː/",
          audio: "",
          meaning: "màu xanh dương",
        },
        {
          value: "true",
          transcription: "/truː/",
          audio: "",
          meaning: "đúng",
        },
      ],
      ough: [
        {
          value: "through",
          transcription: "/θruː/",
          audio: "",
          meaning: "qua",
        },
      ],
      ui: [
        {
          value: "fruit",
          transcription: "/fruːt/",
          audio: "",
          meaning: "trái cây",
        },
      ],
    },
  },
  {
    symbol: "/ɜː/",
    type: "long vowel",
    keyword: "bird",
    audio: "https://example.com/audio/ɜː.mp3",
    description:
      "Âm /ɜː/ là một nguyên âm dài. Khi phát âm, miệng mở vừa phải, môi thư giãn, lưỡi được đặt ở vị trí trung tâm miệng. Âm này được phát âm dài và kéo dài.",
    articulation:
      "Lưỡi đặt ở vị trí trung tâm miệng, miệng mở vừa phải, môi thư giãn. Âm phát ra dài và kéo dài.",
    examples: [
      {
        value: "bird",
        transcription: "/bɜːd/",
        audio: "",
        meaning: "con chim",
      },
      {
        value: "work",
        transcription: "/wɜːk/",
        audio: "",
        meaning: "công việc",
      },
      {
        value: "learn",
        transcription: "/lɜːn/",
        audio: "",
        meaning: "học",
      },
      {
        value: "nurse",
        transcription: "/nɜːs/",
        audio: "",
        meaning: "y tá",
      },
      {
        value: "turn",
        transcription: "/tɜːn/",
        audio: "",
        meaning: "quay, xoay",
      },
    ],
    exceptions: [
      {
        value: "journey",
        transcription: "/ˈdʒɜːni/",
        audio: "",
        meaning: "hành trình",
      },
      {
        value: "colonel",
        transcription: "/ˈkɜːnl/",
        audio: "",
        meaning: "đại tá",
      },
    ],
    identify: {
      ir: [
        {
          value: "bird",
          transcription: "/bɜːd/",
          audio: "",
          meaning: "con chim",
        },
        {
          value: "first",
          transcription: "/fɜːst/",
          audio: "",
          meaning: "đầu tiên",
        },
      ],
      ur: [
        {
          value: "nurse",
          transcription: "/nɜːs/",
          audio: "",
          meaning: "y tá",
        },
        {
          value: "turn",
          transcription: "/tɜːn/",
          audio: "",
          meaning: "quay, xoay",
        },
      ],
      er: [
        {
          value: "her",
          transcription: "/hɜː(r)/",
          audio: "",
          meaning: "cô ấy",
        },
        {
          value: "person",
          transcription: "/ˈpɜːsn/",
          audio: "",
          meaning: "người",
        },
      ],
      or: [
        {
          value: "work",
          transcription: "/wɜːk/",
          audio: "",
          meaning: "công việc",
        },
        {
          value: "word",
          transcription: "/wɜːd/",
          audio: "",
          meaning: "từ",
        },
      ],
      ear: [
        {
          value: "learn",
          transcription: "/lɜːn/",
          audio: "",
          meaning: "học",
        },
        {
          value: "earn",
          transcription: "/ɜːn/",
          audio: "",
          meaning: "kiếm được",
        },
      ],
    },
  },
  {
    symbol: "/eɪ/",
    type: "diphthong",
    keyword: "day",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai13/u13.mp3",
    description:
      "Âm /eɪ/ là một nguyên âm đôi. Khi phát âm, bắt đầu với vị trí của âm /e/ và kết thúc với vị trí gần với âm /ɪ/. Miệng bắt đầu mở vừa phải và dần khép lại, lưỡi di chuyển từ vị trí trung bình lên cao hơn.",
    articulation:
      "Bắt đầu với lưỡi ở vị trí trung bình phía trước và di chuyển lên cao hơn, miệng bắt đầu mở vừa phải và dần khép lại.",
    examples: [
      {
        value: "day",
        transcription: "/deɪ/",
        audio: "",
        meaning: "ngày",
      },
      {
        value: "make",
        transcription: "/meɪk/",
        audio: "",
        meaning: "làm",
      },
      {
        value: "rain",
        transcription: "/reɪn/",
        audio: "",
        meaning: "mưa",
      },
      {
        value: "play",
        transcription: "/pleɪ/",
        audio: "",
        meaning: "chơi",
      },
      {
        value: "great",
        transcription: "/ɡreɪt/",
        audio: "",
        meaning: "tuyệt vời",
      },
    ],
    exceptions: [
      {
        value: "they",
        transcription: "/ðeɪ/",
        audio: "",
        meaning: "họ",
      },
      {
        value: "weigh",
        transcription: "/weɪ/",
        audio: "",
        meaning: "cân nặng",
      },
    ],
    identify: {
      a: [
        {
          value: "day",
          transcription: "/deɪ/",
          audio: "",
          meaning: "ngày",
        },
        {
          value: "make",
          transcription: "/meɪk/",
          audio: "",
          meaning: "làm",
        },
      ],
      ai: [
        {
          value: "rain",
          transcription: "/reɪn/",
          audio: "",
          meaning: "mưa",
        },
        {
          value: "wait",
          transcription: "/weɪt/",
          audio: "",
          meaning: "chờ đợi",
        },
      ],
      ay: [
        {
          value: "play",
          transcription: "/pleɪ/",
          audio: "",
          meaning: "chơi",
        },
        {
          value: "say",
          transcription: "/seɪ/",
          audio: "",
          meaning: "nói",
        },
      ],
      ea: [
        {
          value: "great",
          transcription: "/ɡreɪt/",
          audio: "",
          meaning: "tuyệt vời",
        },
        {
          value: "break",
          transcription: "/breɪk/",
          audio: "",
          meaning: "phá vỡ",
        },
      ],
      eigh: [
        {
          value: "weigh",
          transcription: "/weɪ/",
          audio: "",
          meaning: "cân nặng",
        },
        {
          value: "eight",
          transcription: "/eɪt/",
          audio: "",
          meaning: "tám",
        },
      ],
    },
  },
  {
    symbol: "/aɪ/",
    type: "diphthong",
    keyword: "my",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai14/u14.mp3",
    description:
      "Âm /aɪ/ là một nguyên âm đôi. Khi phát âm, bắt đầu với vị trí của âm /a/ và kết thúc với vị trí gần với âm /ɪ/. Miệng bắt đầu mở rộng và dần khép lại, lưỡi di chuyển từ vị trí thấp lên cao hơn.",
    articulation:
      "Bắt đầu với lưỡi ở vị trí thấp và di chuyển lên cao hơn về phía trước, miệng bắt đầu mở rộng và dần khép lại.",
    examples: [
      {
        value: "my",
        transcription: "/maɪ/",
        audio: "",
        meaning: "của tôi",
      },
      {
        value: "like",
        transcription: "/laɪk/",
        audio: "",
        meaning: "thích",
      },
      {
        value: "time",
        transcription: "/taɪm/",
        audio: "",
        meaning: "thời gian",
      },
      {
        value: "night",
        transcription: "/naɪt/",
        audio: "",
        meaning: "đêm",
      },
      {
        value: "fly",
        transcription: "/flaɪ/",
        audio: "",
        meaning: "bay",
      },
    ],
    exceptions: [
      {
        value: "height",
        transcription: "/haɪt/",
        audio: "",
        meaning: "chiều cao",
      },
      {
        value: "buy",
        transcription: "/baɪ/",
        audio: "",
        meaning: "mua",
      },
    ],
    identify: {
      i: [
        {
          value: "like",
          transcription: "/laɪk/",
          audio: "",
          meaning: "thích",
        },
        {
          value: "time",
          transcription: "/taɪm/",
          audio: "",
          meaning: "thời gian",
        },
      ],
      y: [
        {
          value: "my",
          transcription: "/maɪ/",
          audio: "",
          meaning: "của tôi",
        },
        {
          value: "fly",
          transcription: "/flaɪ/",
          audio: "",
          meaning: "bay",
        },
      ],
      igh: [
        {
          value: "night",
          transcription: "/naɪt/",
          audio: "",
          meaning: "đêm",
        },
        {
          value: "light",
          transcription: "/laɪt/",
          audio: "",
          meaning: "ánh sáng",
        },
      ],
      ei: [
        {
          value: "height",
          transcription: "/haɪt/",
          audio: "",
          meaning: "chiều cao",
        },
      ],
      uy: [
        {
          value: "buy",
          transcription: "/baɪ/",
          audio: "",
          meaning: "mua",
        },
        {
          value: "guy",
          transcription: "/ɡaɪ/",
          audio: "",
          meaning: "anh chàng",
        },
      ],
    },
  },
  {
    symbol: "/ɔɪ/",
    type: "diphthong",
    keyword: "boy",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai15/u15.mp3",
    description:
      "Âm /ɔɪ/ là một nguyên âm đôi. Khi phát âm, bắt đầu với vị trí của âm /ɔ/ và kết thúc với vị trí gần với âm /ɪ/. Miệng bắt đầu mở rộng và tròn, sau đó dần khép lại, lưỡi di chuyển từ vị trí thấp ở phía sau lên cao hơn ở phía trước.",
    articulation:
      "Bắt đầu với lưỡi ở vị trí thấp phía sau và di chuyển lên cao hơn về phía trước, miệng bắt đầu mở rộng và tròn, sau đó dần khép lại.",
    examples: [
      {
        value: "boy",
        transcription: "/bɔɪ/",
        audio: "",
        meaning: "cậu bé",
      },
      {
        value: "toy",
        transcription: "/tɔɪ/",
        audio: "",
        meaning: "đồ chơi",
      },
      {
        value: "noise",
        transcription: "/nɔɪz/",
        audio: "",
        meaning: "tiếng ồn",
      },
      {
        value: "choice",
        transcription: "/tʃɔɪs/",
        audio: "",
        meaning: "sự lựa chọn",
      },
      {
        value: "join",
        transcription: "/dʒɔɪn/",
        audio: "",
        meaning: "tham gia",
      },
    ],
    exceptions: [
      {
        value: "buoy",
        transcription: "/bɔɪ/",
        audio: "",
        meaning: "phao",
      },
    ],
    identify: {
      oi: [
        {
          value: "noise",
          transcription: "/nɔɪz/",
          audio: "",
          meaning: "tiếng ồn",
        },
        {
          value: "join",
          transcription: "/dʒɔɪn/",
          audio: "",
          meaning: "tham gia",
        },
      ],
      oy: [
        {
          value: "boy",
          transcription: "/bɔɪ/",
          audio: "",
          meaning: "cậu bé",
        },
        {
          value: "toy",
          transcription: "/tɔɪ/",
          audio: "",
          meaning: "đồ chơi",
        },
      ],
    },
  },
  {
    symbol: "/əʊ/",
    type: "diphthong",
    keyword: "go",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai17/u17.mp3",
    description:
      "Âm /əʊ/ là một nguyên âm đôi. Khi phát âm, bắt đầu với vị trí của âm /ə/ và kết thúc với vị trí gần với âm /ʊ/. Miệng bắt đầu mở vừa phải và dần trở nên tròn hơn, lưỡi di chuyển từ vị trí trung tâm lên cao hơn ở phía sau.",
    articulation:
      "Bắt đầu với lưỡi ở vị trí trung tâm và di chuyển lên cao hơn về phía sau, miệng bắt đầu mở vừa phải và dần trở nên tròn hơn.",
    examples: [
      {
        value: "go",
        transcription: "/ɡəʊ/",
        audio: "",
        meaning: "đi",
      },
      {
        value: "home",
        transcription: "/həʊm/",
        audio: "",
        meaning: "nhà",
      },
      {
        value: "know",
        transcription: "/nəʊ/",
        audio: "",
        meaning: "biết",
      },
      {
        value: "show",
        transcription: "/ʃəʊ/",
        audio: "",
        meaning: "trình diễn",
      },
      {
        value: "boat",
        transcription: "/bəʊt/",
        audio: "",
        meaning: "thuyền",
      },
    ],
    exceptions: [
      {
        value: "though",
        transcription: "/ðəʊ/",
        audio: "",
        meaning: "mặc dù",
      },
      {
        value: "sew",
        transcription: "/səʊ/",
        audio: "",
        meaning: "may",
      },
    ],
    identify: {
      o: [
        {
          value: "go",
          transcription: "/ɡəʊ/",
          audio: "",
          meaning: "đi",
        },
        {
          value: "home",
          transcription: "/həʊm/",
          audio: "",
          meaning: "nhà",
        },
      ],
      ow: [
        {
          value: "know",
          transcription: "/nəʊ/",
          audio: "",
          meaning: "biết",
        },
        {
          value: "show",
          transcription: "/ʃəʊ/",
          audio: "",
          meaning: "trình diễn",
        },
      ],
      oa: [
        {
          value: "boat",
          transcription: "/bəʊt/",
          audio: "",
          meaning: "thuyền",
        },
        {
          value: "road",
          transcription: "/rəʊd/",
          audio: "",
          meaning: "đường",
        },
      ],
      ough: [
        {
          value: "though",
          transcription: "/ðəʊ/",
          audio: "",
          meaning: "mặc dù",
        },
      ],
      ew: [
        {
          value: "sew",
          transcription: "/səʊ/",
          audio: "",
          meaning: "may",
        },
      ],
    },
  },
  {
    symbol: "/aʊ/",
    type: "diphthong",
    keyword: "now",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai16/u16.mp3",
    description:
      "Âm /aʊ/ là một nguyên âm đôi. Khi phát âm, bắt đầu với vị trí của âm /a/ và kết thúc với vị trí gần với âm /ʊ/. Miệng bắt đầu mở rộng và dần trở nên tròn hơn, lưỡi di chuyển từ vị trí thấp lên cao hơn ở phía sau.",
    articulation:
      "Bắt đầu với lưỡi ở vị trí thấp và di chuyển lên cao hơn về phía sau, miệng bắt đầu mở rộng và dần trở nên tròn hơn.",
    examples: [
      {
        value: "now",
        transcription: "/naʊ/",
        audio: "",
        meaning: "bây giờ",
      },
      {
        value: "house",
        transcription: "/haʊs/",
        audio: "",
        meaning: "nhà",
      },
      {
        value: "down",
        transcription: "/daʊn/",
        audio: "",
        meaning: "xuống",
      },
      {
        value: "about",
        transcription: "/əˈbaʊt/",
        audio: "",
        meaning: "về",
      },
      {
        value: "mouth",
        transcription: "/maʊθ/",
        audio: "",
        meaning: "miệng",
      },
    ],
    exceptions: [
      {
        value: "drought",
        transcription: "/draʊt/",
        audio: "",
        meaning: "hạn hán",
      },
    ],
    identify: {
      ou: [
        {
          value: "house",
          transcription: "/haʊs/",
          audio: "",
          meaning: "nhà",
        },
        {
          value: "mouth",
          transcription: "/maʊθ/",
          audio: "",
          meaning: "miệng",
        },
      ],
      ow: [
        {
          value: "now",
          transcription: "/naʊ/",
          audio: "",
          meaning: "bây giờ",
        },
        {
          value: "down",
          transcription: "/daʊn/",
          audio: "",
          meaning: "xuống",
        },
      ],
      ough: [
        {
          value: "drought",
          transcription: "/draʊt/",
          audio: "",
          meaning: "hạn hán",
        },
      ],
    },
  },
  {
    symbol: "/ɪə/",
    type: "diphthong",
    keyword: "near",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai18/u18.mp3",
    description:
      "Âm /ɪə/ là một nguyên âm đôi. Khi phát âm, bắt đầu với vị trí của âm /ɪ/ và kết thúc với vị trí gần với âm /ə/. Miệng bắt đầu mở hẹp và dần mở rộng hơn, lưỡi di chuyển từ vị trí cao ở phía trước xuống vị trí trung tâm.",
    articulation:
      "Bắt đầu với lưỡi ở vị trí cao phía trước và di chuyển xuống vị trí trung tâm, miệng bắt đầu mở hẹp và dần mở rộng hơn.",
    examples: [
      {
        value: "near",
        transcription: "/nɪə(r)/",
        audio: "",
        meaning: "gần",
      },
      {
        value: "hear",
        transcription: "/hɪə(r)/",
        audio: "",
        meaning: "nghe",
      },
      {
        value: "clear",
        transcription: "/klɪə(r)/",
        audio: "",
        meaning: "rõ ràng",
      },
      {
        value: "fear",
        transcription: "/fɪə(r)/",
        audio: "",
        meaning: "sợ hãi",
      },
      {
        value: "idea",
        transcription: "/aɪˈdɪə/",
        audio: "",
        meaning: "ý tưởng",
      },
    ],
    exceptions: [
      {
        value: "weird",
        transcription: "/wɪəd/",
        audio: "",
        meaning: "kỳ lạ",
      },
    ],
    identify: {
      ear: [
        {
          value: "near",
          transcription: "/nɪə(r)/",
          audio: "",
          meaning: "gần",
        },
        {
          value: "hear",
          transcription: "/hɪə(r)/",
          audio: "",
          meaning: "nghe",
        },
      ],
      eer: [
        {
          value: "cheer",
          transcription: "/tʃɪə(r)/",
          audio: "",
          meaning: "cổ vũ",
        },
        {
          value: "deer",
          transcription: "/dɪə(r)/",
          audio: "",
          meaning: "hươu",
        },
      ],
      ere: [
        {
          value: "here",
          transcription: "/hɪə(r)/",
          audio: "",
          meaning: "ở đây",
        },
      ],
      eir: [
        {
          value: "weird",
          transcription: "/wɪəd/",
          audio: "",
          meaning: "kỳ lạ",
        },
      ],
    },
  },
  {
    symbol: "/eə/",
    type: "diphthong",
    keyword: "hair",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai19/u19.mp3",
    description:
      "Âm /eə/ là một nguyên âm đôi. Khi phát âm, bắt đầu với vị trí của âm /e/ và kết thúc với vị trí gần với âm /ə/. Miệng bắt đầu mở vừa phải và dần mở rộng hơn, lưỡi di chuyển từ vị trí trung bình ở phía trước xuống vị trí trung tâm.",
    articulation:
      "Bắt đầu với lưỡi ở vị trí trung bình phía trước và di chuyển xuống vị trí trung tâm, miệng bắt đầu mở vừa phải và dần mở rộng hơn.",
    examples: [
      {
        value: "hair",
        transcription: "/heə(r)/",
        audio: "",
        meaning: "tóc",
      },
      {
        value: "care",
        transcription: "/keə(r)/",
        audio: "",
        meaning: "quan tâm",
      },
      {
        value: "where",
        transcription: "/weə(r)/",
        audio: "",
        meaning: "ở đâu",
      },
      {
        value: "chair",
        transcription: "/tʃeə(r)/",
        audio: "",
        meaning: "ghế",
      },
      {
        value: "fair",
        transcription: "/feə(r)/",
        audio: "",
        meaning: "công bằng",
      },
    ],
    exceptions: [
      {
        value: "their",
        transcription: "/ðeə(r)/",
        audio: "",
        meaning: "của họ",
      },
    ],
    identify: {
      air: [
        {
          value: "hair",
          transcription: "/heə(r)/",
          audio: "",
          meaning: "tóc",
        },
        {
          value: "fair",
          transcription: "/feə(r)/",
          audio: "",
          meaning: "công bằng",
        },
      ],
      are: [
        {
          value: "care",
          transcription: "/keə(r)/",
          audio: "",
          meaning: "quan tâm",
        },
        {
          value: "share",
          transcription: "/ʃeə(r)/",
          audio: "",
          meaning: "chia sẻ",
        },
      ],
      ear: [
        {
          value: "bear",
          transcription: "/beə(r)/",
          audio: "",
          meaning: "gấu",
        },
        {
          value: "wear",
          transcription: "/weə(r)/",
          audio: "",
          meaning: "mặc",
        },
      ],
      eir: [
        {
          value: "their",
          transcription: "/ðeə(r)/",
          audio: "",
          meaning: "của họ",
        },
      ],
    },
  },
  {
    symbol: "/ʊə/",
    type: "diphthong",
    keyword: "pure",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai20/u20.mp3",
    description:
      "Âm /ʊə/ là một nguyên âm đôi. Khi phát âm, bắt đầu với vị trí của âm /ʊ/ và kết thúc với vị trí gần với âm /ə/. Miệng bắt đầu mở hẹp và tròn, sau đó dần mở rộng hơn, lưỡi di chuyển từ vị trí cao ở phía sau xuống vị trí trung tâm.",
    articulation:
      "Bắt đầu với lưỡi ở vị trí cao phía sau và di chuyển xuống vị trí trung tâm, miệng bắt đầu mở hẹp và tròn, sau đó dần mở rộng hơn.",
    examples: [
      {
        value: "pure",
        transcription: "/pjʊə(r)/",
        audio: "",
        meaning: "tinh khiết",
      },
      {
        value: "cure",
        transcription: "/kjʊə(r)/",
        audio: "",
        meaning: "chữa trị",
      },
      {
        value: "tour",
        transcription: "/tʊə(r)/",
        audio: "",
        meaning: "chuyến du lịch",
      },
      {
        value: "sure",
        transcription: "/ʃʊə(r)/",
        audio: "",
        meaning: "chắc chắn",
      },
      {
        value: "poor",
        transcription: "/pʊə(r)/",
        audio: "",
        meaning: "nghèo",
      },
    ],
    exceptions: [
      {
        value: "your",
        transcription: "/jʊə(r)/",
        audio: "",
        meaning: "của bạn",
      },
    ],
    identify: {
      ure: [
        {
          value: "pure",
          transcription: "/pjʊə(r)/",
          audio: "",
          meaning: "tinh khiết",
        },
        {
          value: "cure",
          transcription: "/kjʊə(r)/",
          audio: "",
          meaning: "chữa trị",
        },
      ],
      our: [
        {
          value: "tour",
          transcription: "/tʊə(r)/",
          audio: "",
          meaning: "chuyến du lịch",
        },
      ],
      oor: [
        {
          value: "poor",
          transcription: "/pʊə(r)/",
          audio: "",
          meaning: "nghèo",
        },
      ],
    },
  },
];

export { vowels };
