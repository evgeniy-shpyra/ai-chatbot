import React from "react";
import { postMessage } from "../../api/ai";
import data from "./testData.json";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

const loop = async (data: { request: string; response: string }[]) => {
  let sum = 0
  for (const item of data) {
    const res = await postMessage(item.request);
    sum += res.probability
    console.log(
      `is right: ${res.answer === item.response}; probability: ${
        res.probability
      }`
    );
    await wait(100);
  }

  console.log(`Avg: ${(sum/data.length).toFixed(4)}`)
};

const TestsAi = () => {

  const handleTest = async () => {
  
    console.log("\n100%");
    await loop(data.good);

    console.log("\n50%/50%");
    await loop(data.middle);

    console.log("\n0%");
    await loop(data.bad);
  };

  return (
    <div onClick={handleTest} className="test-btn">
      Test
    </div>
  );
};

export default TestsAi;
