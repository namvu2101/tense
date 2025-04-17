import { TenseData } from "./types";

export type Tense =
  | "present-simple"
  | "present-continuous"
  | "present-perfect"
  | "present-perfect-continuous"
  | "past-simple"
  | "past-continuous"
  | "past-perfect"
  | "past-perfect-continuous"
  | "future-simple"
  | "future-continuous"
  | "future-perfect"
  | "future-perfect-continuous";

const tenses:TenseData[] = [
  {
    tense: "present simple",
    description: "Thì hiện tại đơn",
    form: {
      affirmative: {
        tobe: {
          formula: "S + am/is/are + Noun/Adjective",
          examples: [
            "- I am an engineer. (Tôi là một kỹ sư.)",
            "- He is a lecturer. (Ông ấy là một giảng viên.)",
            "- The car is expensive. (Chiếc ô tô này rất đắt tiền.)",
            "- They are students. (Họ là sinh viên.)",
          ],
          note: "Chúng ta sử dụng 'am' với 'I', 'is' với 'he, she, it', và 'are' với 'you, we, they'.",
          details:
            "Động từ 'to be' (am/is/are) là một động từ bất quy tắc, được chia theo chủ ngữ. Lưu ý rằng trong câu khẳng định, 'is' được dùng cho chủ ngữ số ít, và 'are' cho chủ ngữ số nhiều. 'Am' chỉ dùng cho 'I'.",
        },
        normal: {
          formula:
            "S + V(s/es)\n- I/We/You/They/Danh từ số nhiều + V (nguyên thể)\n- He/She/It/Danh từ số ít/Danh từ không đếm được + V (s/es)",
          examples: [
            "- I often go to school on foot. (Tôi thường đi bộ đến trường.)",
            "- She does yoga every evening. (Cô ấy tập yoga mỗi tối.)",
            "- The Sun sets in the West. (Mặt trời lặn ở hướng Tây.)",
            "- They study English every day. (Họ học tiếng Anh mỗi ngày.)",
          ],
          note: "Với ngôi số ít (he, she, it), động từ cần phải thêm 's' hoặc 'es'.",
          rules: [
            "Nếu động từ kết thúc bằng -o, -ch, -sh, -x, -s, thêm 'es' (go → goes, watch → watches, fix → fixes).",
            "Nếu động từ kết thúc bằng -y, thay 'y' bằng 'ies' (study → studies, copy → copies).",
            "Các động từ còn lại sẽ chỉ thêm 's' ở ngôi số ít (play → plays, see → sees).",
            "Các động từ bất quy tắc như 'do', 'have', 'go' đều theo quy tắc đặc biệt. 'Go' trở thành 'goes' khi chia với ngôi số ít.",
          ],
        },
      },
      negative: {
        tobe: {
          formula: "S + am/are/is + not + Noun/Adjective",
          examples: [
            "I am not an engineer. (Tôi không phải là kỹ sư.)",
            "He is not a lecturer. (Ông ấy không phải là giảng viên.)",
            "The car is not expensive. (Chiếc ô tô này không đắt tiền.)",
            "They are not students. (Họ không phải là sinh viên.)",
          ],
        },
        normal: {
          formula: "S + do/does + not + V (nguyên thể)",
          examples: [
            "I do not like coffee. (Tôi không thích cà phê.)",
            "She does not go to school by bus. (Cô ấy không đi học bằng xe buýt.)",
            "They do not study on Sundays. (Họ không học vào Chủ nhật.)",
            "We do not play tennis on weekends. (Chúng tôi không chơi tennis vào cuối tuần.)",
          ],
          note: "Chúng ta sử dụng 'do not' (don't) cho I/you/we/they và 'does not' (doesn't) cho he/she/it.",
          details:
            "Khi phủ định, 'do' và 'does' giúp làm động từ chính thành động từ phụ, và động từ chính trở lại ở dạng nguyên thể. 'Does not' (doesn't) được dùng cho các ngôi số ít (he, she, it).",
        },
      },
      interrogative: {
        tobe: {
          formula: "Is/Are + S + Noun/Adjective?",
          examples: [
            "Is she a teacher? (Cô ấy là giáo viên?)",
            "Are they students? (Họ là sinh viên?)",
            "Is it a good idea? (Đây có phải là một ý tưởng tốt không?)",
            "Are you happy? (Bạn có vui không?)",
          ],
        },
        normal: {
          formula: "Do/Does + S + V (nguyên thể)?",
          examples: [
            "Do you like coffee? (Bạn có thích cà phê không?)",
            "Does he go to school by bus? (Anh ấy đi học bằng xe buýt phải không?)",
            "Do they play soccer every weekend? (Họ có chơi bóng đá vào cuối tuần không?)",
            "Does she read books every day? (Cô ấy đọc sách mỗi ngày phải không?)",
          ],
        },
      },
    },
    usage: {
      definition:
        "Thì hiện tại đơn được dùng để diễn tả những hành động lặp đi lặp lại, thói quen, sự thật hiển nhiên, hoặc các tình huống hiện tại.",
      examples: [
        "I work in a hospital. (Tôi làm việc trong một bệnh viện.)",
        "She reads books every day. (Cô ấy đọc sách mỗi ngày.)",
        "The Earth revolves around the Sun. (Trái đất quay quanh mặt trời.)",
      ],
      signalWords: [
        "always",
        "usually",
        "often",
        "never",
        "every day/week/month",
        "on Mondays",
      ],
    },
    note: [
      "Với các động từ kết thúc bằng -o, -ch, -sh, -x, -s sẽ thêm 'es' ở ngôi số ít (watch → watches).",
      "Với động từ kết thúc bằng -y, khi sử dụng với ngôi số ít, bỏ 'y' và thêm 'ies' (study → studies).",
      "Các động từ còn lại sẽ chỉ thêm 's' ở ngôi số ít (play → plays).",
      "Các danh từ không đếm được (sugar, water, information) không thay đổi khi chia động từ với ngôi số ít (She drinks water, He needs information).",
    ],
  },
  {
    tense: "present continuous",
    description: "Thì hiện tại tiếp diễn",
    form: {
      affirmative: {
        formula: "S + am/is/are + V-ing",
        examples: [
          "- I am reading a book. (Tôi đang đọc một cuốn sách.)",
          "- He is watching TV. (Anh ấy đang xem TV.)",
          "- They are playing football. (Họ đang chơi bóng đá.)",
          "- She is studying for her exam. (Cô ấy đang học cho kỳ thi.)",
        ],
        note: "Chúng ta sử dụng 'am' với 'I', 'is' với 'he, she, it', và 'are' với 'you, we, they'.",
        details:
          "Thì hiện tại tiếp diễn được tạo bằng cách sử dụng động từ 'to be' (am/is/are) + động từ chính ở dạng V-ing.\n Lưu ý một số quy tắc thêm '-ing': nếu động từ kết thúc bằng 'e', bỏ 'e' và thêm 'ing' (make → making); \nnếu động từ ngắn kết thúc bằng một nguyên âm + một phụ âm, gấp đôi phụ âm cuối và thêm 'ing' (run → running).",
      },
      negative: {
        formula: "S + am/is/are + not + V-ing",
        examples: [
          "- I am not sleeping. (Tôi không đang ngủ.)",
          "- He is not working now. (Anh ấy không đang làm việc bây giờ.)",
          "- They are not listening to music. (Họ không đang nghe nhạc.)",
          "- We are not having dinner. (Chúng tôi không đang ăn tối.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: 'm not, isn't, aren't.",
      },
      interrogative: {
        formula: "Am/Is/Are + S + V-ing?",
        examples: [
          "- Am I disturbing you? (Tôi có đang làm phiền bạn không?)",
          "- Is she cooking dinner? (Cô ấy đang nấu bữa tối phải không?)",
          "- Are they waiting for us? (Họ đang đợi chúng ta phải không?)",
          "- Is it raining outside? (Trời đang mưa bên ngoài phải không?)",
        ],
        note: "Câu trả lời ngắn: Yes, I am. / No, I'm not. Yes, he/she/it is. / No, he/she/it isn't. Yes, you/we/they are. / No, you/we/they aren't.",
      },
    },
    usage: {
      definition:
        "Thì hiện tại tiếp diễn được dùng để diễn tả những hành động đang diễn ra tại thời điểm nói, hoặc những hành động tạm thời trong hiện tại.",
      examples: [
        "I am writing an email right now. (Tôi đang viết một email ngay bây giờ.)",
        "She is living with her parents until she finds her own place. (Cô ấy đang sống với bố mẹ cho đến khi tìm được chỗ ở riêng.)",
        "They are studying for their exams this week. (Họ đang học cho kỳ thi trong tuần này.)",
      ],
      signalWords: [
        "now",
        "at the moment",
        "at present",
        "currently",
        "right now",
        "Look!",
        "Listen!",
      ],
    },
    note: [
      "Một số động từ thường không được sử dụng ở thì hiện tại tiếp diễn, gọi là 'stative verbs' (động từ chỉ trạng thái): like, love, hate, want, need, prefer, know, understand, believe, remember, belong, contain, consist, depend, seem.",
      "Khi thêm '-ing' vào động từ: nếu động từ kết thúc bằng 'e', bỏ 'e' và thêm 'ing' (come → coming); nếu động từ ngắn kết thúc bằng một nguyên âm + một phụ âm, gấp đôi phụ âm cuối và thêm 'ing' (sit → sitting); các trường hợp khác chỉ thêm 'ing' (play → playing).",
      "Thì hiện tại tiếp diễn cũng có thể được dùng để diễn tả kế hoạch đã được sắp xếp trong tương lai gần: 'I am meeting John tomorrow.' (Tôi sẽ gặp John vào ngày mai.)",
      "Thì này còn được dùng để diễn tả những hành động lặp đi lặp lại gây khó chịu với 'always': 'He is always coming late.' (Anh ấy luôn đến muộn.)",
    ],
  },
  {
    tense: "present perfect",
    description: "Thì hiện tại hoàn thành",
    form: {
      affirmative: {
        formula: "S + have/has + V3 (past participle)",
        examples: [
          "- I have visited Paris. (Tôi đã từng đến Paris.)",
          "- She has finished her homework. (Cô ấy đã hoàn thành bài tập về nhà.)",
          "- They have lived here for 10 years. (Họ đã sống ở đây được 10 năm.)",
          "- He has seen that movie twice. (Anh ấy đã xem bộ phim đó hai lần.)",
        ],
        note: "Chúng ta sử dụng 'have' với I/you/we/they và 'has' với he/she/it.",
        details:
          "Thì hiện tại hoàn thành được tạo bằng cách sử dụng 'have/has' + động từ ở dạng quá khứ phân từ (V3). Với động từ thường, V3 thường có dạng '-ed', nhưng có nhiều động từ bất quy tắc có dạng V3 riêng (go → gone, see → seen).",
      },
      negative: {
        formula: "S + have/has + not + V3 (past participle)",
        examples: [
          "- I have not seen him today. (Tôi chưa gặp anh ấy hôm nay.)",
          "- She has not eaten lunch yet. (Cô ấy chưa ăn trưa.)",
          "- They have not finished their project. (Họ chưa hoàn thành dự án của họ.)",
          "- We have not been to Japan. (Chúng tôi chưa từng đến Nhật Bản.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: haven't, hasn't.",
      },
      interrogative: {
        formula: "Have/Has + S + V3 (past participle)?",
        examples: [
          "- Have you ever been to London? (Bạn đã từng đến London chưa?)",
          "- Has she finished her work? (Cô ấy đã hoàn thành công việc chưa?)",
          "- Have they arrived yet? (Họ đã đến chưa?)",
          "- Has it stopped raining? (Trời đã ngừng mưa chưa?)",
        ],
        note: "Câu trả lời ngắn: Yes, I/you/we/they have. / No, I/you/we/they haven't. Yes, he/she/it has. / No, he/she/it hasn't.",
      },
    },
    usage: {
      definition:
        "Thì hiện tại hoàn thành được dùng để diễn tả hành động đã xảy ra trong quá khứ nhưng có liên quan đến hiện tại, hoặc hành động bắt đầu trong quá khứ và vẫn tiếp tục đến hiện tại.",
      examples: [
        "I have lost my keys. (Tôi đã làm mất chìa khóa. - Và bây giờ tôi không thể vào nhà.)",
        "She has lived in London for five years. (Cô ấy đã sống ở London được năm năm. - Và cô ấy vẫn đang sống ở đó.)",
        "They have never eaten sushi. (Họ chưa từng ăn sushi.)",
      ],
      signalWords: [
        "already",
        "yet",
        "just",
        "ever",
        "never",
        "so far",
        "up to now",
        "since",
        "for",
      ],
    },
    note: [
      "Thì hiện tại hoàn thành thường được dùng với 'since' (kể từ một thời điểm cụ thể) và 'for' (trong khoảng thời gian).",
      "Khi nói về kinh nghiệm, chúng ta thường dùng 'ever' trong câu hỏi và 'never' trong câu phủ định.",
      "Thì này không được dùng với các từ chỉ thời gian xác định trong quá khứ như 'yesterday', 'last week'. Trong trường hợp đó, chúng ta dùng thì quá khứ đơn.",
      "Thì hiện tại hoàn thành thường được dùng để nói về kết quả hiện tại của hành động trong quá khứ.",
    ],
  },
  {
    tense: "present perfect continuous",
    description: "Thì hiện tại hoàn thành tiếp diễn",
    form: {
      affirmative: {
        formula: "S + have/has + been + V-ing",
        examples: [
          "- I have been waiting for an hour. (Tôi đã đang đợi được một giờ.)",
          "- She has been studying since morning. (Cô ấy đã đang học từ sáng.)",
          "- They have been working on this project for months. (Họ đã đang làm việc trên dự án này trong nhiều tháng.)",
          "- He has been living in Paris for two years. (Anh ấy đã đang sống ở Paris được hai năm.)",
        ],
        note: "Chúng ta sử dụng 'have been' với I/you/we/they và 'has been' với he/she/it.",
      },
      negative: {
        formula: "S + have/has + not + been + V-ing",
        examples: [
          "- I have not been sleeping well lately. (Gần đây tôi không ngủ được tốt.)",
          "- She has not been feeling well. (Cô ấy không cảm thấy khỏe.)",
          "- They have not been attending classes regularly. (Họ không tham dự lớp học đều đặn.)",
          "- We have not been exercising enough. (Chúng tôi không tập thể dục đủ.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: haven't been, hasn't been.",
      },
      interrogative: {
        formula: "Have/Has + S + been + V-ing?",
        examples: [
          "- Have you been waiting long? (Bạn đã đợi lâu chưa?)",
          "- Has she been crying? (Cô ấy đã khóc phải không?)",
          "- Have they been working all night? (Họ đã làm việc cả đêm phải không?)",
          "- Has it been raining all day? (Trời đã mưa cả ngày phải không?)",
        ],
        note: "Câu trả lời ngắn: Yes, I/you/we/they have. / No, I/you/we/they haven't. Yes, he/she/it has. / No, he/she/it hasn't.",
      },
    },
    usage: {
      definition:
        "Thì hiện tại hoàn thành tiếp diễn được dùng để diễn tả hành động bắt đầu trong quá khứ, tiếp tục đến hiện tại và có thể tiếp tục trong tương lai. Thì này nhấn mạnh vào quá trình của hành động.",
      examples: [
        "I have been learning English for five years. (Tôi đã học tiếng Anh được năm năm.)",
        "She has been working here since 2015. (Cô ấy đã làm việc ở đây từ năm 2015.)",
        "They have been traveling around Europe for six months. (Họ đã đi du lịch khắp châu Âu được sáu tháng.)",
      ],
      signalWords: [
        "for",
        "since",
        "all day",
        "all week",
        "lately",
        "recently",
        "in the last few days",
      ],
    },
    note: [
      "Thì hiện tại hoàn thành tiếp diễn nhấn mạnh vào quá trình và thời gian của hành động, trong khi thì hiện tại hoàn thành nhấn mạnh vào kết quả.",
      "Thì này thường được dùng để diễn tả nguyên nhân của một tình huống hiện tại: 'I'm tired because I have been working all day.' (Tôi mệt vì tôi đã làm việc cả ngày.)",
      "Một số động từ không được dùng ở dạng tiếp diễn (stative verbs) như know, believe, love, hate, v.v.",
      "Thì này thường được dùng với 'for' và 'since' để chỉ khoảng thời gian hành động đã diễn ra.",
    ],
  },
  {
    tense: "past simple",
    description: "Thì quá khứ đơn",
    form: {
      affirmative: {
        tobe: {
          formula: "S + was/were + Noun/Adjective",
          examples: [
            "- I was a student. (Tôi đã là một học sinh.)",
            "- He was happy. (Anh ấy đã vui.)",
            "- They were at home. (Họ đã ở nhà.)",
            "- She was a doctor. (Cô ấy đã là một bác sĩ.)",
          ],
          note: "Chúng ta sử dụng 'was' với I/he/she/it và 'were' với you/we/they.",
        },
        normal: {
          formula: "S + V2 (past tense)",
          examples: [
            "- I worked yesterday. (Tôi đã làm việc ngày hôm qua.)",
            "- She visited her grandmother last week. (Cô ấy đã thăm bà ngoại tuần trước.)",
            "- They played football last Sunday. (Họ đã chơi bóng đá vào Chủ nhật tuần trước.)",
            "- He bought a new car. (Anh ấy đã mua một chiếc xe mới.)",
          ],
          note: "Với động từ thường, thêm '-ed' vào động từ nguyên thể. Với động từ bất quy tắc, sử dụng dạng quá khứ riêng (go → went, see → saw).",
        },
      },
      negative: {
        tobe: {
          formula: "S + was/were + not + Noun/Adjective",
          examples: [
            "- I was not at home. (Tôi đã không ở nhà.)",
            "- He was not happy. (Anh ấy đã không vui.)",
            "- They were not ready. (Họ đã không sẵn sàng.)",
            "- She was not a teacher. (Cô ấy đã không phải là giáo viên.)",
          ],
          note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: wasn't, weren't.",
        },
        normal: {
          formula: "S + did + not + V (nguyên thể)",
          examples: [
            "- I did not go to school yesterday. (Tôi đã không đi học ngày hôm qua.)",
            "- She did not finish her homework. (Cô ấy đã không hoàn thành bài tập về nhà.)",
            "- They did not watch the movie. (Họ đã không xem bộ phim.)",
            "- We did not visit our friends. (Chúng tôi đã không thăm bạn bè.)",
          ],
          note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: didn't.",
        },
      },
      interrogative: {
        tobe: {
          formula: "Was/Were + S + Noun/Adjective?",
          examples: [
            "- Was she at the party? (Cô ấy đã ở bữa tiệc phải không?)",
            "- Were they happy? (Họ đã vui phải không?)",
            "- Was it difficult? (Nó đã khó phải không?)",
            "- Were you tired? (Bạn đã mệt phải không?)",
          ],
          note: "Câu trả lời ngắn: Yes, I/he/she/it was. / No, I/he/she/it wasn't. Yes, you/we/they were. / No, you/we/they weren't.",
        },
        normal: {
          formula: "Did + S + V (nguyên thể)?",
          examples: [
            "- Did you go to the cinema? (Bạn đã đi xem phim phải không?)",
            "- Did she call you? (Cô ấy đã gọi cho bạn phải không?)",
            "- Did they finish the project? (Họ đã hoàn thành dự án phải không?)",
            "- Did he buy a new car? (Anh ấy đã mua xe mới phải không?)",
          ],
          note: "Câu trả lời ngắn: Yes, I/you/he/she/it/we/they did. / No, I/you/he/she/it/we/they didn't.",
        },
      },
    },
    usage: {
      definition:
        "Thì quá khứ đơn được dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ, tại một thời điểm xác định.",
      examples: [
        "I visited my grandparents last weekend. (Tôi đã thăm ông bà tuần trước.)",
        "She graduated from university in 2018. (Cô ấy đã tốt nghiệp đại học vào năm 2018.)",
        "They moved to a new house last year. (Họ đã chuyển đến ngôi nhà mới năm ngoái.)",
      ],
      signalWords: [
        "yesterday",
        "last night/week/month/year",
        "ago",
        "in 2010",
        "on Monday",
        "when",
      ],
    },
    note: [
      "Với động từ thường, thêm '-ed' vào động từ nguyên thể. Có một số quy tắc đặc biệt: nếu động từ kết thúc bằng 'e', chỉ thêm 'd' (live → lived); nếu động từ ngắn kết thúc bằng một nguyên âm + một phụ âm, gấp đôi phụ âm cuối và thêm 'ed' (stop → stopped).",
      "Với động từ bất quy tắc, sử dụng dạng quá khứ riêng (go → went, see → saw, have → had).",
      "Thì quá khứ đơn thường được dùng để kể chuyện, diễn tả chuỗi sự kiện trong quá khứ.",
      "Thì này cũng được dùng để diễn tả thói quen trong quá khứ, nhưng 'used to' thường được ưa chuộng hơn.",
    ],
  },
  {
    tense: "past continuous",
    description: "Thì quá khứ tiếp diễn",
    form: {
      affirmative: {
        formula: "S + was/were + V-ing",
        examples: [
          "- I was reading when she called. (Tôi đang đọc sách khi cô ấy gọi.)",
          "- He was sleeping at 10 PM. (Anh ấy đang ngủ lúc 10 giờ tối.)",
          "- They were playing football all afternoon. (Họ đang chơi bóng đá cả buổi chiều.)",
          "- She was working on her project. (Cô ấy đang làm việc trên dự án của mình.)",
        ],
        note: "Chúng ta sử dụng 'was' với I/he/she/it và 'were' với you/we/they.",
      },
      negative: {
        formula: "S + was/were + not + V-ing",
        examples: [
          "- I was not studying when you called. (Tôi đã không đang học khi bạn gọi.)",
          "- He was not working yesterday. (Anh ấy đã không đang làm việc ngày hôm qua.)",
          "- They were not listening to the teacher. (Họ đã không đang lắng nghe giáo viên.)",
          "- She was not feeling well. (Cô ấy đã không cảm thấy khỏe.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: wasn't, weren't.",
      },
      interrogative: {
        formula: "Was/Were + S + V-ing?",
        examples: [
          "- Was she sleeping when you called? (Cô ấy có đang ngủ khi bạn gọi không?)",
          "- Were they working late? (Họ có đang làm việc muộn không?)",
          "- Was it raining when you left? (Trời có đang mưa khi bạn rời đi không?)",
          "- Were you waiting for me? (Bạn có đang đợi tôi không?)",
        ],
        note: "Câu trả lời ngắn: Yes, I/he/she/it was. / No, I/he/she/it wasn't. Yes, you/we/they were. / No, you/we/they weren't.",
      },
    },
    usage: {
      definition:
        "Thì quá khứ tiếp diễn được dùng để diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ, hoặc hành động đang diễn ra thì bị gián đoạn bởi một hành động khác.",
      examples: [
        "I was watching TV when the phone rang. (Tôi đang xem TV thì điện thoại reo.)",
        "At 8 PM last night, she was having dinner. (Vào 8 giờ tối hôm qua, cô ấy đang ăn tối.)",
        "While they were playing, it started to rain. (Trong khi họ đang chơi, trời bắt đầu mưa.)",
      ],
      signalWords: [
        "at this time yesterday",
        "at 8 PM last night",
        "when",
        "while",
        "as",
      ],
    },
    note: [
      "Thì quá khứ tiếp diễn thường được dùng cùng với thì quá khứ đơn để diễn tả một hành động đang diễn ra thì bị gián đoạn bởi một hành động khác.",
      "Thì này cũng được dùng để diễn tả hai hành động đang diễn ra cùng một lúc trong quá khứ.",
      "Một số động từ không được dùng ở dạng tiếp diễn (stative verbs) như know, believe, love, hate, v.v.",
      "Thì quá khứ tiếp diễn có thể được dùng để diễn tả bối cảnh cho một câu chuyện.",
    ],
  },
  {
    tense: "past perfect",
    description: "Thì quá khứ hoàn thành",
    form: {
      affirmative: {
        formula: "S + had + V3 (past participle)",
        examples: [
          "- I had finished my homework before dinner. (Tôi đã hoàn thành bài tập về nhà trước bữa tối.)",
          "- She had left when I arrived. (Cô ấy đã rời đi khi tôi đến.)",
          "- They had never seen such a beautiful sunset. (Họ chưa từng thấy một hoàng hôn đẹp như vậy.)",
          "- He had studied English before moving to London. (Anh ấy đã học tiếng Anh trước khi chuyển đến London.)",
        ],
        note: "Động từ 'had' được dùng cho tất cả các ngôi.",
      },
      negative: {
        formula: "S + had + not + V3 (past participle)",
        examples: [
          "- I had not seen that movie before last night. (Tôi đã không xem bộ phim đó trước tối qua.)",
          "- She had not finished her work when the boss called. (Cô ấy đã không hoàn thành công việc khi sếp gọi.)",
          "- They had not visited Paris before their trip to France. (Họ đã không đến Paris trước chuyến đi Pháp.)",
          "- We had not met him before the conference. (Chúng tôi đã không gặp anh ấy trước hội nghị.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: hadn't.",
      },
      interrogative: {
        formula: "Had + S + V3 (past participle)?",
        examples: [
          "- Had you finished your homework before the class? (Bạn đã hoàn thành bài tập về nhà trước lớp học chưa?)",
          "- Had she seen the movie before? (Cô ấy đã xem bộ phim trước đó chưa?)",
          "- Had they arrived when you left? (Họ đã đến khi bạn rời đi chưa?)",
          "- Had he ever visited London before moving there? (Anh ấy đã từng đến London trước khi chuyển đến đó chưa?)",
        ],
        note: "Câu trả lời ngắn: Yes, I/you/he/she/it/we/they had. / No, I/you/he/she/it/we/they hadn't.",
      },
    },
    usage: {
      definition:
        "Thì quá khứ hoàn thành được dùng để diễn tả hành động đã xảy ra và kết thúc trước một hành động khác trong quá khứ.",
      examples: [
        "I had already eaten when she invited me to dinner. (Tôi đã ăn rồi khi cô ấy mời tôi đi ăn tối.)",
        "By the time we arrived, the movie had started. (Vào lúc chúng tôi đến, bộ phim đã bắt đầu.)",
        "She had never seen snow before she moved to Canada. (Cô ấy chưa từng thấy tuyết trước khi chuyển đến Canada.)",
      ],
      signalWords: [
        "before",
        "after",
        "already",
        "just",
        "never",
        "by the time",
        "when",
      ],
    },
    note: [
      "Thì quá khứ hoàn thành thường được dùng cùng với thì quá khứ đơn để diễn tả hai hành động xảy ra trong quá khứ, trong đó một hành động xảy ra trước hành động còn lại.",
      "Thì này cũng được dùng để diễn tả một hành động đã xảy ra trước một thời điểm cụ thể trong quá khứ.",
      "Thì quá khứ hoàn thành thường được dùng với 'already', 'just', 'never', 'ever', 'by the time', 'before', 'after'.",
      "Thì này giúp làm rõ trình tự thời gian của các sự kiện trong quá khứ.",
    ],
  },
  {
    tense: "past perfect continuous",
    description: "Thì quá khứ hoàn thành tiếp diễn",
    form: {
      affirmative: {
        formula: "S + had + been + V-ing",
        examples: [
          "- I had been waiting for an hour when she finally arrived. (Tôi đã đang đợi được một giờ khi cuối cùng cô ấy đến.)",
          "- She had been working all day, so she was tired. (Cô ấy đã đang làm việc cả ngày, nên cô ấy mệt.)",
          "- They had been living in Paris for ten years before they moved to London. (Họ đã đang sống ở Paris được mười năm trước khi họ chuyển đến London.)",
          "- He had been studying English for five years before he went to England. (Anh ấy đã đang học tiếng Anh được năm năm trước khi anh ấy đi Anh.)",
        ],
        note: "Động từ 'had been' được dùng cho tất cả các ngôi.",
      },
      negative: {
        formula: "S + had + not + been + V-ing",
        examples: [
          "- I had not been sleeping well before the exam. (Tôi đã không ngủ tốt trước kỳ thi.)",
          "- She had not been feeling well for a week before she saw the doctor. (Cô ấy đã không cảm thấy khỏe được một tuần trước khi cô ấy đi gặp bác sĩ.)",
          "- They had not been working hard enough before the inspection. (Họ đã không làm việc đủ chăm chỉ trước cuộc kiểm tra.)",
          "- We had not been paying attention to the signs. (Chúng tôi đã không chú ý đến các dấu hiệu.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: hadn't been.",
      },
      interrogative: {
        formula: "Had + S + been + V-ing?",
        examples: [
          "- Had you been waiting long before the bus came? (Bạn đã đợi lâu trước khi xe buýt đến chưa?)",
          "- Had she been working all day? (Cô ấy đã làm việc cả ngày phải không?)",
          "- Had they been living in London before they moved to Paris? (Họ đã sống ở London trước khi họ chuyển đến Paris phải không?)",
          "- Had he been studying when you called? (Anh ấy đã đang học khi bạn gọi phải không?)",
        ],
        note: "Câu trả lời ngắn: Yes, I/you/he/she/it/we/they had. / No, I/you/he/she/it/we/they hadn't.",
      },
    },
    usage: {
      definition:
        "Thì quá khứ hoàn thành tiếp diễn được dùng để diễn tả hành động đã bắt đầu trong quá khứ và tiếp tục đến một thời điểm cụ thể trong quá khứ. Thì này nhấn mạnh vào quá trình và thời gian của hành động.",
      examples: [
        "I had been working for five hours when I decided to take a break. (Tôi đã làm việc được năm giờ khi tôi quyết định nghỉ giải lao.)",
        "She had been living in Paris for ten years when she met her husband. (Cô ấy đã sống ở Paris được mười năm khi cô ấy gặp chồng mình.)",
        "They had been traveling for months before they finally returned home. (Họ đã đi du lịch trong nhiều tháng trước khi cuối cùng họ trở về nhà.)",
      ],
      signalWords: ["for", "since", "when", "before", "until", "by the time"],
    },
    note: [
      "Thì quá khứ hoàn thành tiếp diễn nhấn mạnh vào quá trình và thời gian của hành động, trong khi thì quá khứ hoàn thành nhấn mạnh vào kết quả.",
      "Thì này thường được dùng để diễn tả nguyên nhân của một tình huống trong quá khứ: 'She was tired because she had been working all day.' (Cô ấy mệt vì cô ấy đã làm việc cả ngày.)",
      "Một số động từ không được dùng ở dạng tiếp diễn (stative verbs) như know, believe, love, hate, v.v.",
      "Thì này thường được dùng với 'for' và 'since' để chỉ khoảng thời gian hành động đã diễn ra trước một thời điểm trong quá khứ.",
    ],
  },
  {
    tense: "future simple",
    description: "Thì tương lai đơn",
    form: {
      affirmative: {
        formula: "S + will + V (nguyên thể)",
        examples: [
          "- I will call you tomorrow. (Tôi sẽ gọi cho bạn vào ngày mai.)",
          "- She will finish her project next week. (Cô ấy sẽ hoàn thành dự án của mình vào tuần tới.)",
          "- They will arrive on Sunday. (Họ sẽ đến vào Chủ nhật.)",
          "- He will help us move. (Anh ấy sẽ giúp chúng tôi chuyển nhà.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: I'll, you'll, he'll, she'll, it'll, we'll, they'll.",
      },
      negative: {
        formula: "S + will + not + V (nguyên thể)",
        examples: [
          "- I will not attend the meeting. (Tôi sẽ không tham dự cuộc họp.)",
          "- She will not be available tomorrow. (Cô ấy sẽ không có mặt vào ngày mai.)",
          "- They will not finish on time. (Họ sẽ không hoàn thành đúng hạn.)",
          "- We will not go to the party. (Chúng tôi sẽ không đi dự tiệc.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: won't.",
      },
      interrogative: {
        formula: "Will + S + V (nguyên thể)?",
        examples: [
          "- Will you come to the party? (Bạn sẽ đến dự tiệc chứ?)",
          "- Will she be here tomorrow? (Cô ấy sẽ có mặt ở đây vào ngày mai chứ?)",
          "- Will they help us? (Họ sẽ giúp chúng ta chứ?)",
          "- Will it rain tomorrow? (Ngày mai trời sẽ mưa chứ?)",
        ],
        note: "Câu trả lời ngắn: Yes, I/you/he/she/it/we/they will. / No, I/you/he/she/it/we/they won't.",
      },
    },
    usage: {
      definition:
        "Thì tương lai đơn được dùng để diễn tả hành động sẽ xảy ra trong tương lai, quyết định đột xuất, dự đoán, lời hứa, lời đề nghị, lời yêu cầu.",
      examples: [
        "I will call you when I arrive. (Tôi sẽ gọi cho bạn khi tôi đến.)",
        "She will probably finish her work by Friday. (Cô ấy có thể sẽ hoàn thành công việc vào thứ Sáu.)",
        "I think it will rain tomorrow. (Tôi nghĩ ngày mai trời sẽ mưa.)",
      ],
      signalWords: [
        "tomorrow",
        "next week/month/year",
        "in 2030",
        "the day after tomorrow",
        "I think",
        "probably",
        "I'm sure",
      ],
    },
    note: [
      "Thì tương lai đơn thường được dùng để diễn tả quyết định đột xuất: 'It's hot in here. I'll open the window.' (Ở đây nóng quá. Tôi sẽ mở cửa sổ.)",
      "Thì này cũng được dùng để đưa ra dự đoán về tương lai: 'I think it will rain tomorrow.' (Tôi nghĩ ngày mai trời sẽ mưa.)",
      "Thì tương lai đơn còn được dùng để đưa ra lời hứa, lời đề nghị, lời yêu cầu: 'I will help you with your homework.' (Tôi sẽ giúp bạn làm bài tập về nhà.)",
      "Trong câu điều kiện loại 1 (điều kiện có thể xảy ra trong tương lai), thì tương lai đơn được dùng trong mệnh đề chính: 'If it rains, I will stay at home.' (Nếu trời mưa, tôi sẽ ở nhà.)",
    ],
  },
  {
    tense: "future continuous",
    description: "Thì tương lai tiếp diễn",
    form: {
      affirmative: {
        formula: "S + will + be + V-ing",
        examples: [
          "- I will be working at 8 PM tomorrow. (Tôi sẽ đang làm việc vào 8 giờ tối ngày mai.)",
          "- She will be studying when you call. (Cô ấy sẽ đang học khi bạn gọi.)",
          "- They will be traveling all next month. (Họ sẽ đang đi du lịch suốt tháng tới.)",
          "- He will be waiting for you at the airport. (Anh ấy sẽ đang đợi bạn ở sân bay.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: I'll be, you'll be, v.v.",
      },
      negative: {
        formula: "S + will + not + be + V-ing",
        examples: [
          "- I will not be working late tomorrow. (Tôi sẽ không làm việc muộn vào ngày mai.)",
          "- She will not be attending the meeting. (Cô ấy sẽ không tham dự cuộc họp.)",
          "- They will not be staying with us. (Họ sẽ không ở lại với chúng tôi.)",
          "- We will not be using the car next week. (Chúng tôi sẽ không sử dụng xe vào tuần tới.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: won't be.",
      },
      interrogative: {
        formula: "Will + S + be + V-ing?",
        examples: [
          "- Will you be working late? (Bạn sẽ làm việc muộn chứ?)",
          "- Will she be coming to the party? (Cô ấy sẽ đến dự tiệc chứ?)",
          "- Will they be staying for dinner? (Họ sẽ ở lại ăn tối chứ?)",
          "- Will he be waiting for us? (Anh ấy sẽ đợi chúng ta chứ?)",
        ],
        note: "Câu trả lời ngắn: Yes, I/you/he/she/it/we/they will. / No, I/you/he/she/it/we/they won't.",
      },
    },
    usage: {
      definition:
        "Thì tương lai tiếp diễn được dùng để diễn tả hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai, hoặc hành động sẽ diễn ra trong một khoảng thời gian trong tương lai.",
      examples: [
        "This time tomorrow, I will be flying to Paris. (Vào giờ này ngày mai, tôi sẽ đang bay đến Paris.)",
        "She will be working on her project all next week. (Cô ấy sẽ làm việc trên dự án của mình suốt tuần tới.)",
        "They will be waiting for us when we arrive. (Họ sẽ đang đợi chúng ta khi chúng ta đến.)",
      ],
      signalWords: [
        "at this time tomorrow",
        "at 8 PM tomorrow",
        "this time next week",
        "all day tomorrow",
        "when",
        "while",
      ],
    },
    note: [
      "Thì tương lai tiếp diễn thường được dùng để diễn tả hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.",
      "Thì này cũng được dùng để diễn tả hành động sẽ diễn ra một cách tự nhiên, không có kế hoạch trước.",
      "Thì tương lai tiếp diễn còn được dùng để hỏi một cách lịch sự về kế hoạch của người khác: 'Will you be using the car tonight?' (Tối nay bạn có sử dụng xe không?)",
      "Một số động từ không được dùng ở dạng tiếp diễn (stative verbs) như know, believe, love, hate, v.v.",
    ],
  },
  {
    tense: "future perfect",
    description: "Thì tương lai hoàn thành",
    form: {
      affirmative: {
        formula: "S + will + have + V3 (past participle)",
        examples: [
          "- I will have finished my work by 5 PM. (Tôi sẽ hoàn thành công việc của mình vào lúc 5 giờ chiều.)",
          "- She will have graduated by next summer. (Cô ấy sẽ tốt nghiệp vào mùa hè năm sau.)",
          "- They will have moved into their new house by Christmas. (Họ sẽ chuyển vào ngôi nhà mới của họ vào dịp Giáng sinh.)",
          "- He will have completed the course by the end of the year. (Anh ấy sẽ hoàn thành khóa học vào cuối năm.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: I'll have, you'll have, v.v.",
      },
      negative: {
        formula: "S + will + not + have + V3 (past participle)",
        examples: [
          "- I will not have finished my work by 5 PM. (Tôi sẽ không hoàn thành công việc của mình vào lúc 5 giờ chiều.)",
          "- She will not have arrived by then. (Cô ấy sẽ không đến vào lúc đó.)",
          "- They will not have completed the project by the deadline. (Họ sẽ không hoàn thành dự án vào thời hạn.)",
          "- We will not have saved enough money by next year. (Chúng tôi sẽ không tiết kiệm đủ tiền vào năm tới.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: won't have.",
      },
      interrogative: {
        formula: "Will + S + have + V3 (past participle)?",
        examples: [
          "- Will you have finished your homework by dinner? (Bạn sẽ hoàn thành bài tập về nhà vào bữa tối chứ?)",
          "- Will she have arrived by then? (Cô ấy sẽ đến vào lúc đó chứ?)",
          "- Will they have moved by next month? (Họ sẽ chuyển nhà vào tháng tới chứ?)",
          "- Will he have learned enough English by the time he goes to London? (Anh ấy sẽ học đủ tiếng Anh vào thời điểm anh ấy đi London chứ?)",
        ],
        note: "Câu trả lời ngắn: Yes, I/you/he/she/it/we/they will. / No, I/you/he/she/it/we/they won't.",
      },
    },
    usage: {
      definition:
        "Thì tương lai hoàn thành được dùng để diễn tả hành động sẽ hoàn thành trước một thời điểm cụ thể trong tương lai.",
      examples: [
        "By this time next year, I will have graduated from university. (Vào thời điểm này năm sau, tôi sẽ tốt nghiệp đại học.)",
        "She will have finished her project before the deadline. (Cô ấy sẽ hoàn thành dự án của mình trước thời hạn.)",
        "By the time you arrive, we will have had dinner. (Vào lúc bạn đến, chúng tôi sẽ ăn tối xong.)",
      ],
      signalWords: [
        "by",
        "by then",
        "by the time",
        "before",
        "by next week/month/year",
      ],
    },
    note: [
      "Thì tương lai hoàn thành thường được dùng với 'by' hoặc 'by the time' để chỉ thời điểm mà hành động sẽ hoàn thành.",
      "Thì này nhấn mạnh vào việc hoàn thành hành động trước một thời điểm cụ thể trong tương lai.",
      "Thì tương lai hoàn thành cũng được dùng để diễn tả thời gian một hành động sẽ diễn ra trong tương lai: 'By next month, I will have worked here for five years.' (Vào tháng sau, tôi sẽ làm việc ở đây được năm năm.)",
      "Thì này thường được dùng để diễn tả dự đoán về những gì sẽ xảy ra hoặc đã xảy ra vào một thời điểm cụ thể trong tương lai.",
    ],
  },
  {
    tense: "future perfect continuous",
    description: "Thì tương lai hoàn thành tiếp diễn",
    form: {
      affirmative: {
        formula: "S + will + have + been + V-ing",
        examples: [
          "- I will have been working here for ten years by next month. (Tôi sẽ làm việc ở đây được mười năm vào tháng sau.)",
          "- She will have been studying English for five years by the time she graduates. (Cô ấy sẽ học tiếng Anh được năm năm vào thời điểm cô ấy tốt nghiệp.)",
          "- They will have been living in London for two decades by 2030. (Họ sẽ sống ở London được hai thập kỷ vào năm 2030.)",
          "- He will have been teaching at this school for 25 years next September. (Anh ấy sẽ dạy học ở trường này được 25 năm vào tháng Chín năm sau.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: I'll have been, you'll have been, v.v.",
      },
      negative: {
        formula: "S + will + not + have + been + V-ing",
        examples: [
          "- I will not have been working here for very long when I retire. (Tôi sẽ không làm việc ở đây được lâu khi tôi nghỉ hưu.)",
          "- She will not have been studying enough by the exam. (Cô ấy sẽ không học đủ vào kỳ thi.)",
          "- They will not have been waiting for more than an hour by the time we arrive. (Họ sẽ không đợi hơn một giờ vào thời điểm chúng ta đến.)",
          "- We will not have been traveling for too long before our first stop. (Chúng tôi sẽ không đi du lịch quá lâu trước điểm dừng đầu tiên.)",
        ],
        note: "Trong văn nói, chúng ta thường dùng dạng rút gọn: won't have been.",
      },
      interrogative: {
        formula: "Will + S + have + been + V-ing?",
        examples: [
          "- Will you have been working here for five years next month? (Bạn sẽ làm việc ở đây được năm năm vào tháng sau chứ?)",
          "- Will she have been studying all day by the time we meet? (Cô ấy sẽ học cả ngày vào thời điểm chúng ta gặp nhau chứ?)",
          "- Will they have been living together for a year by their wedding? (Họ sẽ sống cùng nhau được một năm vào đám cưới của họ chứ?)",
          "- Will he have been driving for six hours by the time he reaches the destination? (Anh ấy sẽ lái xe được sáu giờ vào thời điểm anh ấy đến đích chứ?)",
        ],
        note: "Câu trả lời ngắn: Yes, I/you/he/she/it/we/they will. / No, I/you/he/she/it/we/they won't.",
      },
    },
    usage: {
      definition:
        "Thì tương lai hoàn thành tiếp diễn được dùng để diễn tả hành động sẽ đang diễn ra trong một khoảng thời gian trước một thời điểm cụ thể trong tương lai.",
      examples: [
        "By next year, I will have been working here for ten years. (Vào năm sau, tôi sẽ làm việc ở đây được mười năm.)",
        "By the time she retires, she will have been teaching for 30 years. (Vào thời điểm cô ấy nghỉ hưu, cô ấy sẽ dạy học được 30 năm.)",
        "When we meet next month, they will have been dating for two years. (Khi chúng ta gặp nhau vào tháng sau, họ sẽ hẹn hò được hai năm.)",
      ],
      signalWords: ["by", "by then", "by the time", "for", "since", "when"],
    },
    note: [
      "Thì tương lai hoàn thành tiếp diễn nhấn mạnh vào quá trình và thời gian của hành động, trong khi thì tương lai hoàn thành nhấn mạnh vào kết quả.",
      "Thì này thường được dùng với 'for' và 'since' để chỉ khoảng thời gian hành động sẽ diễn ra trước một thời điểm trong tương lai.",
      "Một số động từ không được dùng ở dạng tiếp diễn (stative verbs) như know, believe, love, hate, v.v.",
      "Thì tương lai hoàn thành tiếp diễn ít được sử dụng hơn so với các thì khác, nhưng nó rất hữu ích khi cần diễn tả thời gian của một hành động liên tục trong tương lai.",
    ],
  },
];

export const getTenses = (type: Tense) => {
  const newType = type.replace(/-/g, " ");
  const findData = tenses.find((item) => item.tense === newType);
  if (!findData) {
    return;
  }
  return findData;
};
