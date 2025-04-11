import { TIPA } from "./types";

const consonants: TIPA[] = [
  {
    symbol: "/p/",
    type: "plosive",
    keyword: "pen",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai21/u21.mp3",
    description:
      "Âm /p/ là một phụ âm tắc, vô thanh. Khi phát âm, hai môi khép lại, không rung dây thanh, sau đó bung ra tạo thành một luồng hơi mạnh.",
    articulation:
      "Hai môi khép lại, không rung dây thanh, sau đó bung ra tạo thành một luồng hơi mạnh.",
    examples: [
      {
        value: "pen",
        transcription: "/pen/",
        audio: "",
        meaning: "cây bút",
      },
      {
        value: "map",
        transcription: "/mæp/",
        audio: "",
        meaning: "bản đồ",
      },
      {
        value: "stop",
        transcription: "/stɒp/",
        audio: "",
        meaning: "dừng lại",
      },
      {
        value: "speak",
        transcription: "/spiːk/",
        audio: "",
        meaning: "nói",
      },
      {
        value: "happy",
        transcription: "/ˈhæpi/",
        audio: "",
        meaning: "hạnh phúc",
      },
    ],
    exceptions: [
      {
        value: "psychology",
        transcription: "/saɪˈkɒlədʒi/",
        audio: "",
        meaning: "tâm lý học",
      },
      {
        value: "pneumonia",
        transcription: "/njuːˈməʊniə/",
        audio: "",
        meaning: "viêm phổi",
      },
    ],
    identify: {
      p: [
        {
          value: "pen",
          transcription: "/pen/",
          audio: "",
          meaning: "cây bút",
        },
        {
          value: "map",
          transcription: "/mæp/",
          audio: "",
          meaning: "bản đồ",
        },
      ],
      pp: [
        {
          value: "happy",
          transcription: "/ˈhæpi/",
          audio: "",
          meaning: "hạnh phúc",
        },
        {
          value: "apple",
          transcription: "/ˈæpl/",
          audio: "",
          meaning: "quả táo",
        },
      ],
    },
  },
  {
    symbol: "/b/",
    type: "plosive",
    keyword: "bad",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai22/u22.mp3",
    description:
      "Âm /b/ là một phụ âm tắc, hữu thanh. Khi phát âm, hai môi khép lại, rung dây thanh, sau đó bung ra.",
    articulation: "Hai môi khép lại, rung dây thanh, sau đó bung ra.",
    examples: [
      {
        value: "bad",
        transcription: "/bæd/",
        audio: "",
        meaning: "tồi tệ",
      },
      {
        value: "book",
        transcription: "/bʊk/",
        audio: "",
        meaning: "sách",
      },
      {
        value: "job",
        transcription: "/dʒɒb/",
        audio: "",
        meaning: "công việc",
      },
      {
        value: "table",
        transcription: "/ˈteɪbl/",
        audio: "",
        meaning: "bàn",
      },
      {
        value: "about",
        transcription: "/əˈbaʊt/",
        audio: "",
        meaning: "về",
      },
    ],
    exceptions: [
      {
        value: "climb",
        transcription: "/klaɪm/",
        audio: "",
        meaning: "leo trèo",
      },
      {
        value: "debt",
        transcription: "/det/",
        audio: "",
        meaning: "nợ",
      },
    ],
    identify: {
      b: [
        {
          value: "bad",
          transcription: "/bæd/",
          audio: "",
          meaning: "tồi tệ",
        },
        {
          value: "book",
          transcription: "/bʊk/",
          audio: "",
          meaning: "sách",
        },
      ],
      bb: [
        {
          value: "rubber",
          transcription: "/ˈrʌbə(r)/",
          audio: "",
          meaning: "cao su",
        },
        {
          value: "hobby",
          transcription: "/ˈhɒbi/",
          audio: "",
          meaning: "sở thích",
        },
      ],
    },
  },
  {
    symbol: "/t/",
    type: "plosive",
    keyword: "tea",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai23/u23.mp3",
    description:
      "Âm /t/ là một phụ âm tắc, vô thanh. Khi phát âm, đầu lưỡi chạm vào phía sau răng cửa trên, không rung dây thanh, sau đó bung ra tạo thành một luồng hơi mạnh.",
    articulation:
      "Đầu lưỡi chạm vào phía sau răng cửa trên, không rung dây thanh, sau đó bung ra tạo thành một luồng hơi mạnh.",
    examples: [
      {
        value: "tea",
        transcription: "/tiː/",
        audio: "",
        meaning: "trà",
      },
      {
        value: "stop",
        transcription: "/stɒp/",
        audio: "",
        meaning: "dừng lại",
      },
      {
        value: "water",
        transcription: "/ˈwɔːtə(r)/",
        audio: "",
        meaning: "nước",
      },
      {
        value: "time",
        transcription: "/taɪm/",
        audio: "",
        meaning: "thời gian",
      },
      {
        value: "letter",
        transcription: "/ˈletə(r)/",
        audio: "",
        meaning: "lá thư",
      },
    ],
    exceptions: [
      {
        value: "often",
        transcription: "/ˈɒfn/ or /ˈɒftən/",
        audio: "",
        meaning: "thường xuyên",
      },
      {
        value: "castle",
        transcription: "/ˈkɑːsl/",
        audio: "",
        meaning: "lâu đài",
      },
    ],
    identify: {
      t: [
        {
          value: "tea",
          transcription: "/tiː/",
          audio: "",
          meaning: "trà",
        },
        {
          value: "time",
          transcription: "/taɪm/",
          audio: "",
          meaning: "thời gian",
        },
      ],
      tt: [
        {
          value: "letter",
          transcription: "/ˈletə(r)/",
          audio: "",
          meaning: "lá thư",
        },
        {
          value: "butter",
          transcription: "/ˈbʌtə(r)/",
          audio: "",
          meaning: "bơ",
        },
      ],
      ed: [
        {
          value: "walked",
          transcription: "/wɔːkt/",
          audio: "",
          meaning: "đã đi bộ",
        },
        {
          value: "stopped",
          transcription: "/stɒpt/",
          audio: "",
          meaning: "đã dừng lại",
        },
      ],
    },
  },
  {
    symbol: "/d/",
    type: "plosive",
    keyword: "day",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai24/u24.mp3",
    description:
      "Âm /d/ là một phụ âm tắc, hữu thanh. Khi phát âm, đầu lưỡi chạm vào phía sau răng cửa trên, rung dây thanh, sau đó bung ra.",
    articulation:
      "Đầu lưỡi chạm vào phía sau răng cửa trên, rung dây thanh, sau đó bung ra.",
    examples: [
      {
        value: "day",
        transcription: "/deɪ/",
        audio: "",
        meaning: "ngày",
      },
      {
        value: "dog",
        transcription: "/dɒɡ/",
        audio: "",
        meaning: "chó",
      },
      {
        value: "bad",
        transcription: "/bæd/",
        audio: "",
        meaning: "tồi tệ",
      },
      {
        value: "read",
        transcription: "/riːd/",
        audio: "",
        meaning: "đọc",
      },
      {
        value: "ladder",
        transcription: "/ˈlædə(r)/",
        audio: "",
        meaning: "cái thang",
      },
    ],
    exceptions: [
      {
        value: "Wednesday",
        transcription: "/ˈwenzdeɪ/",
        audio: "",
        meaning: "thứ Tư",
      },
    ],
    identify: {
      d: [
        {
          value: "day",
          transcription: "/deɪ/",
          audio: "",
          meaning: "ngày",
        },
        {
          value: "dog",
          transcription: "/dɒɡ/",
          audio: "",
          meaning: "chó",
        },
      ],
      dd: [
        {
          value: "ladder",
          transcription: "/ˈlædə(r)/",
          audio: "",
          meaning: "cái thang",
        },
        {
          value: "middle",
          transcription: "/ˈmɪdl/",
          audio: "",
          meaning: "giữa",
        },
      ],
      ed: [
        {
          value: "played",
          transcription: "/pleɪd/",
          audio: "",
          meaning: "đã chơi",
        },
        {
          value: "called",
          transcription: "/kɔːld/",
          audio: "",
          meaning: "đã gọi",
        },
      ],
    },
  },
  {
    symbol: "/k/",
    type: "plosive",
    keyword: "key",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai25/u25.mp3",
    description:
      "Âm /k/ là một phụ âm tắc, vô thanh. Khi phát âm, phần sau lưỡi chạm vào vòm mềm, không rung dây thanh, sau đó bung ra tạo thành một luồng hơi mạnh.",
    articulation:
      "Phần sau lưỡi chạm vào vòm mềm, không rung dây thanh, sau đó bung ra tạo thành một luồng hơi mạnh.",
    examples: [
      {
        value: "key",
        transcription: "/kiː/",
        audio: "",
        meaning: "chìa khóa",
      },
      {
        value: "cat",
        transcription: "/kæt/",
        audio: "",
        meaning: "con mèo",
      },
      {
        value: "book",
        transcription: "/bʊk/",
        audio: "",
        meaning: "sách",
      },
      {
        value: "school",
        transcription: "/skuːl/",
        audio: "",
        meaning: "trường học",
      },
      {
        value: "like",
        transcription: "/laɪk/",
        audio: "",
        meaning: "thích",
      },
    ],
    exceptions: [
      {
        value: "know",
        transcription: "/nəʊ/",
        audio: "",
        meaning: "biết",
      },
      {
        value: "chemistry",
        transcription: "/ˈkemɪstri/",
        audio: "",
        meaning: "hóa học",
      },
    ],
    identify: {
      k: [
        {
          value: "key",
          transcription: "/kiː/",
          audio: "",
          meaning: "chìa khóa",
        },
        {
          value: "like",
          transcription: "/laɪk/",
          audio: "",
          meaning: "thích",
        },
      ],
      c: [
        {
          value: "cat",
          transcription: "/kæt/",
          audio: "",
          meaning: "con mèo",
        },
        {
          value: "cup",
          transcription: "/kʌp/",
          audio: "",
          meaning: "cái cốc",
        },
      ],
      ck: [
        {
          value: "back",
          transcription: "/bæk/",
          audio: "",
          meaning: "lưng",
        },
        {
          value: "black",
          transcription: "/blæk/",
          audio: "",
          meaning: "màu đen",
        },
      ],
      ch: [
        {
          value: "school",
          transcription: "/skuːl/",
          audio: "",
          meaning: "trường học",
        },
        {
          value: "chemistry",
          transcription: "/ˈkemɪstri/",
          audio: "",
          meaning: "hóa học",
        },
      ],
      que: [
        {
          value: "unique",
          transcription: "/juːˈniːk/",
          audio: "",
          meaning: "độc đáo",
        },
      ],
    },
  },
  {
    symbol: "/g/",
    type: "plosive",
    keyword: "go",
    audio: "https://example.com/audio/g.mp3",
    description:
      "Âm /g/ là một phụ âm tắc, hữu thanh. Khi phát âm, phần sau lưỡi chạm vào vòm mềm, rung dây thanh, sau đó bung ra.",
    articulation:
      "Phần sau lưỡi chạm vào vòm mềm, rung dây thanh, sau đó bung ra.",
    examples: [
      {
        value: "go",
        transcription: "/ɡəʊ/",
        audio: "",
        meaning: "đi",
      },
      {
        value: "dog",
        transcription: "/dɒɡ/",
        audio: "",
        meaning: "chó",
      },
      {
        value: "big",
        transcription: "/bɪɡ/",
        audio: "",
        meaning: "to lớn",
      },
      {
        value: "egg",
        transcription: "/eɡ/",
        audio: "",
        meaning: "trứng",
      },
      {
        value: "again",
        transcription: "/əˈɡen/",
        audio: "",
        meaning: "lại",
      },
    ],
    exceptions: [
      {
        value: "ghost",
        transcription: "/ɡəʊst/",
        audio: "",
        meaning: "ma",
      },
      {
        value: "gnome",
        transcription: "/nəʊm/",
        audio: "",
        meaning: "người lùn",
      },
    ],
    identify: {
      g: [
        {
          value: "go",
          transcription: "/ɡəʊ/",
          audio: "",
          meaning: "đi",
        },
        {
          value: "dog",
          transcription: "/dɒɡ/",
          audio: "",
          meaning: "chó",
        },
      ],
      gg: [
        {
          value: "egg",
          transcription: "/eɡ/",
          audio: "",
          meaning: "trứng",
        },
        {
          value: "bigger",
          transcription: "/ˈbɪɡə(r)/",
          audio: "",
          meaning: "to lớn hơn",
        },
      ],
      gh: [
        {
          value: "ghost",
          transcription: "/ɡəʊst/",
          audio: "",
          meaning: "ma",
        },
      ],
      gu: [
        {
          value: "guide",
          transcription: "/ɡaɪd/",
          audio: "",
          meaning: "hướng dẫn",
        },
        {
          value: "guest",
          transcription: "/ɡest/",
          audio: "",
          meaning: "khách",
        },
      ],
    },
  },
  {
    symbol: "/f/",
    type: "fricative",
    keyword: "fan",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai33/u33.mp3",
    description:
      "Âm /f/ là một phụ âm ma sát, vô thanh. Khi phát âm, môi dưới chạm vào răng cửa trên, tạo ra một khe hẹp để không khí đi qua, không rung dây thanh.",
    articulation:
      "Môi dưới chạm vào răng cửa trên, tạo ra một khe hẹp để không khí đi qua, không rung dây thanh.",
    examples: [
      {
        value: "fan",
        transcription: "/fæn/",
        audio: "",
        meaning: "quạt",
      },
      {
        value: "food",
        transcription: "/fuːd/",
        audio: "",
        meaning: "thức ăn",
      },
      {
        value: "life",
        transcription: "/laɪf/",
        audio: "",
        meaning: "cuộc sống",
      },
      {
        value: "coffee",
        transcription: "/ˈkɒfi/",
        audio: "",
        meaning: "cà phê",
      },
      {
        value: "phone",
        transcription: "/fəʊn/",
        audio: "",
        meaning: "điện thoại",
      },
    ],
    exceptions: [
      {
        value: "of",
        transcription: "/ɒv/",
        audio: "",
        meaning: "của",
      },
    ],
    identify: {
      f: [
        {
          value: "fan",
          transcription: "/fæn/",
          audio: "",
          meaning: "quạt",
        },
        {
          value: "food",
          transcription: "/fuːd/",
          audio: "",
          meaning: "thức ăn",
        },
      ],
      ff: [
        {
          value: "coffee",
          transcription: "/ˈkɒfi/",
          audio: "",
          meaning: "cà phê",
        },
        {
          value: "offer",
          transcription: "/ˈɒfə(r)/",
          audio: "",
          meaning: "đề nghị",
        },
      ],
      ph: [
        {
          value: "phone",
          transcription: "/fəʊn/",
          audio: "",
          meaning: "điện thoại",
        },
        {
          value: "photo",
          transcription: "/ˈfəʊtəʊ/",
          audio: "",
          meaning: "ảnh",
        },
      ],
      gh: [
        {
          value: "laugh",
          transcription: "/lɑːf/",
          audio: "",
          meaning: "cười",
        },
        {
          value: "enough",
          transcription: "/ɪˈnʌf/",
          audio: "",
          meaning: "đủ",
        },
      ],
    },
  },
  {
    symbol: "/v/",
    type: "fricative",
    keyword: "van",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai34/u34.mp3",
    description:
      "Âm /v/ là một phụ âm ma sát, hữu thanh. Khi phát âm, môi dưới chạm vào răng cửa trên, tạo ra một khe hẹp để không khí đi qua, rung dây thanh.",
    articulation:
      "Môi dưới chạm vào răng cửa trên, tạo ra một khe hẹp để không khí đi qua, rung dây thanh.",
    examples: [
      {
        value: "van",
        transcription: "/væn/",
        audio: "",
        meaning: "xe tải nhỏ",
      },
      {
        value: "very",
        transcription: "/ˈveri/",
        audio: "",
        meaning: "rất",
      },
      {
        value: "love",
        transcription: "/lʌv/",
        audio: "",
        meaning: "tình yêu",
      },
      {
        value: "five",
        transcription: "/faɪv/",
        audio: "",
        meaning: "năm",
      },
      {
        value: "never",
        transcription: "/ˈnevə(r)/",
        audio: "",
        meaning: "không bao giờ",
      },
    ],
    exceptions: [
      {
        value: "of",
        transcription: "/ɒv/",
        audio: "",
        meaning: "của",
      },
    ],
    identify: {
      v: [
        {
          value: "van",
          transcription: "/væn/",
          audio: "",
          meaning: "xe tải nhỏ",
        },
        {
          value: "very",
          transcription: "/ˈveri/",
          audio: "",
          meaning: "rất",
        },
      ],
      f: [
        {
          value: "of",
          transcription: "/ɒv/",
          audio: "",
          meaning: "của",
        },
      ],
    },
  },
  {
    symbol: "/θ/",
    type: "fricative",
    keyword: "thin",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai38/u38.mp3",
    description:
      "Âm /θ/ là một phụ âm ma sát, vô thanh. Khi phát âm, đầu lưỡi đặt giữa răng cửa trên và dưới, tạo ra một khe hẹp để không khí đi qua, không rung dây thanh.",
    articulation:
      "Đầu lưỡi đặt giữa răng cửa trên và dưới, tạo ra một khe hẹp để không khí đi qua, không rung dây thanh.",
    examples: [
      {
        value: "thin",
        transcription: "/θɪn/",
        audio: "",
        meaning: "mỏng",
      },
      {
        value: "think",
        transcription: "/θɪŋk/",
        audio: "",
        meaning: "suy nghĩ",
      },
      {
        value: "mouth",
        transcription: "/maʊθ/",
        audio: "",
        meaning: "miệng",
      },
      {
        value: "bath",
        transcription: "/bɑːθ/",
        audio: "",
        meaning: "bồn tắm",
      },
      {
        value: "healthy",
        transcription: "/ˈhelθi/",
        audio: "",
        meaning: "khỏe mạnh",
      },
    ],
    exceptions: [
      {
        value: "thyme",
        transcription: "/taɪm/",
        audio: "",
        meaning: "cây xạ hương",
      },
    ],
    identify: {
      th: [
        {
          value: "thin",
          transcription: "/θɪn/",
          audio: "",
          meaning: "mỏng",
        },
        {
          value: "think",
          transcription: "/θɪŋk/",
          audio: "",
          meaning: "suy nghĩ",
        },
      ],
    },
  },
  {
    symbol: "/ð/",
    type: "fricative",
    keyword: "this",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai39/u39.mp3",
    description:
      "Âm /ð/ là một phụ âm ma sát, hữu thanh. Khi phát âm, đầu lưỡi đặt giữa răng cửa trên và dưới, tạo ra một khe hẹp để không khí đi qua, rung dây thanh.",
    articulation:
      "Đầu lưỡi đặt giữa răng cửa trên và dưới, tạo ra một khe hẹp để không khí đi qua, rung dây thanh.",
    examples: [
      {
        value: "this",
        transcription: "/ðɪs/",
        audio: "",
        meaning: "này",
      },
      {
        value: "that",
        transcription: "/ðæt/",
        audio: "",
        meaning: "đó",
      },
      {
        value: "the",
        transcription: "/ðə/",
        audio: "",
        meaning: "cái, con, người (mạo từ)",
      },
      {
        value: "mother",
        transcription: "/ˈmʌðə(r)/",
        audio: "",
        meaning: "mẹ",
      },
      {
        value: "brother",
        transcription: "/ˈbrʌðə(r)/",
        audio: "",
        meaning: "anh trai",
      },
    ],
    exceptions: [],
    identify: {
      th: [
        {
          value: "this",
          transcription: "/ðɪs/",
          audio: "",
          meaning: "này",
        },
        {
          value: "that",
          transcription: "/ðæt/",
          audio: "",
          meaning: "đó",
        },
      ],
    },
  },
  {
    symbol: "/s/",
    type: "fricative",
    keyword: "sun",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai27/u27.mp3",
    description:
      "Âm /s/ là một phụ âm ma sát, vô thanh. Khi phát âm, đầu lưỡi gần với phía sau răng cửa trên, tạo ra một khe hẹp để không khí đi qua, không rung dây thanh.",
    articulation:
      "Đầu lưỡi gần với phía sau răng cửa trên, tạo ra một khe hẹp để không khí đi qua, không rung dây thanh.",
    examples: [
      {
        value: "sun",
        transcription: "/sʌn/",
        audio: "",
        meaning: "mặt trời",
      },
      {
        value: "see",
        transcription: "/siː/",
        audio: "",
        meaning: "nhìn thấy",
      },
      {
        value: "house",
        transcription: "/haʊs/",
        audio: "",
        meaning: "nhà",
      },
      {
        value: "miss",
        transcription: "/mɪs/",
        audio: "",
        meaning: "nhớ",
      },
      {
        value: "city",
        transcription: "/ˈsɪti/",
        audio: "",
        meaning: "thành phố",
      },
    ],
    exceptions: [
      {
        value: "island",
        transcription: "/ˈaɪlənd/",
        audio: "",
        meaning: "hòn đảo",
      },
    ],
    identify: {
      s: [
        {
          value: "sun",
          transcription: "/sʌn/",
          audio: "",
          meaning: "mặt trời",
        },
        {
          value: "see",
          transcription: "/siː/",
          audio: "",
          meaning: "nhìn thấy",
        },
      ],
      ss: [
        {
          value: "miss",
          transcription: "/mɪs/",
          audio: "",
          meaning: "nhớ",
        },
        {
          value: "class",
          transcription: "/klɑːs/",
          audio: "",
          meaning: "lớp học",
        },
      ],
      c: [
        {
          value: "city",
          transcription: "/ˈsɪti/",
          audio: "",
          meaning: "thành phố",
        },
        {
          value: "rice",
          transcription: "/raɪs/",
          audio: "",
          meaning: "gạo",
        },
      ],
      sc: [
        {
          value: "science",
          transcription: "/ˈsaɪəns/",
          audio: "",
          meaning: "khoa học",
        },
      ],
    },
  },
  {
    symbol: "/z/",
    type: "fricative",
    keyword: "zoo",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai28/u28.mp3",
    description:
      "Âm /z/ là một phụ âm ma sát, hữu thanh. Khi phát âm, đầu lưỡi gần với phía sau răng cửa trên, tạo ra một khe hẹp để không khí đi qua, rung dây thanh.",
    articulation:
      "Đầu lưỡi gần với phía sau răng cửa trên, tạo ra một khe hẹp để không khí đi qua, rung dây thanh.",
    examples: [
      {
        value: "zoo",
        transcription: "/zuː/",
        audio: "",
        meaning: "vườn thú",
      },
      {
        value: "zero",
        transcription: "/ˈzɪərəʊ/",
        audio: "",
        meaning: "số không",
      },
      {
        value: "busy",
        transcription: "/ˈbɪzi/",
        audio: "",
        meaning: "bận rộn",
      },
      {
        value: "rose",
        transcription: "/rəʊz/",
        audio: "",
        meaning: "hoa hồng",
      },
      {
        value: "please",
        transcription: "/pliːz/",
        audio: "",
        meaning: "làm ơn",
      },
    ],
    exceptions: [],
    identify: {
      z: [
        {
          value: "zoo",
          transcription: "/zuː/",
          audio: "",
          meaning: "vườn thú",
        },
        {
          value: "zero",
          transcription: "/ˈzɪərəʊ/",
          audio: "",
          meaning: "số không",
        },
      ],
      zz: [
        {
          value: "buzz",
          transcription: "/bʌz/",
          audio: "",
          meaning: "tiếng vo ve",
        },
        {
          value: "fizzy",
          transcription: "/ˈfɪzi/",
          audio: "",
          meaning: "có ga",
        },
      ],
      s: [
        {
          value: "rose",
          transcription: "/rəʊz/",
          audio: "",
          meaning: "hoa hồng",
        },
        {
          value: "please",
          transcription: "/pliːz/",
          audio: "",
          meaning: "làm ơn",
        },
      ],
      se: [
        {
          value: "these",
          transcription: "/ðiːz/",
          audio: "",
          meaning: "những cái này",
        },
      ],
    },
  },
  {
    symbol: "/ʃ/",
    type: "fricative",
    keyword: "she",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai29/u29.mp3",
    description:
      "Âm /ʃ/ là một phụ âm ma sát, vô thanh. Khi phát âm, phần trước lưỡi gần với vòm cứng, tạo ra một khe hẹp để không khí đi qua, không rung dây thanh, môi hơi nhô ra.",
    articulation:
      "Phần trước lưỡi gần với vòm cứng, tạo ra một khe hẹp để không khí đi qua, không rung dây thanh, môi hơi nhô ra.",
    examples: [
      {
        value: "she",
        transcription: "/ʃiː/",
        audio: "",
        meaning: "cô ấy",
      },
      {
        value: "ship",
        transcription: "/ʃɪp/",
        audio: "",
        meaning: "tàu thủy",
      },
      {
        value: "fish",
        transcription: "/fɪʃ/",
        audio: "",
        meaning: "cá",
      },
      {
        value: "wash",
        transcription: "/wɒʃ/",
        audio: "",
        meaning: "rửa",
      },
      {
        value: "nation",
        transcription: "/ˈneɪʃn/",
        audio: "",
        meaning: "quốc gia",
      },
    ],
    exceptions: [],
    identify: {
      sh: [
        {
          value: "she",
          transcription: "/ʃiː/",
          audio: "",
          meaning: "cô ấy",
        },
        {
          value: "ship",
          transcription: "/ʃɪp/",
          audio: "",
          meaning: "tàu thủy",
        },
      ],
      ti: [
        {
          value: "nation",
          transcription: "/ˈneɪʃn/",
          audio: "",
          meaning: "quốc gia",
        },
        {
          value: "patient",
          transcription: "/ˈpeɪʃnt/",
          audio: "",
          meaning: "bệnh nhân",
        },
      ],
      ci: [
        {
          value: "special",
          transcription: "/ˈspeʃl/",
          audio: "",
          meaning: "đặc biệt",
        },
      ],
      si: [
        {
          value: "pension",
          transcription: "/ˈpenʃn/",
          audio: "",
          meaning: "lương hưu",
        },
      ],
      ss: [
        {
          value: "pressure",
          transcription: "/ˈpreʃə(r)/",
          audio: "",
          meaning: "áp lực",
        },
      ],
    },
  },
  {
    symbol: "/ʒ/",
    type: "fricative",
    keyword: "measure",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai30/u30.mp3",
    description:
      "Âm /ʒ/ là một phụ âm ma sát, hữu thanh. Khi phát âm, phần trước lưỡi gần với vòm cứng, tạo ra một khe hẹp để không khí đi qua, rung dây thanh, môi hơi nhô ra.",
    articulation:
      "Phần trước lưỡi gần với vòm cứng, tạo ra một khe hẹp để không khí đi qua, rung dây thanh, môi hơi nhô ra.",
    examples: [
      {
        value: "measure",
        transcription: "/ˈmeʒə(r)/",
        audio: "",
        meaning: "đo lường",
      },
      {
        value: "pleasure",
        transcription: "/ˈpleʒə(r)/",
        audio: "",
        meaning: "niềm vui",
      },
      {
        value: "vision",
        transcription: "/ˈvɪʒn/",
        audio: "",
        meaning: "tầm nhìn",
      },
      {
        value: "decision",
        transcription: "/dɪˈsɪʒn/",
        audio: "",
        meaning: "quyết định",
      },
      {
        value: "beige",
        transcription: "/beɪʒ/",
        audio: "",
        meaning: "màu be",
      },
    ],
    exceptions: [],
    identify: {
      s: [
        {
          value: "measure",
          transcription: "/ˈmeʒə(r)/",
          audio: "",
          meaning: "đo lường",
        },
        {
          value: "pleasure",
          transcription: "/ˈpleʒə(r)/",
          audio: "",
          meaning: "niềm vui",
        },
      ],
      si: [
        {
          value: "vision",
          transcription: "/ˈvɪʒn/",
          audio: "",
          meaning: "tầm nhìn",
        },
        {
          value: "decision",
          transcription: "/dɪˈsɪʒn/",
          audio: "",
          meaning: "quyết định",
        },
      ],
      g: [
        {
          value: "beige",
          transcription: "/beɪʒ/",
          audio: "",
          meaning: "màu be",
        },
      ],
    },
  },
  {
    symbol: "/h/",
    type: "fricative",
    keyword: "hat",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai37/u37.mp3",
    description:
      "Âm /h/ là một phụ âm ma sát, vô thanh. Khi phát âm, không khí đi qua khe hẹp ở thanh quản, không rung dây thanh.",
    articulation:
      "Không khí đi qua khe hẹp ở thanh quản, không rung dây thanh.",
    examples: [
      {
        value: "hat",
        transcription: "/hæt/",
        audio: "",
        meaning: "cái mũ",
      },
      {
        value: "hello",
        transcription: "/həˈləʊ/",
        audio: "",
        meaning: "xin chào",
      },
      {
        value: "house",
        transcription: "/haʊs/",
        audio: "",
        meaning: "nhà",
      },
      {
        value: "behind",
        transcription: "/bɪˈhaɪnd/",
        audio: "",
        meaning: "phía sau",
      },
      {
        value: "happy",
        transcription: "/ˈhæpi/",
        audio: "",
        meaning: "hạnh phúc",
      },
    ],
    exceptions: [
      {
        value: "hour",
        transcription: "/ˈaʊə(r)/",
        audio: "",
        meaning: "giờ",
      },
      {
        value: "honest",
        transcription: "/ˈɒnɪst/",
        audio: "",
        meaning: "trung thực",
      },
    ],
    identify: {
      h: [
        {
          value: "hat",
          transcription: "/hæt/",
          audio: "",
          meaning: "cái mũ",
        },
        {
          value: "hello",
          transcription: "/həˈləʊ/",
          audio: "",
          meaning: "xin chào",
        },
      ],
      wh: [
        {
          value: "who",
          transcription: "/huː/",
          audio: "",
          meaning: "ai",
        },
        {
          value: "whole",
          transcription: "/həʊl/",
          audio: "",
          meaning: "toàn bộ",
        },
      ],
    },
  },
  {
    symbol: "/tʃ/",
    type: "affricate",
    keyword: "chair",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai31/u31.mp3",
    description:
      "Âm /tʃ/ là một phụ âm tắc-xát, vô thanh. Khi phát âm, đầu lưỡi chạm vào vòm cứng, không rung dây thanh, sau đó bung ra từ từ tạo thành một luồng hơi ma sát, môi hơi nhô ra.",
    articulation:
      "Đầu lưỡi chạm vào vòm cứng, không rung dây thanh, sau đó bung ra từ từ tạo thành một luồng hơi ma sát, môi hơi nhô ra.",
    examples: [
      {
        value: "chair",
        transcription: "/tʃeə(r)/",
        audio: "",
        meaning: "ghế",
      },
      {
        value: "church",
        transcription: "/tʃɜːtʃ/",
        audio: "",
        meaning: "nhà thờ",
      },
      {
        value: "watch",
        transcription: "/wɒtʃ/",
        audio: "",
        meaning: "đồng hồ đeo tay",
      },
      {
        value: "teacher",
        transcription: "/ˈtiːtʃə(r)/",
        audio: "",
        meaning: "giáo viên",
      },
      {
        value: "nature",
        transcription: "/ˈneɪtʃə(r)/",
        audio: "",
        meaning: "thiên nhiên",
      },
    ],
    exceptions: [],
    identify: {
      ch: [
        {
          value: "chair",
          transcription: "/tʃeə(r)/",
          audio: "",
          meaning: "ghế",
        },
        {
          value: "church",
          transcription: "/tʃɜːtʃ/",
          audio: "",
          meaning: "nhà thờ",
        },
      ],
      tch: [
        {
          value: "watch",
          transcription: "/wɒtʃ/",
          audio: "",
          meaning: "đồng hồ đeo tay",
        },
        {
          value: "match",
          transcription: "/mætʃ/",
          audio: "",
          meaning: "trận đấu",
        },
      ],
      t: [
        {
          value: "nature",
          transcription: "/ˈneɪtʃə(r)/",
          audio: "",
          meaning: "thiên nhiên",
        },
        {
          value: "future",
          transcription: "/ˈfjuːtʃə(r)/",
          audio: "",
          meaning: "tương lai",
        },
      ],
    },
  },
  {
    symbol: "/dʒ/",
    type: "affricate",
    keyword: "jam",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai32/u32.mp3",
    description:
      "Âm /dʒ/ là một phụ âm tắc-xát, hữu thanh. Khi phát âm, đầu lưỡi chạm vào vòm cứng, rung dây thanh, sau đó bung ra từ từ tạo thành một luồng hơi ma sát, môi hơi nhô ra.",
    articulation:
      "Đầu lưỡi chạm vào vòm cứng, rung dây thanh, sau đó bung ra từ từ tạo thành một luồng hơi ma sát, môi hơi nhô ra.",
    examples: [
      {
        value: "jam",
        transcription: "/dʒæm/",
        audio: "",
        meaning: "mứt",
      },
      {
        value: "job",
        transcription: "/dʒɒb/",
        audio: "",
        meaning: "công việc",
      },
      {
        value: "age",
        transcription: "/eɪdʒ/",
        audio: "",
        meaning: "tuổi",
      },
      {
        value: "bridge",
        transcription: "/brɪdʒ/",
        audio: "",
        meaning: "cây cầu",
      },
      {
        value: "soldier",
        transcription: "/ˈsəʊldʒə(r)/",
        audio: "",
        meaning: "người lính",
      },
    ],
    exceptions: [],
    identify: {
      j: [
        {
          value: "jam",
          transcription: "/dʒæm/",
          audio: "",
          meaning: "mứt",
        },
        {
          value: "job",
          transcription: "/dʒɒb/",
          audio: "",
          meaning: "công việc",
        },
      ],
      g: [
        {
          value: "age",
          transcription: "/eɪdʒ/",
          audio: "",
          meaning: "tuổi",
        },
        {
          value: "page",
          transcription: "/peɪdʒ/",
          audio: "",
          meaning: "trang",
        },
      ],
      dg: [
        {
          value: "bridge",
          transcription: "/brɪdʒ/",
          audio: "",
          meaning: "cây cầu",
        },
        {
          value: "edge",
          transcription: "/edʒ/",
          audio: "",
          meaning: "cạnh",
        },
      ],
      di: [
        {
          value: "soldier",
          transcription: "/ˈsəʊldʒə(r)/",
          audio: "",
          meaning: "người lính",
        },
      ],
    },
  },
  {
    symbol: "/m/",
    type: "nasal",
    keyword: "man",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai40/u40.mp3",
    description:
      "Âm /m/ là một phụ âm mũi, hữu thanh. Khi phát âm, hai môi khép lại, không khí đi qua mũi, rung dây thanh.",
    articulation: "Hai môi khép lại, không khí đi qua mũi, rung dây thanh.",
    examples: [
      {
        value: "man",
        transcription: "/mæn/",
        audio: "",
        meaning: "đàn ông",
      },
      {
        value: "mother",
        transcription: "/ˈmʌðə(r)/",
        audio: "",
        meaning: "mẹ",
      },
      {
        value: "time",
        transcription: "/taɪm/",
        audio: "",
        meaning: "thời gian",
      },
      {
        value: "come",
        transcription: "/kʌm/",
        audio: "",
        meaning: "đến",
      },
      {
        value: "summer",
        transcription: "/ˈsʌmə(r)/",
        audio: "",
        meaning: "mùa hè",
      },
    ],
    exceptions: [
      {
        value: "mnemonic",
        transcription: "/nɪˈmɒnɪk/",
        audio: "",
        meaning: "ghi nhớ",
      },
    ],
    identify: {
      m: [
        {
          value: "man",
          transcription: "/mæn/",
          audio: "",
          meaning: "đàn ông",
        },
        {
          value: "mother",
          transcription: "/ˈmʌðə(r)/",
          audio: "",
          meaning: "mẹ",
        },
      ],
      mm: [
        {
          value: "summer",
          transcription: "/ˈsʌmə(r)/",
          audio: "",
          meaning: "mùa hè",
        },
        {
          value: "common",
          transcription: "/ˈkɒmən/",
          audio: "",
          meaning: "phổ biến",
        },
      ],
      mb: [
        {
          value: "climb",
          transcription: "/klaɪm/",
          audio: "",
          meaning: "leo trèo",
        },
        {
          value: "comb",
          transcription: "/kəʊm/",
          audio: "",
          meaning: "lược",
        },
      ],
    },
  },
  {
    symbol: "/n/",
    type: "nasal",
    keyword: "no",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai41/u41.mp3",
    description:
      "Âm /n/ là một phụ âm mũi, hữu thanh. Khi phát âm, đầu lưỡi chạm vào phía sau răng cửa trên, không khí đi qua mũi, rung dây thanh.",
    articulation:
      "Đầu lưỡi chạm vào phía sau răng cửa trên, không khí đi qua mũi, rung dây thanh.",
    examples: [
      {
        value: "no",
        transcription: "/nəʊ/",
        audio: "",
        meaning: "không",
      },
      {
        value: "name",
        transcription: "/neɪm/",
        audio: "",
        meaning: "tên",
      },
      {
        value: "sun",
        transcription: "/sʌn/",
        audio: "",
        meaning: "mặt trời",
      },
      {
        value: "rain",
        transcription: "/reɪn/",
        audio: "",
        meaning: "mưa",
      },
      {
        value: "dinner",
        transcription: "/ˈdɪnə(r)/",
        audio: "",
        meaning: "bữa tối",
      },
    ],
    exceptions: [
      {
        value: "know",
        transcription: "/nəʊ/",
        audio: "",
        meaning: "biết",
      },
    ],
    identify: {
      n: [
        {
          value: "no",
          transcription: "/nəʊ/",
          audio: "",
          meaning: "không",
        },
        {
          value: "name",
          transcription: "/neɪm/",
          audio: "",
          meaning: "tên",
        },
      ],
      nn: [
        {
          value: "dinner",
          transcription: "/ˈdɪnə(r)/",
          audio: "",
          meaning: "bữa tối",
        },
        {
          value: "connect",
          transcription: "/kəˈnekt/",
          audio: "",
          meaning: "kết nối",
        },
      ],
      kn: [
        {
          value: "know",
          transcription: "/nəʊ/",
          audio: "",
          meaning: "biết",
        },
        {
          value: "knee",
          transcription: "/niː/",
          audio: "",
          meaning: "đầu gối",
        },
      ],
      gn: [
        {
          value: "sign",
          transcription: "/saɪn/",
          audio: "",
          meaning: "dấu hiệu",
        },
        {
          value: "foreign",
          transcription: "/ˈfɒrən/",
          audio: "",
          meaning: "nước ngoài",
        },
      ],
    },
  },
  {
    symbol: "/ŋ/",
    type: "nasal",
    keyword: "sing",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai42/u42.mp3",
    description:
      "Âm /ŋ/ là một phụ âm mũi, hữu thanh. Khi phát âm, phần sau lưỡi chạm vào vòm mềm, không khí đi qua mũi, rung dây thanh.",
    articulation:
      "Phần sau lưỡi chạm vào vòm mềm, không khí đi qua mũi, rung dây thanh.",
    examples: [
      {
        value: "sing",
        transcription: "/sɪŋ/",
        audio: "",
        meaning: "hát",
      },
      {
        value: "ring",
        transcription: "/rɪŋ/",
        audio: "",
        meaning: "chiếc nhẫn",
      },
      {
        value: "thing",
        transcription: "/θɪŋ/",
        audio: "",
        meaning: "vật",
      },
      {
        value: "English",
        transcription: "/ˈɪŋɡlɪʃ/",
        audio: "",
        meaning: "tiếng Anh",
      },
      {
        value: "finger",
        transcription: "/ˈfɪŋɡə(r)/",
        audio: "",
        meaning: "ngón tay",
      },
    ],
    exceptions: [],
    identify: {
      ng: [
        {
          value: "sing",
          transcription: "/sɪŋ/",
          audio: "",
          meaning: "hát",
        },
        {
          value: "ring",
          transcription: "/rɪŋ/",
          audio: "",
          meaning: "chiếc nhẫn",
        },
      ],
      n: [
        {
          value: "think",
          transcription: "/θɪŋk/",
          audio: "",
          meaning: "suy nghĩ",
        },
        {
          value: "bank",
          transcription: "/bæŋk/",
          audio: "",
          meaning: "ngân hàng",
        },
      ],
    },
  },
  {
    symbol: "/l/",
    type: "approximant",
    keyword: "leg",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai43/u43.mp3",
    description:
      "Âm /l/ là một phụ âm tiếp cận, hữu thanh. Khi phát âm, đầu lưỡi chạm vào phía sau răng cửa trên, không khí đi qua hai bên lưỡi, rung dây thanh.",
    articulation:
      "Đầu lưỡi chạm vào phía sau răng cửa trên, không khí đi qua hai bên lưỡi, rung dây thanh.",
    examples: [
      {
        value: "leg",
        transcription: "/leɡ/",
        audio: "",
        meaning: "chân",
      },
      {
        value: "like",
        transcription: "/laɪk/",
        audio: "",
        meaning: "thích",
      },
      {
        value: "feel",
        transcription: "/fiːl/",
        audio: "",
        meaning: "cảm thấy",
      },
      {
        value: "call",
        transcription: "/kɔːl/",
        audio: "",
        meaning: "gọi",
      },
      {
        value: "yellow",
        transcription: "/ˈjeləʊ/",
        audio: "",
        meaning: "màu vàng",
      },
    ],
    exceptions: [
      {
        value: "half",
        transcription: "/hɑːf/",
        audio: "",
        meaning: "một nửa",
      },
      {
        value: "talk",
        transcription: "/tɔːk/",
        audio: "",
        meaning: "nói chuyện",
      },
    ],
    identify: {
      l: [
        {
          value: "leg",
          transcription: "/leɡ/",
          audio: "",
          meaning: "chân",
        },
        {
          value: "like",
          transcription: "/laɪk/",
          audio: "",
          meaning: "thích",
        },
      ],
      ll: [
        {
          value: "call",
          transcription: "/kɔːl/",
          audio: "",
          meaning: "gọi",
        },
        {
          value: "yellow",
          transcription: "/ˈjeləʊ/",
          audio: "",
          meaning: "màu vàng",
        },
      ],
    },
  },
  {
    symbol: "/r/",
    type: "approximant",
    keyword: "red",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai44/u44.mp3",
    description:
      "Âm /r/ là một phụ âm tiếp cận, hữu thanh. Khi phát âm, đầu lưỡi cong lên gần vòm cứng nhưng không chạm vào, rung dây thanh.",
    articulation:
      "Đầu lưỡi cong lên gần vòm cứng nhưng không chạm vào, rung dây thanh.",
    examples: [
      {
        value: "red",
        transcription: "/red/",
        audio: "",
        meaning: "màu đỏ",
      },
      {
        value: "right",
        transcription: "/raɪt/",
        audio: "",
        meaning: "đúng",
      },
      {
        value: "car",
        transcription: "/kɑː(r)/",
        audio: "",
        meaning: "xe hơi",
      },
      {
        value: "sorry",
        transcription: "/ˈsɒri/",
        audio: "",
        meaning: "xin lỗi",
      },
      {
        value: "write",
        transcription: "/raɪt/",
        audio: "",
        meaning: "viết",
      },
    ],
    exceptions: [],
    identify: {
      r: [
        {
          value: "red",
          transcription: "/red/",
          audio: "",
          meaning: "màu đỏ",
        },
        {
          value: "right",
          transcription: "/raɪt/",
          audio: "",
          meaning: "đúng",
        },
      ],
      rr: [
        {
          value: "sorry",
          transcription: "/ˈsɒri/",
          audio: "",
          meaning: "xin lỗi",
        },
        {
          value: "borrow",
          transcription: "/ˈbɒrəʊ/",
          audio: "",
          meaning: "mượn",
        },
      ],
      wr: [
        {
          value: "write",
          transcription: "/raɪt/",
          audio: "",
          meaning: "viết",
        },
        {
          value: "wrong",
          transcription: "/rɒŋ/",
          audio: "",
          meaning: "sai",
        },
      ],
    },
  },
  {
    symbol: "/w/",
    type: "approximant",
    keyword: "wet",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai35/u35.mp3",
    description:
      "Âm /w/ là một phụ âm tiếp cận, hữu thanh. Khi phát âm, môi tròn và nhô ra, phần sau lưỡi nâng lên gần vòm mềm, rung dây thanh.",
    articulation:
      "Môi tròn và nhô ra, phần sau lưỡi nâng lên gần vòm mềm, rung dây thanh.",
    examples: [
      {
        value: "wet",
        transcription: "/wet/",
        audio: "",
        meaning: "ướt",
      },
      {
        value: "water",
        transcription: "/ˈwɔːtə(r)/",
        audio: "",
        meaning: "nước",
      },
      {
        value: "swim",
        transcription: "/swɪm/",
        audio: "",
        meaning: "bơi",
      },
      {
        value: "always",
        transcription: "/ˈɔːlweɪz/",
        audio: "",
        meaning: "luôn luôn",
      },
      {
        value: "one",
        transcription: "/wʌn/",
        audio: "",
        meaning: "một",
      },
    ],
    exceptions: [],
    identify: {
      w: [
        {
          value: "wet",
          transcription: "/wet/",
          audio: "",
          meaning: "ướt",
        },
        {
          value: "water",
          transcription: "/ˈwɔːtə(r)/",
          audio: "",
          meaning: "nước",
        },
      ],
      wh: [
        {
          value: "what",
          transcription: "/wɒt/",
          audio: "",
          meaning: "cái gì",
        },
        {
          value: "when",
          transcription: "/wen/",
          audio: "",
          meaning: "khi nào",
        },
      ],
      u: [
        {
          value: "quick",
          transcription: "/kwɪk/",
          audio: "",
          meaning: "nhanh",
        },
        {
          value: "language",
          transcription: "/ˈlæŋɡwɪdʒ/",
          audio: "",
          meaning: "ngôn ngữ",
        },
      ],
      o: [
        {
          value: "one",
          transcription: "/wʌn/",
          audio: "",
          meaning: "một",
        },
        {
          value: "once",
          transcription: "/wʌns/",
          audio: "",
          meaning: "một lần",
        },
      ],
    },
  },
  {
    symbol: "/j/",
    type: "approximant",
    keyword: "yes",
    audio:
      "https://noidung.tienganh123.com/file/baihoc/pronunciation/coban/bai36/u36.mp3",
    description:
      "Âm /j/ là một phụ âm tiếp cận, hữu thanh. Khi phát âm, phần giữa lưỡi nâng lên gần vòm cứng, rung dây thanh.",
    articulation: "Phần giữa lưỡi nâng lên gần vòm cứng, rung dây thanh.",
    examples: [
      {
        value: "yes",
        transcription: "/jes/",
        audio: "",
        meaning: "có",
      },
      {
        value: "yellow",
        transcription: "/ˈjeləʊ/",
        audio: "",
        meaning: "màu vàng",
      },
      {
        value: "you",
        transcription: "/juː/",
        audio: "",
        meaning: "bạn",
      },
      {
        value: "year",
        transcription: "/jɪə(r)/",
        audio: "",
        meaning: "năm",
      },
      {
        value: "use",
        transcription: "/juːz/",
        audio: "",
        meaning: "sử dụng",
      },
    ],
    exceptions: [],
    identify: {
      y: [
        {
          value: "yes",
          transcription: "/jes/",
          audio: "",
          meaning: "có",
        },
        {
          value: "yellow",
          transcription: "/ˈjeləʊ/",
          audio: "",
          meaning: "màu vàng",
        },
      ],
      u: [
        {
          value: "use",
          transcription: "/juːz/",
          audio: "",
          meaning: "sử dụng",
        },
        {
          value: "music",
          transcription: "/ˈmjuːzɪk/",
          audio: "",
          meaning: "âm nhạc",
        },
      ],
      eu: [
        {
          value: "Europe",
          transcription: "/ˈjʊərəp/",
          audio: "",
          meaning: "Châu Âu",
        },
      ],
    },
  },
];

export { consonants };
