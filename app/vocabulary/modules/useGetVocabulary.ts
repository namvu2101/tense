import { grammarData } from "@/modules/grammar-data";
import { useQuery } from "@tanstack/react-query";

type props = keyof typeof grammarData;

export default function useGetVocabulary(id: props) {
  const findData = (id: props) => {
    if (grammarData[id]) {
      return grammarData[id];
    }
  };
  return useQuery({
    queryKey: ["vocabulary", id],
    queryFn: () => findData(id),
    enabled: !!id,
  });
}
