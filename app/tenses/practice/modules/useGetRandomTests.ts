import { useQuery } from "@tanstack/react-query";
import { sampleTenseQuestions } from "@/modules/questions";

export default function useGetRandomTests() {
  const getRandomQuestions = () => {
    const array = [...sampleTenseQuestions];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(0, 10);
  };

  return useQuery({
    queryKey: ["GET_RANDOM_TESTS_TENSE"],
    queryFn: getRandomQuestions,
    placeholderData: [],
  });
}
