import { exercises } from "@/modules/grammar-data";
import { useQuery } from "@tanstack/react-query";
type props = keyof typeof exercises;

export default function useGetExams(id: props) {
  const findData = (id: props) => {
    if (exercises[id]) {
      return exercises[id];
    }
  };
  return useQuery({
    queryKey: ["exercises", id],
    queryFn: () => findData(id),
    enabled: !!id,
  });
}
