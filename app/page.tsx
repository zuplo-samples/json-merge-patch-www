import Image from "next/image";
import { TryItForm } from "./form";
import Link from "next/link";
import { Links } from "./links";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="min-h-screen flex flex-col mx-auto">
        <div className="w-full bg-gray-900 text-white flex items-center justify-center flex-col">
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              src="/images/JMP-white.svg"
              width={320}
              height={320}
              alt="JSON Merge Patch logo"
            />
            <h1 className="text-2xl -mt-4 mx-4">
              Free JSON Merge Patch Tool and API
            </h1>
            <div className="absolute top-4 right-4">
              <Links />
            </div>
          </div>
          <div className="w-[400px] sm:w-[800px] mx-4 flex flex-col my-8 mt-10 gap-y-3">
            <h2 className="font-semibold text-lg">What is JSON Merge Patch?</h2>
            <p className="mb-4">
              JSON Merge Patch is a standardized method for partially updating
              JSON documents, defined in
              <a
                href="https://tools.ietf.org/html/rfc7396"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                {" "}
                RFC 7396
              </a>
              . It provides a simple way to describe changes to a JSON document,
              making it ideal for API interactions and data synchronization
              tasks.{" "}
              <a
                href="https://zuplo.com/blog/2024/10/11/what-is-json-merge-patch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                Learn more
              </a>
            </p>
            <h2 className="font-semibold text-lg">
              How JSON Merge Patch Works
            </h2>
            <ul className="list-disc pl-6 mb-4 ">
              <li>
                The patch is a JSON document itself, describing the changes to
                be made to the target document.
              </li>
              <li>
                Properties in the patch replace corresponding properties in the
                target.
              </li>
              <li>
                A null value in the patch removes the property from the target.
              </li>
              <li>
                Properties not mentioned in the patch remain unchanged in the
                target.
              </li>
            </ul>
            <h2 className="font-semibold text-lg">What Does This Tool Do?</h2>
            <p>
              This tool allows you to apply a JSON Merge Patch operation to a
              provided JSON object or generate a Merge Patch between two JSON
              objects. Additionally, you can use our JSON Merge Patch API for
              programmatic access.
            </p>
          </div>
        </div>
        <div className="container flex w-full mx-auto my-8">
          <TryItForm />
        </div>
        <footer className="bg-gray-900">
          <div className="sm:p-2 container mx-auto flex gap-y-2 flex-col justify-center items-center p-5 text-lg text-gray-500 md:text-xl">
            <div className="flex">
              <Link
                href="https://twitter.com/zuplo"
                className="group mr-3"
                target="_blank"
                aria-label="Zuplo on Twitter"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-slate-200 group-hover:fill-white"
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
                  className="h-6 w-6 fill-slate-200 group-hover:fill-white"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </Link>
            </div>
            <div className="text-slate-200">
              Created with ❤️ by{" "}
              <a
                href="https://zuplo.com/?utm_source=json-merge-patch"
                target="_blank"
                className="font-bold transition  hover:text-[#ff00bd]"
              >
                Zuplo
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
