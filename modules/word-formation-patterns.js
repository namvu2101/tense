// English Word Formation Patterns - Dấu hiệu nhận biết các loại từ

// Định nghĩa các dấu hiệu nhận biết cho từng loại từ
const wordFormationPatterns = {
  // DANH TỪ (NOUNS)
  nouns: {
    suffixes: {
      person: [
        { suffix: "-er/-or", examples: ["teacher", "doctor", "actor", "writer"], meaning: "người thực hiện hành động" },
        { suffix: "-ist", examples: ["artist", "scientist", "pianist"], meaning: "người chuyên về lĩnh vực nào đó" },
        { suffix: "-ian", examples: ["musician", "technician", "librarian"], meaning: "người chuyên về lĩnh vực nào đó" },
        { suffix: "-ant/-ent", examples: ["assistant", "student", "immigrant"], meaning: "người thực hiện hành động" },
        { suffix: "-ee", examples: ["employee", "trainee", "interviewee"], meaning: "người nhận hành động" }
      ],
      abstract: [
        { suffix: "-tion/-sion", examples: ["education", "discussion", "decision"], meaning: "hành động hoặc quá trình" },
        { suffix: "-ment", examples: ["development", "government", "agreement"], meaning: "trạng thái hoặc kết quả" },
        { suffix: "-ity", examples: ["ability", "possibility", "reality"], meaning: "phẩm chất hoặc trạng thái" },
        { suffix: "-ness", examples: ["happiness", "kindness", "darkness"], meaning: "trạng thái hoặc phẩm chất" },
        { suffix: "-ship", examples: ["friendship", "relationship", "leadership"], meaning: "trạng thái hoặc vị trí" },
        { suffix: "-hood", examples: ["childhood", "neighborhood", "brotherhood"], meaning: "trạng thái hoặc thời kỳ" },
        { suffix: "-ism", examples: ["capitalism", "tourism", "optimism"], meaning: "chủ nghĩa, học thuyết hoặc trạng thái" },
        { suffix: "-ance/-ence", examples: ["importance", "difference", "preference"], meaning: "trạng thái hoặc phẩm chất" },
        { suffix: "-th", examples: ["growth", "health", "wealth"], meaning: "trạng thái hoặc phẩm chất" },
        { suffix: "-al", examples: ["arrival", "approval", "refusal"], meaning: "hành động hoặc quá trình" },
        { suffix: "-age", examples: ["marriage", "package", "storage"], meaning: "trạng thái hoặc kết quả" },
        { suffix: "-ure", examples: ["pressure", "failure", "pleasure"], meaning: "hành động hoặc kết quả" },
        { suffix: "-dom", examples: ["freedom", "kingdom", "wisdom"], meaning: "trạng thái hoặc lãnh thổ" },
        { suffix: "-cy", examples: ["democracy", "accuracy", "privacy"], meaning: "trạng thái hoặc phẩm chất" },
        { suffix: "-ing", examples: ["reading", "swimming", "building"], meaning: "hành động hoặc quá trình" }
      ],
      diminutive: [
        { suffix: "-let", examples: ["booklet", "piglet", "leaflet"], meaning: "phiên bản nhỏ" },
        { suffix: "-ling", examples: ["duckling", "gosling", "sapling"], meaning: "phiên bản nhỏ hoặc trẻ" },
        { suffix: "-ette", examples: ["kitchenette", "cigarette", "diskette"], meaning: "phiên bản nhỏ" }
      ],
      place: [
        { suffix: "-ery/-ary", examples: ["bakery", "nursery", "library"], meaning: "nơi chốn" }
      ],
      collection: [
        { suffix: "-ry", examples: ["jewelry", "poetry", "machinery"], meaning: "tập hợp hoặc loại" }
      ]
    },
    prefixes: [
      { prefix: "un-", examples: ["unemployment", "uncertainty", "unrest"], meaning: "phủ định" },
      { prefix: "dis-", examples: ["discomfort", "disadvantage", "disorder"], meaning: "phủ định hoặc ngược lại" },
      { prefix: "re-", examples: ["reconstruction", "reorganization", "reunion"], meaning: "lặp lại" },
      { prefix: "pre-", examples: ["prediction", "preface", "preview"], meaning: "trước" },
      { prefix: "post-", examples: ["postgraduate", "postscript", "postwar"], meaning: "sau" },
      { prefix: "anti-", examples: ["antibody", "antibiotic", "antidote"], meaning: "chống lại" },
      { prefix: "auto-", examples: ["autobiography", "autopilot", "autoimmunity"], meaning: "tự động hoặc tự thân" },
      { prefix: "bi-", examples: ["bilingualism", "bicentennial", "bicameralism"], meaning: "hai" },
      { prefix: "co-", examples: ["co-worker", "co-author", "co-founder"], meaning: "cùng với" },
      { prefix: "ex-", examples: ["ex-husband", "ex-president", "ex-colleague"], meaning: "cựu hoặc trước đây" },
      { prefix: "inter-", examples: ["interaction", "interface", "internet"], meaning: "giữa" },
      { prefix: "micro-", examples: ["microchip", "microorganism", "microwave"], meaning: "nhỏ" },
      { prefix: "mini-", examples: ["minibus", "miniskirt", "minicomputer"], meaning: "nhỏ" },
      { prefix: "mono-", examples: ["monologue", "monopoly", "monotheism"], meaning: "một" },
      { prefix: "multi-", examples: ["multimedia", "multitasking", "multiculturalism"], meaning: "nhiều" },
      { prefix: "over-", examples: ["overtime", "overload", "overview"], meaning: "quá mức" },
      { prefix: "poly-", examples: ["polygon", "polyglot", "polytheism"], meaning: "nhiều" },
      { prefix: "semi-", examples: ["semicircle", "semifinal", "semiconductor"], meaning: "nửa" },
      { prefix: "sub-", examples: ["subway", "subcommittee", "subconscious"], meaning: "dưới" },
      { prefix: "super-", examples: ["supermarket", "superman", "superpower"], meaning: "trên hoặc vượt trội" },
      { prefix: "tele-", examples: ["television", "telephone", "telepathy"], meaning: "xa" },
      { prefix: "trans-", examples: ["transaction", "transport", "transformation"], meaning: "qua" },
      { prefix: "under-", examples: ["underworld", "undergraduate", "underdog"], meaning: "dưới" }
    ],
    compound: [
      { pattern: "noun + noun", examples: ["bedroom", "football", "toothpaste"] },
      { pattern: "adjective + noun", examples: ["blackboard", "software", "greenhouse"] },
      { pattern: "verb + noun", examples: ["washing machine", "swimming pool", "driving license"] },
      { pattern: "noun + verb", examples: ["rainfall", "sunshine", "earthquake"] },
      { pattern: "gerund + noun", examples: ["dining room", "swimming pool", "waiting room"] },
      { pattern: "noun + preposition + noun", examples: ["mother-in-law", "commander-in-chief"] }
    ]
  },

  // ĐỘNG TỪ (VERBS)
  verbs: {
    suffixes: [
      { suffix: "-ize/-ise", examples: ["realize", "organize", "criticize"], meaning: "làm cho trở thành" },
      { suffix: "-ify", examples: ["simplify", "clarify", "identify"], meaning: "làm cho trở thành" },
      { suffix: "-en", examples: ["strengthen", "widen", "deepen"], meaning: "làm cho trở thành" },
      { suffix: "-ate", examples: ["activate", "create", "educate"], meaning: "làm hoặc gây ra" }
    ],
    prefixes: [
      { prefix: "un-", examples: ["undo", "unlock", "unpack"], meaning: "đảo ngược hành động" },
      { prefix: "dis-", examples: ["disagree", "disappear", "disconnect"], meaning: "phủ định hoặc đảo ngược" },
      { prefix: "re-", examples: ["rebuild", "rewrite", "rethink"], meaning: "lặp lại" },
      { prefix: "over-", examples: ["overeat", "overwork", "overreact"], meaning: "quá mức" },
      { prefix: "under-", examples: ["underestimate", "underperform", "undervalue"], meaning: "dưới mức" },
      { prefix: "mis-", examples: ["misunderstand", "mislead", "misinform"], meaning: "sai" },
      { prefix: "out-", examples: ["outperform", "outlive", "outgrow"], meaning: "vượt trội" },
      { prefix: "co-", examples: ["cooperate", "coexist", "coordinate"], meaning: "cùng với" },
      { prefix: "de-", examples: ["decode", "deactivate", "defrost"], meaning: "đảo ngược hoặc loại bỏ" },
      { prefix: "fore-", examples: ["foresee", "foretell", "forecast"], meaning: "trước" },
      { prefix: "inter-", examples: ["interact", "interlink", "interrelate"], meaning: "giữa" },
      { prefix: "pre-", examples: ["predict", "prepare", "prevent"], meaning: "trước" },
      { prefix: "trans-", examples: ["transform", "translate", "transport"], meaning: "qua" }
    ],
    compound: [
      { pattern: "verb + adverb", examples: ["break down", "give up", "look after"] },
      { pattern: "verb + preposition", examples: ["look for", "wait for", "listen to"] },
      { pattern: "verb + adverb + preposition", examples: ["look forward to", "put up with", "get away with"] },
      { pattern: "noun + verb", examples: ["brainwash", "daydream", "sleepwalk"] }
    ],
    conversion: [
      { pattern: "noun → verb", examples: ["email (n) → to email", "text (n) → to text", "google (n) → to google"] },
      { pattern: "adjective → verb", examples: ["clean (adj) → to clean", "dry (adj) → to dry", "empty (adj) → to empty"] }
    ]
  },

  // TÍNH TỪ (ADJECTIVES)
  adjectives: {
    suffixes: [
      { suffix: "-able/-ible", examples: ["comfortable", "visible", "responsible"], meaning: "có thể được" },
      { suffix: "-al", examples: ["national", "musical", "natural"], meaning: "liên quan đến" },
      { suffix: "-ful", examples: ["beautiful", "careful", "helpful"], meaning: "đầy" },
      { suffix: "-ic", examples: ["economic", "historic", "scientific"], meaning: "liên quan đến" },
      { suffix: "-ive", examples: ["creative", "attractive", "passive"], meaning: "có xu hướng" },
      { suffix: "-less", examples: ["homeless", "careless", "useless"], meaning: "không có" },
      { suffix: "-ous", examples: ["dangerous", "famous", "nervous"], meaning: "đầy hoặc có tính chất" },
      { suffix: "-y", examples: ["happy", "sunny", "rainy"], meaning: "có tính chất" },
      { suffix: "-ly", examples: ["friendly", "lovely", "lonely"], meaning: "có tính chất" },
      { suffix: "-ish", examples: ["childish", "reddish", "selfish"], meaning: "hơi hoặc giống như" },
      { suffix: "-like", examples: ["childlike", "lifelike", "businesslike"], meaning: "giống như" },
      { suffix: "-ary/-ory", examples: ["revolutionary", "satisfactory", "complementary"], meaning: "liên quan đến" },
      { suffix: "-ate", examples: ["passionate", "fortunate", "desperate"], meaning: "có tính chất" },
      { suffix: "-ent/-ant", examples: ["different", "important", "confident"], meaning: "có tính chất" },
      { suffix: "-some", examples: ["troublesome", "awesome", "handsome"], meaning: "gây ra hoặc có tính chất" },
      { suffix: "-ed", examples: ["interested", "excited", "bored"], meaning: "cảm thấy" },
      { suffix: "-ing", examples: ["interesting", "exciting", "boring"], meaning: "gây ra cảm giác" }
    ],
    prefixes: [
      { prefix: "un-", examples: ["unhappy", "uncomfortable", "unusual"], meaning: "không" },
      { prefix: "in-/im-/il-/ir-", examples: ["inactive", "impossible", "illegal", "irregular"], meaning: "không" },
      { prefix: "dis-", examples: ["dishonest", "disloyal", "disrespectful"], meaning: "không hoặc ngược lại" },
      { prefix: "non-", examples: ["non-violent", "non-toxic", "non-fiction"], meaning: "không" },
      { prefix: "anti-", examples: ["anti-social", "anti-war", "anti-bacterial"], meaning: "chống lại" },
      { prefix: "pre-", examples: ["pre-war", "pre-industrial", "pre-historic"], meaning: "trước" },
      { prefix: "post-", examples: ["post-war", "post-modern", "post-colonial"], meaning: "sau" },
      { prefix: "inter-", examples: ["international", "interpersonal", "interactive"], meaning: "giữa" },
      { prefix: "multi-", examples: ["multi-cultural", "multi-lingual", "multi-purpose"], meaning: "nhiều" },
      { prefix: "over-", examples: ["over-confident", "over-protective", "over-sensitive"], meaning: "quá mức" },
      { prefix: "under-", examples: ["under-developed", "under-cooked", "under-paid"], meaning: "dưới mức" },
      { prefix: "super-", examples: ["super-fast", "super-human", "super-sensitive"], meaning: "trên hoặc vượt trội" },
      { prefix: "sub-", examples: ["sub-standard", "sub-tropical", "sub-conscious"], meaning: "dưới" },
      { prefix: "semi-", examples: ["semi-automatic", "semi-conscious", "semi-formal"], meaning: "nửa" },
      { prefix: "ex-", examples: ["ex-official", "ex-colonial", "ex-military"], meaning: "cựu hoặc trước đây" }
    ],
    compound: [
      { pattern: "adjective + adjective", examples: ["bitter-sweet", "socio-economic", "red-hot"] },
      { pattern: "adjective + noun", examples: ["duty-free", "tax-free", "world-famous"] },
      { pattern: "adjective + past participle", examples: ["new-born", "old-fashioned", "well-known"] },
      { pattern: "adjective + present participle", examples: ["good-looking", "easy-going", "hard-working"] },
      { pattern: "adverb + past participle", examples: ["well-behaved", "well-dressed", "well-educated"] },
      { pattern: "adverb + present participle", examples: ["ever-increasing", "never-ending", "fast-growing"] },
      { pattern: "noun + adjective", examples: ["sugar-free", "waterproof", "user-friendly"] }
    ]
  },

  // TRẠNG TỪ (ADVERBS)
  adverbs: {
    suffixes: [
      { suffix: "-ly", examples: ["quickly", "carefully", "completely"], meaning: "theo cách" },
      { suffix: "-wise", examples: ["clockwise", "likewise", "otherwise"], meaning: "theo cách hoặc hướng" },
      { suffix: "-ward(s)", examples: ["backward(s)", "forward(s)", "afterward(s)"], meaning: "theo hướng" },
      { suffix: "-fold", examples: ["twofold", "manifold", "tenfold"], meaning: "theo số lần" }
    ],
    prefixes: [
      { prefix: "over-", examples: ["over-confidently", "over-enthusiastically"], meaning: "quá mức" },
      { prefix: "under-", examples: ["under-confidently"], meaning: "dưới mức" }
    ],
    compound: [
      { pattern: "adverb + adverb", examples: ["moreover", "furthermore", "nevertheless"] },
      { pattern: "preposition + noun", examples: ["in fact", "at last", "by chance"] },
      { pattern: "adverb + preposition", examples: ["herewith", "thereby", "whereupon"] }
    ],
    conversion: [
      { pattern: "adjective → adverb", examples: ["fast (adj) → fast (adv)", "hard (adj) → hard (adv)", "early (adj) → early (adv)"] }
    ]
  }
};

