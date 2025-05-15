import { GoogleGenAI } from "@google/genai";
import { useMutation } from "@tanstack/react-query";

const key = process.env.EXPO_PUBLIC_GOOGLE_GENAI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: key,
});

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
