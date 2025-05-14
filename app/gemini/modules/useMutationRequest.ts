import { GOOGLE_GENAI_API_KEY } from "@env";
import { GoogleGenAI } from "@google/genai";
import { useMutation } from "@tanstack/react-query";

const ai = new GoogleGenAI({ apiKey: GOOGLE_GENAI_API_KEY });
export default function useMutationRequest() {
  return useMutation({
    mutationKey: ["mutation-ai"],
    mutationFn: async (text: string) => {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: text,
      });
      return response;
    },
  });
}