// Tạo bảng tóm tắt các dấu hiệu nhận biết phổ biến nhất
const commonRecognitionSigns = {
  nouns: [
    "-tion/-sion (education, decision)",
    "-ment (development, government)",
    "-ity (ability, reality)",
    "-ness (happiness, kindness)",
    "-er/-or (teacher, doctor)",
    "-ist (artist, scientist)",
    "-ance/-ence (importance, difference)",
    "-ship (friendship, leadership)",
    "-hood (childhood, neighborhood)",
    "-ism (capitalism, tourism)",
    "-ing (reading, building)",
    "-age (marriage, package)"
  ],
  verbs: [
    "-ize/-ise (realize, organize)",
    "-ify (simplify, clarify)",
    "-en (strengthen, widen)",
    "-ate (activate, create)",
    "Tiền tố un- (undo, unlock)",
    "Tiền tố re- (rebuild, rewrite)",
    "Tiền tố dis- (disagree, disappear)",
    "Tiền tố over- (overeat, overwork)",
    "Tiền tố under- (underestimate, undervalue)"
  ],
  adjectives: [
    "-able/-ible (comfortable, visible)",
    "-al (national, musical)",
    "-ful (beautiful, careful)",
    "-less (homeless, careless)",
    "-ous (dangerous, famous)",
    "-ive (creative, attractive)",
    "-ic (economic, scientific)",
    "-y (happy, sunny)",
    "-ed (interested, excited)",
    "-ing (interesting, exciting)",
    "Tiền tố un- (unhappy, unusual)",
    "Tiền tố in-/im-/il-/ir- (inactive, impossible, illegal, irregular)"
  ],
  adverbs: [
    "-ly (quickly, carefully)",
    "-wise (clockwise, likewise)",
    "-ward(s) (backward(s), forward(s))"
  ]
};

