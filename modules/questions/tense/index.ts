import { TQuestion } from "@/modules/types";

export const sampleTenseQuestions: TQuestion[] = [
  {
    id: "1",
    tense: "Past Simple",
    type: "fill_to_the_blank",
    question: "They _____ to the cinema last night.",
    options: [
      { id: "a", value: "go" },
      { id: "b", value: "goes" },
      { id: "c", value: "went" },
      { id: "d", value: "gone" },
    ],
    correct_answer: "c",
    explain:
      "Vì 'last night' chỉ thời điểm trong quá khứ, nên động từ cần chia ở thì quá khứ đơn → 'went'.",
  },
  {
    id: "2",
    tense: "Past Simple",
    type: "multiple_choice",
    question: "Cấu trúc của thì Past Simple là:",
    options: [
      { id: "a", value: "S + have/has + V3" },
      { id: "b", value: "S + am/is/are + V-ing" },
      { id: "c", value: "S + V2/ed + ..." },
      { id: "d", value: "S + will + V-inf" },
    ],
    correct_answer: "c",
    explain:
      "Cấu trúc của thì quá khứ đơn là: Chủ ngữ + động từ ở quá khứ (V2 hoặc thêm -ed).",
  },
  {
    id: "3",
    tense: "Present Simple",
    type: "fill_to_the_blank",
    question: "She _____ coffee every morning.",
    options: [
      { id: "a", value: "drink" },
      { id: "b", value: "drinks" },
      { id: "c", value: "drinking" },
      { id: "d", value: "drank" },
    ],
    correct_answer: "b",
    explain:
      "Với chủ ngữ ngôi thứ 3 số ít (she), động từ trong thì hiện tại đơn phải thêm 's' → 'drinks'.",
  },
  {
    id: "4",
    tense: "Present Simple",
    type: "multiple_choice",
    question: "Dấu hiệu nhận biết của thì Present Simple là:",
    options: [
      { id: "a", value: "yesterday, last week, in 2010" },
      { id: "b", value: "now, at the moment, right now" },
      { id: "c", value: "every day, always, often, usually" },
      { id: "d", value: "since, for, already, yet" },
    ],
    correct_answer: "c",
    explain:
      "Thì hiện tại đơn thường đi với các trạng từ chỉ tần suất như every day, always, often, usually.",
  },
  {
    id: "5",
    tense: "Future Simple",
    type: "fill_to_the_blank",
    question: "I _____ you tomorrow.",
    options: [
      { id: "a", value: "call" },
      { id: "b", value: "calls" },
      { id: "c", value: "calling" },
      { id: "d", value: "will call" },
    ],
    correct_answer: "d",
    explain:
      "Với thì tương lai đơn, ta dùng 'will + động từ nguyên mẫu' → 'will call'.",
  },
  {
    id: "6",
    tense: "Future Simple",
    type: "multiple_choice",
    question: "Cấu trúc của thì Future Simple là:",
    options: [
      { id: "a", value: "S + will + V-inf" },
      { id: "b", value: "S + am/is/are + going to + V-inf" },
      { id: "c", value: "S + V2/ed + ..." },
      { id: "d", value: "S + have/has + V3" },
    ],
    correct_answer: "a",
    explain:
      "Cấu trúc của thì tương lai đơn là: Chủ ngữ + will + động từ nguyên mẫu.",
  },
  {
    id: "7",
    tense: "Present Continuous",
    type: "fill_to_the_blank",
    question: "Look! The baby _____ right now.",
    options: [
      { id: "a", value: "sleep" },
      { id: "b", value: "sleeps" },
      { id: "c", value: "is sleeping" },
      { id: "d", value: "slept" },
    ],
    correct_answer: "c",
    explain:
      "Với hành động đang diễn ra (right now), ta dùng thì hiện tại tiếp diễn: 'is + V-ing' → 'is sleeping'.",
  },
  {
    id: "8",
    tense: "Present Continuous",
    type: "multiple_choice",
    question: "Dấu hiệu nhận biết của thì Present Continuous là:",
    options: [
      { id: "a", value: "every day, always, often, usually" },
      { id: "b", value: "now, at the moment, right now, Look!" },
      { id: "c", value: "yesterday, last week, in 2010" },
      { id: "d", value: "since, for, already, yet" },
    ],
    correct_answer: "b",
    explain:
      "Thì hiện tại tiếp diễn thường đi với các trạng từ chỉ thời điểm hiện tại như now, at the moment, right now.",
  },
  {
    id: "9",
    tense: "Past Continuous",
    type: "fill_to_the_blank",
    question: "When the phone rang, I _____ dinner.",
    options: [
      { id: "a", value: "cook" },
      { id: "b", value: "cooked" },
      { id: "c", value: "was cooking" },
      { id: "d", value: "am cooking" },
    ],
    correct_answer: "c",
    explain:
      "Hành động đang diễn ra tại một thời điểm trong quá khứ (khi điện thoại reo) cần dùng thì quá khứ tiếp diễn → 'was cooking'.",
  },
  {
    id: "10",
    tense: "Past Continuous",
    type: "multiple_choice",
    question: "Cấu trúc của thì Past Continuous là:",
    options: [
      { id: "a", value: "S + V2/ed + ..." },
      { id: "b", value: "S + was/were + V-ing" },
      { id: "c", value: "S + have/has + V3" },
      { id: "d", value: "S + will + V-inf" },
    ],
    correct_answer: "b",
    explain:
      "Cấu trúc của thì quá khứ tiếp diễn là: Chủ ngữ + was/were + V-ing.",
  },
  {
    id: "11",
    tense: "Present Perfect",
    type: "fill_to_the_blank",
    question: "She _____ in London for three years.",
    options: [
      { id: "a", value: "live" },
      { id: "b", value: "lives" },
      { id: "c", value: "lived" },
      { id: "d", value: "has lived" },
    ],
    correct_answer: "d",
    explain:
      "Với hành động bắt đầu từ quá khứ và kéo dài đến hiện tại (for three years), ta dùng thì hiện tại hoàn thành → 'has lived'.",
  },
  {
    id: "12",
    tense: "Present Perfect",
    type: "multiple_choice",
    question: "Dấu hiệu nhận biết của thì Present Perfect là:",
    options: [
      { id: "a", value: "yesterday, last week, in 2010" },
      { id: "b", value: "now, at the moment, right now" },
      { id: "c", value: "since, for, already, yet, just, ever, never" },
      { id: "d", value: "every day, always, often, usually" },
    ],
    correct_answer: "c",
    explain:
      "Thì hiện tại hoàn thành thường đi với các trạng từ như since, for, already, yet, just, ever, never.",
  },
  {
    id: "13",
    tense: "Past Perfect",
    type: "fill_to_the_blank",
    question: "By the time I arrived, the movie _____.",
    options: [
      { id: "a", value: "starts" },
      { id: "b", value: "started" },
      { id: "c", value: "had started" },
      { id: "d", value: "has started" },
    ],
    correct_answer: "c",
    explain:
      "Với hành động xảy ra trước một hành động khác trong quá khứ (trước khi tôi đến), ta dùng thì quá khứ hoàn thành → 'had started'.",
  },
  {
    id: "14",
    tense: "Past Perfect",
    type: "multiple_choice",
    question: "Cấu trúc của thì Past Perfect là:",
    options: [
      { id: "a", value: "S + had + V3" },
      { id: "b", value: "S + have/has + V3" },
      { id: "c", value: "S + was/were + V-ing" },
      { id: "d", value: "S + V2/ed + ..." },
    ],
    correct_answer: "a",
    explain:
      "Cấu trúc của thì quá khứ hoàn thành là: Chủ ngữ + had + V3 (quá khứ phân từ).",
  },
  {
    id: "15",
    tense: "Future Perfect",
    type: "fill_to_the_blank",
    question: "By next year, I _____ at this company for ten years.",
    options: [
      { id: "a", value: "will work" },
      { id: "b", value: "will have worked" },
      { id: "c", value: "worked" },
      { id: "d", value: "have worked" },
    ],
    correct_answer: "b",
    explain:
      "Với hành động sẽ hoàn thành trước một thời điểm trong tương lai (by next year), ta dùng thì tương lai hoàn thành → 'will have worked'.",
  },
  {
    id: "16",
    tense: "Present Perfect Continuous",
    type: "fill_to_the_blank",
    question: "I _____ for this exam since last month.",
    options: [
      { id: "a", value: "study" },
      { id: "b", value: "am studying" },
      { id: "c", value: "have been studying" },
      { id: "d", value: "studied" },
    ],
    correct_answer: "c",
    explain:
      "Với hành động bắt đầu từ quá khứ, kéo dài liên tục đến hiện tại và nhấn mạnh tính liên tục (since last month), ta dùng thì hiện tại hoàn thành tiếp diễn → 'have been studying'.",
  },
  {
    id: "17",
    tense: "Present Perfect Continuous",
    type: "multiple_choice",
    question: "Cấu trúc của thì Present Perfect Continuous là:",
    options: [
      { id: "a", value: "S + have/has + been + V-ing" },
      { id: "b", value: "S + had + been + V-ing" },
      { id: "c", value: "S + will have + been + V-ing" },
      { id: "d", value: "S + am/is/are + V-ing" },
    ],
    correct_answer: "a",
    explain:
      "Cấu trúc của thì hiện tại hoàn thành tiếp diễn là: Chủ ngữ + have/has + been + V-ing.",
  },
  {
    id: "18",
    tense: "Past Perfect Continuous",
    type: "fill_to_the_blank",
    question: "She was tired because she _____ all day.",
    options: [
      { id: "a", value: "worked" },
      { id: "b", value: "had been working" },
      { id: "c", value: "has been working" },
      { id: "d", value: "was working" },
    ],
    correct_answer: "b",
    explain:
      "Với hành động bắt đầu trong quá khứ, kéo dài liên tục đến một thời điểm khác trong quá khứ và nhấn mạnh tính liên tục, ta dùng thì quá khứ hoàn thành tiếp diễn → 'had been working'.",
  },
  {
    id: "19",
    tense: "Future Continuous",
    type: "fill_to_the_blank",
    question: "This time tomorrow, I _____ on the beach.",
    options: [
      { id: "a", value: "will lie" },
      { id: "b", value: "will be lying" },
      { id: "c", value: "am lying" },
      { id: "d", value: "lie" },
    ],
    correct_answer: "b",
    explain:
      "Với hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai (this time tomorrow), ta dùng thì tương lai tiếp diễn → 'will be lying'.",
  },
  {
    id: "20",
    tense: "Future Perfect",
    type: "multiple_choice",
    question: "Cấu trúc của thì Future Perfect là:",
    options: [
      { id: "a", value: "S + will + V-inf" },
      { id: "b", value: "S + will be + V-ing" },
      { id: "c", value: "S + will have + V3" },
      { id: "d", value: "S + will have been + V-ing" },
    ],
    correct_answer: "c",
    explain:
      "Cấu trúc của thì tương lai hoàn thành là: Chủ ngữ + will have + V3 (quá khứ phân từ).",
  },
  {
    id: "21",
    tense: "Present Simple",
    type: "fill_to_the_blank",
    question: "Water _____ at 100 degrees Celsius.",
    options: [
      { id: "a", value: "boil" },
      { id: "b", value: "boils" },
      { id: "c", value: "boiling" },
      { id: "d", value: "boiled" },
    ],
    correct_answer: "b",
    explain:
      "Đây là một sự thật khoa học, nên ta dùng thì hiện tại đơn. Với chủ ngữ số ít (water), động từ thêm 's' → 'boils'.",
  },
  {
    id: "22",
    tense: "Present Simple",
    type: "multiple_choice",
    question:
      "Câu phủ định trong thì Present Simple với động từ thường được tạo bằng:",
    options: [
      { id: "a", value: "don't/doesn't + V-inf" },
      { id: "b", value: "am/is/are not" },
      { id: "c", value: "didn't + V-inf" },
      { id: "d", value: "haven't/hasn't + V3" },
    ],
    correct_answer: "a",
    explain:
      "Câu phủ định trong thì hiện tại đơn với động từ thường được tạo bằng don't/doesn't + động từ nguyên mẫu.",
  },
  {
    id: "23",
    tense: "Past Simple",
    type: "fill_to_the_blank",
    question: "Mozart _____ more than 600 pieces of music.",
    options: [
      { id: "a", value: "compose" },
      { id: "b", value: "composes" },
      { id: "c", value: "composed" },
      { id: "d", value: "has composed" },
    ],
    correct_answer: "c",
    explain:
      "Mozart đã mất, và hành động này đã hoàn thành trong quá khứ, nên ta dùng thì quá khứ đơn → 'composed'.",
  },
  {
    id: "24",
    tense: "Past Simple",
    type: "multiple_choice",
    question: "Câu hỏi trong thì Past Simple được tạo bằng:",
    options: [
      { id: "a", value: "Do/Does + S + V-inf...?" },
      { id: "b", value: "Did + S + V-inf...?" },
      { id: "c", value: "Have/Has + S + V3...?" },
      { id: "d", value: "Will + S + V-inf...?" },
    ],
    correct_answer: "b",
    explain:
      "Câu hỏi trong thì quá khứ đơn được tạo bằng Did + chủ ngữ + động từ nguyên mẫu.",
  },
  {
    id: "25",
    tense: "Future Simple",
    type: "fill_to_the_blank",
    question: "I think it _____ tomorrow.",
    options: [
      { id: "a", value: "rain" },
      { id: "b", value: "rains" },
      { id: "c", value: "will rain" },
      { id: "d", value: "rained" },
    ],
    correct_answer: "c",
    explain:
      "Khi dự đoán về tương lai, ta dùng thì tương lai đơn với 'will + động từ nguyên mẫu' → 'will rain'.",
  },
  {
    id: "26",
    tense: "Future Simple",
    type: "multiple_choice",
    question: "Dấu hiệu nhận biết của thì Future Simple là:",
    options: [
      { id: "a", value: "yesterday, last week, ago" },
      { id: "b", value: "now, at the moment, Look!" },
      { id: "c", value: "tomorrow, next week, in the future" },
      { id: "d", value: "since, for, already, yet" },
    ],
    correct_answer: "c",
    explain:
      "Thì tương lai đơn thường đi với các trạng từ chỉ thời gian trong tương lai như tomorrow, next week, in the future.",
  },
  {
    id: "27",
    tense: "Present Continuous",
    type: "fill_to_the_blank",
    question: "Shh! The baby _____. Don't make noise.",
    options: [
      { id: "a", value: "sleep" },
      { id: "b", value: "sleeps" },
      { id: "c", value: "is sleeping" },
      { id: "d", value: "slept" },
    ],
    correct_answer: "c",
    explain:
      "Hành động đang diễn ra tại thời điểm nói cần dùng thì hiện tại tiếp diễn → 'is sleeping'.",
  },
  {
    id: "28",
    tense: "Present Continuous",
    type: "multiple_choice",
    question: "Cấu trúc của thì Present Continuous là:",
    options: [
      { id: "a", value: "S + V1/s/es + ..." },
      { id: "b", value: "S + am/is/are + V-ing" },
      { id: "c", value: "S + V2/ed + ..." },
      { id: "d", value: "S + will + V-inf" },
    ],
    correct_answer: "b",
    explain:
      "Cấu trúc của thì hiện tại tiếp diễn là: Chủ ngữ + am/is/are + V-ing.",
  },
  {
    id: "29",
    tense: "Past Continuous",
    type: "fill_to_the_blank",
    question: "While I _____ TV, someone knocked on the door.",
    options: [
      { id: "a", value: "watch" },
      { id: "b", value: "watches" },
      { id: "c", value: "was watching" },
      { id: "d", value: "watched" },
    ],
    correct_answer: "c",
    explain:
      "Hành động đang diễn ra (xem TV) khi một hành động khác xảy ra (gõ cửa) cần dùng thì quá khứ tiếp diễn → 'was watching'.",
  },
  {
    id: "30",
    tense: "Past Continuous",
    type: "multiple_choice",
    question: "Thì Past Continuous thường được dùng để diễn tả:",
    options: [
      { id: "a", value: "Hành động đã hoàn thành trong quá khứ" },
      { id: "b", value: "Hành động đang diễn ra tại thời điểm nói" },
      {
        id: "c",
        value: "Hành động đang diễn ra tại một thời điểm trong quá khứ",
      },
      { id: "d", value: "Hành động sẽ xảy ra trong tương lai" },
    ],
    correct_answer: "c",
    explain:
      "Thì quá khứ tiếp diễn thường được dùng để diễn tả hành động đang diễn ra tại một thời điểm trong quá khứ.",
  },
  {
    id: "31",
    tense: "Present Perfect",
    type: "fill_to_the_blank",
    question: "I _____ this book three times.",
    options: [
      { id: "a", value: "read" },
      { id: "b", value: "reads" },
      { id: "c", value: "have read" },
      { id: "d", value: "am reading" },
    ],
    correct_answer: "c",
    explain:
      "Khi nói về kinh nghiệm đã trải qua mà không đề cập thời gian cụ thể, ta dùng thì hiện tại hoàn thành → 'have read'.",
  },
  {
    id: "32",
    tense: "Present Perfect",
    type: "multiple_choice",
    question: "Cấu trúc của thì Present Perfect là:",
    options: [
      { id: "a", value: "S + V2/ed + ..." },
      { id: "b", value: "S + am/is/are + V-ing" },
      { id: "c", value: "S + have/has + V3" },
      { id: "d", value: "S + will + V-inf" },
    ],
    correct_answer: "c",
    explain:
      "Cấu trúc của thì hiện tại hoàn thành là: Chủ ngữ + have/has + V3 (quá khứ phân từ).",
  },
  {
    id: "33",
    tense: "Past Perfect",
    type: "fill_to_the_blank",
    question: "When I arrived at the cinema, the film _____.",
    options: [
      { id: "a", value: "already starts" },
      { id: "b", value: "already started" },
      { id: "c", value: "had already started" },
      { id: "d", value: "has already started" },
    ],
    correct_answer: "c",
    explain:
      "Hành động xảy ra trước một hành động khác trong quá khứ (phim bắt đầu trước khi tôi đến) cần dùng thì quá khứ hoàn thành → 'had already started'.",
  },
  {
    id: "34",
    tense: "Past Perfect",
    type: "multiple_choice",
    question: "Thì Past Perfect thường được dùng để diễn tả:",
    options: [
      {
        id: "a",
        value: "Hành động xảy ra trước một hành động khác trong quá khứ",
      },
      { id: "b", value: "Hành động đang diễn ra tại thời điểm nói" },
      { id: "c", value: "Hành động sẽ xảy ra trong tương lai" },
      { id: "d", value: "Hành động lặp đi lặp lại trong hiện tại" },
    ],
    correct_answer: "a",
    explain:
      "Thì quá khứ hoàn thành thường được dùng để diễn tả hành động xảy ra trước một hành động khác trong quá khứ.",
  },
  {
    id: "35",
    tense: "Future Continuous",
    type: "fill_to_the_blank",
    question: "At 8 PM tonight, we _____ dinner with our friends.",
    options: [
      { id: "a", value: "have" },
      { id: "b", value: "will have" },
      { id: "c", value: "will be having" },
      { id: "d", value: "had" },
    ],
    correct_answer: "c",
    explain:
      "Hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai (8 PM tonight) cần dùng thì tương lai tiếp diễn → 'will be having'.",
  },
  {
    id: "36",
    tense: "Future Continuous",
    type: "multiple_choice",
    question: "Cấu trúc của thì Future Continuous là:",
    options: [
      { id: "a", value: "S + will + V-inf" },
      { id: "b", value: "S + will be + V-ing" },
      { id: "c", value: "S + will have + V3" },
      { id: "d", value: "S + will have been + V-ing" },
    ],
    correct_answer: "b",
    explain:
      "Cấu trúc của thì tương lai tiếp diễn là: Chủ ngữ + will be + V-ing.",
  },
  {
    id: "37",
    tense: "Future Perfect",
    type: "fill_to_the_blank",
    question:
      "By the end of this month, I _____ in this company for five years.",
    options: [
      { id: "a", value: "will work" },
      { id: "b", value: "will be working" },
      { id: "c", value: "will have worked" },
      { id: "d", value: "work" },
    ],
    correct_answer: "c",
    explain:
      "Hành động sẽ hoàn thành trước một thời điểm trong tương lai (by the end of this month) cần dùng thì tương lai hoàn thành → 'will have worked'.",
  },
  {
    id: "38",
    tense: "Future Perfect",
    type: "multiple_choice",
    question: "Thì Future Perfect thường được dùng để diễn tả:",
    options: [
      { id: "a", value: "Hành động đã hoàn thành trong quá khứ" },
      {
        id: "b",
        value: "Hành động sẽ hoàn thành trước một thời điểm trong tương lai",
      },
      { id: "c", value: "Hành động đang diễn ra tại thời điểm nói" },
      { id: "d", value: "Hành động lặp đi lặp lại trong hiện tại" },
    ],
    correct_answer: "b",
    explain:
      "Thì tương lai hoàn thành thường được dùng để diễn tả hành động sẽ hoàn thành trước một thời điểm trong tương lai.",
  },
  {
    id: "39",
    tense: "Present Perfect Continuous",
    type: "fill_to_the_blank",
    question: "My hands are dirty because I _____ in the garden.",
    options: [
      { id: "a", value: "work" },
      { id: "b", value: "am working" },
      { id: "c", value: "have been working" },
      { id: "d", value: "worked" },
    ],
    correct_answer: "c",
    explain:
      "Hành động bắt đầu trong quá khứ, kéo dài đến hiện tại và có kết quả nhìn thấy được (tay bẩn) cần dùng thì hiện tại hoàn thành tiếp diễn → 'have been working'.",
  },
  {
    id: "40",
    tense: "Present Perfect Continuous",
    type: "multiple_choice",
    question: "Thì Present Perfect Continuous thường được dùng để diễn tả:",
    options: [
      {
        id: "a",
        value:
          "Hành động bắt đầu trong quá khứ, kéo dài đến hiện tại và nhấn mạnh tính liên tục",
      },
      { id: "b", value: "Hành động đã hoàn thành trong quá khứ" },
      { id: "c", value: "Hành động sẽ xảy ra trong tương lai" },
      { id: "d", value: "Hành động lặp đi lặp lại trong hiện tại" },
    ],
    correct_answer: "a",
    explain:
      "Thì hiện tại hoàn thành tiếp diễn thường được dùng để diễn tả hành động bắt đầu trong quá khứ, kéo dài đến hiện tại và nhấn mạnh tính liên tục của hành động.",
  },
  {
    id: "41",
    tense: "Past Perfect Continuous",
    type: "fill_to_the_blank",
    question: "I was exhausted because I _____ for five hours.",
    options: [
      { id: "a", value: "run" },
      { id: "b", value: "had been running" },
      { id: "c", value: "have been running" },
      { id: "d", value: "was running" },
    ],
    correct_answer: "b",
    explain:
      "Hành động bắt đầu trong quá khứ, kéo dài liên tục đến một thời điểm khác trong quá khứ và có kết quả (mệt mỏi) cần dùng thì quá khứ hoàn thành tiếp diễn → 'had been running'.",
  },
  {
    id: "42",
    tense: "Past Perfect Continuous",
    type: "multiple_choice",
    question: "Cấu trúc của thì Past Perfect Continuous là:",
    options: [
      { id: "a", value: "S + had + V3" },
      { id: "b", value: "S + had been + V-ing" },
      { id: "c", value: "S + have/has been + V-ing" },
      { id: "d", value: "S + was/were + V-ing" },
    ],
    correct_answer: "b",
    explain:
      "Cấu trúc của thì quá khứ hoàn thành tiếp diễn là: Chủ ngữ + had been + V-ing.",
  },
  {
    id: "43",
    tense: "Future Perfect Continuous",
    type: "fill_to_the_blank",
    question: "By next month, I _____ English for two years.",
    options: [
      { id: "a", value: "will study" },
      { id: "b", value: "will be studying" },
      { id: "c", value: "will have been studying" },
      { id: "d", value: "study" },
    ],
    correct_answer: "c",
    explain:
      "Hành động bắt đầu trong quá khứ, kéo dài liên tục đến một thời điểm trong tương lai và nhấn mạnh khoảng thời gian (two years) cần dùng thì tương lai hoàn thành tiếp diễn → 'will have been studying'.",
  },
  {
    id: "44",
    tense: "Future Perfect Continuous",
    type: "multiple_choice",
    question: "Cấu trúc của thì Future Perfect Continuous là:",
    options: [
      { id: "a", value: "S + will + V-inf" },
      { id: "b", value: "S + will be + V-ing" },
      { id: "c", value: "S + will have + V3" },
      { id: "d", value: "S + will have been + V-ing" },
    ],
    correct_answer: "d",
    explain:
      "Cấu trúc của thì tương lai hoàn thành tiếp diễn là: Chủ ngữ + will have been + V-ing.",
  },
  {
    id: "45",
    tense: "Used to",
    type: "fill_to_the_blank",
    question: "I _____ smoke, but I quit last year.",
    options: [
      { id: "a", value: "use to" },
      { id: "b", value: "used to" },
      { id: "c", value: "am used to" },
      { id: "d", value: "was used to" },
    ],
    correct_answer: "b",
    explain:
      "Để diễn tả thói quen trong quá khứ không còn nữa, ta dùng cấu trúc 'used to + V-inf' → 'used to smoke'.",
  },
  {
    id: "46",
    tense: "Used to",
    type: "multiple_choice",
    question: "Cấu trúc 'used to' được dùng để diễn tả:",
    options: [
      { id: "a", value: "Thói quen trong quá khứ không còn nữa" },
      { id: "b", value: "Thói quen trong hiện tại" },
      { id: "c", value: "Hành động sẽ xảy ra trong tương lai" },
      { id: "d", value: "Hành động đang diễn ra" },
    ],
    correct_answer: "a",
    explain:
      "Cấu trúc 'used to' được dùng để diễn tả thói quen trong quá khứ không còn nữa hoặc trạng thái trong quá khứ đã thay đổi.",
  },
  {
    id: "47",
    tense: "Be going to",
    type: "fill_to_the_blank",
    question: "Look at those dark clouds. It _____ rain.",
    options: [
      { id: "a", value: "will" },
      { id: "b", value: "is going to" },
      { id: "c", value: "would" },
      { id: "d", value: "should" },
    ],
    correct_answer: "b",
    explain:
      "Khi dự đoán dựa trên bằng chứng hiện tại (mây đen), ta dùng cấu trúc 'be going to' → 'is going to rain'.",
  },
  {
    id: "48",
    tense: "Be going to",
    type: "multiple_choice",
    question: "Cấu trúc 'be going to' được dùng để diễn tả:",
    options: [
      { id: "a", value: "Hành động đã hoàn thành trong quá khứ" },
      { id: "b", value: "Kế hoạch hoặc dự định trong tương lai" },
      { id: "c", value: "Thói quen trong hiện tại" },
      { id: "d", value: "Hành động đang diễn ra tại thời điểm nói" },
    ],
    correct_answer: "b",
    explain:
      "Cấu trúc 'be going to' được dùng để diễn tả kế hoạch hoặc dự định trong tương lai, hoặc dự đoán dựa trên bằng chứng hiện tại.",
  },
  {
    id: "49",
    tense: "Would",
    type: "fill_to_the_blank",
    question: "When I was a child, I _____ play in the park every day.",
    options: [
      { id: "a", value: "would" },
      { id: "b", value: "will" },
      { id: "c", value: "am going to" },
      { id: "d", value: "have" },
    ],
    correct_answer: "a",
    explain:
      "Để diễn tả thói quen lặp đi lặp lại trong quá khứ, ta có thể dùng 'would + V-inf' → 'would play'.",
  },
  {
    id: "50",
    tense: "Would",
    type: "multiple_choice",
    question:
      "Cấu trúc 'would + V-inf' trong ngữ cảnh quá khứ được dùng để diễn tả:",
    options: [
      { id: "a", value: "Thói quen lặp đi lặp lại trong quá khứ" },
      { id: "b", value: "Hành động sẽ xảy ra trong tương lai" },
      { id: "c", value: "Hành động đang diễn ra tại thời điểm nói" },
      { id: "d", value: "Hành động đã hoàn thành trước một hành động khác" },
    ],
    correct_answer: "a",
    explain:
      "Cấu trúc 'would + V-inf' trong ngữ cảnh quá khứ được dùng để diễn tả thói quen lặp đi lặp lại trong quá khứ.",
  },
  {
    id: "51",
    tense: "Present Simple",
    type: "fill_to_the_blank",
    question: "The sun _____ in the east.",
    options: [
      { id: "a", value: "rise" },
      { id: "b", value: "rises" },
      { id: "c", value: "rising" },
      { id: "d", value: "rose" },
    ],
    correct_answer: "b",
    explain:
      "Đây là một sự thật phổ quát, nên ta dùng thì hiện tại đơn. Với chủ ngữ số ít (the sun), động từ thêm 's' → 'rises'.",
  },
  {
    id: "52",
    tense: "Past Simple",
    type: "fill_to_the_blank",
    question: "I _____ my keys yesterday, but I found them later.",
    options: [
      { id: "a", value: "lose" },
      { id: "b", value: "loses" },
      { id: "c", value: "lost" },
      { id: "d", value: "have lost" },
    ],
    correct_answer: "c",
    explain:
      "Hành động xảy ra và kết thúc trong quá khứ (yesterday) cần dùng thì quá khứ đơn → 'lost'.",
  },
  {
    id: "53",
    tense: "Future Simple",
    type: "fill_to_the_blank",
    question: "I promise I _____ you as soon as I arrive.",
    options: [
      { id: "a", value: "call" },
      { id: "b", value: "calls" },
      { id: "c", value: "will call" },
      { id: "d", value: "called" },
    ],
    correct_answer: "c",
    explain:
      "Khi đưa ra lời hứa, ta dùng thì tương lai đơn với 'will + động từ nguyên mẫu' → 'will call'.",
  },
  {
    id: "54",
    tense: "Present Continuous",
    type: "fill_to_the_blank",
    question: "Please be quiet. I _____ to concentrate.",
    options: [
      { id: "a", value: "try" },
      { id: "b", value: "tries" },
      { id: "c", value: "am trying" },
      { id: "d", value: "tried" },
    ],
    correct_answer: "c",
    explain:
      "Hành động đang diễn ra tại thời điểm nói cần dùng thì hiện tại tiếp diễn → 'am trying'.",
  },
  {
    id: "55",
    tense: "Past Continuous",
    type: "fill_to_the_blank",
    question: "At 8 PM last night, I _____ my homework.",
    options: [
      { id: "a", value: "do" },
      { id: "b", value: "did" },
      { id: "c", value: "was doing" },
      { id: "d", value: "have done" },
    ],
    correct_answer: "c",
    explain:
      "Hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ (8 PM last night) cần dùng thì quá khứ tiếp diễn → 'was doing'.",
  },
  {
    id: "56",
    tense: "Present Perfect",
    type: "fill_to_the_blank",
    question: "I _____ my homework, so I can go out now.",
    options: [
      { id: "a", value: "finish" },
      { id: "b", value: "finishes" },
      { id: "c", value: "have finished" },
      { id: "d", value: "finished" },
    ],
    correct_answer: "c",
    explain:
      "Hành động vừa mới hoàn thành và có kết quả ảnh hưởng đến hiện tại (có thể đi chơi) cần dùng thì hiện tại hoàn thành → 'have finished'.",
  },
  {
    id: "57",
    tense: "Past Perfect",
    type: "fill_to_the_blank",
    question: "I couldn't get into the house because I _____ my key.",
    options: [
      { id: "a", value: "lose" },
      { id: "b", value: "lost" },
      { id: "c", value: "had lost" },
      { id: "d", value: "have lost" },
    ],
    correct_answer: "c",
    explain:
      "Hành động xảy ra trước một hành động khác trong quá khứ (mất chìa khóa trước khi không thể vào nhà) cần dùng thì quá khứ hoàn thành → 'had lost'.",
  },
  {
    id: "58",
    tense: "Future Continuous",
    type: "fill_to_the_blank",
    question: "This time next week, I _____ on a beach in Hawaii.",
    options: [
      { id: "a", value: "lie" },
      { id: "b", value: "will lie" },
      { id: "c", value: "will be lying" },
      { id: "d", value: "am lying" },
    ],
    correct_answer: "c",
    explain:
      "Hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai (this time next week) cần dùng thì tương lai tiếp diễn → 'will be lying'.",
  },
  {
    id: "59",
    tense: "Present Perfect Continuous",
    type: "fill_to_the_blank",
    question: "I'm tired because I _____ all day.",
    options: [
      { id: "a", value: "work" },
      { id: "b", value: "worked" },
      { id: "c", value: "have been working" },
      { id: "d", value: "am working" },
    ],
    correct_answer: "c",
    explain:
      "Hành động bắt đầu trong quá khứ, kéo dài đến hiện tại và có kết quả (mệt mỏi) cần dùng thì hiện tại hoàn thành tiếp diễn → 'have been working'.",
  },
  {
    id: "60",
    tense: "Past Perfect Continuous",
    type: "fill_to_the_blank",
    question: "When I saw her, she was out of breath because she _____.",
    options: [
      { id: "a", value: "runs" },
      { id: "b", value: "ran" },
      { id: "c", value: "had been running" },
      { id: "d", value: "has been running" },
    ],
    correct_answer: "c",
    explain:
      "Hành động bắt đầu và kéo dài trong quá khứ trước một hành động khác trong quá khứ (trước khi tôi gặp cô ấy) và có kết quả (hụt hơi) cần dùng thì quá khứ hoàn thành tiếp diễn → 'had been running'.",
  },
];
