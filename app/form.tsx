"use client";

import { useState } from "react";
import { apply } from "./utils";

export const TryItForm = () => {
  const [target, setTarget] = useState<string>();
  const [patch, setPatch] = useState<string>();
  const [result, setResult] = useState<string>();
  const [targetError, setTargetError] = useState<string>();
  const [patchError, setPatchError] = useState<string>();
  const [isCopied, setIsCopied] = useState(false);
  const applyPatch = () => {
    if (!target || !patch) {
      return;
    }

    try {
      JSON.parse(target);
      setTargetError("");
    } catch (e) {
      console.error(e);
      setTargetError(`Invalid JSON, see console for details`);
      setResult("Fix the error and try again.");
      return;
    }

    try {
      JSON.parse(patch);
      setPatchError("");
    } catch (e) {
      console.error(e);
      setPatchError("Invalid JSON, see console for details");
      setResult("Fix the error and try again.");
      return;
    }

    const mergeResult = apply(JSON.parse(target), JSON.parse(patch));
    setResult(JSON.stringify(mergeResult, null, 2));
  };
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="font-semibold text-2xl">Try It Out</h2>
        <p className="mb-4 mx-4 mt-2">
          Enter a JSON object and a JSON Merge Patch operation below to see the
          result.
        </p>
      </div>
      <div className="w-[400px] sm:w-[800px] mx-4 flex flex-col my-8 gap-y-3">
        <h2 className="font-semibold text-lg">JSON Object</h2>
        <textarea
          className="w-full h-36 p-2 border border-gray-300 rounded font-mono"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder={`{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com"
}`}
        />
        <p className="text-red-500">{targetError}</p>
        <h2 className="font-semibold text-lg">JSON Merge Patch</h2>
        <textarea
          className="w-full h-36 p-2 border border-gray-300 rounded font-mono"
          value={patch}
          onChange={(e) => setPatch(e.target.value)}
          placeholder={`{
  "age": 31,
  "email": null,
  "id": 1
}`}
        />
        <p className="text-red-500">{patchError}</p>
        <button
          onClick={applyPatch}
          className="w-full bg-indigo-500 text-white p-2 rounded"
        >
          Apply Patch
        </button>
        <h2 className="font-semibold text-lg">Result</h2>
        <textarea
          className="w-full h-36 p-2 border border-gray-300 rounded font-mono"
          value={result}
          disabled
          placeholder={`{
  "name": "John Doe",
  "age": 31,
}`}
        />
        <button
          onClick={() =>
            result
              ? navigator.clipboard.writeText(result).then(() => {
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 2000);
                })
              : null
          }
          className="w-full bg-indigo-500 text-white p-2 rounded"
        >
          {isCopied ? "Result Copied" : "Copy Result"}
        </button>
      </div>
    </div>
  );
};
