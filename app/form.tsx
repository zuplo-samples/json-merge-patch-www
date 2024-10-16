"use client";

import { useState } from "react";
import { mergePatch, createPatch } from "./utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BookOpen, Copy } from "lucide-react";

export const TryItForm = () => {
  const [originalJSON, setOriginalJSON] = useState(
    '{\n  "title": "Hello",\n  "author": {\n    "name": "John Doe"\n  }\n}'
  );
  const [patchJSON, setPatchJSON] = useState(
    '{\n  "title": "Hello World",\n  "author": {\n    "email": "john@example.com"\n  }\n}'
  );
  const [mergedJSON, setMergedJSON] = useState("");
  const [jsonA, setJsonA] = useState(
    '{\n  "title": "Hello",\n  "author": {\n    "name": "John Doe"\n  }\n}'
  );
  const [jsonB, setJsonB] = useState(
    '{\n  "title": "Hello World",\n  "author": {\n    "name": "John Doe",\n    "email": "john@example.com"\n  }\n}'
  );
  const [generatedPatch, setGeneratedPatch] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const performMergePatch = () => {
    try {
      const original = JSON.parse(originalJSON);
      const patch = JSON.parse(patchJSON);
      const merged = mergePatch(original, patch);
      setMergedJSON(JSON.stringify(merged, null, 2));
    } catch (error) {
      setMergedJSON(`Error: ${(error as Error).message}`);
    }
  };

  const generatePatch = () => {
    try {
      const a = JSON.parse(jsonA);
      const b = JSON.parse(jsonB);
      const patch = createPatch(a, b);
      setGeneratedPatch(JSON.stringify(patch, null, 2));
    } catch (error) {
      setGeneratedPatch(`Error: ${(error as Error).message}`);
    }
  };

  const copyToClipboard = (
    text: string,
    setCopyText: (text: string) => void
  ) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyText("Copied!");
      setTimeout(() => setCopyText("Copy"), 2000);
    });
  };

  return (
    <Tabs defaultValue="apply" className="flex-grow mx-4">
      <TabsList className="grid w-full grid-cols-3 bg-gray-200">
        <TabsTrigger value="apply" className="data-[state=active]:bg-white">
          Apply Patch
        </TabsTrigger>
        <TabsTrigger value="generate" className="data-[state=active]:bg-white">
          Generate Patch
        </TabsTrigger>
        <TabsTrigger value="api" className="data-[state=active]:bg-white">
          REST API
        </TabsTrigger>
      </TabsList>
      <TabsContent value="apply" className="mt-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Original JSON</CardTitle>
              <CardDescription>Enter the original JSON object</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={originalJSON}
                onChange={(e) => setOriginalJSON(e.target.value)}
                rows={10}
                className="font-mono bg-white text-gray-900 border-gray-300"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Patch JSON</CardTitle>
              <CardDescription>Enter the JSON Merge Patch</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={patchJSON}
                onChange={(e) => setPatchJSON(e.target.value)}
                rows={10}
                className="font-mono bg-white text-gray-900 border-gray-300"
              />
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 text-center">
          <Button
            onClick={performMergePatch}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Apply Merge Patch
          </Button>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Merged Result</CardTitle>
            <CardDescription>
              The result of applying the JSON Merge Patch
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Textarea
                value={mergedJSON}
                readOnly
                rows={10}
                className="font-mono bg-white text-gray-900 border-gray-300 pr-20"
              />
              <Button
                onClick={() => copyToClipboard(mergedJSON, setCopyButtonText)}
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-900"
                size="sm"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copyButtonText}
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="generate" className="mt-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>JSON A</CardTitle>
              <CardDescription>Enter the original JSON object</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={jsonA}
                onChange={(e) => setJsonA(e.target.value)}
                rows={10}
                className="font-mono bg-white text-gray-900 border-gray-300"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>JSON B</CardTitle>
              <CardDescription>Enter the target JSON object</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={jsonB}
                onChange={(e) => setJsonB(e.target.value)}
                rows={10}
                className="font-mono bg-white text-gray-900 border-gray-300"
              />
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 text-center">
          <Button
            onClick={generatePatch}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Generate Patch
          </Button>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Generated Patch</CardTitle>
            <CardDescription>
              The JSON Merge Patch to transform JSON A into JSON B
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Textarea
                value={generatedPatch}
                readOnly
                rows={10}
                className="font-mono bg-white text-gray-900 border-gray-300 pr-20"
              />
              <Button
                onClick={() =>
                  copyToClipboard(generatedPatch, setCopyButtonText)
                }
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-900"
                size="sm"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copyButtonText}
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="api" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              REST API{" "}
              <Button
                className="ml-2"
                onClick={() => {
                  window.open("https://api.jsonmergepatch.com/docs", "_blank");
                }}
                variant="outline"
                size="xs"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                API Documentation
              </Button>
            </CardTitle>
            <CardDescription>
              If you would like to use this tool programmatically, you can use
              our{" "}
              <a
                className="text-indigo-500"
                target="_blank"
                href="https://api.jsonmergepatch.com/docs"
              >
                JSON Merge Patch API
              </a>
              . The API is free to use and does not require an API key - but
              excessive use will be rate-limited. The API allows you to upload
              JSON objects, and then apply JSON Merge Patch operations to them.
              API and docs were built using{" "}
              <a
                className="text-[#ff00bd]"
                target="_blank"
                href="https://zuplo.com?utm_source=json-merge-patch"
              >
                Zuplo
              </a>
              .
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 flex flex-col max-w-[100vw] -mx-4">
            <div className="mx-4">
              <h3 className="text-lg font-semibold mb-2">
                Upload a JSON to be Patched
              </h3>
              <code className="bg-gray-100 p-2 rounded-md block overflow-x-auto text-gray-900">
                POST https://api.jsonmergepatch.com/upload
              </code>
            </div>
            <div className="mx-4">
              <h3 className="text-lg font-semibold mb-2">Request Body</h3>
              <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto text-gray-900">
                {`{
  "title": "Hello world",
  "summary": "A simple summary",
  "data": {
    "age": 3
  }
}`}
              </pre>
            </div>
            <div className="mx-4">
              <h3 className="text-lg font-semibold mb-2">Response</h3>
              <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto text-gray-900">
                {`{
  "targetId": "abc1234" // Use this ID to apply a patch
}`}
              </pre>
            </div>
            <div className="mx-4">
              <h3 className="text-lg font-semibold mb-2">Apply Patch</h3>
              <code className="bg-gray-100 p-2 overflow-x-auto rounded-md block text-gray-900">
                PATCH https://api.jsonmergepatch.com/apply/:targetId
              </code>
            </div>
            <div className="mx-4">
              <h3 className="text-lg font-semibold mb-2">Request Body</h3>
              <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto text-gray-900">
                {`{
  "title": "Changed title",
  "type": "book"
  "summary": null,
  "data": {
    "someNewProperty": "wow"
    "age": 4
  }
}`}
              </pre>
            </div>
            <div className="mx-4">
              <h3 className="text-lg font-semibold mb-2">Response</h3>
              <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto text-gray-900">
                {`{
  "title": "Changed title",
  "type": "book",
  "data": {
    "someNewProperty": "wow",
    "age": 4
  }
}`}
              </pre>
            </div>
            <div className="mx-4">
              View the{" "}
              <a
                className="text-indigo-500"
                target="_blank"
                href="https://api.jsonmergepatch.com/docs"
              >
                full API documentation
              </a>{" "}
              for a more in-depth walkthrough.
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
