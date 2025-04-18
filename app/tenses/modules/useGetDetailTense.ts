import { Tense, getTenses } from "@/modules/tenses";
import { useQuery } from "@tanstack/react-query";

export default function useGetDetailTense(id: Tense) {
  return useQuery({
    queryKey: ["GET_TENSE", id],
    queryFn: () => getTenses(id),
    enabled: !!id,
  });
}
