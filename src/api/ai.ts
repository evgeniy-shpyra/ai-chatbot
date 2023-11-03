import { apiUrl } from ".";

export const postMessage = async (message: string) => {
  const response = await fetch(`${apiUrl}/predict`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ message }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseData: { answer: string, time: string } = await response.json();
  return responseData;
};
