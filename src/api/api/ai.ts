import { apiUrl, randomId } from ".";

export const postMessage = async (message: string) => {
  const response = await fetch(`${apiUrl}/predict`, {
    method: "POST", 
    body: JSON.stringify({ message, id: randomId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseData: { answer: string, probability: number, time: string } = await response.json();
  return responseData;
};
