import { commonRecognitionSigns, wordFormationPatterns } from "@/modules";
import { useQuery } from "@tanstack/react-query";
type props =
  | keyof typeof commonRecognitionSigns
  | keyof typeof wordFormationPatterns;

export default function useGetSign(id: props) {
  const findData = (id: props) => {
    if (commonRecognitionSigns[id] && wordFormationPatterns[id]) {
      return {
        signs: commonRecognitionSigns[id],
        patterns: wordFormationPatterns[id],
      };
    }
    return {};
  };
  return useQuery({
    queryKey: ["commonRecognitionSigns", id],
    queryFn: () => findData(id),
    enabled: !!id,
  });
}