// Hiển thị dấu hiệu nhận biết phổ biến nhất
console.log("DẤU HIỆU NHẬN BIẾT CÁC LOẠI TỪ TRONG TIẾNG ANH\n");

console.log("1. DANH TỪ (NOUNS):");
console.log("Các hậu tố phổ biến:");
commonRecognitionSigns.nouns.forEach(sign => console.log(`   - ${sign}`));

console.log("\n2. ĐỘNG TỪ (VERBS):");
console.log("Các hậu tố và tiền tố phổ biến:");
commonRecognitionSigns.verbs.forEach(sign => console.log(`   - ${sign}`));

console.log("\n3. TÍNH TỪ (ADJECTIVES):");
console.log("Các hậu tố và tiền tố phổ biến:");
commonRecognitionSigns.adjectives.forEach(sign => console.log(`   - ${sign}`));

console.log("\n4. TRẠNG TỪ (ADVERBS):");
console.log("Các hậu tố phổ biến:");
commonRecognitionSigns.adverbs.forEach(sign => console.log(`   - ${sign}`));

// Hiển thị chi tiết về danh từ
console.log("\nCHI TIẾT VỀ DANH TỪ:");
console.log("Hậu tố chỉ người:");
wordFormationPatterns.nouns.suffixes.person.forEach(item => {
  console.log(`   - ${item.suffix}: ${item.examples.join(", ")} (${item.meaning})`);
});

