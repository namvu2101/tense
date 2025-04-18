import { consonants, vowels } from "@/modules";
import { useQuery } from "@tanstack/react-query";

export function useGetSymbol() {
  const getSymbol = () => {
    return { vowels, consonants };
  };
  return useQuery({
    queryKey: ["SYMBOL"],
    queryFn: getSymbol,
    placeholderData: { vowels: [], consonants: [] },
  });
}
