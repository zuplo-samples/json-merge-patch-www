import Image from "next/image";
import { TryItForm } from "./form";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      <div className="w-full bg-gray-900 text-white flex items-center justify-center flex-col">
        <div className="w-full flex flex-col items-center justify-center">
          <Image
            src="/images/JMP-white.svg"
            width={400}
            height={400}
            alt="JSON Merge Patch logo"
          />
          <h1 className="text-3xl -mt-4 mx-4">
            Free JSON Merge Patch Tool and API
          </h1>
        </div>
        <div className="w-[400px] sm:w-[800px] mx-4 flex flex-col my-8 mt-16 gap-y-3">
          <h2 className="font-semibold text-lg">What is JSON Merge Patch?</h2>
          <p className="mb-4">
            JSON Merge Patch is a format defined in{" "}
            <a
              href="https://datatracker.ietf.org/doc/html/rfc7386"
              target="_blank"
              className="text-indigo-500"
            >
              RFC 7386
            </a>
            , designed for use with the HTTP PATCH method to describe
            modifications to a target JSON document. It offers a simpler
            alternative to JSON Patch (
            <a
              href="https://datatracker.ietf.org/doc/html/rfc6902"
              target="_blank"
              className="text-indigo-500"
            >
              RFC 6902
            </a>
            ) for updating JSON resources, especially when updates are
            object-based and don&apos;t require explicit null values or
            complicated array operations.
          </p>
          <h2 className="font-semibold text-lg">What Does This Tool Do?</h2>
          <p className="mb-4">
            jsonmergepatch.com is a free tool that allows you to apply a JSON
            Merge Patch operation to a provided JSON object, and observe the
            result. This is a great resource for learning how JSON Merge Patch
            works, or for quickly applying a patch to a JSON object without
            needing to write any code.{" "}
            <p>
              Additionally, you can use our{" "}
              <a href="#json-merge-patch-api" className="text-indigo-500">
                JSON Merge Patch API
              </a>{" "}
              to apply JSON Merge Patch operations programmatically.
            </p>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <TryItForm />
      </div>
      <div className="w-full flex items-center justify-center flex-col mt-8 mb-20">
        <div className="w-[400px] sm:w-[800px] flex flex-col items-center justify-center">
          <h2 id="json-merge-patch-api" className="font-semibold text-2xl">
            JSON Merge Patch API
          </h2>
          <p className="my-4">
            If you would like to use this tool programmatically, you can use our{" "}
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
          </p>
        </div>
      </div>
      <footer className="bottom-0 left-0 right-0">
        <div className="sm:p-2 container mx-auto flex items-center justify-between border-t p-5 text-lg text-gray-500 md:text-xl">
          <div>
            Created with ❤️ by{" "}
            <a
              href="https://zuplo.com/"
              target="_blank"
              className="font-bold transition hover:text-black"
            >
              Zuplo.
            </a>
          </div>
          <div className="flex">
            <Link
              href="https://twitter.com/zuplo"
              className="group mr-3"
              target="_blank"
              aria-label="Zuplo on Twitter"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link>
            <Link
              href="https://github.com/zuplo-samples/json-merge-patch-www"
              className="group"
              target="_blank"
              aria-label="JSON merge patch on GitHub"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