console.log("\nHậu tố chỉ khái niệm trừu tượng:");
wordFormationPatterns.nouns.suffixes.abstract.slice(0, 5).forEach(item => {
  console.log(`   - ${item.suffix}: ${item.examples.join(", ")} (${item.meaning})`);
});

// Hiển thị chi tiết về động từ
console.log("\nCHI TIẾT VỀ ĐỘNG TỪ:");
console.log("Hậu tố phổ biến:");
wordFormationPatterns.verbs.suffixes.forEach(item => {
  console.log(`   - ${item.suffix}: ${item.examples.join(", ")} (${item.meaning})`);
});

// Hiển thị chi tiết về tính từ
console.log("\nCHI TIẾT VỀ TÍNH TỪ:");
console.log("Hậu tố phổ biến:");
wordFormationPatterns.adjectives.suffixes.slice(0, 8).forEach(item => {
  console.log(`   - ${item.suffix}: ${item.examples.join(", ")} (${item.meaning})`);
});

// Hiển thị chi tiết về trạng từ
console.log("\nCHI TIẾT VỀ TRẠNG TỪ:");
console.log("Hậu tố phổ biến:");
wordFormationPatterns.adverbs.suffixes.forEach(item => {
  console.log(`   - ${item.suffix}: ${item.examples.join(", ")} (${item.meaning})`);
});

// Xuất dữ liệu để sử dụng trong ứng dụng
export { wordFormationPatterns, commonRecognitionSigns };