import { consonants, vowels } from "@/modules";
import { ipaData } from "@/modules/ipa";
import { useQuery } from "@tanstack/react-query";

export default function useGetDetailSymbol(symbol: string) {
  const data = consonants.concat(vowels);
  const getSymbol = () => {
    const convertData = data.map((item) => {
      const findedItem = ipaData.find((i) => i.ipa_symbol === symbol);

      if (findedItem) {
        return {
          ...item,
          examples: findedItem.examples,
          video_url: findedItem.video_url,
        };
      }
      return { ...item, examples: [] };
    });

    return convertData.find((item) => item.symbol === symbol);
  };
  return useQuery({
    queryKey: ["DETAIL_SYMBOL",symbol],
    queryFn: getSymbol,
    enabled: !!symbol,
  });
}
